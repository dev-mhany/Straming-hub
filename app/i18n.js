// app/i18n.js

import i18n from 'i18next'
import HttpBackend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next' // Import initReactI18next

i18n
  .use(initReactI18next) // Use initReactI18next before init
  .use(HttpBackend)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    debug: true, // Enable debug mode to see detailed logs
    returnObjects: true,
    detection: {
      order: ['path', 'localStorage', 'cookie', 'navigator'],
      caches: ['localStorage', 'cookie']
    },
    interpolation: {
      escapeValue: false
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json'
    },
    react: {
      useSuspense: false // Disable suspense if not using Suspense component
    }
  })

export default i18n
