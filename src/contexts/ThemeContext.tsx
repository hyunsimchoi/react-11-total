import { createContext, useState, useEffect, type ReactNode } from "react";

type ThemeMode = "olive" | "black";

type ThemeContextType = {
    theme: ThemeMode;
    toggleTheme: VoidFunction;
};

// 1. Context 생성
export const ThemeContext = createContext<ThemeContextType | null>(null);

// 2. 데이터 주입
export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<ThemeMode>("olive");

    function toggleTheme() {
        setTheme(current => (current === "olive" ? "black" : "olive"));
    }

    useEffect(() => {
        document.body.classList.toggle("black-theme", theme === "black");

        return () => {
            document.body.classList.remove("black-theme");
        };
    }, [theme]);

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}
