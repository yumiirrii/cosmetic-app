import { notFound } from "next/navigation";
import { fetchProductById } from "@/app/actions/product";
import { EditFormClient } from "../../../components/EditFormClient";

export default async function EditPage({
    params,
    searchParams,
}: {
    params: Promise<{ id: string }>;
    searchParams: Promise<{ filter?: string }>;
}) {
    const { id } = await params;
    const resolvedSearcParams = await searchParams;
    const filter = resolvedSearcParams.filter || "all";

    const result = await fetchProductById(id);
    if (!result.success || !result.data) {
        notFound();
    }

    return <EditFormClient id={id} initialData={result.data} filter={filter} />;
}
