import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="">
        <Navbar expand="lg" className=" ">
          <Container fluid>
            <div className="container-fluid d-flex align-items-center justify-content-between ">
              <div>
                <Link to="/">
                <img
                  src="https://www.thebeginnersacademy.com/wp-content/uploads/2023/08/Logo.jpg"
                  alt="Logo"
                  style={{
                    width: "150px",
                    marginLeft: "50px",
                  }}
                />
                </Link>
              </div>
              <Navbar.Toggle aria-controls="offcanvasNavbar" />
              <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
              >
                <Offcanvas.Header closeButton></Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-center  flex-grow-1 pe-3">
                    <Nav.Link>
                      <Link to="/" className="px-4 text-decoration-none">
                        <span className="navbar-hover">Home</span>
                      </Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link to="/about" className="px-4 text-decoration-none">
                        <span className="navbar-hover">About US</span>
                      </Link>
                    </Nav.Link>

                    <Nav.Link>
                      <Link
                        to="/program"
                        className="px-4 text-decoration-none text-dark"
                      >
                        <span className="navbar-hover">Program</span>
                      </Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link
                        to="/get-involved"
                        className="px-4 text-decoration-none text-dark"
                      >
                        <span className="navbar-hover">Get Involved</span>
                      </Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link
                        to="/contact-us"
                        className="px-4 text-decoration-none text-dark"
                      >
                        <span className="navbar-hover">Contact Us</span>
                      </Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link
                        to="/donation"
                        className="px-4 text-decoration-none text-dark"
                      >
                        <span className="navbar-hover">Donation</span>
                      </Link>
                      </Nav.Link>
                      <Nav.Link >
                  <Link
                    to="/signin"
                    className="px-4 text-decoration-none text-dark
                    "
                  >
                    <span className="btn  sign-in nav-btn ">
                     SignIn
                    </span>

                  </Link>
                    <Link to="/dashboard">
                      <span className="btn  sign-in nav-btn ">
                      Dashboard
                      </span>
                    </Link>
                  </Nav.Link>
                   
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </div>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
