import { notFound } from "next/navigation";
import { fetchProductById } from "@/app/actions/product";
import { EditFormClient } from "../../../components/EditFormClient";

export default async function EditPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const result = await fetchProductById(id);
    if (!result.success || !result.data) {
        notFound();
    }

    return <EditFormClient id={id} initialData={result.data} />;
}
