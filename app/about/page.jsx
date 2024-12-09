import Image from 'next/image';
import '../styles/home.style.css'
import './about.style.css';
import meAbout from '../../public/images/me-about.png';
import dancing from '../../public/images/dancing.svg';
import piano from '../../public/images/piano.svg';
import biking from '../../public/images/biking.svg'
import { Box, FormGroup, FormLabel, Button, Container, Typography } from '@mui/material';
import { Timeline, TimelineContent, TimelineOppositeContent, TimelineSeparator, TimelineConnector, TimelineDot, TimelineItem } from '@mui/lab'
import SendIcon from '@mui/icons-material/Send'

export const metadata = {
    title: 'About Me',
    description: 'About Samin Labbaf',
}

export default function About() {
    return <>
        <main className="aboutPage">
            <Container maxWidth='lg'>
                <section className='intro'>
                    <div className='introText'>
                        <Typography variant='h1'>Hello! I'm Samin</Typography>
                        <p>Anim nostrud sit ut eiusmod excepteur esse reprehenderit magna mollit ad reprehenderit reprehenderit quis nisi dolore laborum laborum non. Tempor nostrud ullamco velit Lorem sint enim est occaecat eiusmod consectetur anim et cillum enim nostrud Anim nostrud sit ut eiusmod excepteur esse reprehenderit magna mollit ad reprehenderit reprehenderit quis nisi dolore laborum laborum non. Tempor nostrud ullamco velit Lorem sint enim est occaecat eiusmod consectetur anim et cillum enim nostrud.</p>
                    </div>
                    <div className='mePicContainer'>
                        <Image src={meAbout} alt='Samin Picture' className='meAbout' />
                    </div>
                </section>
                <section id='education'>
                    <Typography variant='h1'>Education</Typography>
                    <Timeline position="alternate">
                        <TimelineItem>
                            <TimelineOppositeContent color="text.secondary">
                                2008
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color='primary' />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant='h6'>Mathematics Diploma</Typography>
                                <Typography>Kherad Institute</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent color="text.secondary">
                                2012
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color='primary' />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant='h6'>Bachelors in IT</Typography>
                                <Typography>Amirkabir University</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent color="text.secondary">
                                2024
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color='primary' />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant='h6'>Web Development Front-End Design</Typography>
                                <Typography>@ GBC</Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </section>
                <section id='hobbies'>
                    <div className='hobbiesIntro'>
                        <h1>My Hobbies</h1>
                        <p>Duis nisi do exercitation in irure aliqua commodo nisi eu id reprehenderit dolore fugiat consectetur irure labore est ea.Duis nisi do exercitation in irure aliqua commodo nisi eu id reprehenderit dolore fugiat consectetur irure labore est ea.</p>
                    </div>
                    <div className="hobbyPics">
                        <div id="dance" className='hobby'>
                            <Image src={dancing} alt='dancing figure' />
                            <h3>Dancing</h3>
                        </div>
                        <div id="piano" className='hobby'>
                            <Image src={piano} alt='playing piano figure' />
                            <h3>Piano</h3>
                        </div>
                        <div id="biking" className='hobby'>
                            <Image src={biking} alt='biking figure' />
                            <h3>Biking</h3>
                        </div>
                    </div>
                </section>
            </Container>
        </main>
    </>
}