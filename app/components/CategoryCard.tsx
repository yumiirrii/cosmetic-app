import Image from "next/image";

type Props = {
    imageUrl: string;
    category: string;
};

export const CategoryCard = ({ imageUrl, category }: Props) => {
    return (
        <div className="flex flex-col items-center justify-between min-w-[222px] max-w-[270px] min-h-[220px] max-h-[268px] bg-white px-12 py-6 rounded-lg">
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
