import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

// Хук записывает token пользователя в localStorage
export const useGoogleStateLogin = (data) => {
    if (data) {
        localStorage.setItem("googleToken", data || "")
    }
}

// Хук декодирует токен google пользователя и возвращает его данные
export const useGetGoogleUserData = () => {
    const googleUserToken = localStorage.getItem("googleToken");
    const [googleUser, setGoogleUser] = useState(null);

    useEffect(() => {
        try {
            if (googleUserToken) {
                const decode = jwtDecode(googleUserToken);
                setGoogleUser(decode);
            } else {
                setGoogleUser(null);
            }
        } catch (error) {
            console.error("Ошибка при декодировании токена Google:", error);
            setGoogleUser(null);
        }
    }, [googleUserToken]);

    return { googleUser };
};