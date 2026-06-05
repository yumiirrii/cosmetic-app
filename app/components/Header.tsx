import Link from "next/link";

export const Header = () => {
    const navLinks = [
        { page: "Home", path: "/" },
        { page: "Products", path: "/" },
        { page: "Favorites", path: "/" },
        { page: "Post", path: "/" },
    ];

    return (
        <header className="flex items-center gap-x-20 h-[80px] px-18">
            <div className="font-gothic text-2xl">METAMORF</div>
            <nav>
                <div className="flex gap-x-16 font-medium text-sm">
                    {navLinks.map((link) => (
                        <Link key={link.page} href={link.path}>
                            {link.page}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
};
