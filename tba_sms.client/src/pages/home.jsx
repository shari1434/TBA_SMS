import { Carousel, Container } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <div className="homeimg mt-3">
              <Carousel>
                  <Carousel.Item>
                        <img src='kid2.jpg' style={{width:'100%', height: '90vh'}} alt='eventpicture' className="img-fluid"/>
                      <Carousel.Caption>
                      <h1 className="banner-heading">Free Education For Everyone!</h1>
                      {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                      </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                      <img src='kid3.jpg' style={{width:'100%', height: '90vh'}} alt='eventpicture' className="img-fluid"/>
                      <Carousel.Caption>
                      <h1 className="banner-heading">Providing Quality Education To The Underprivileged!</h1>
                      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                      </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                      <img src='kid4.jpg' style={{width:'100%', height: '90vh'}} alt='eventpicture' className="img-fluid"/>
                      <Carousel.Caption>
                      <h1 className="banner-heading">Educating The Future Leaders!</h1>
                      {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>               </p> */}
                      </Carousel.Caption>
                  </Carousel.Item>
              </Carousel>
      </div>
      <div>
            <h1 className='main-heading'>Today's Beginners... Tomorrow's Leaders! </h1>
            <div className='content1'>
              <Container>
                <h3 className="yellow-heading">Mission</h3>
                <h1 className='mb-4 blue-heading'>Free Education For Everyone </h1>
                <p className='mb-3 parg text-para'>Our mission is to bring quality education within reach of underprivileged children, 
                enabling them to unlock their full potential and break the cycle of poverty. We are 
                committed to providing a nurturing environment where education is not just accessible, 
                but comprehensive. Our aim is to empower students with knowledge, skills, and values that 
                pave the way for a brighter future.</p>
                <button className='btn btn-primary mb-5 homebtn'>Wanna Know More?</button>
                </Container>
            </div>
            <h1 className='main-heading'>Nurturing the Unfolded Minds! </h1>
            <div className='content1 mt-2'>
              <Container>
                  <h3 className="yellow-heading">Vision</h3>
                  <h1 className='mb-4 blue-heading'>Providing Quality Education To The Underprivileged</h1>
                  <p className='mb-3 parg text-para'>Our vision at TBA is to create a world where every child, 
                  regardless of their socioeconomic background, has the opportunity to receive a holistic 
                  education that prepares them for success in a rapidly changing world. We envision a 
                  society where education is a bridge that closes the gaps of inequality, where students 
                  have the tools to shape their destinies, and where each individual contributes positively 
                  to their community and beyond.​</p>
              </Container>
            </div>
            <h1 className='main-heading'>Your Participation, Our Responsibility..!</h1>
            <div className='content1 mt-2 content2'>
              <Container>
                  <h3 className="yellow-heading">Why You Should Support TBA..?</h3>
                  <h1 className='mb-4 blue-heading'>To Educate More Children </h1>
                  <p className='mb-3 parg text-para'>TBA is an institution that has been providing quality education 
                  to underprivileged for five years without any hidden profits. TBA not only provides free education 
                  in general but also provides books, copies, stationery and uniforms to the students. The number of 
                  pupils in the academy is about 500 plus and they are increasing with each passing day. 
                  TBA provides all the essential items for the students, including weekly, monthly and annual activities, 
                  assuring that the students and their parents are not distressed by the burden of expenses.
                  ​</p>
              </Container>
            </div>
      </div>
    </>
  )
}

export default Home;
