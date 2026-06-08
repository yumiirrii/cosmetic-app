import Image from "next/image";
import { Button } from "../buttons/Button";
import { XMarkIcon } from "@heroicons/react/24/outline";

type ProductDetail = {
    category: string;
    name: string;
    price: string;
    description: string;
    imageUrl: string;
};

type Props = {
    productDetail: ProductDetail;
    closeModal: () => void;
};

export const ProductDetailModal = ({ productDetail, closeModal }: Props) => {
    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/70">
            <div className="relative w-fit max-w-4xl h-fit max-h-md overflow-y-auto bg-black shadow-md flex items-center">
                <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-5 right-5 p-2 text-white/70 hover:text-white transition-colors cursor-pointer"
                >
                    <XMarkIcon className=" w-8 h-8 stroke-1" />
                </button>
                <div className="w-xs flex flex-col gap-y-8 py-12 pl-20">
                    <div className="h-fit flex flex-col gap-y-5 text-white">
                        <div className="h-fit flex flex-col gap-y-2">
                            <p className="text-lg font-medium">
                                {productDetail.name}
                            </p>
                            <p className="text-sm">{productDetail.price}</p>
                        </div>
                        <div className="h-fit">{productDetail.description}</div>
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <Button
                            label="Add to Favorites"
                            state="primary"
                            showHeart
                        />
                        <Button label="Edit Product" state="secondary" />
                    </div>
                </div>
                <div className="shrink-0">
                    <Image
                        src="/pro-cream1.png"
                        alt="product image"
                        width={360}
                        height={320}
                    />
                </div>
            </div>
        </div>
    );
};
