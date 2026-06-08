import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";

type Props = {
    label: string;
    state: "primary" | "secondary";
    showHeart?: boolean;
};

export const Button = ({ label, state, showHeart }: Props) => {
    const styles = {
        primary: "bg-[#88F5FA]",
        secondary: "bg-black/80 text-white/80 border border-[#2D2D2D]",
    };
    return (
        <button
            className={`w-fit px-6 py-3 rounded-4xl ${styles[state]} flex items-center gap-x-1`}
        >
            {showHeart && <HeartOutline className="w-4 h-4 stroke-1" />}
            <span className="text-sm font-semibold">{label}</span>
        </button>
    );
};
