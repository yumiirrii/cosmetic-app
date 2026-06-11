type Props = {
    label: string;
    state: "primary" | "secondary";
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const LargeButton = ({ label, state, onClick }: Props) => {
    const styles = {
        primary: "bg-[#88F5FA] hover:bg-[#B3FCFF]",
        secondary: "bg-[#F0FEFF] hover:bg-[#FCFFFF]",
    };
    return (
        <button
            type="button"
            onClick={onClick}
            className={`w-fit px-10 py-5 rounded-4xl cursor-pointer ${styles[state]} transition-colors`}
        >
            <span className="font-semibold">{label}</span>
        </button>
    );
};
