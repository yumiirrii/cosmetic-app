import Link from "next/link";

export const Header = () => {
    const navLinks = [
        { page: "Home", path: "/" },
        { page: "Products", path: "/products" },
        { page: "Favorites", path: "/" },
        { page: "Post", path: "/" },
    ];

    return (
        <header className="flex items-center gap-x-20 h-[80px] px-18">
            <div className="font-gothic text-2xl">
                <Link href="/">METAMORF</Link>
            </div>
            <nav>
                <ul className="flex gap-x-16 font-medium text-sm">
                    {navLinks.map((link) => (
                        <li key={link.page}>
                            <Link href={link.path}>{link.page}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};
