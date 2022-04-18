import Head from 'next/head'
import Image from 'next/image'

const About = () => {
     return (
         <>
            <Head>
				<title>About Me</title>
			</Head>
            <main className='content'>
                <h3 className='font-bold mb-8'>About Me</h3>
                <div className='flex flex-col items-center gap-6'>
                    <div className='relative w-48 h-48 border-4 border-[#19427d] border-opacity-75 rounded-full shadow-lg'>
                        <div className='relative w-full h-full border-4 border-white rounded-full'>
                            <Image src='/images/me.png' alt='Profile Pic' layout='fill' className='rounded-full' priority /> 
                        </div>
                    </div>
                    <div className='max-w-3xl text-center'>
                        <p>
                        Hello, my name is Huy and I&#39;m a full stack developer with experience developing software for web, desktop, and mobile.  My journey into software development began with my first job in the telecommunications sector where I gained an interest in mobile and web technologies. This led me to go back to college to pursue a career in computer science.  After completing my studies I had the opportunity to apply my knowledge of various programming languages and frameworks to develop and maintain e-portal sites and invoice generating software for billing providers, voice recognition software for Radiologists,  medical record management software for health practitioners, and both the web-based and desktop radiological information system (RIS) imaging software.
                        </p>
                        <br /> 
                        <p>
                        Throughout my years in the industry, the continual learning, challenges to creativity, and problem solving demands are some of the main factors that motivate me to refine my skill sets and expand on them.  I look forward to join a team of other skilled and passionate developers to share my knowledge and experiences towards building and improving applications.
                        </p> 
                    </div>
                              
                    <div className='flex flex-wrap justify-center gap-2'>               
                        <a href='/Huy_Developer_Resume.pdf' download>
                            <button type='button' className='defaultButton'>
                                <svg className='w-5 h-5 mr-2 -ml-1' fill='currentColor' viewBox='0 0 122.88 120.89' xmlns='http://www.w3.org/2000/svg'><path d='M84.58,47a7.71,7.71,0,1,1,10.8,11L66.09,86.88a7.72,7.72,0,0,1-10.82,0L26.4,58.37a7.71,7.71,0,1,1,10.81-11L53.1,63.12l.16-55.47a7.72,7.72,0,0,1,15.43.13l-.15,55L84.58,47ZM0,113.48.1,83.3a7.72,7.72,0,1,1,15.43.14l-.07,22q46,.09,91.91,0l.07-22.12a7.72,7.72,0,1,1,15.44.14l-.1,30h-.09a7.71,7.71,0,0,1-7.64,7.36q-53.73.1-107.38,0A7.7,7.7,0,0,1,0,113.48Z'></path></svg>
                                Dowload CV
                            </button>
                        </a>
                        <a href='https://www.linkedin.com/in/huy-tran-0520092b' target='_blank' rel='noreferrer'>
                            <button type='button' className='defaultButton'>
                                <svg className='w-5 h-5 mr-2 -ml-1' fill='currentColor' viewBox='0 0 333333 333333' xmlns='http://www.w3.org/2000/svg'><path d='M119066 107135h65865v33765l952 2c9173-16456 31602-33765 65046-33765 69550-2 82413 43280 82413 99584v114694l-68689 2V219745c0-24237-504-55437-35716-55437-35765 0-41245 26383-41245 53672v103438h-68626V107137zM71447 47613c0 19716-16000 35715-35716 35715S9 67328 9 47613c0-19716 16006-35716 35722-35716s35716 16000 35716 35716zM9 107135h71438v214281H9V107135z'></path></svg>
                                View LinkedIn
                            </button>
                        </a>
                    </div>
                </div>
            </main>
         </>
     )
}

export default About