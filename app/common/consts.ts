import { Category } from "@prisma/client";

/** ホーム画面用のカテゴリリンク */
export const CATEGORY_LINKS: {
    category: string;
    imageUrl: string;
    path: string;
}[] = [
    {
        category: "CLEANSER",
        imageUrl: "/cat-cleanser.png",
        path: "/products?filter=cleanser",
    },
    {
        category: "TONER",
        imageUrl: "/cat-toner.png",
        path: "/products?filter=toner",
    },
    {
        category: "SERUM",
        imageUrl: "/cat-serum.png",
        path: "/products?filter=serum",
    },
    {
        category: "CREAM",
        imageUrl: "/cat-cream.png",
        path: "/products?filter=cream",
    },
];

/** フォーム用のカテゴリオプション */
export const CATEGORY_OPTIONS: { label: string; value: Category | "" }[] = [
    { label: "---", value: "" },
    { label: "Cleanser", value: "cleanser" },
    { label: "Toner", value: "toner" },
    { label: "Serum", value: "serum" },
    { label: "Cream", value: "cream" },
] as const;

/** フィルター用のカテゴリオプション */
export const FILTER_OPTIONS: { label: string; value: string }[] = [
    { label: "All", value: "all" },
    { label: "New", value: "new" },
    { label: "Cleanser", value: "cleanser" },
    { label: "Toner", value: "toner" },
    { label: "Serum", value: "serum" },
    { label: "Cream", value: "cream" },
] as const;
