import Head from 'next/head'
import Layout from '../components/layout'

import '../styles/globals.css'
// import 'tailwindcss/tailwind.css'

global.firstLoad = true;

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
		<Head>
			<link rel='favicon' href='/favicon.ico' />
		</Head>
    	<Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
