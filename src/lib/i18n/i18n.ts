import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enUSTranslation from './translations/en-US.json'

i18n.use(initReactI18next).init({
  resources: {
    'en-US': {
      translation: enUSTranslation,
    },
  },
  lng: 'en-US',
  fallbackLng: 'en-US',
  interpolation: {
    escapeValue: false,
  },
  returnNull: false,
  react: {
    transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p', 'span'],
  },
})

export default i18n
