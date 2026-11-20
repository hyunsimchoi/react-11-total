import { createContext, useState, type ReactNode } from "react";

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
        const nextTheme = theme === "olive" ? "black" : "olive";

        setTheme(nextTheme);

        document.body.classList.toggle("black-theme", nextTheme === "black");
    }

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}
