type Props = {
    label: string;
    state: "primary" | "secondary";
};

export const LargeButton = ({ label, state }: Props) => {
    return (
        <button
            className={`w-fit px-10 py-5 rounded-4xl ${state === "primary" ? "bg-[#88F5FA]" : "bg-[#F9FAFB]"}`}
        >
            <span className="font-semibold">{label}</span>
        </button>
    );
};
