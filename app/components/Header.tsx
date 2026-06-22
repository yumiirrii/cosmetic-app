"use client";

import Link from "next/link";
import { NAV_LINKS } from "../common/consts";
import { usePathname } from "next/navigation";

export const Header = ({ textWhite = false }: { textWhite?: boolean }) => {
    const pathname = usePathname();

    return (
        <header
            className={`flex items-center gap-x-20 h-[80px] px-4 md:px-18 ${textWhite ? "text-white" : "text-black"}`}
        >
            <div className="font-gothic text-2xl px-2 py-1 hover:text-[#88F5FA] transition-colors">
                <Link href="/">METAMORF</Link>
            </div>
            <nav>
                <ul className="hidden md:flex gap-x-16 font-semibold text-sm">
                    {NAV_LINKS.map((link) => {
                        return (
                            <li
                                key={link.page}
                                className="relative px-2 pt-1 pb-1.5 hover:text-[#88F5FA] transition-colors"
                            >
                                <Link href={link.path}>{link.page}</Link>

                                {pathname === link.path && (
                                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#88F5FA] rounded-full" />
                                )}
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
};
