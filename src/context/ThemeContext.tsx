// "use client";
//
// import React, { createContext, useState, ReactNode } from "react";
//
// interface ThemeContextProps {
//     toggle: () => void;
//     mode: string;
// }
//
// export const ThemeContext = createContext<ThemeContextProps>({
//     toggle: () => {},
//     mode: "dark",
// });
//
// interface ThemeProviderProps {
//     children: ReactNode;
// }
//
// export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
//     const [mode, setMode] = useState("dark");
//     const toggle = () => setMode((prev) => (prev === "dark" ? "light" : "dark"));
//
//     return (
//         <ThemeContext.Provider value={{ toggle, mode }}>
//             <div className={`theme ${mode}`}>{children}</div>
//         </ThemeContext.Provider>
//     );
// };

"use client";

import React, { createContext, useState, ReactNode, useEffect } from "react";

interface ThemeContextProps {
    toggle: () => void;
    mode: string;
}

export const ThemeContext = createContext<ThemeContextProps>({
    toggle: () => {},
    mode: "dark",
});

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [mode, setMode] = useState<string>(() => {
        // Проверяем, есть ли значение в localStorage, и используем его, если есть
        const storedMode = localStorage.getItem("themeMode");
        return storedMode ? storedMode : "dark";
    });

    useEffect(() => {
        // При изменении режима, сохраняем его в localStorage
        localStorage.setItem("themeMode", mode);
    }, [mode]);

    const toggle = () => setMode((prev) => (prev === "dark" ? "light" : "dark"));

    return (
        <ThemeContext.Provider value={{ toggle, mode }}>
            <div className={`theme ${mode}`}>{children}</div>
        </ThemeContext.Provider>
    );
};