"use client";

import Link from "next/link";
import { NAV_LINKS } from "../common/consts";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

export const Header = ({ textWhite = false }: { textWhite?: boolean }) => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <header
            className={`relative flex items-center justify-between md:justify-start md:gap-x-40 h-[80px] px-4 md:px-18 ${textWhite ? "text-white" : "text-black"}`}
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

            {/* ハンバーガーアイコン表示 */}
            <nav className="md:hidden">
                {!isOpen && (
                    <button
                        type="button"
                        onClick={toggleMenu}
                        className={`${textWhite ? "text-white/70 hover:text-white" : "text-black/70 hover:text-black"} transition-colors cursor-pointer p-2`}
                    >
                        <Bars3Icon className="w-8 h-8 stroke-1" />
                    </button>
                )}
            </nav>

            {isOpen && (
                <div className="fixed h-fit inset-0 z-50 bg-black/90">
                    <div className="flex justify-end pt-4 px-4">
                        {/* 閉じるボタン */}
                        <button
                            type="button"
                            onClick={toggleMenu}
                            className="text-white/70 hover:text-white transition-colors cursor-pointer z-10 p-2"
                        >
                            <XMarkIcon className="w-8 h-8 stroke-1" />
                        </button>
                    </div>
                    <ul className="flex flex-col items-center gap-y-6 font-semibold text-sm text-white pb-8">
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
                </div>
            )}
        </header>
    );
};
