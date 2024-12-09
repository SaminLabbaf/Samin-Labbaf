import Image from 'next/image';
import '../styles/home.style.css'
import antcoders from '../../public/images/antcoders.svg';
import dexis from '../../public/images/dexis.svg';
import tod from '../../public/images/tod.svg';
import { Container, Typography } from '@mui/material';
import './work.style.css'

export const metadata = {
    title: 'Work & Skills',
    description: 'About Samin Labbaf Work and skills',
}

export default function Work() {
    return <>
        <main className="workPage">
            <Container maxWidth='lg'>
                <section className='history'>
                    <div className='workIntro'>
                        <Typography variant='h1'>My Work</Typography>
                        <p>Duis nisi do exercitation in irure aliqua commodo nisi eu id reprehenderit dolore fugiat consectetur irure </p>
                    </div>
                    <div className="background">
                        <div className="workCard">
                            <Image src={antcoders} alt='Ant Coders logo' />
                            <div className="cardText">
                                <p>Ant coders - (2022)</p>
                                <h3>Front-End Developer (NextJS)</h3>
                                <p>Nostrud tempor cillum sunt excepteur do ut proident deserunt enim consequat exercitatio</p>
                            </div>
                        </div>
                        <hr />
                        <div className="workCard">
                            <Image src={dexis} alt='Dexis logo' />
                            <div className="cardText">
                                <p>Dexis Co - (2021)</p>
                                <h3>Front-End Developer (NextJS)</h3>
                                <p>Ad do dolore cillum dolor et ex non dolor qui. Dolor amet tempor pariatur officia pariatur et</p>
                            </div>
                        </div>
                        <hr />
                        <div className="workCard">
                            <Image src={tod} alt='Ant Coders logo' />
                            <div className="cardText">
                                <p>TOD Co - (2019)</p>
                                <h3>Backend Developer Intern (Zend PHP)</h3>
                                <p>Ad do dolore cillum dolor et ex non dolor qui. Dolor amet tempor pariatur officia pariatur et</p>
                            </div>
                        </div>
                        <hr />
                    </div>
                </section>
            </Container>
        </main>
    </>
}