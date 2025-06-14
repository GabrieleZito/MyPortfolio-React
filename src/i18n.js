import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    it: {
        translation: {
            proDesc:
                "Full Stack Developer. Mi piace costruire cose e viaggiare",
        },
    },
    en: {
        translation: {
            proDesc: "Full Stack Developer. Love to build things and travel",
        },
    },
};

i18next.use(initReactI18next).init({
    resources,
});

export default i18next;
