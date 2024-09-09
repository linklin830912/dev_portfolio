import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enAbout from './locales/en/about.json';
import zhAbout from './locales/zh/about.json';
import enMenu from './locales/en/menu.json';
import zhMenu from './locales/zh/menu.json';
import enProject from './locales/en/project.json';
import zhProject from './locales/zh/project.json';
import enContact from './locales/en/contact.json';
import zhContact from './locales/zh/contact.json';

const resources = {
  en: {
    menu: enMenu,
    about: enAbout,
    project: enProject,
    contact: enContact
  },
  zh: {
    menu: zhMenu,
    about: zhAbout, 
    project: zhProject,
    contact: zhContact
  }
};

i18n
  .use(LanguageDetector) // Automatically detect the user's language
  .use(initReactI18next) // Bind i18n to React
  .init({
    resources,
    fallbackLng: 'en', // Default language
    interpolation: {
      escapeValue: false // React already protects from XSS
    }
  });

export default i18n;
