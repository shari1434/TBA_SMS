import PageTitle from "../components/PageTitle"


const Program = () => {
  return (
   <>
   <div>
   <PageTitle title={"Program"}/>
   </div>
    <div className="container">
        <div className="row">
        
            <div className="col-md-6 py-5">
              <div className="d-flex justify-content-center  animate__animated animate__slideInLeft">
                <img
                  src="https://www.thebeginnersacademy.com/wp-content/uploads/2023/08/IMG_20230327_102834.jpg"
                  className="img-fluid"
                style={{height:"80vh",
                width:"75vh"
              }}
                />
              </div>
            </div>
            <div className="col-md-6 py-5  animate__animated animate__slideInRight">
              <div className="">
                <h3 className="yellow-heading ">Empowering Programs for a Brighter Tomorrow</h3>
              </div>
              <div className="">
                <h1 className="blue-heading">Empowering Education</h1>
              </div>
              <div>
                <p className=" parg">
                At our institution, we believe in the power of education to transform lives. We offer a comprehensive range of educational programs designed to cater to various age groups. From building foundational skills to imparting advanced knowledge, our curriculum is meticulously crafted to pave the way for brighter futures. Each program is a stepping stone toward personal growth, academic excellence, and a world of opportunities.
                </p>
            
              </div>
          
              <div className="">
                <h3 className="yellow-heading">Fostering Change Through Education</h3>
              </div>
              <div className="">
                <h1 className="blue-heading">Community Impact</h1>
              </div>
              <div>
                <p className=" parg">
                Our dedication to creating positive change reaches beyond the walls of conventional classrooms. We extend our reach to ten villages, where we plant the seeds of transformation within communities. Through the power of education, we nurture young minds, cultivate critical thinking, and spark a sense of unity among our students. We firmly believe that a community empowered with knowledge becomes resilient, breaking free from the chains of poverty and limitation. Our unwavering commitment stands as a testament to the limitless potential that education brings to individuals and the broader societies they shape. With every lesson we teach, we are building bridges to a brighter, more equitable future for all.
                </p>
              </div>
            </div>
       
            <div className="row py-5">
            <div className="col-md-6   animate__animated animate__slideInLeft"
            style={{paddingLeft:"50px"}}
            >
              <div className="">
                <h3 className="yellow-heading">Fostering Personal Growth Through Specialized Programs</h3>
              </div>
              <div className="">
                <h1 className="blue-heading pt-2">Through Specialized Programs</h1>
              </div>
              <div>
                <p className="pt-5 parg">
                 In addition to traditional education, our institution offers a diverse range of specialized programs tailored to meet the unique needs of different age groups. From foundational skill-building to specialized vocational training, these programs are designed to empower individuals with the skills and knowledge needed to thrive in various domains. Each program serves as a pathway towards personal growth, opening doors to new horizons and opportunities.
                </p>
              </div>
            </div>
              <div className=" col-md-6 pe-5">
              <div className="d-flex justify-content-center  animate__animated animate__slideInRight">
                <img
                  src="https://www.thebeginnersacademy.com/wp-content/uploads/2023/06/Newlogo.jpg"
                  alt="Logo"
                />
              </div>
            </div>
            </div>
     
  

        </div>
      </div>
   
   </>
  )
}

export default Program
