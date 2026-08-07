import Image from "next/image";
import { Header } from "./components/Header";
import { LargeButton } from "./components/ui/LargeButton";
import { CategoryCard } from "./components/ui/CategoryCard";
import { CATEGORY_LINKS } from "./common/consts";
import Link from "next/link";

export default function Home() {
    return (
        <div
            className="min-h-screen bg-cover bg-center md:overflow-x-auto overflow-hidden w-full hero-bg"
            // style={{ backgroundImage: "url('/hero-bg.png')" }}
        >
            <div className="flex flex-col">
                <Header />

                {/* Hero */}
                <div className="flex flex-col md:flex-row items-center md:px-14 lg:px-32 gap-y-4 md:gap-x-10 lg:gap-x-25 md:pt-10 md:pb-4 mx-auto max-w-[1600px]">
                    <Image
                        src="/hero-product.png"
                        width={540}
                        height={652}
                        alt="hero product image"
                        className="max-md:w-1/2 flex-1 md:min-w-sm md:max-w-[380px] lg:max-w-[440px] xl:max-w-[480px] h-auto"
                        priority
                    />
                    <div className="flex flex-col items-center gap-y-8 lg:gap-y-12">
                        <div className="font-gothic text-nowrap flex flex-col items-center scale-90 md:scale-100">
                            <p className="text-[64px]/[60px] md:text-[80px]/[68px] lg:text-[90px]/[88px]">
                                2026 S/S
                            </p>
                            <p className="text-5xl/[48px] md:text-6xl/[60px] lg:text-[68px]/[68px]">
                                NEW ITEM IN
                            </p>
                            <p className="text-[38px]/[40px] md:text-5xl lg:text-[54px]">
                                Facial Serum for
                            </p>
                            <p className="text-[38px]/[40px] md:text-5xl lg:text-[54px] tracking-wide">
                                Every Skin Type
                            </p>
                        </div>
                        <div className="w-full flex flex-col md:flex-row items-center md:justify-center gap-y-3 md:gap-x-3 lg:gap-x-6">
                            <Link href="/products?filter=new&productId=cmrt27q100000c4soii7t4z42">
                                <LargeButton
                                    label="Explore This Product"
                                    state="primary"
                                    className="text-nowrap"
                                />
                            </Link>
                            <Link href="/products?filter=new">
                                <LargeButton
                                    label="View All New Products"
                                    state="secondary"
                                    className="text-nowrap"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mx-auto pt-8 md:pt-0">
                    <p className="font-gothic text-5xl md:text-9xl lg:text-[186px] text-center text-transparent [text-shadow:0px_8px_8px_rgba(0,0,0,0.2)] md:[text-shadow:0px_8px_16px_rgba(0,0,0,0.2)]">
                        METAMORF
                    </p>
                    {/* カテゴリ一覧 */}
                    <div className="w-full flex flex-col pt-8 pb-16 px-8 md:px-18">
                        <div className="flex flex-col gap-y-5">
                            <div className="grid grid-cols-2 gap-4 md:flex md:flex-nowrap lg:justify-between">
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
                            <div className="flex justify-center md:justify-end">
                                <Link href="/products?filter=all">
                                    <LargeButton
                                        label="View All Products"
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
