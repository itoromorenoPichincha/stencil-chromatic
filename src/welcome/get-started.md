# Incluir design-system en React , Angular o Vue

La forma más fácil de incluir el design system dentro de un proyecto, en React y Angular o Vue es incluir las siguientes lineas de codigo en el archivo public/index.html.

```javascript
<head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/wc-design-pichincha/dist/wc-design-pichincha/wc-design-pichincha.css"
  />
  <script
    type="module"
    src="https://cdn.jsdelivr.net/npm/wc-design-pichincha/dist/wc-design-pichincha/wc-design-pichincha.esm.js"
  ></script>
  <script
    nomodule
    src="https://cdn.jsdelivr.net/npm/wc-design-pichincha/dist/wc-design-pichincha/wc-design-pichincha.js"
  ></script>
</head>
```
