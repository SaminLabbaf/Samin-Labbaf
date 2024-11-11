import './styles/global.css'
import Image from 'next/image'
import logo from '../public/images/logo.svg'
import instagram from '../public/images/instagram-logo.svg'
import x from '../public/images/x-logo.svg'
import linkedin from '../public/images/linkedin-logo.svg'
import email from '../public/images/mail-icon.svg'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Image src={logo} alt='logo' />
          <nav>
            <ul>
              <li><a href="#">Work & Skills</a></li>
              <li><a href="#">About Me</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
          <div>dummy element</div>
        </header>

        {children}

        <footer>
          <div className='footerContent'>
            <ul>
              <li><a href="#">Work & Skills</a></li>
              <li><a href="#">About Me</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <ul>
              <li><a href='#'><Image src={instagram} alt='instagram link'/></a></li>
              <li><a href='#'><Image src={x} alt='x link'/></a></li>
              <li><a href='#'><Image src={linkedin} alt='linkedin link'/></a></li>
              <li><a href='#'><Image src={email} alt='email link'/></a></li>
            </ul>
            <span className='copyRight'>© 2024 Samin Labbaf, All rights preserved.</span>
          </div>
          
        </footer>
      </body>
    </html>
  )
}