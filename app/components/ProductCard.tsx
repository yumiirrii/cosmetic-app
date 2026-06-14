import Image from "next/image";
import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
import { checkValidImageUrl, formattedPrice } from "@/app/common/utils";

type Props = {
    name: string;
    price: number;
    imageUrl: string;
    isInFav: boolean;
    priority?: boolean;
    toggleFav: () => void;
    openModal: () => void;
};

export const ProductCard = ({
    name,
    price,
    imageUrl,
    isInFav,
    priority = false,
    toggleFav,
    openModal,
}: Props) => {
    const displayImageUrl = checkValidImageUrl(imageUrl);

    return (
        <div
            onClick={openModal}
            className="flex flex-col items-center w-full min-w-[220px] max-w-[270px] h-[340px] bg-white px-5 pt-4 pb-7 rounded-lg cursor-pointer hover:bg-[#F0FEFF] transition-colors"
        >
            <div className="flex flex-row w-full justify-end">
                <button
                    className="group cursor-pointer"
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleFav();
                    }}
                >
                    <HeartOutline className="w-6 h-6 stroke-1 fill-transparent group-hover:fill-black transition-all" />
                </button>
            </div>
            <Image
                src={displayImageUrl}
                alt="product image"
                width={270}
                height={240}
                priority={priority}
            />
            <div className="flex flex-col justify-end gap-y-1 px-4 w-full h-full">
                <p className="font-medium">{name}</p>
                <p className="text-sm">{formattedPrice(price)}</p>
            </div>
        </div>
    );
};
