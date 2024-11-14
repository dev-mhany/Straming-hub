// app/components/Footer.js
'use client'

import React from 'react'
import { Box, Typography, Container } from '@mui/material'

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#0062d3', paddingY: 3, color: '#fff', mt: 4 }}>
      <Container>
        <Typography variant='body1' sx={{ textAlign: 'center' }}>
          &copy; {new Date().getFullYear()} Streaming Hub. All Rights Reserved
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
