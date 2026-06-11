type Props = {
    title: string;
    categories?: string[];
    textWhite?: boolean;
};

export const PageHeader = ({ title, categories, textWhite }: Props) => {
    return (
        <div className="flex flex-col items-center py-12 gap-y-7">
            <p
                className={`text-xl font-bold ${textWhite ? "text-white" : "text-black"}`}
            >
                {title}
            </p>
            {categories && categories.length > 0 && (
                <ul className="flex gap-x-14 text-sm font-medium cursor-pointer">
                    {categories.map((category) => (
                        <li
                            key={category}
                            className="px-2 py-1 hover:text-[#88F5FA] transition-colors"
                        >
                            {category}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
