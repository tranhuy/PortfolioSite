import Navbar from './navbar'
import Footer from './footer'

const Layout = ({ children }) => {
     return (
         <div className='flex flex-col h-screen'>
             <Navbar />
             <div className='grow'>{children}</div>
             <Footer />
         </div>
     )
}

export default Layout