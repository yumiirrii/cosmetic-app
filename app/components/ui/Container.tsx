export const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full max-w-7xl mx-auto pb-16 px-4 md:px-18">
            {children}
        </div>
    );
};
