import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next.use(I18nextBrowserLanguageDetector).use(initReactI18next).init({
    debug: true,
    lng: "en",
    fallbacklng: "en",
    returnObjects: true,
    resources: {
        en: {
            translation: {
                greeting: 'Hello Centime!',
                cashFlow: 'Cash Flow',
                addNode: 'add node',
                removeNode: 'remove node'
            }
        },
        fr: {
            translation: {
                greeting: 'Bonjour Centime!',
                cashFlow: 'Des flux de trésorerie',
                addNode: 'ajouter un nœud',
                removeNode: 'supprimer le nœud'
            }
        },
        hi: {
            translation: {
                greeting: 'हेलो सेंटिम',
                cashFlow: 'नकदी प्रवाह',
                addNode: 'नोड जोड़ें',
                removeNode: 'नोड हटाएं'
            }
        }
    }
})