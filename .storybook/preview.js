export const parameters = {
  darkMode: {
    // Override the default dark theme
    dark: {  appBg: 'black' },
    // Override the default light theme
    light: {  appBg: 'red' }
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}