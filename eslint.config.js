import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from '@typescript-eslint/eslint-plugin'

export default tseslint.config({
  ignores: ['dist'], // Ignorar la carpeta dist
  extends: [
    js.configs.recommended,         // Reglas básicas de ESLint para JS
    ...tseslint.configs.recommended, // Reglas recomendadas para TypeScript
  ],
  files: ['**/*.{ts,tsx}'], // Aplica a archivos .ts y .tsx
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,  // Usar los globals correctos para navegador
  },
  plugins: {
    'react-hooks': reactHooks,     // Plugin para los hooks de React
    'react-refresh': reactRefresh, // Plugin para Fast Refresh de React
  },
  rules: {
    ...reactHooks.configs.recommended.rules, // Reglas recomendadas para React Hooks
    'react-refresh/only-export-components': [
      'warn', { allowConstantExport: true },
    ], // Regla para asegurar que solo se exporten componentes
  },
})
