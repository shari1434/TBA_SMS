
import PageTitle from "../components/PageTitle";

const About = () => {
  return (
    <>
      <div>
        <PageTitle title={"About US"} />
      </div>
      <div className="container">
        <div className="row">
          <section className="py-5 my-5 mx-5 d-flex align-items-center">
            <div className="col-md-6 pe-5">
              <div className="d-flex justify-content-center  animate__animated animate__slideInLeft">
                <img
                  src="https://www.thebeginnersacademy.com/wp-content/uploads/2023/06/Newlogo.jpg"
                  alt="Logo"
                />
              </div>
            </div>
            <div className="col-md-6  animate__animated animate__slideInRight">
              <div className="">
                <h4 className="yellow-heading">Who We Are...?</h4>
              </div>
              <div className="">
                <h2 className="blue-heading">Free Education for Everyone</h2>
              </div>
              <div>
                <p className=" parg">
                  The Beginners Academy is an institution which has been
                  imparting free education to the underprivileged of 10 villages
                  for 5 years. With the help of various generous people, this
                  TBA began its journey from a small tuition center and has
                  transformed into a school. TBA is located at Northern Bypass,
                  Umar Goth, and Near Al Habib Restaurant Karachi, Pakistan.
                  Every effort is being made to continuously facilitate the
                  students in the academy. TBA supporters can visit the academy
                  at any time. Doors are always open for everyone
                </p>
              </div>
            </div>
          </section>
          <section className="py-5">
            <div className="col-md-5 ms-5 animate__animated animate__slideInLeft animate_delay-5s">
              <div>
                <h4 className="yellow-heading">What We Provide..?</h4>
              </div>
              <div>
                <h2 className="blue-heading">Free Quality Education</h2>
              </div>
              <div>
                <p className=" parg">
                  From day one we have been striving to maintain the quality of
                  education, and for this we have recruited 15 teachers from the
                  city, and a highly experienced and educated Head Madam to
                  improve and run the system. Along with academic education,
                  they are also giving mental and etiquette training to the
                  students. Students are also being engaged by the
                  extra-curricular activities including sports and other
                  creative activities which are a part of today,s education as
                  it helps to build a personality with confidence. The system
                  has been strict to improve the quality of education, with
                  teachers informing the student,s parents about the importance
                  of education on a day,s absence. We have been taking every
                  necessary step to make the education system better.
                </p>
              </div>
            </div>
          </section>
          <section className="my-5">
    <div className="row">
        <div className="col-md-7"></div> 

        <div className="col-md-5 animate__animated animate__slideInRight animate_delay-5s">
            <div>
                <h4 className="yellow-heading">How It Was Started..?</h4>
            </div>
            <div>
                <h2 className="blue-heading">With Limited Resources</h2>
            </div>
            <div>
                <p className=" parg">
                    We started this work in a room with only 1 teacher and 33
                    students. Without any resources with the most limited
                    resources, hard work, determination and dedication, the
                    caravan went from being a small tuition center to a school.
                    From mats to chairs, from torn clothes to uniforms, from
                    ignorance to knowledge, from randomness to assembly, from
                    darkness to light, we made the journey with complete honesty
                    and the cooperation of some generous people. It is not
                    difficult to run a business if resources are available, but
                    it is certainly the most difficult to run an organization
                    that is neither business nor profitable and TBA that has
                    been established for serving people is an example of such
                    business.
                </p>
            </div>
        </div>
    </div>
</section>

        </div>
      </div>
    </>
  );
};

export default About;
