import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '@/i18n/en.json';
import ar from '@/i18n/ar.json';
import hi from '@/i18n/hi.json';
import ur from '@/i18n/ur.json';
import fil from '@/i18n/fil.json';
import bn from '@/i18n/bn.json';
import ru from '@/i18n/ru.json';
import fa from '@/i18n/fa.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar },
    hi: { translation: hi },
    ur: { translation: ur },
    fil: { translation: fil },
    bn: { translation: bn },
    ru: { translation: ru },
    fa: { translation: fa },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;