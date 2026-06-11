"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductInput, productSchema } from "../../schemas/product";
import { ProductForm } from "../ProductForm";
import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeader";
import { Button } from "@/app/components/Button";
import { Header } from "@/app/components/Header";

export default function CreatePage() {
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

    const onSubmit = (data: ProductInput) => {
        console.log(data);
    };

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
                            </div>
                        </form>
                    </div>
                </Container>
            </div>
        </FormProvider>
    );
}
