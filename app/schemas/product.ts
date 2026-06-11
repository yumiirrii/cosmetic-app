import z from "zod";

export const categorySchema = z.enum(["cleanser", "toner", "serum", "cream"]);
export type Category = z.infer<typeof categorySchema>;

export const productSchema = z.object({
    category: z
        .union([categorySchema, z.literal("")])
        .refine((val) => val !== "", { message: "Category is mandatory." }),
    isNew: z.boolean(),
    name: z.string().min(1, "Product Name is mandatory."),
    price: z
        .union([
            z.coerce.number().min(1, "Price should be greater than 1."),
            z.literal(""),
        ])
        .refine((val) => val !== "", { message: "Price is mandatory." }),
    description: z
        .string()
        .max(250, "Description should be less than 250 characters."),
    imageUrl: z.string().min(1, "Image Url is mandatory."),
});

export const updateProductSchema = productSchema.extend({
    id: z.string().min(1, "ID is mandatory."),
});

export type ProductInput = z.infer<typeof productSchema>;
