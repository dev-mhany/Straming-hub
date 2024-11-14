import PropTypes from 'prop-types'
import CssBaseline from '@mui/material/CssBaseline'
import Header from './components/Header'
import Footer from './components/Footer'
import '../styles/globals.css'
import I18nProvider from './providers/I18nProvider'

export const metadata = {
  title: 'Streaming Hub - Your Gateway to Entertainment',
  description:
    'Discover and subscribe to a variety of streaming services all in one place. Experience entertainment like never before.',
  keywords: 'streaming services, Netflix, Shahid, Watch It, entertainment, movies, series, music, subscriptions',
  openGraph: {
    type: 'website',
    url: 'https://streaminghub.example.com/',
    title: 'Streaming Hub',
    description: 'Your one-stop destination for all streaming services. Explore and subscribe now!',
    images: [
      {
        url: 'https://streaminghub.example.com/meta.png',
        width: 1200,
        height: 630,
        alt: 'Streaming Hub'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@streaminghub',
    url: 'https://streaminghub.example.com/',
    title: 'Streaming Hub',
    description: 'Your one-stop destination for all streaming services. Explore and subscribe now!',
    images: [
      {
        url: 'https://streaminghub.example.com/meta.png',
        width: 1200,
        height: 630,
        alt: 'Streaming Hub'
      }
    ]
  },
  authors: [{ name: 'Streaming Hub Team' }],
  robots: 'index, follow'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <CssBaseline />
        <I18nProvider>
          <Header />
          {children}
          <Footer />
        </I18nProvider>
      </body>
    </html>
  )
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired
}
