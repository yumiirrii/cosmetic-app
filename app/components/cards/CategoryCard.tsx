import Image from "next/image";

type Props = {
    src: string;
    name: string;
};

export const CategoryCard = ({ src, name }: Props) => {
    return (
        <div className="flex flex-col items-center justify-between min-w-[222px] max-w-[270px] min-h-[220px] max-h-[268px] bg-white px-12 py-6 rounded-lg">
            <Image src={src} alt="category image" width={174} height={220} />
            <p className="text-xl font-semibold">{name}</p>
        </div>
    );
};
