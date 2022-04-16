import { forwardRef, useState, useImperativeHandle } from 'react';
import FocusTrap from 'focus-trap-react';

const Modal = forwardRef(({ children }, ref) => {
    const [ showModal, setShowModal ] = useState(false);
    
    const toggleModal = () => {
        setShowModal(!showModal);
    }

    useImperativeHandle(ref, () => ({ toggleModal }));

    return (
        <FocusTrap active={showModal}>
            <div id='modal' className={`fixed inset-0 z-50 bg-black bg-opacity-50 justify-center items-center + ${showModal ? 'flex' : 'hidden'}`}>
                <div className='bg-white rounded-lg shadow'>
                    <div className='flex justify-end p-2'>
                        <button onClick={toggleModal}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                    <div className='p-4 pt-0'>
                        {showModal && children}
                    </div>
                </div>
            </div>
        </FocusTrap>
    )
})

Modal.displayName = 'Modal'

export default Modal