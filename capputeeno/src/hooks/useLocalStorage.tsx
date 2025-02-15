import { useState, useEffect } from "react";

export function useLocalStorage<T>(item: string, initialValue: T) {
    const [value, setValue] = useState<T>(() => {
        if (typeof window === "undefined") return initialValue; // Evita erro no SSR

        try {
            const storedValue = localStorage.getItem(item);
            return storedValue ? JSON.parse(storedValue) : initialValue;
        } catch (error) {
            console.error("Erro ao acessar o localStorage:", error);
            return initialValue;
        }
    });

    // Atualiza o localStorage quando o valor muda
    useEffect(() => {
        try {
            localStorage.setItem(item, JSON.stringify(value));
        } catch (error) {
            console.error("Erro ao salvar no localStorage:", error);
        }
    }, [item, value]);

    return { value, setValue };
}
