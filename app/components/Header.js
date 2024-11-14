// app/components/Header.js
'use client'

import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const { t } = useTranslation()

  return (
    <AppBar position='fixed' sx={{ backgroundColor: '#0062d3' }}>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          Streaming Hub
        </Typography>
        <LanguageSwitcher />
      </Toolbar>
    </AppBar>
  )
}

export default Header
