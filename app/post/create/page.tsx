"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductInput, productSchema } from "../../schemas/product";
import { ProductForm } from "../../components/ProductForm";
import { Container } from "@/app/components/ui/Container";
import { PageHeader } from "@/app/components/PageHeader";
import { Button } from "@/app/components/ui/Button";
import { Header } from "@/app/components/Header";
import { Suspense, useState } from "react";
import { createProduct } from "@/app/actions/product";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { handleServerErrors } from "@/app/common/utils";

function CreateContent() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [submitMessage, setSubmitMessage] = useState<string>("");

    const methods = useForm({
        resolver: zodResolver(productSchema),
        defaultValues: {
            category: "",
            isNew: false,
            name: "",
            price: "",
            description: "",
            imageUrl: "",
        },
    });
    const { handleSubmit, reset, setError } = methods;

    /** [Add Product]ボタン押下時処理 */
    const onSubmit = async (data: ProductInput) => {
        setIsSubmitting(true);
        setSubmitMessage("");

        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            const safeValue =
                value !== undefined && value !== null ? String(value) : "";
            formData.append(key, safeValue);
        });

        const result = await createProduct(formData);

        setIsSubmitting(false);

        if (result.success) {
            toast.success("Successfully created!");
            router.push("/products");
        } else if (result.errors) {
            handleServerErrors(result.errors.fieldErrors, setError);
        } else {
            setSubmitMessage("Server error.");
        }
    };

    return (
        <FormProvider {...methods}>
            <div className="min-h-screen bg-[#2C2C2C] flex flex-col gap-y-4 md:gap-y-8 min-w-[375px]">
                <Header textWhite />
                <Container>
                    <div className="w-full md:max-w-2xl mx-auto px-8 md:px-30 pb-12 bg-black/80 shadow-lg rounded-lg">
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
                                        state="tertiary"
                                        onClick={() => reset()}
                                    />
                                    <Button
                                        type="submit"
                                        label="Add Product"
                                        state="primary"
                                        disabled={isSubmitting}
                                    />
                                </div>
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
}

export default function CreatePage() {
    return (
        <Suspense fallback={null}>
            <CreateContent />
        </Suspense>
    );
}
