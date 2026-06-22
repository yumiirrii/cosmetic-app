export const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full min-w-[375px] max-w-7xl mx-auto pb-16 px-4 md:px-18">
            {children}
        </div>
    );
};
