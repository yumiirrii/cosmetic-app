"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../lib/prisma";
import { productSchema, updateProductSchema } from "../schemas/product";
import { success, z } from "zod";
import { Category } from "@prisma/client";

/**
 * 新規作成
 */
export async function createProduct(formData: FormData) {
    const rawData = {
        category: formData.get("category"),
        isNew: formData.get("isNew") === "true",
        name: formData.get("name"),
        price: formData.get("price"),
        // formData.get が null または 空文字 "" だったら、nullに変換
        description: formData.get("description") || null,
        imageUrl: formData.get("imageUrl"),
    };

    // Zodでサーバー側でもバリデーションチェック
    const validatedFields = productSchema.safeParse(rawData);

    if (!validatedFields.success) {
        return {
            success: false,
            errors: z.flattenError(validatedFields.error),
        };
    }

    const { category, isNew, name, price, description, imageUrl } =
        validatedFields.data;

    try {
        // Prismaを使ってDockerのPostgreSQLに保存
        await prisma.product.create({
            data: {
                category,
                isNew,
                name,
                price,
                description,
                imageUrl,
            },
        });

        // 画面のキャッシュを更新して、登録後の最新データをすぐ表示させる
        revalidatePath("/products");

        return { success: true };
    } catch (error) {
        console.error("Database Error:", error);
        return { success: false, message: "Failed to create." };
    }
}

/**
 * 更新
 */
export async function updateProduct(id: string, formData: FormData) {
    const rawData = {
        id: id,
        category: formData.get("category"),
        isNew: formData.get("isNew") === "true",
        name: formData.get("name"),
        price: formData.get("price"),
        description: formData.get("description") || null,
        imageUrl: formData.get("imageUrl"),
    };

    // Zodでサーバー側でもバリデーションチェック
    const validatedFields = updateProductSchema.safeParse(rawData);

    if (!validatedFields.success) {
        return {
            success: false,
            errors: z.flattenError(validatedFields.error),
        };
    }

    const { category, isNew, name, price, description, imageUrl } =
        validatedFields.data;

    try {
        // Prismaを使ってDockerのPostgreSQLに保存
        await prisma.product.update({
            where: { id },
            data: {
                category,
                isNew,
                name,
                price,
                description,
                imageUrl,
            },
        });

        // 画面のキャッシュを更新して、登録後の最新データをすぐ表示させる
        revalidatePath("/products");

        return { success: true };
    } catch (error) {
        console.error("Database Error:", error);
        return { success: false, message: "Failed to update." };
    }
}

/**
 * 削除
 */
export async function deleteProduct(id: string) {
    try {
        await prisma.product.delete({
            where: { id },
        });

        // 画面のキャッシュを更新して、登録後の最新データをすぐ表示させる
        revalidatePath("/products");

        return { success: true };
    } catch (error) {
        console.error("Database Error:", error);
        return { success: false, message: "Failed to delete." };
    }
}

/**
 * 一覧取得
 */
export async function fetchProducts({ filter }: { filter?: string }) {
    try {
        const whereClause: any = {};

        if (filter === "new") {
            whereClause.isNew = true;
        } else if (filter && filter !== "all") {
            whereClause.category = filter as Category;
        }

        const products = await prisma.product.findMany({
            where: whereClause,
            orderBy: {
                createdAt: "desc",
            },
        });

        return { success: true, data: products };
    } catch (error) {
        console.error("Database Error:", error);
        return { success: false, message: "Failed to fetch products." };
    }
}

/**
 * 詳細取得
 */
export async function fetchProductById(id: string) {
    try {
        const product = await prisma.product.findUnique({
            where: { id },
        });

        if (!product) {
            return { success: false, message: "Product not found." };
        }

        return { success: true, data: product };
    } catch (error) {
        console.error("Database Error:", error);
        return { success: false, message: "Failed to fetch products." };
    }
}
