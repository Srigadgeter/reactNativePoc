import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
// Locales
import en from './locales/en';
import ar from './locales/ar';

const resources = {
  en,
  ar,
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',

  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
