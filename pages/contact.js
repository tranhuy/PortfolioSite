import Head from 'next/head'
import ContactForm from '../components/contactForm'
import Alert from '../components/alert'
import useNotification from '../hooks/useNotification'

const Contact = () => {
    const [ notification, showNotification ] = useNotification();

    return (
        <div>
        <Head>
            <title>Contact Me</title>
        </Head>        
        <main className='container'>
            <Alert message={notification} />
            <h2>Contact Me</h2>
            <ContactForm notify={showNotification} />
        </main>
        </div>
    )
}

export default Contact