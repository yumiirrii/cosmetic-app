import Image from "next/image";
import { Container } from "./components/ui/Container";
import { Header } from "./components/Header";
import { LargeButton } from "./components/ui/LargeButton";
import { CategoryCard } from "./components/ui/CategoryCard";
import { CATEGORY_LINKS } from "./common/consts";
import Link from "next/link";

export default function Home() {
    return (
        <div
            className="min-h-screen bg-cover bg-center overflow-x-auto w-full"
            style={{ backgroundImage: "url('/hero-bg.png')" }}
        >
            <div className="flex flex-col">
                <Header />

                {/* Hero */}
                <div className="flex items-center">
                    <div className="flex-1 min-w-md">
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
                            <p className="text-[80px]/[68px]">2026 S/S</p>
                            <p className="text-6xl/[60px]">NEW ITEM IN</p>
                            <p className="text-5xl">Facial Serum for</p>
                            <p className="text-5xl">Every Skin Type</p>
                        </div>
                        <div className="flex justify-end gap-x-3">
                            <Link href="/products?filter=new&productId=cmqg0mose0000tr3m7chk8ok0">
                                <LargeButton
                                    label="Go to Product Detail"
                                    state="primary"
                                    className="text-nowrap"
                                />
                            </Link>
                            <Link href="/products?filter=new">
                                <LargeButton
                                    label="See All New Products"
                                    state="secondary"
                                    className="text-nowrap"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mx-auto">
                    <p className="font-gothic text-9xl text-center text-transparent [-webkit-text-stroke:1px_#FFFFFF] [text-shadow:0px_8px_16px_rgba(0,0,0,0.2)]">
                        METAMORF
                    </p>
                    <div className="flex flex-col pt-8 pb-16 px-18">
                        <div className="flex flex-col gap-y-5">
                            <div className="flex gap-x-4">
                                {CATEGORY_LINKS.map((category) => (
                                    <Link
                                        href={category.path}
                                        key={category.category}
                                    >
                                        <CategoryCard
                                            category={category.category}
                                            imageUrl={category.imageUrl}
                                        />
                                    </Link>
                                ))}
                            </div>
                            <div className="flex justify-end">
                                <Link href="/products?filter=all">
                                    <LargeButton
                                        label="See All Products"
                                        state="primary"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
