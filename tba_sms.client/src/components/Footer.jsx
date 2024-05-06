import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container-fluid" style={{ backgroundColor: "#0D0877" }}>
          <div className="row py-3 px-5 ">
            {/* for logo */}

            <div className="col-3 col-sm-1  ">
              <h4
                className="d-flex text-center justify-content-center ms-5 "
                style={{ color: "#FFC600" }}
              >
                THE BEGINNERS ACADEMY
              </h4>
            </div>

            {/* for information */}

            <div className="col-12 col-sm-7 mx-5 px-3 justify-content-center d-flex">
              <ul className="list-unstyled">
                <li className="">
                  <i
                    className="fa fa-address-card  "
                    style={{
                      color: " #FFC600",
                    }}
                    >
                    </i>
                    <span
                      className="ms-2"
                      style={{
                        color: " #FFC600",
                        fontSize: "14px",
                        fontweight: "400",
                        lineheight: "30px",
                      }}
                    >
                     
                      Umar Goth, Zila Malir, Deh Bijar Bhatti, Tappo Songal
                      Gadap, Sindh, Pakistan-75320
                    </span>
                </li>

                <li className="">
                  <i
                    className="fa fa-phone  "
                    style={{
                      color: " #FFC600",
                    }}
                  >
                    </i>
                    <span
                      className="ms-2"
                      style={{
                        color: " #FFC600",
                        fontSize: "14px",
                        fontweight: "400",
                        lineheight: "30px",
                      }}
                    >
                      {" "}
                      +92311-2124666{" "}
                    </span>
                </li>
                <li className="">
                  <i
                    className="fa fa-mail-bulk  "
                    style={{
                      color: " #FFC600",
                    }}
                  >
                    </i>
                    <span
                      className="ms-2"
                      style={{
                        color: " #FFC600",
                        fontSize: "14px",
                        fontweight: "400",
                        lineheight: "30px",
                      }}
                    >
                 
                      info@thebeginnersacademy.com
                    </span>
                </li>
              </ul>
            </div>

            {/* for icons and link */}

            <div className=" col-sm-3 col d-flex justify-content-center align-items-center">
              <ul>
                <li className="list-unstyled">
                  <Link to="https://www.facebook.com/thebeginnersacademy/" >
                    <i
                      className="fab fa-facebook fs-2"
                      style={{ color: "#ffff " }}
                    ></i>
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="list-unstyled">
                  <Link to="https://www.thebeginnersacademy.com/">
                    <i
                      className="fab fa-instagram fs-2"
                      style={{ color: "#ffff " }}
                    ></i>
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="list-unstyled">
                  <Link to="https://www.thebeginnersacademy.com/">
                    <i
                      className="fab fa-youtube fs-2"
                      style={{ color: "#ffff " }}
                    ></i>
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="list-unstyled">
                  <Link to="https://pk.linkedin.com/company/the-beginners-academy">
                    <i
                      className="fab fa-linkedin fs-2"
                      style={{ color: "#ffff " }}
                    ></i>
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="list-unstyled fs-2">
                  <Link to="https://www.thebeginnersacademy.com/">
                    <i
                      className="fab fa-twitter"
                      style={{ color: "#ffff " }}
                    ></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="container-fluid">
        <div className="row ">
          <div className="  d-flex justify-content-center align-items-center " style={{backgroundColor:"#FFC600"}}>
            <div className="col-9 ms-4">
              <Link to="/" className="text-decoration-none footerbar ">
              <span className="mx-2 fw-bold">  Home </span>
              
              </Link>
              <Link to="/about" className="text-decoration-none footerbar ">
                <span className="mx-2 fw-bold">
                About Us
                </span>
              </Link>
              <Link to="/program" className="text-decoration-none footerbar ">
                <span className="mx-2 fw-bold">
                Program
                </span>
              </Link>
              <Link to="/get-involved" className="text-decoration-none footerbar">
               <span className="mx-2 fw-bold">
                Get Involved
                </span>
              </Link>
              <Link to="/contact-us" className="text-decoration-none footerbar">
               <span className="mx-2 fw-bold" >
                ContactUs
                </span>
              </Link>
              <Link to="/donation" className="text-decoration-none footerbar ">
             <span className="mx-2 fw-bold">
              Donation
              </span>
              </Link>

            </div>
            <div className="col-3 d-flex justify-content-center mt-2 pt-1 align-items-center ">
              <p className="footerbar">
              Copyright – 2024 The Beginners Academy. All Rights Reserved.
              </p>
            </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
