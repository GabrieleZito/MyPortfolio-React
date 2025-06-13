import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    it: {
        translation: {},
    },
    en: {
        translation: {},
    },
};

i18next.use(initReactI18next).init({
    resources,
});

export default i18next;
