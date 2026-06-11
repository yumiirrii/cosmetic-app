import { useFormContext } from "react-hook-form";
import { FormField } from "../components/FormField";
import { Input } from "../components/Input";
import { ProductInput } from "../schemas/product";

export const ProductForm = () => {
    const {
        register,
        formState: { errors },
    } = useFormContext<ProductInput>();
    const options = ["", "Cleanser", "Toner", "Serum", "Cream"];

    return (
        <>
            <FormField label="Category" error={errors.category?.message}>
                <div className="flex gap-x-8">
                    <select
                        {...register("category")}
                        className="w-1/2 p-2 border-[#2D2D2D] border-1 rounded-lg"
                    >
                        {options.map((option) => (
                            <option key={option}>{option}</option>
                        ))}
                    </select>
                    <div className="flex items-center gap-x-2">
                        <input
                            type="checkbox"
                            {...register("isNew")}
                            className="appearance-none w-4 h-4 bg-transparent border-[#2D2D2D] border-1 cursor-pointer relative
                                after:content-[''] after:absolute after:hidden checked:after:block
                                {/* ここから下はチェックマーク（レ点）の白い線を引くための記述 */}
                                after:left-[5px] after:top-[2px] after:w-[4px] after:h-[8px] after:border-white after:border-r-1 after:border-b-1 after:rotate-45"
                        />
                        <label className="text-sm font-medium text-white/60">
                            New
                        </label>
                    </div>
                </div>
            </FormField>
            <FormField label="Product Name" error={errors.name?.message}>
                <Input type="text" {...register("name")} />
            </FormField>
            <FormField label="Price" error={errors.price?.message}>
                <Input type="text" {...register("price")} className="w-1/2" />
            </FormField>
            <FormField label="Description" error={errors.description?.message}>
                <textarea
                    {...register("description")}
                    className="p-2 border-[#2D2D2D] border-1 rounded-lg resize-y min-h-[100px] max-h-[180px] h-auto"
                />
            </FormField>
            <FormField label="Image Url" error={errors.imageUrl?.message}>
                <Input type="text" {...register("imageUrl")} />
            </FormField>
        </>
    );
};
