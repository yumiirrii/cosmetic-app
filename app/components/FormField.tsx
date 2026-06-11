type Props = {
    label: string;
    error?: string;
    children: React.ReactNode;
};

export const FormField = ({ label, error, children }: Props) => {
    return (
        <div className="w-full flex flex-col gap-y-2 text-white">
            <label className="text-sm font-medium text-white/60">{label}</label>
            {children}
            {error && <p className="text-sm text-red-600/80">{error}</p>}
        </div>
    );
};
