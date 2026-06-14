import { Product, Category } from "@prisma/client";
import z from "zod";

const REQUIRED_MSG = "Required";

// export const categorySchema = z.enum(["cleanser", "toner", "serum", "cream"]);
// export type Category = z.infer<typeof categorySchema>;

export const productSchema = z.object({
    category: z.string().min(1, REQUIRED_MSG).pipe(z.enum(Category)),
    isNew: z.boolean(),
    name: z.string().min(1, REQUIRED_MSG).max(100, "Maximum 100 characters"),
    price: z.preprocess(
        (val) => (val === "" ? undefined : val),
        z.coerce.number().min(1, "minimum 1."),
    ),
    description: z
        .string()
        .max(250, "Maximum 250 characters")
        .optional()
        .nullable(), // prisma用にnullable追加
    imageUrl: z.string().min(1, REQUIRED_MSG),
});

export const updateProductSchema = productSchema.extend({
    id: z.string(),
});

export type ProductInput = z.infer<typeof productSchema>;
export type UpdateProductInput = z.infer<typeof updateProductSchema>;
export type ProductListItem = Omit<Product, "description"> & {
    isInFav: boolean;
};
