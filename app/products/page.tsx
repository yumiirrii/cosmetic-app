"use client";

import { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { Container } from "../components/ui/Container";
import { Header } from "../components/Header";
import { PageHeader } from "../components/PageHeader";
import { ProductDetailModal } from "../components/ProductDetailModal";
import { Product } from "@prisma/client";
import { fetchProductById, fetchProducts } from "../actions/product";
import { ProductListItem } from "../schemas/product";
import { useSearchParams } from "next/navigation";
import { updateLocalStorageFav } from "../common/utils";

export default function Products() {
    const searchParams = useSearchParams();
    const currentFilter = searchParams.get("filter") || "all";
    const productId = searchParams.get("productId");
    const [products, setProducts] = useState<ProductListItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    // 詳細モーダル
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [product, setProduct] = useState<Product>();

    useEffect(() => {
        const loadProducts = async () => {
            try {
                setIsLoading(true);

                // 一覧取得処理
                const result = await fetchProducts({
                    filter: currentFilter,
                });

                if (!result.success || !result.data) {
                    console.error("Fetch list error.");
                    return;
                }

                // ローカルストレージからお気に入りIDを取得
                const favIds: string[] = JSON.parse(
                    localStorage.getItem("fav_products") || "[]",
                );

                // マッピングして state に保存
                const displayProducts: ProductListItem[] = result.data.map(
                    (dbProduct) => ({
                        ...dbProduct,
                        isInFav: favIds.includes(dbProduct.id),
                    }),
                );

                setProducts(displayProducts);

                // productIdがある場合、商品詳細モーダルを開く
                if (productId) {
                    openModal(productId);
                }
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        // 商品一覧を読み込む
        loadProducts();
    }, [currentFilter]);

    /** ハートアイコン(お気に入り)押下時処理 */
    const toggleFav = (id: string) => {
        // ローカルストレージ更新
        updateLocalStorageFav(id);

        // 画面に即時反映
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === id
                    ? {
                          ...product,
                          isInFav: !product.isInFav,
                      }
                    : product,
            ),
        );
    };

    /** 商品詳細モーダルオープン処理 　*/
    const openModal = async (id: string) => {
        try {
            const result = await fetchProductById(id);
            if (!result.success || !result.data) {
                console.error("Fetch data error.");
                return;
            }

            setProduct(result.data);
        } catch (error) {
            console.error(error);
        }

        setIsOpen(true);
    };

    /** 商品詳細モーダルクローズ処理 */
    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div className="relative flex flex-col min-h-screen bg-[#F7F9F8] overflow-x-auto">
            <Header />
            <Container>
                <PageHeader title="Products" hasFilter />

                {isLoading ? (
                    <div className="flex justify-center items-center h-64 text-gray-400">
                        Loading...
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(220px,270px))] gap-4 w-full">
                        {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full"> */}
                        {products.map((product, index) => (
                            <ProductCard
                                key={product.id}
                                name={product.name}
                                price={product.price}
                                imageUrl={product.imageUrl}
                                isInFav={product.isInFav}
                                priority={index < 4}
                                toggleFav={() => toggleFav(product.id)}
                                openModal={() => {
                                    openModal(product.id);
                                }}
                            />
                        ))}
                    </div>
                )}
            </Container>

            {isOpen && product && (
                <ProductDetailModal
                    product={product}
                    isInFav={
                        products.find((p) => p.id === product.id)?.isInFav ||
                        false
                    }
                    toggleFav={() => toggleFav(product.id)}
                    closeModal={closeModal}
                />
            )}
        </div>
    );
}
