import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';

import { useEffect } from 'react';

import background from '../public/images/background.jpg'

import styles from '../styles/Home.module.css'

export default function Home() {
	useEffect(() => {
		const dividerEle = document.querySelector('#divider');
		if (global.firstLoad) {
			dividerEle.classList.add('animate-grow');
			global.firstLoad = false;
		}
		
		dividerEle.addEventListener('animationend', e => {
			e.target.classList.remove('animate-grow');
		})
	}, []);

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<main className='content'>
				<div className='absolute inset-0 bg-black opacity-10 z-10'></div>
				<Image src={background} alt='backgroungImg' objectFit='cover' layout='fill' className='object-left lg:object-center' priority />
				<div className="w-full h-full flex flex-col justify-center items-center z-20">
					<div className='flex flex-col place-items-center'>
						<div className='text-white text-center leading-relaxed font-bold text-[10vw] sm:text-[3.2rem]'>Huy Tran</div>
						<div id='divider' className='w-full h-px bg-white'></div>
						<div className='text-white text-center leading-relaxed font-thin up uppercase text-[6.8vw] sm:text-[2.25rem]'>Full Stack Developer</div>
						<button className='inline-flex
								mt-7
								px-5 py-2.5
								bg-transparent
								border
								border-white 
								text-white 
								font-medium 
								text-xs
								text-center
								items-center 
								leading-tight 
								tracking-wide
								uppercase rounded shadow-lg 
								hover:bg-[#19427d] hover:shadow-lg hover:border-transparent
								focus:outline-none focus:ring-0 
								active:bg-[#19427d]
								active:shadow-lg transition 
								duration-150 ease-in-out'
								onClick={() => document.querySelector('nav a[href="/projects"').click()}>See Projects</button>
					</div>
				</div>							
			</main>		
		</>
  )
}
