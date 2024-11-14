// app/components/LanguageSwitcher.js
'use client'

import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ButtonGroup } from '@mui/material'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const changeLanguage = lng => {
    i18n.changeLanguage(lng)
  }

  return (
    <ButtonGroup variant='contained' aria-label='language switcher'>
      <Button onClick={() => changeLanguage('en')}>EN</Button>
      <Button onClick={() => changeLanguage('ar')}>ع</Button>
    </ButtonGroup>
  )
}

export default LanguageSwitcher
