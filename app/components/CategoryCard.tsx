import Image from "next/image";

type Props = {
    category: string;
    imageUrl: string;
};

export const CategoryCard = ({ category, imageUrl }: Props) => {
    return (
        <div className="flex flex-col items-center justify-between min-w-[200px] max-w-[270px] min-h-[198px] max-h-[268px] bg-white px-12 py-6 rounded-lg">
            <Image
                src={imageUrl}
                alt="category image"
                width={174}
                height={220}
            />
            <p className="text-xl font-semibold">{category}</p>
        </div>
    );
};
