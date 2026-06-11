"use client";

import { useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { PageHeader } from "../components/PageHeader";
import { ProductDetailModal } from "../components/ProductDetailModal";

export default function Products() {
    const [openDetailModal, setOpenDetailModal] = useState<boolean>(false);

    const categories = ["All", "New", "Cleanser", "Toner", "Serum", "Cream"];

    const products = [
        {
            name: "cream1cream1",
            price: 5500,
            imageUrl: "/pro-cream1.png",
            isInFav: false,
        },
        {
            name: "toner2",
            price: 5500,
            imageUrl: "/pro-toner2.png",
            isInFav: false,
        },
        {
            name: "cleanser2",
            price: 5500,
            imageUrl: "/pro-cleanser2.png",
            isInFav: false,
        },
        {
            name: "serum1",
            price: 5500,
            imageUrl: "/pro-serum1.png",
            isInFav: false,
        },
        {
            name: "serum2",
            price: 5500,
            imageUrl: "/pro-serum2.png",
            isInFav: false,
        },
    ];

    const product = {
        category: "cleaser",
        name: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        price: 5500,
        description:
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        // "A lightweight, intense moisturizer that deeply hydrates, refines skin texture, and leaves a clean, velvety matte finish.",
        imageUrl: "/pro-cleanser2.png",
    };

    const toggleFav = () => {
        return;
    };

    const openModal = () => {
        setOpenDetailModal(true);
    };

    const closeModal = () => {
        setOpenDetailModal(false);
    };

    return (
        <div className="relative flex flex-col min-h-screen bg-[#F7F9F8]">
            <Header />
            <Container>
                <PageHeader title="Products" categories={categories} />
                <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,270px))] gap-4 w-full">
                    {products.map((product, index) => (
                        <ProductCard
                            key={product.name}
                            name={product.name}
                            price={product.price}
                            imageUrl={product.imageUrl}
                            isInFav={product.isInFav}
                            priority={index < 4}
                            toggleFav={toggleFav}
                            openModal={openModal}
                        />
                    ))}
                </div>
            </Container>

            {openDetailModal && (
                <ProductDetailModal product={product} closeModal={closeModal} />
            )}
        </div>
    );
}
