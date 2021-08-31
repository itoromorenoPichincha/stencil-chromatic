import "@storybook/addon-notes/register-panel";

export default {
  title: "Welcome/Install",
};

export const Install = () => `
<style>
  code {
    white-space: nowrap;
  }
  pre { 
    overflow-x: auto;
    background: #1e1e3f;
    border-radius: 12px;
    padding-left: 40px;
    padding-right: 20px;
  }
</style>
<pichincha-grid container justify="center">
  <pichincha-grid item xs=10 style="margin: 32px">
    <pichincha-typography variant="h2">Incluir design-system en React , Angular o Vue</pichincha-typography>
  <pichincha-grid item>
  <pichincha-grid item xs=10>
    </br><pichincha-typography variant="bodyText">La forma más fácil de incluir el design system dentro de un proyecto,
     en React y Angular o Vue es incluir directamente la cdn en el archivo public/index.html.</pichincha-typography>
  <pichincha-grid item>
    <pre>
      <code>
        <pichincha-typography variant="bodyText" color="white"><br>&lt;!-- Design System --&gt;<br>&lt;link rel="stylesheet" href="%REACT_APP_URL_DESIGN_SYSTEM%wc-design-pichincha.css" /&gt;<br>&lt;script src="%REACT_APP_URL_DESIGN_SYSTEM%wc-design-pichincha.esm.js" type="module"&gt;&lt;/script&gt;</pichincha-typography>
      </code>
    </pre>
  </pichincha-grid>
  <pichincha-grid item xs=10>
  </br>
  <pichincha-typography variant="h5" color="blue">Valor de %REACT_APP_URL_DESIGN_SYSTEM% en ambientes</pichincha-typography>
    </br><pichincha-typography variant="h6" color="blue">Producción</pichincha-typography><pichincha-typography variant="bodyText">https://cdn.pichincha.com/wc-design-pichincha/</pichincha-typography>
    </br><pichincha-typography variant="h6" color="blue">Staging</pichincha-typography><pichincha-typography variant="bodyText">https://cdn-test.pichincha.com/wc-design-pichincha/</pichincha-typography>
    </br><pichincha-typography variant="h6" color="blue">Desarrollo</pichincha-typography><pichincha-typography variant="bodyText">https://cdn-dev.pichincha.com/wc-design-pichincha/</pichincha-typography>
  <pichincha-grid item>
</pichincha-grid>
`;