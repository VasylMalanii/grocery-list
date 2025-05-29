# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```


# db.json example
```
{
  "lists": [
    {
      "id": "2c1b9ade-a4ad-40d9-bb59-bb031b7ccd51",
      "title": "First list"
    },
    {
      "id": "ddbe9187-2d18-4cbf-ab84-e9bf64927669",
      "title": "Second list"
    }
  ],
  "items": [
    {
      "id": "a143006f-d1f2-490c-80a7-c88ac8d56b01",
      "text": "Cookies",
      "amount": 10,
      "isBought": true,
      "listId": "2c1b9ade-a4ad-40d9-bb59-bb031b7ccd51"
    },
    {
      "id": "2ba05b55-f51a-4447-bdc8-8446e42aa02e",
      "text": "ffdsfs",
      "amount": 3223,
      "isBought": false,
      "listId": "2c1b9ade-a4ad-40d9-bb59-bb031b7ccd51"
    },
    {
      "id": "4a75e333-589a-422a-9036-2211d8695248",
      "text": "fdffddfs",
      "amount": 2332,
      "isBought": true,
      "listId": "2c1b9ade-a4ad-40d9-bb59-bb031b7ccd51"
    },
    {
      "id": "5GyCTWOOFkzzN0oHZf4vn",
      "text": "test",
      "amount": 23,
      "isBought": false,
      "listId": "ddbe9187-2d18-4cbf-ab84-e9bf64927669"
    }
  ]
}
```