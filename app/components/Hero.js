// app/components/Hero.js
'use client'

import React from 'react'
import { Box, Typography, Container } from '@mui/material'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <Box
      id='hero'
      sx={{
        height: '70vh',
        backgroundImage: 'url(/assets/img/streaming-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        textAlign: 'center'
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)'
        }}
      ></Box>

      {/* Content */}
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant='h2' sx={{ fontWeight: 600, mb: 2 }}>
          {t('welcome')}
        </Typography>
      </Container>
    </Box>
  )
}

export default Hero
