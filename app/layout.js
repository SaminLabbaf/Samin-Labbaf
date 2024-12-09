import './styles/global.css'
import Image from 'next/image'
import logo from '../public/images/logo.svg'
import instagram from '../public/images/instagram-logo.svg'
import x from '../public/images/x-logo.svg'
import linkedin from '../public/images/linkedin-logo.svg'
import email from '../public/images/mail-icon.svg'
import { Montserrat } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import Link from 'next/link';


const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body >
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <header>
              <Link href={'/'}><Image src={logo} alt='logo' /></Link>
              <nav>
                <ul>
                  <li><a href="./work">Work & Skills</a></li>
                  <li><a href={'./about'}>About Me</a></li>
                  <li><a href='#'>Projects</a></li>
                  <li><Link href={`/contact`}>Contact</Link></li>
                </ul>
              </nav>
              <div style={{ color: 'black' }}>dummy element</div>
            </header>

            {children}

            <footer>
              <div className='footerContent'>
                <ul>
                  <li><a href="./work">Work & Skills</a></li>
                  <li><a href={'./about'}>About Me</a></li>
                  <li><a href="#">Projects</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
                <ul>
                  <li><a href='#'><Image src={instagram} alt='instagram link' /></a></li>
                  <li><a href='#'><Image src={x} alt='x link' /></a></li>
                  <li><a href='#'><Image src={linkedin} alt='linkedin link' /></a></li>
                  <li><a href='#'><Image src={email} alt='email link' /></a></li>
                </ul>
                <span className='copyRight'>© 2024 Samin Labbaf, All rights preserved.</span>
              </div>
            </footer>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}