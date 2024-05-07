import { Container } from "react-bootstrap"
import Getintouch from "../components/Getintouch"
import Addressform from "../components/Addressform"
import PageTitle from "../components/PageTitle"

function ContactUs (){
  return(
    <>
      <PageTitle title={'Contact Us'}/>
      
      <Container className="form">
          <div className="row">
              <div className="col-lg-6">
                <h1 className="mb-5 fw-bolder">Get In Touch</h1>
                <div className="contact-form">
                  <Getintouch />
                </div>
              </div>

              <div className="col-lg-6">
                <h1 className="mb-5 fw-bolder tts-heading">Talk To Us</h1>
                <div className="address-form">
                  <Addressform />
                </div>
              </div>
          </div>
              
      </Container>
    </>
  )
}

export default ContactUs
