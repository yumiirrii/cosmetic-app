type Props = {
    label: string;
    state: "primary" | "secondary";
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const LargeButton = ({ label, state, className, onClick }: Props) => {
    const styles = {
        primary: "bg-[#88F5FA] hover:bg-[#B3FCFF]",
        secondary: "bg-[#F0FEFF] hover:bg-[#FCFFFF]",
    };
    return (
        <button
            type="button"
            onClick={onClick}
            className={`w-fit px-10 py-5 rounded-4xl cursor-pointer transition-colors ${styles[state]} ${className}`}
        >
            <span className="font-semibold">{label}</span>
        </button>
    );
};
