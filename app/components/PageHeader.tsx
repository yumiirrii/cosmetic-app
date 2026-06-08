type Props = {
    title: string;
    categories?: string[];
};

export const PageHeader = ({ title, categories }: Props) => {
    return (
        <div className="flex flex-col items-center py-12 gap-y-7">
            <p className="text-xl font-bold">{title}</p>
            {categories && categories.length > 0 && (
                <ul className="flex gap-x-14">
                    {categories.map((category) => (
                        <li key={category} className="text-sm font-medium">
                            {category}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
