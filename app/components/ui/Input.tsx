import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    hasError?: boolean;
};

export const Input = React.forwardRef<HTMLInputElement, Props>(
    ({ className = "", hasError, ...props }, ref) => {
        return (
            <input
                ref={ref}
                {...props}
                className={`p-2 border-[#2D2D2D] border-1 rounded-lg ${className}`}
            />
        );
    },
);
