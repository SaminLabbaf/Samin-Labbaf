import './styles/global.css'
import Image from 'next/image'
import logo from '../public/images/logo.svg'

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          <header>
            <Image src={logo} alt='logo'/>
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
          {children}</body>
      </html>
    )
  }