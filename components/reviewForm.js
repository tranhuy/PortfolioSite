import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    review: yup.string().required('Review is required'),
});

const ReviewForm = ({ projectId, updateProject }) => {
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
                            <label htmlFor='name'>Name: </label><br />
                            <Field name='name' />
                            <div style={{ color:'red' }}>
                                <ErrorMessage name='name' />
                            </div>
                            <label htmlFor='review'>Comment: </label><br />
                            <Field as='textarea' name='review' placeholder='Enter Feedback' rows='5' cols='40' />
                            <div style={{ color:'red' }}>
                                <ErrorMessage name='review' />
                            </div>
                            <button type='submit' disabled={!dirty || !isValid}>Submit Review</button>
                        </Form>
                    );
                }
            }
        </Formik>
    )
}

export default ReviewForm