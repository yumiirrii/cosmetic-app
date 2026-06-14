import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";

type Props = {
    label: string;
    state: "primary" | "secondary" | "delete";
    showHeart?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
};

export const Button = ({
    label,
    state,
    showHeart,
    onClick,
    type,
    disabled,
}: Props) => {
    const styles = {
        primary: "bg-[#88F5FA] hover:bg-[#B3FCFF]",
        secondary:
            "bg-black/80 text-white/80 border border-[#2D2D2D] hover:bg-[#353535]/80",
        delete: "bg-black/80 text-[#B10101] border border-[#B10101] hover:bg-[#353535]/80",
    };
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`w-fit px-6 py-3 rounded-4xl ${styles[state]} flex items-center gap-x-1 cursor-pointer transition-colors`}
        >
            {showHeart && <HeartOutline className="w-4 h-4 stroke-1" />}
            <span className="text-sm font-semibold">{label}</span>
        </button>
    );
};
