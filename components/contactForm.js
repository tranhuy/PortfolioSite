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
                                <div className='form-group mb-2'>
                                    <label htmlFor='name' className='form-label inline-block mb-2 text-gray-700'>Name <span className='required'>*</span></label><br />
                                    <Field name='name' className='form-control
                                        block
                                        w-full
                                        px-3
                                        py-1.5
                                        text-base
                                        font-normal
                                        text-gray-700
                                        bg-white bg-clip-padding
                                        border border-solid border-gray-300
                                        rounded
                                        transition
                                        ease-in-out
                                        m-0
                                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                    ' />
                                    <div style={{ color:'red' }}>
                                        <ErrorMessage name='name' />
                                    </div>
                                </div>
                                <div className='form-group mb-2'>
                                    <label htmlFor='email' className='form-label inline-block mb-2 text-gray-700'>Email <span className='required'>*</span></label><br />
                                    <Field type='email' name='email' className='form-control
                                        block
                                        w-full
                                        px-3
                                        py-1.5
                                        text-base
                                        font-normal
                                        text-gray-700
                                        bg-white bg-clip-padding
                                        border border-solid border-gray-300
                                        rounded
                                        transition
                                        ease-in-out
                                        m-0
                                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                    '/>
                                    <div style={{ color:'red' }}>
                                        <ErrorMessage name='email' />
                                    </div>
                                </div>
                                <div className='form-group mb-2'>
                                    <label htmlFor='phone' className='form-label inline-block mb-2 text-gray-700'>Phone</label><br />
                                    <Field name='phone' className='form-control
                                        block
                                        w-full
                                        px-3
                                        py-1.5
                                        text-base
                                        font-normal
                                        text-gray-700
                                        bg-white bg-clip-padding
                                        border border-solid border-gray-300
                                        rounded
                                        transition
                                        ease-in-out
                                        m-0
                                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                    '/>
                                    <div style={{ color:'red' }}>
                                        <ErrorMessage name='phone' />
                                    </div>
                                </div>
                                <div className='form-group mb-2'>
                                    <label htmlFor='message' className='form-label inline-block mb-2 text-gray-700'>Message <span className='required'>*</span></label><br />
                                    <Field as='textarea' name='message' placeholder='Type a message' rows='5' cols='40' className='form-control
                                        block
                                        w-full
                                        px-3
                                        py-1.5
                                        text-base
                                        font-normal
                                        text-gray-700
                                        bg-white bg-clip-padding
                                        border border-solid border-gray-300
                                        rounded
                                        transition
                                        ease-in-out
                                        m-0
                                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                    '/>
                                    <div style={{ color:'red' }}>
                                        <ErrorMessage name='message' />
                                    </div>
                                </div>
                                <button type='submit' disabled={!dirty || !isValid} className={`defaultButton +
                                    ${!dirty || !isValid ? 'pointer-events-none opacity-60': ''}`}>Send Email</button>
                            </Form>
                        )
                    }
                }
            </Formik>
        </>
    )
}

export default ContactForm