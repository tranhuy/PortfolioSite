import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    review: yup.string().required('Review is required'),
});

const ReviewForm = ({ projectId, updateProject, notify, hideModal }) => {
    const AddReview = async (review, { resetForm }) => {     
        try {
            const response = await fetch(`/api/projects/${projectId}`, {
                method: 'PUT',
                body: JSON.stringify(review),
                headers: {
                    'Context-Type': 'application/json',
                }
            });
            const updatedProject = await response.json();
            updateProject(updatedProject);
            notify('Thank you for taking the time to leave a review!');
            hideModal();
            resetForm({});
        } catch (err) {
            console.log(err.message);
        }      
    }

    return (
        <Formik
            initialValues={{ name: '', review: '' }}
            validationSchema={validationSchema}
            onSubmit={AddReview}
        >
            {
                ({ dirty, isValid }) => {
                    return (
                        <Form>
                            <div className='form-group mb-2'>
                                <label htmlFor='name' className='form-label inline-block mb-2 text-gray-700'>Name <span className='required'>*</span></label>
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
                                '/>
                                <div style={{ color:'red' }}>
                                    <ErrorMessage name='name' />
                                </div>
                            </div>
                            <div className='form-group mb-2'>
                                <label htmlFor='review' className='form-label inline-block mb-2 text-gray-700'>Comment: <span className='required'>*</span></label>
                                <Field as='textarea' name='review' placeholder='Enter Feedback' rows='5' cols='40' className='form-control
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
                                    <ErrorMessage name='review' />
                                </div>
                            </div>
                            <div>
                            <button type='submit' disabled={!dirty || !isValid} className={`defaultButton +
                                    ${!dirty || !isValid ? 'pointer-events-none opacity-60': ''}`}>Submit Review</button>
                            </div>
                           
                        </Form>
                    );
                }
            }
        </Formik>
    )
}

export default ReviewForm