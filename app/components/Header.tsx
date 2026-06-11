import Link from "next/link";

export const Header = ({ textWhite = false }: { textWhite?: boolean }) => {
    const navLinks = [
        { page: "Home", path: "/" },
        { page: "Products", path: "/products" },
        { page: "Favorites", path: "/" },
        { page: "Post", path: "/post/create" },
    ];

    return (
        <header
            className={`flex items-center gap-x-20 h-[80px] px-18 ${textWhite ? "text-white" : "text-black"}`}
        >
            <div className="font-gothic text-2xl px-2 py-1 hover:text-[#88F5FA] transition-colors">
                <Link href="/">METAMORF</Link>
            </div>
            <nav>
                <ul className="flex gap-x-16 font-semibold text-sm">
                    {navLinks.map((link) => (
                        <li key={link.page}>
                            <Link
                                href={link.path}
                                className="px-2 py-1 hover:text-[#88F5FA] transition-colors"
                            >
                                {link.page}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};
