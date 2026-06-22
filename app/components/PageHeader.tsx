"use client";

import Link from "next/link";
import { FILTER_OPTIONS } from "../common/consts";
import { useSearchParams } from "next/navigation";

type Props = {
    title: string;
    textWhite?: boolean;
    hasFilter?: boolean;
};

export const PageHeader = ({ title, textWhite, hasFilter }: Props) => {
    const searchParams = useSearchParams();
    const currentFilter = searchParams.get("filter") || "all";

    return (
        <div className="flex flex-col items-start md:items-center pt-4 pb-8 md:py-12 gap-y-7">
            <p
                className={`text-xl font-bold pl-2 md:pl-0 ${textWhite ? "text-white" : "text-black"}`}
            >
                {title}
            </p>
            {hasFilter && (
                <div
                    className="w-full overflow-x-auto scrollbar-hide"
                    style={{ touchAction: "pan-x" }}
                >
                    <ul className="flex justify-start md:justify-center min-w-full gap-x-8 md:gap-x-14 text-sm font-medium cursor-pointer ">
                        {FILTER_OPTIONS.map((option) => {
                            const isActive = currentFilter === option.value;
                            return (
                                <li
                                    key={option.value}
                                    className="relative px-2 pt-1 pb-1.5 hover:text-[#88F5FA] transition-colors"
                                >
                                    <Link
                                        href={`/products?filter=${option.value}`}
                                    >
                                        {option.label}
                                    </Link>

                                    {isActive && (
                                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#88F5FA] rounded-full animate-fade-in" />
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
};
