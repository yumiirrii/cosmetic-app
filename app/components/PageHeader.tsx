import Link from "next/link";
import { FILTER_OPTIONS } from "../common/consts";

type Props = {
    title: string;
    textWhite?: boolean;
    hasFilter?: boolean;
};

export const PageHeader = ({ title, textWhite, hasFilter }: Props) => {
    return (
        <div className="flex flex-col items-center py-12 gap-y-7">
            <p
                className={`text-xl font-bold ${textWhite ? "text-white" : "text-black"}`}
            >
                {title}
            </p>
            {hasFilter && (
                <ul className="flex gap-x-14 text-sm font-medium cursor-pointer">
                    {FILTER_OPTIONS.map((option) => (
                        <li
                            key={option.value}
                            className="px-2 py-1 hover:text-[#88F5FA] transition-colors"
                        >
                            <Link href={`/products?filter=${option.value}`}>
                                {option.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
