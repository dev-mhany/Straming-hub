// app/providers/I18nProvider.js
'use client'

import React from 'react'
import i18n from '../i18n'
import { I18nextProvider } from 'react-i18next'

const I18nProvider = ({ children }) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}

export default I18nProvider
