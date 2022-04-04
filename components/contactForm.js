import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup';
import { useState } from 'react';

import Spinner from './spinner';

const phoneRegExp = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Must be a valid email').required('Email is required'),
    phone: yup.string().matches(phoneRegExp, 'Must be a valid phone number'),
    message: yup.string().required('Message is required'),
});

const ContactForm = ({ notify }) => {
    const [ isProcessing, setIsProcessing ] = useState(false);

    const sendEmail = async (formValues, { resetForm }) => { 
        setIsProcessing(true);    
        const response = await fetch('/api/email', {
            method: 'POST',
            body: JSON.stringify(formValues),
            headers: {
                'Context-Type': 'application/json',
            }
        })
        setIsProcessing(false);
        if (response.ok) {
            notify('Thank you for your email.  I will get in touch with you soon!');
            resetForm();
        } else {
            notify(await response.text(), true);
        }       
    }

    return (
        <>
            { isProcessing && <Spinner /> }
            <Formik
                initialValues={{ name: '', email: '', phone: '', message: '' }}
                validationSchema={validationSchema}
                onSubmit={sendEmail}
            >
                {
                    ({ dirty, isValid }) => {
                        return (
                            <Form>
                                <label htmlFor='name'>Name:</label><br />
                                <Field name='name' />
                                <div style={{ color:'red' }}>
                                    <ErrorMessage name='name' />
                                </div>
                                <label htmlFor='email'>Email:</label><br />
                                <Field type='email' name='email' />
                                <div style={{ color:'red' }}>
                                    <ErrorMessage name='email' />
                                </div>
                                <label htmlFor='phone'>Phone:</label><br />
                                <Field name='phone' />
                                <div style={{ color:'red' }}>
                                    <ErrorMessage name='phone' />
                                </div>
                                <label htmlFor='message'>Message:</label><br />
                                <Field as='textarea' name='message' placeholder='Type a message' rows='5' cols='40' />
                                <div style={{ color:'red' }}>
                                    <ErrorMessage name='message' />
                                </div>
                                <button type='submit' disabled={!dirty || !isValid}>Send Email</button>
                            </Form>
                        )
                    }
                }
            </Formik>
        </>
    )
}

export default ContactForm