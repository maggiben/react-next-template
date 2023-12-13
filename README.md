# Cliente Frontend

Basado en el template de proyectos de Frávega en [Next.js](https://nextjs.org/).

## Pre-requisitos

### Habilitar Gitlab registry:

Inicialmente se requiere tener un token de Gitlab con permisos de API desde el sitio de [tokens](https://gitlab.com/-/profile/personal_access_tokens).

```
cp .npmrc.template .npmrc
```

Dentro del archivo nuevo reemplazar el `__AUTHTOKEN__` por el token generado anteriormente.
<br /><br />

## Comandos

### Instalación

```
npm install
```

### Ejecución

**Importante**: NextJS 13.4 requiere una versión mínima de Node de `16.8`. Cualquier versión anterior a esa fallará con un error.

Iniciar el web server:

```bash
npm run dev
```

El sitio se alojará en [http://localhost:3000](http://localhost:3000).

<br /><br />

## Errores comunes

### Versión inválida de Node

Al momento de iniciar la aplicación, si la versión de Node es inferior a la `16.8` tirará el error a continuación:

```
.../node_modules/next/dist/server/web/spec-extension/adapters/headers.js:187
    [Symbol.iterator]() {
            ^

TypeError: Class extends value undefined is not a constructor or null
    at Object.<anonymous> (.../node_modules/next/dist/server/web/spec-extension/adapters/headers.js:187:13)
    at Module._compile (node:internal/modules/cjs/loader:1095:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1124:10)
    at Module.load (node:internal/modules/cjs/loader:975:32)
    at Function.Module._load (node:internal/modules/cjs/loader:816:12)
    at Module.require (node:internal/modules/cjs/loader:999:19)
    at require (node:internal/modules/cjs/helpers:93:18)
    at Object.<anonymous> (.../node_modules/next/dist/server/api-utils/index.js:67:18)
    at Module._compile (node:internal/modules/cjs/loader:1095:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1124:10)
```

Para solucionarlo instalar la `16.8` o superior.

<br />

### Warning de `className did not match`

Mientras se está corriendo la aplicación, al refrescar puede aparecer el siguiente warning en la consola y los estilos de Búmeran no se ven aplicados.

```
Warning: Prop `className` did not match. Server: "sc-CCtys cBturW" Client: "sc-eyvILC gaPsAo"
    at div
    at P (webpack-internal:///./node_modules/styled-components/dist/styled-components.browser.esm.js:31:19658)
    at ToastsContainer (webpack-internal:///./.yalc/@fravega-it/bumeran-ds-fvg/dist/bumeran-ds-fvg.cjs.development.js:10521:19)
    at div
    at P (webpack-internal:///./node_modules/styled-components/dist/styled-components.browser.esm.js:31:19658)
    at Content (webpack-internal:///./src/components/content/index.tsx:39:66)
    at index
    at div
    at P (webpack-internal:///./node_modules/styled-components/dist/styled-components.browser.esm.js:31:19658)
    at RecoilRoot_INTERNAL (webpack-internal:///./node_modules/recoil/es/index.js:4473:3)
    at RecoilRoot (webpack-internal:///./node_modules/recoil/es/index.js:4639:5)
    at StyledComponentsRegistry (webpack-internal:///./src/helpers/registry.tsx:23:23)
    at Le (webpack-internal:///./node_modules/styled-components/dist/styled-components.browser.esm.js:31:17336)
    at App (webpack-internal:///./src/pages/_app.tsx:34:25)
    at _PathnameContextProviderAdapter (webpack-internal:///./node_modules/next/dist/shared/lib/router/adapters.js:118:24)
    at ErrorBoundary (webpack-internal:///./node_modules/next/dist/compiled/@next/react-dev-overlay/dist/client.js:305:63)
    at ReactDevOverlay (webpack-internal:///./node_modules/next/dist/compiled/@next/react-dev-overlay/dist/client.js:854:919)
    at Container (webpack-internal:///./node_modules/next/dist/client/index.js:149:5)
    at AppContainer (webpack-internal:///./node_modules/next/dist/client/index.js:314:24)
    at Root (webpack-internal:///./node_modules/next/dist/client/index.js:533:25)
```

Este es un error reportado en el cual Next está trabajando para resolver causado por el no soporte de las librerías de `CSS in JS` en NextJS. En [este link](https://nextjs.org/docs/app/building-your-application/styling/css-in-js) se explica el error.
El [siguiente link](https://nextjs.org/docs/messages/react-hydration-error) explica como resolverlo.

<br />

## Librerías

El siguiente es un listado de las librerías utilizadas dentro del template.

- Next: framework para desarrollo full stack de aplicaciones React. Con este framework se podrá implementar server side rendering, optimización de imágenes y de fonts, entre [otros beneficios](https://nextjs.org/learn/foundations/about-nextjs/what-is-nextjs).

- React hook form: librería de manejo simple, eficiente y con mínimos re-renders de formularios.<br />
  La librería cuenta con una [documentación](https://react-hook-form.com/get-started) bastante completa donde podrás encontrar ejemplos de uso.

- Búmeran: design system de Frávega en donde podrás hallar los componentes reutilizables entre las aplicaciones. Dentro del [StoryBook](https://bumeran-ds.fravega.com/?path=/story/introducci%C3%B3n--page) de Búmeran podrás hallar los componentes disponibles.

- Jest: es una librería muy utilizada en el mundo JS que permite realizar tests unitarios con mucha facilidad. La librería permite realizar mocks y stubs para evitar la dependencia con componentes externos (o requests). Además tiene una [documentación](https://jestjs.io/docs/getting-started) bastante completa donde conocer sus funciones.

- React Testing Library: es una librería de testing focalizada en pruebas de interacción de usuario. El objetivo es interactuar con el DOM y realizar tests más cercanos a la interacción de los usuarios en las pantallas. <br />
  Se puede utilizar en conjunto con Jest ya que son totalmente compatibles. En su [documentación](https://testing-library.com/docs/) se puede conocer todas las funciones que provee.

- Cypress: con Cypress se pueden armar tests e2e y evaluar flujos completos de la aplicación que se está desarrollando. Permite realizar tests de funcionalidades completas y hasta permite interceptar requests y mockearlos. Toda su funcionalidad puede encontrarse en la [documentación](https://docs.cypress.io/guides/overview/why-cypress).

- Styled components: librería de diseño de componentes que permite encapsular el diseño de forma simple y sencilla mediante la creación de componentes `JSX` y así evitar utilizar archivos `css` durante el desarrollo. En su [documentación](https://styled-components.com/docs) se puede encontrar las funciones que expone.<br />
  Por otro lado se incluyó la librería `jest-styled-components` que permite realizar tests snapshot de los componentes.

- Recoil: es una librería de manejo de estados globales hecha para React. Es bastante moderna, muy potente y minimalista. Toda la información de la librería puede hallarse en [documentación](https://recoiljs.org/docs/introduction/motivation).
