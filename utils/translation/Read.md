# Translation

1. Todos los strings del front se traducen mediante el módulo i18n y se encuentran dentro de la carpeta public/locale el formato es un simple json.
2. Para facilitar la converción de texto a json y que el mismo pueda ser manipulado por agentes distintos al developer es que existe una hoja de cálculo de google con todas las palabras: https://docs.google.com/spreadsheets/d/1R_utTcZYqGN7fkELQbtLoLqdXJRDc8DOO7ERRUpEXcY/edit?usp=sharing que mediante un App Script que se encuenta dentro de utils/translations/scripts/toJson.js se ejecuta y devuelve un JSON que se puede sobreescribir sobre el viejo.
3. Para saber como funcionan los App Scripts leer este turorial: https://thenewstack.io/how-to-convert-google-spreadsheet-to-json-formatted-text/