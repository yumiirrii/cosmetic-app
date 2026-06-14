"use client";

import { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { PageHeader } from "../components/PageHeader";
import { ProductDetailModal } from "../components/ProductDetailModal";
import { Product } from "@prisma/client";
import { fetchProductById, fetchProducts } from "../actions/product";
import { ProductListItem } from "../schemas/product";

export default function Products() {
    const [products, setProducts] = useState<ProductListItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    // 詳細モーダル
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [product, setProduct] = useState<Product>();

    const categories = ["All", "New", "Cleanser", "Toner", "Serum", "Cream"];

    useEffect(() => {
        const loadProducts = async () => {
            try {
                setIsLoading(true);

                // 一覧取得
                const result = await fetchProducts();
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
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        loadProducts();
    }, []);

    const toggleFav = () => {
        return;
    };

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

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div className="relative flex flex-col min-h-screen bg-[#F7F9F8]">
            <Header />
            <Container>
                <PageHeader title="Products" categories={categories} />
                <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,270px))] gap-4 w-full">
                    {products.map((product, index) => (
                        <ProductCard
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            imageUrl={product.imageUrl}
                            isInFav={product.isInFav}
                            priority={index < 4}
                            toggleFav={toggleFav}
                            openModal={() => {
                                openModal(product.id);
                            }}
                        />
                    ))}
                </div>
            </Container>

            {isOpen && product && (
                <ProductDetailModal product={product} closeModal={closeModal} />
            )}
        </div>
    );
}
