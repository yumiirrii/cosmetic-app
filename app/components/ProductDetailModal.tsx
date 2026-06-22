import Image from "next/image";
import { Button } from "./ui/Button";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { checkValidImageUrl, formattedPrice } from "@/app/common/utils";
import { Product } from "@prisma/client";
import Link from "next/link";

type Props = {
    product: Product;
    isInFav: boolean;
    toggleFav: () => void;
    closeModal: () => void;
};

export const ProductDetailModal = ({
    product,
    isInFav,
    toggleFav,
    closeModal,
}: Props) => {
    const displayImageUrl = checkValidImageUrl(product.imageUrl);

    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/70">
            <div className="relative w-full h-full md:w-fit md:max-w-4xl md:h-fit md:min-h-[60vh] md:max-h-[85vh] bg-black shadow-md flex flex-col md:flex-row items-center md:rounded-lg overflow-y-auto md:overflow-visible">
                {/* 閉じるボタン */}
                <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-5 right-5 p-2 text-white/70 hover:text-white transition-colors cursor-pointer z-10"
                >
                    <XMarkIcon className=" w-8 h-8 stroke-1" />
                </button>
                {/* 商品画像 */}
                <div className="shrink-0">
                    <Image
                        src={displayImageUrl}
                        alt="product image"
                        width={360}
                        height={320}
                    />
                </div>
                {/* 詳細 */}
                <div className="w-sm flex flex-col gap-y-8 px-16 pt-4 pb-8 md:py-12 md:pl-0 md:pr-20 md:max-h-[85vh] md:overflow-y-auto">
                    <div className="w-full h-fit flex flex-col gap-y-5 text-white">
                        <div className="h-fit flex flex-col gap-y-2 items-center md:items-start">
                            <p className="text-lg font-medium break-words whitespace-pre-wrap">
                                {product.name}
                            </p>
                            <p className="text-sm">
                                {formattedPrice(product.price)}
                            </p>
                        </div>
                        <div className="h-fit">
                            <p className="break-words whitespace-pre-wrap text-sm">
                                {product.description}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-3 items-center md:items-start">
                        {isInFav ? (
                            <Button
                                label="Remove from Favorites"
                                state="secondary"
                                showHeart
                                onClick={toggleFav}
                            />
                        ) : (
                            <Button
                                label="Add to Favorites"
                                state="primary"
                                showHeart
                                onClick={toggleFav}
                            />
                        )}

                        <Link href={`/post/${product.id}/edit`}>
                            <Button label="Edit Product" state="tertiary" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
