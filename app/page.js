import './styles/home.style.css'
import me from '../public/images/me.png'
import Image from 'next/image'

export const metadata = {
  title: 'Samin Labbaf',
  description: 'Samin Labbaf Portfolio',
}

export default function Page() {
  return <>
    <main className="mainPage">
      <div className="heroSection">
        <div className="heroText">
          <Image className='myImage' src={me} alt='samin image'/>
          <h1>Hello! I'm Samin, a Web Developer and Dedsigner</h1>
          <p>Occaecat elit pariatur non Lorem laborum proident Lorem non sint nostrud. Et dolore incididunt mollit nostrud Lorem dolore. Qui aliquip aute amet eu adipisicing velit ullamco nulla sint enim do quis aute</p>
        </div>
      </div>
    </main>
  </>
}