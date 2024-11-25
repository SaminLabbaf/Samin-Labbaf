import './styles/home.style.css'
import me from '../public/images/me.png'
import projectPic from '../public/images/project.png'
import Image from 'next/image'
import Link from 'next/link'
import Carousel from './components/carousel'
import classmate from '../public/images/classmate.png'
import classmate_2 from '../public/images/classmate_2.png'
import classmate_3 from '../public/images/classmate_3.png'



export const metadata = {
  title: 'Samin Labbaf',
  description: 'Samin Labbaf Portfolio',
}


export default function Page() {
  return <>
    <main className="mainPage">
      <div className="heroSection">
        <div className="heroText">
          <Image className='myImage' src={me} alt='samin image' />
          <h1>Hello! I'm Samin, a Web Developer and Dedsigner</h1>
          <p>Occaecat elit pariatur non Lorem laborum proident Lorem non sint nostrud. Et dolore incididunt mollit nostrud Lorem dolore. Qui aliquip aute amet eu adipisicing velit ullamco nulla sint enim do quis aute</p>
        </div>
      </div>
      <h1 className='latestTitle'>My Latest Projects</h1>
      <section className='latestProjects'>
        <div className='project'>
          <Image src={projectPic} className='projectPic' alt='project picture' />
          <h2>Project Title</h2>
          <p>Project Description</p>
          <Link href={'#'}>GitHub Link</Link>
        </div>
        <div className='project'>
          <Image src={projectPic} className='projectPic' alt='project picture' />
          <h2>Project Title</h2>
          <p>Project Description</p>
          <Link href={'#'}>GitHub Link</Link>
        </div>
        <div className='project'>
          <Image src={projectPic} className='projectPic' alt='project picture' />
          <h2>Project Title</h2>
          <p>Project Description</p>
          <Link href={'#'}>GitHub Link</Link>
        </div>
      </section>
      <div className='moreButtonContainer'>
        <Link href={'#'}><button className='moreBtn'>More Projects</button></Link>
      </div>

      {/******** Carousel ***********/}
      <Carousel>
        <div
          className='carouselContent'
        >
          <div className="zoomContent">
          <div className="carouselImage">
            <Image src={classmate} alt='classmate picture' />
          </div>
          <div className="carouselText">
            <p className='content'>
              "Sit veniam qui tempor ex ipsum voluptate deserunt cillum cillum excepteur elit mollit commodo fugiat enim veniam qui tempor ex ipsum voluptate "
            </p>
            <p>Sam Black</p>
          </div>
          </div>
        </div>
        <div
          className='carouselContent'
        >
          <div className="zoomContent">
          <div className="carouselImage">
            <Image src={classmate_2} alt='classmate 2 picture' />
          </div>
          <div className="carouselText">
            <p className='content'>
              "Sit veniam qui tempor ex ipsum voluptate deserunt cillum cillum excepteur elit mollit commodo fugiat enim veniam qui tempor ex ipsum voluptate "
            </p>
            <p>Sam Black</p>
          </div>
          </div>
        </div>
        <div
          className='carouselContent'
        >
          <div className="zoomContent">
            <div className="carouselImage">
              <Image src={classmate_3} alt='classmate picture' />
            </div>
            <div className="carouselText">
              <p className='content'>
                "Sit veniam qui tempor ex ipsum voluptate deserunt cillum cillum excepteur elit mollit commodo fugiat enim veniam qui tempor ex ipsum voluptate "
              </p>
              <p>Sam Black</p>
            </div>
          </div>
        </div>

      </Carousel>

    </main>
  </>
}