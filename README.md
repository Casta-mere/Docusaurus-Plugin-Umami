# Docusaurus-Plugin-Umami

Use Umami to add Data Analytics to Docusaurus site

# Demo

[My Site](https://www.castamerego.com/)

[My Umami Site](https://umami.castamerego.com/share/EplxZVQRe6OkyBt3/castamerego.com)

# Usage

Tutorial/教程: Visit [Docusaurus Umami](https://www.castamerego.com/docs/Server/Docusaurus-Umami) to add Umami to your Docusaurus site

In short:

1. copy Docusaurus-plugin-umami.js to /src/plugins of your Docusaurus site
2. Deploy Umami and get the `data-website-id`
3. Modify the Docusaurus-plugin-umami.js
4. Modify the docusaurus.config.js

```js
  ...
  plugins: [
+   "./src/plugins/Docusaurus-plugin-umami"
  ],
  ...
```

# Features

1. Note that I set up **only** to inject code in the **production environment** AKA `npm run build/serve` mode. If u want to test in a development environment, simply set `const isDevelopment = false;` on the 2rd line of `Docusaurus-plugin-umami.js`
