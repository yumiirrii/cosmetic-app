import { FieldValues, Path, UseFormSetError } from "react-hook-form";

/**
 * 価格のフォーマット変換処理
 */
export const formattedPrice = (price: number) =>
    new Intl.NumberFormat("ja-JP", {
        style: "currency",
        currency: "JPY",
    }).format(price);

/**
 * 商品画像URLのチェック処理
 */
export const checkValidImageUrl = (imageUrl: string): string => {
    const isValidUrl =
        imageUrl &&
        (imageUrl.startsWith("http://") ||
            imageUrl.startsWith("https://") ||
            imageUrl.startsWith("/"));
    return isValidUrl ? imageUrl : "/pro-cream1.png";
};

/**
 * サーバーエラーメッセージ表示処理
 */
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

/**
 * ローカルストレージへのお気に入り保存更新処理
 */
export const updateLocalStorageFav = (id: string) => {
    // ローカルストレージから現在の最新の配列を取得
    const favIds: string[] = JSON.parse(
        localStorage.getItem("fav_products") || "[]",
    );

    let newFavIds: string[];

    if (favIds.includes(id)) {
        // すでにお気に入りなら除外
        newFavIds = favIds.filter((favId) => favId !== id);
    } else {
        // お気に入りでなければ追加
        newFavIds = [...favIds, id];
    }

    // ローカルストレージを更新
    localStorage.setItem("fav_products", JSON.stringify(newFavIds));

    return newFavIds;
};
