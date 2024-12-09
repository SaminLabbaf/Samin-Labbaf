import Image from 'next/image';
import '../styles/home.style.css'
import antcoders from '../../public/images/antcoders.svg';
import dexis from '../../public/images/dexis.svg';
import tod from '../../public/images/tod.svg';
import htmlIcon from '../../public/images/html.svg';
import cssIcon from '../../public/images/css.svg';
import JSIcon from '../../public/images/js.svg';
import MuiIcon from '../../public/images/mui.svg';
import NextJSIcon from '../../public/images/nextjs.svg';
import ReactJSIcon from '../../public/images/reactjs.svg';
import FigmaIcon from '../../public/images/figma.svg';
import GitHubIcon from '../../public/images/github.svg';
import GitIcon from '../../public/images/git.svg';
import VSCodeIcon from '../../public/images/vscode.svg';
import persistence from '../../public/images/persistence.svg';
import creativity from '../../public/images/creativity.svg';
import details from '../../public/images/details.svg';
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
                <section id='skillSection'>
                    <h2>Skills and Languages</h2>
                    <div className="skillSet">
                        <div className='skill'>
                            <Image src={htmlIcon} alt='html 5 icon' />
                            <h4>HTML 5</h4>
                        </div>
                        <div className='skill' id='css'>
                            <Image src={cssIcon} alt='css 3 icon' />
                            <h4>CSS 3</h4>
                        </div>
                        <div className='skill'>
                            <Image src={JSIcon} alt='javascript icon' />
                            <h4>JavaScript</h4>
                        </div>
                        <div className='skill'>
                            <Image src={FigmaIcon} alt='Figma icon' />
                            <h4>Figma</h4>
                        </div>
                        <div className='skill'>
                            <Image src={GitHubIcon} alt='Github icon' />
                            <h4>GitHub</h4>
                        </div>
                        <div className='skill'>
                            <Image src={GitIcon} alt='Git icon' />
                            <h4>Git</h4>
                        </div>
                        <div className='skill'>
                            <Image src={VSCodeIcon} alt='Visual studio code icon' />
                            <h4>VS Code</h4>
                        </div>
                    </div>
                    <h2>Frameworks & Libraries</h2>
                    <div className="skillSet">
                        <div className='skill'>
                            <Image src={NextJSIcon} alt='Next JS icon' />
                            <h4>NextJS</h4>
                        </div>
                        <div className='skill'>
                            <Image src={ReactJSIcon} alt='React JS icon' />
                            <h4>ReactJS</h4>
                        </div>
                        <div className='skill'>
                            <Image src={MuiIcon} alt='material ui icon' />
                            <h4>Material UI</h4>
                        </div>
                    </div>
                    <h2>Soft Skills</h2>
                    <div className="skillSet">
                        <div className='skill'>
                            <Image src={persistence} alt='persistence skill' />
                            <h4>Persistence</h4>
                        </div>
                        <div className='skill'>
                            <Image src={creativity} alt='creativity skill' />
                            <h4>Creativity</h4>
                        </div>
                        <div className='skill'>
                            <Image src={details} alt='Precision' />
                            <h4>Precision</h4>
                        </div>
                    </div>
                </section>
                <section id='careerPath'>
                    <h1>My Career Path</h1>
                    <p>Non dolore magna ut nisi duis magna minim nulla anim laborum cillum incididunt. Minim excepteur sit dolore elit labore magna aute consectetur dolor cillum non aliqua sint labore laboris tempor occaecat laboris aliqua. Irure non ullamco sit amet aliquip officia duis e</p>
                </section>
            </Container>
        </main>
    </>
}