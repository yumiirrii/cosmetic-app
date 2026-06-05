import Image from "next/image";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { LargeButton } from "./components/buttons/LargeButton";
import { CategoryCard } from "./components/cards/CategoryCard";

export default function Home() {
    const categories = [
        { name: "CLEANSER", src: "/cat-cleanser.png" },
        { name: "TONER", src: "/cat-toner.png" },
        { name: "SERUM", src: "/cat-serum.png" },
        { name: "CREAM", src: "/cat-cream.png" },
    ];

    return (
        <div
            className="min-h-screen overflow-x-auto bg-cover bg-center"
            style={{ backgroundImage: "url('/hero-bg.png')" }}
        >
            <div className="flex flex-col">
                <Header />

                {/* Hero */}
                <div className="flex items-center pt-10">
                    <div className="flex-1 min-w-sm">
                        <Image
                            src="/hero-product.png"
                            width={571}
                            height={540}
                            alt="hero product image"
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="flex flex-col gap-y-8 pr-18">
                        <div className="font-gothic text-nowrap">
                            <p className="text-[68px]/[60px]">2026 SUMMER</p>
                            <p className="text-6xl/[60px]">NEW ITEM IN</p>
                            <p className="text-5xl">Facial Serum for</p>
                            <p className="text-5xl">Every Skin Type</p>
                        </div>
                        <div className="flex justify-end gap-x-3">
                            <LargeButton
                                label="Go to Product Detail"
                                state="primary"
                            />
                            <LargeButton
                                label="See All New Products"
                                state="secondary"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center bg-white/10">
                    <p className="font-gothic text-9xl text-transparent [-webkit-text-stroke:1px_#FFFFFF] [text-shadow:0px_8px_16px_rgba(0,0,0,0.2)]">
                        METAMORF
                    </p>
                </div>
            </div>
            <Container>
                <div className="flex flex-col pt-8 gap-y-5">
                    <div className="flex justify-center gap-x-4">
                        {categories.map((category) => (
                            <CategoryCard
                                key={category.name}
                                name={category.name}
                                src={category.src}
                            />
                        ))}
                    </div>
                    <div className="flex justify-end">
                        <LargeButton label="See All Products" state="primary" />
                    </div>
                </div>
            </Container>
        </div>
    );
}
