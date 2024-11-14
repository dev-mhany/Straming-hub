// app/components/Products.js
'use client'

import React from 'react'
import { Box, Typography, Card, CardContent, Button, Stack } from '@mui/material'
import { useTranslation } from 'react-i18next'

const Products = () => {
  const { t, i18n, ready } = useTranslation()
  const isArabic = i18n.language === 'ar'

  // Ensure translations are ready
  if (!ready) {
    return <div>Loading...</div> // Or any loading indicator
  }

  const products = t('productList', { returnObjects: true })

  // Debugging: Log the products to see what's being returned
  console.log('products:', products)

  // Check if products is an array
  if (!Array.isArray(products)) {
    return <div>Error: Products data is not available.</div>
  }
  return (
    <Box id='products' sx={{ paddingY: 8, backgroundColor: '#f5f5f5' }}>
      <Typography variant='h3' sx={{ textAlign: 'center', mb: 4 }}>
        {t('products')}
      </Typography>
      <Stack
        direction='row'
        flexWrap='wrap'
        justifyContent='center'
        sx={{ flexDirection: isArabic ? 'row-reverse' : 'row' }}
      >
        {products?.map((product, index) => (
          <Card
            key={index}
            sx={{
              width: 300,
              m: 2,
              textAlign: isArabic ? 'right' : 'left'
            }}
          >
            <CardContent>
              <Typography variant='h5' component='div' sx={{ mb: 2 }}>
                {product.name}
              </Typography>
              <Typography variant='body2' color='text.secondary' sx={{ mb: 2 }}>
                {product.description}
              </Typography>
              <Button
                variant='contained'
                color='primary'
                onClick={() => handleOrder(product.name)}
                sx={{ float: isArabic ? 'left' : 'right' }}
              >
                {t('orderNow')}
              </Button>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  )
}

export default Products
