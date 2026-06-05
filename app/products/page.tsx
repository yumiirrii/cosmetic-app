"use client";

import { ProductCard } from "../components/cards/ProductCard";
import { Container } from "../components/Container";
import { Header } from "../components/Header";

export default function Products() {
    const products = [
        {
            name: "cream1cream1 cream1 cream1 cream1 cream1",
            price: "¥5,500",
            src: "/pro-cream1.png",
            isInFav: false,
        },
        {
            name: "cream11",
            price: "¥5,500",
            src: "/pro-cream1.png",
            isInFav: false,
        },
    ];

    const toggleFav = () => {
        return;
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#F7F9F8]">
            <Header />
            <Container>
                <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,270px))] gap-4 w-full">
                    {products.map((product, index) => (
                        <ProductCard
                            key={product.name}
                            name={product.name}
                            price={product.price}
                            src={product.src}
                            toggleFav={toggleFav}
                            isInFav={product.isInFav}
                            priority={index < 4}
                        />
                    ))}
                </div>
            </Container>
        </div>
    );
}
