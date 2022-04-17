import { forwardRef, useState, useEffect, useImperativeHandle } from 'react';
import FocusTrap from 'focus-trap-react';

const Modal = forwardRef(({ children }, ref) => {
    const [ isOpen, setIsOpen ] = useState(false);
    
    const toggleModal = () => {
        setIsOpen(!showModal);
    }

    const showModal = () => {
        setIsOpen(true);
    }

    const hideModal = () => {
        setIsOpen(false);
    }

    useImperativeHandle(ref, () => ({ showModal, hideModal }));

    useEffect(() => {
        const closeModalOnEscKeypress = e => {
            if (e.keyCode === 27) {
                console.log('Esc key pressed');
                setIsOpen(false);
            }
        }

        const closeModalOnClick = e => {
            if (isOpen && e.target.closest('#modal') == null) {
                console.log('Clicked outside modal');
                setIsOpen(false);
            }
        }

        document.addEventListener('keyup', closeModalOnEscKeypress);
        document.addEventListener('click', closeModalOnClick);

        // clean up event listeners when component unmounts
        return () => {
            document.removeEventListener('keyup', closeModalOnEscKeypress);
            document.removeEventListener('click', closeModalOnClick);
        }
    }, [isOpen]);

    return (
        <FocusTrap active={isOpen}>
            <div className={`fixed inset-0 z-50 bg-black bg-opacity-50 justify-center items-center + ${isOpen ? 'flex' : 'hidden'}`}>
                <div id='modal' className='bg-white rounded-lg shadow'>
                    <div className='flex justify-end p-2'>
                        <button onClick={toggleModal}>
                            <svg className="w-6 h-6" fill="none" stroke="gray" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                    <div className='p-4 pt-0'>
                        {isOpen && children}
                    </div>
                </div>
            </div>
        </FocusTrap>
    )
})

Modal.displayName = 'Modal'

export default Modal