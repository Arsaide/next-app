'use client'

import {SessionProvider} from "next-auth/react";
import React, {ReactNode} from "react";


interface ThemeProviderProps {
    children: ReactNode;
}

const AuthProvider: React.FC<ThemeProviderProps> = ({children}) => {
    return (
        <SessionProvider>{children}</SessionProvider>
    );
};

export default AuthProvider;
