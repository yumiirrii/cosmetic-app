import Image from "next/image";
import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";

type Props = {
    src: string;
    name: string;
    price: string;
    toggleFav: () => void;
    isInFav: boolean;
    priority?: boolean;
};

export const ProductCard = ({
    src,
    name,
    price,
    toggleFav,
    isInFav,
    priority = false,
}: Props) => {
    return (
        <div className="flex flex-col items-center w-full min-w-[220px] max-w-[270px] h-[340px] bg-white px-5 pt-4 pb-7 rounded-lg">
            <div className="flex flex-row w-full justify-end">
                <button className="group cursor-pointer" onClick={toggleFav}>
                    <HeartOutline className="w-6 h-6 stroke-1 fill-transparent group-hover:fill-black transition-all" />
                </button>
            </div>
            <Image
                src={src}
                alt="product image"
                width={270}
                height={240}
                priority={priority}
            />
            <div className="flex flex-col gap-y-1 px-4 w-full">
                <p className="font-medium">{name}</p>
                <p className="text-sm">{price}</p>
            </div>
        </div>
    );
};
