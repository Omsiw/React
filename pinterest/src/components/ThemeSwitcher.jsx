import { useTheme } from "../contexts/ThemeContext";

function ThemeSwitcher() {
    const {theme, toggleTheme} = useTheme();
    return (
        <button class="theme-switcher" onClick={toggleTheme}>
        <i class={`fa-solid ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
    </button>
    );
}

export default ThemeSwitcher;