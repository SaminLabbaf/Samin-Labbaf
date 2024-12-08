import Image from 'next/image';
import '../styles/home.style.css'
import './about.style.css';
import meAbout from '../../public/images/me-about.png';
import educationTimeline from '../../public/images/education-timeline.png'
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
            <Container maxWidth='xl'>
                <section className='intro'>
                    <div className='introText'>
                        <Typography variant='h1'>Hello! I'm Samin</Typography>
                        <p>Anim nostrud sit ut eiusmod excepteur esse reprehenderit magna mollit ad reprehenderit reprehenderit quis nisi dolore laborum laborum non. Tempor nostrud ullamco velit Lorem sint enim est occaecat eiusmod consectetur anim et cillum enim nostrud </p>
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
            </Container>
        </main>
    </>
}