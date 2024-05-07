import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import BackToTopButton from "./BackToTopButton"


const Wrapper = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
      <BackToTopButton/>
    </div>
  )
}

export default Wrapper
