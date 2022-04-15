import { useEffect } from 'react';

import Navbar from './navbar'
import Footer from './footer'

const Layout = ({ children }) => {
    const scrollToTop = () => {
        document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollToTopBtn = document.getElementById('btnScrollToTop');

            if (document.documentElement.scrollTop > 50) {
                scrollToTopBtn.classList.remove('hidden');
                scrollToTopBtn.classList.add('flex');
            } else {
                scrollToTopBtn.classList.remove('flex');
                scrollToTopBtn.classList.add('hidden');
            }
        };

        document.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='flex flex-col h-screen'>
            <Navbar />
            <div className='grow mt-20'>
                {children}            
            </div>
            <Footer />
            {/* Scroll to top arrow */}
            <div  id='btnScrollToTop' className='fixed 
                bottom-10 right-3 
                w-12 h-12 
                hidden
                justify-center items-center 
                z-50
                rounded-full 
                bg-gray-900 opacity-70
                group
                duration-300 ease-in-out
                hover-hover:hover:opacity-100
                hover-hover:hover:cursor-pointer'
                onClick={scrollToTop}>
                <svg className='w-8 h-8 transition-transform duration-300 ease-in-out hover-hover:group-hover:-translate-y-2' fill='none' stroke='white' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 15l7-7 7 7' /></svg>
            </div>  
        </div>
    )
}

export default Layout