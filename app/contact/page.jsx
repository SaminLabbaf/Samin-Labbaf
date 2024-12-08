import Image from 'next/image';
import '../styles/home.style.css'
import me from '../../public/images/me.png';
import './contact.style.css';
import { TextField, Box, FormGroup, FormLabel, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send'

export const metadata = {
    title: 'Contact',
    description: 'Contact Samin Labbaf',
}

export default function Contact() {
    return <>
        <main className="contactPage">
            <section className='form-section'>
                <h2>Let Us Communicate!</h2>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    className='form'
                >
                    <FormGroup>
                        <FormLabel>Email</FormLabel>
                        <TextField
                            id="email"
                            variant="outlined"
                            aria-label='email input'
                            placeholder='Your Email'
                        />
                        <FormLabel color='error'>Message</FormLabel>
                        <TextField
                            id="message"
                            multiline
                            rows={4}
                            placeholder='Your Message'
                        />
                    </FormGroup>
                    <Button type='submit' variant="contained" endIcon={<SendIcon />}>
                        Send
                    </Button>
                </Box>
            </section>
            <section>
                <Image src={me} className='myContactImg' alt='Samin Picture' />
            </section>
        </main>
    </>
}