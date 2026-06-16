import { FieldValues, Path, UseFormSetError } from "react-hook-form";

export const formattedPrice = (price: number) =>
    new Intl.NumberFormat("ja-JP", {
        style: "currency",
        currency: "JPY",
    }).format(price);

export const checkValidImageUrl = (imageUrl: string): string => {
    const isValidUrl =
        imageUrl &&
        (imageUrl.startsWith("http://") ||
            imageUrl.startsWith("https://") ||
            imageUrl.startsWith("/"));
    return isValidUrl ? imageUrl : "/pro-cream1.png";
};

export const handleServerErrors = <TFieldValues extends FieldValues>(
    errors: Record<string, string[] | undefined> | undefined,
    setError: UseFormSetError<TFieldValues>,
): void => {
    if (!errors) return;

    Object.entries(errors).forEach(([key, value]) => {
        if (Array.isArray(value) && value[0]) {
            setError(key as Path<TFieldValues>, {
                type: "server",
                message: value[0],
            });
        }
    });
};
