import '../styles/globals.css'
import '../styles/camera.css'
import '../styles/dragAndDropFile.css'
import "react-toastify/dist/ReactToastify.css";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import "nprogress/nprogress.css";
import { ToastContainer, toast } from 'react-toastify';
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Navbar from "../components/navbar";
import Footer from "../components/footer";


import UserProvider from '../providers/userProvider';
import useCheckMobile from '../hooks/useCheckMobile'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const isMobile = useCheckMobile()
  return (
    // <UserProvider>
    <div className="main">
      <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
      <Navbar />
      <div className="content">
        <Component {...pageProps} key={router.asPath} />
      </div>
      <Footer />
      {/* {isMobile &&
        <FooterNavigator />
      } */}
    </div>
  // </UserProvider>
  )
}
