"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateProductInput, updateProductSchema } from "../schemas/product";
import { Container } from "@/app/components/ui/Container";
import { PageHeader } from "@/app/components/PageHeader";
import { Button } from "@/app/components/ui/Button";
import { ProductForm } from "./ProductForm";
import { Header } from "@/app/components/Header";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { deleteProduct, updateProduct } from "@/app/actions/product";
import { Product } from "@prisma/client";
import { toast } from "sonner";
import { handleServerErrors } from "@/app/common/utils";

type Props = {
    id: string;
    initialData: Product;
};

export const EditFormClient = ({ id, initialData }: Props) => {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [submitMessage, setSubmitMessage] = useState<string>("");

    const methods = useForm({
        resolver: zodResolver(updateProductSchema),
        defaultValues: initialData,
    });
    const { handleSubmit, reset, setError } = methods;

    /** [Update Product]ボタン押下時処理 */
    const onSubmit = async (data: UpdateProductInput) => {
        setIsSubmitting(true);
        setSubmitMessage("");

        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            const safeValue =
                value !== undefined && value !== null ? String(value) : "";
            formData.append(key, safeValue);
        });

        const result = await updateProduct(id, formData);

        setIsSubmitting(false);

        if (result.success) {
            toast.success("Successfully updated!");
            router.push("/products");
        } else if (result.errors) {
            handleServerErrors(result.errors.fieldErrors, setError);
        } else {
            setSubmitMessage("Server error.");
        }
    };

    /** [Delete Product]ボタン押下時処理 */
    const removeProduct = async () => {
        setIsSubmitting(true);
        setSubmitMessage("");

        const result = await deleteProduct(id);

        setIsSubmitting(false);

        if (result.success) {
            toast.success("Successfully deleted!");
            router.push("/products");
        } else {
            setSubmitMessage("Server error.");
        }
    };

    return (
        <FormProvider {...methods}>
            <div className="min-h-screen bg-[#2C2C2C] flex flex-col gap-y-8">
                <Header textWhite />
                <Container>
                    <div className="w-2xl mx-auto px-30 pb-12 bg-black/80 shadow- rounded-lg">
                        <PageHeader title="Post" textWhite />
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="flex flex-col gap-y-6"
                        >
                            <ProductForm />
                            <div className="flex flex-col gap-y-12">
                                <div className="flex justify-end gap-x-3 pt-2">
                                    <Button
                                        type="button"
                                        label="Clear"
                                        state="secondary"
                                        onClick={() => reset()}
                                    />
                                    <Button
                                        type="submit"
                                        label="Update Product"
                                        state="primary"
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <Button
                                    type="button"
                                    label="Delete Product"
                                    state="delete"
                                    onClick={removeProduct}
                                    disabled={isSubmitting}
                                />
                            </div>
                            {submitMessage && (
                                <p className="text-sm text-red-600">
                                    {submitMessage}
                                </p>
                            )}
                        </form>
                    </div>
                </Container>
            </div>
        </FormProvider>
    );
};
