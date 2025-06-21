import { create } from "zustand";

export const useThemeStore = create((set) => ({
    theme: localStorage.getItem("chhatrix-theme") || "coffee",
    setTheme: (theme) => {
        localStorage.setItem("chhatrix-theme", theme);
        set({ theme });
    },
}));
