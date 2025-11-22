import React, { createContext, useContext, useState, ReactNode } from "react";

interface Props {
    id: number;
    message: string;
    type?: "success" | "error" | "info";
}

interface ToastContextType {
    showToast: (msg: string, type?: Props["type"]) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);
export const useToast = () => useContext(ToastContext)!;

export const Toast = ({ children }: { children: ReactNode }) => {
    const [toasts, setToasts] = useState<Props[]>([]);

    function showToast(message: string, type: Props["type"] = "info") {
        const id = Date.now();
        setToasts((t) => [...t, { id, message, type }]);

        setTimeout(() => {
            setToasts((t) => t.filter((toast) => toast.id !== id));
        }, 3000);
    }

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}

            {/* Toast container */}
            <div style={{
                position: "fixed",
                top: "20px",
                right: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                zIndex: 9999
            }}>
                {toasts.map((toast) => (
                    <div
                        key={toast.id}
                        style={{
                            minWidth: "200px",
                            padding: "15px 20px",
                            borderRadius: "12px",
                            background:
                                toast.type === "success"
                                    ? "#4ade80"
                                    : toast.type === "error"
                                        ? "#f87171"
                                        : "#60a5fa",
                            color: "white",
                            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                            fontWeight: "bold",
                            transition: "opacity .3s",
                        }}
                    >
                        {toast.message}
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
};
