import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translationES from '@translation/es/translation.json';


// (We only need to initialize i18next once).
const i18n = i18next
  // Plug in i18next React extensions.
  .use(initReactI18next)
  .init({
    // translations would likely be in separate files.
    resources: {
      es: { translation: translationES },
    },
    // Set the default language to English.
    lng: "es",
    // Disable i18next's default escaping, which prevents XSS
    // attacks. React already takes care of this.
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
