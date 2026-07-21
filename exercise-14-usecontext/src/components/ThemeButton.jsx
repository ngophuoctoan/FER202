import { useTheme } from '../context/ThemeContext'

function ThemeButton() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div
      className="theme-panel"
      style={{
        backgroundColor: theme.background,
        color: theme.foreground,
        borderColor: theme.border,
      }}
    >
      <h3>Current theme: {theme.name}</h3>
      <p>Background and text colors come from ThemeContext.</p>
      <button
        type="button"
        onClick={toggleTheme}
        style={{
          backgroundColor: theme.buttonBg,
          color: theme.buttonText,
        }}
      >
        Toggle Theme
      </button>
    </div>
  )
}

export default ThemeButton
