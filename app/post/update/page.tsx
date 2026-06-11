"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Category, updateProductSchema } from "../../schemas/product";
import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeader";
import { Button } from "@/app/components/Button";
import { ProductForm } from "../ProductForm";
import { Header } from "@/app/components/Header";

export default function UpdatePage() {
    const selectedProduct = {
        id: "abc",
        category: "toner" as Category,
        isNew: true,
        name: "tonerABC",
        price: 5500,
        description: "test",
        imageUrl: "/pro-toner1.png",
    };
    const methods = useForm({
        resolver: zodResolver(updateProductSchema),
        defaultValues: selectedProduct,
    });

    const onSubmit = () => {};

    return (
        <FormProvider {...methods}>
            <div className="min-h-screen bg-[#2C2C2C] flex flex-col gap-y-8">
                <Header textWhite />
                <Container>
                    <div className="w-2xl mx-auto px-30 pb-12 bg-black/80 shadow- rounded-lg">
                        <PageHeader title="Post" textWhite />
                        <form
                            onSubmit={methods.handleSubmit(onSubmit)}
                            className="flex flex-col gap-y-6"
                        >
                            <ProductForm />
                            <div className="flex flex-col gap-y-12">
                                <div className="flex justify-end gap-x-3 pt-2">
                                    <Button
                                        label="Clear"
                                        state="secondary"
                                        onClick={() => methods.reset()}
                                    />
                                    <Button
                                        type="submit"
                                        label="Add Product"
                                        state="primary"
                                    />
                                </div>
                                <Button label="Delete Product" state="delete" />
                            </div>
                        </form>
                    </div>
                </Container>
            </div>
        </FormProvider>
    );
}
