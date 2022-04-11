import Head from 'next/head'
import ContactForm from '../components/contactForm'
import Alert from '../components/alert'
import useNotification from '../hooks/useNotification'

const Contact = () => {
    const [ notification, showNotification ] = useNotification();

    return (
        <>
            <Head>
                <title>Contact Me</title>
            </Head>
            <Alert message={notification} />        
            <main className='content'>               
                <h3 className='font-bold mb-8'>Contact Me</h3>
                <div className='p-6 border-2 rounded-lg'>
                    <ContactForm notify={showNotification} />
                </div>
            </main>
        </>
    )
}

export default Contact