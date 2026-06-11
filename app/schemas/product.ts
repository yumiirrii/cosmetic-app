import z from "zod";

const REQUIRED_MSG = "Required";

export const categorySchema = z.enum(["cleanser", "toner", "serum", "cream"]);
export type Category = z.infer<typeof categorySchema>;

export const productSchema = z.object({
    category: z
        .union([categorySchema, z.literal("")])
        .refine((val) => val !== "", { message: REQUIRED_MSG }),
    isNew: z.boolean(),
    name: z.string().min(1, REQUIRED_MSG).max(100, "Maximum 100 characters"),
    price: z
        .union([z.coerce.number(), z.literal("")])
        .refine((val) => val !== "", { message: REQUIRED_MSG })
        .refine((val) => Number(val) >= 1, {
            message: "Minimum 1",
        }),
    description: z.string().max(250, "Maximum 250 characters"),
    imageUrl: z.string().min(1, REQUIRED_MSG),
});

export const updateProductSchema = productSchema.extend({
    id: z.string().min(1, REQUIRED_MSG),
});

export type ProductInput = z.infer<typeof productSchema>;
