import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import english from "./i18n/english.json";
import estonian from "./i18n/estonian.json";

const resources = {
  en: english,
  ee: estonian,
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("language") || "eng",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
