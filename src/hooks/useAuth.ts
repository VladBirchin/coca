import { useState, useEffect } from "react";

export const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [userEmail, setUserEmail] = useState<string | null>(null);

    useEffect(() => {
        const savedEmail = localStorage.getItem("userEmail");
        const savedPassword = localStorage.getItem("userPassword");
        if (savedEmail && savedPassword) {
            setUserEmail(savedEmail);
            setIsLoggedIn(true);
        }
    }, []);

    const login = (email: string, password: string) => {
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);
        setUserEmail(email);
        setIsLoggedIn(true);
    };

    const logout = () => {
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userPassword");
        setUserEmail(null);
        setIsLoggedIn(false);
    };

    return {
        isLoggedIn,
        userEmail,
        login,
        logout,
    };
};
