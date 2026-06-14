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
