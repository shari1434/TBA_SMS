import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
  MDBRipple,
  MDBBadge,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [showShow, setShowShow] = useState(false);

  const toggleShow = () => setShowShow(!showShow);

  return (
    <>
      <MDBCollapse show={showShow} tag="nav" className="d-lg-block sidebar">
        <div className="position-sticky">
          <MDBListGroup flush className=" mx-3">
          <div className='row'>
              <div className='col-4 tba-headimg'>
              <img
                src='/logo.jpg'
                height='70'
                width='80'
                alt=''
                loading='lazy'
              />
              </div>
              <div className='col-8'>
                <h2 className='tba-heading fw-bold ms-2 mt-2'>The Beginners Academy</h2>
              </div>
          </div>
               <span><div className=''></div></span>
            
            <Link to="/dashboard" className='sidebarlink'><MDBListGroupItem tag='a' className='sidebarbtn rounded mb-4 mt-5'>
                <MDBIcon fas icon="tachometer-alt me-3" />
                My Dashboard
              </MDBListGroupItem></Link>

            <Link to="/profile/5" className='sidebarlink'><MDBListGroupItem tag='a' className='sidebarbtn rounded mb-4'>
                <MDBIcon fas icon="lock me-3" />
                My Profile
              </MDBListGroupItem></Link>

              <Link to="/classlist" className='sidebarlink'><MDBListGroupItem tag='a' className='sidebarbtn rounded mb-4'>
                <MDBIcon fas icon="chart-line me-3" />
                List of Classes
              </MDBListGroupItem></Link>

              <Link to="/sponsorcart" className='sidebarlink'><MDBListGroupItem tag='a' className='sidebarbtn rounded mb-4'>
                <MDBIcon fas icon="chart-pie me-3" />
                My Student Cart
              </MDBListGroupItem></Link>

              <Link to="/activitycalendar" className='sidebarlink'><MDBListGroupItem tag='a' href='#'  className='sidebarbtn rounded mb-4'>
                <MDBIcon far icon="chart-bar me-3" />
                TBA Activity Calendar
              </MDBListGroupItem></Link>

             <Link to="/events" className='sidebarlink'> <MDBListGroupItem tag='a' href='#' className='sidebarbtn rounded mb-4'>
                <MDBIcon fas icon="globe me-3" />
                TBA Events / Gallery 
              </MDBListGroupItem></Link>

          </MDBListGroup>
        </div>
      </MDBCollapse>

      <MDBNavbar expand='lg' light className='dashboardnavbar'>
        <MDBContainer fluid>
          <MDBNavbarNav className="d-flex flex-row align-items-center w-auto">
            <MDBNavbarToggler
              type='button'
              aria-label='Toggle navigation'
              onClick={toggleShow}
            >
              <MDBIcon icon='bars' fas />
            </MDBNavbarToggler>
            <MDBNavbarBrand href='#'>
              <img
                src=''
                height='40'
                alt=''
                loading='lazy'
              /><span className='ms-2 fw-bold'></span>
            </MDBNavbarBrand>

            <MDBCollapse navbar>
              {/* <MDBNavbarItem className="">
                My Dashboard
              </MDBNavbarItem> */}
            </MDBCollapse>
          </MDBNavbarNav>


          <MDBNavbarNav className="d-flex flex-row justify-content-end w-auto">
            <MDBNavbarItem className='me-3 me-lg-0 d-flex align-items-center'>
              <MDBDropdown>
                
                {/* <MDBDropdownToggle tag="a" href="#!" className="hidden-arrow nav-link">
                  <MDBIcon fas icon="bell" />
                  <MDBBadge color='danger' notification pill>
                    1
                  </MDBBadge>
                </MDBDropdownToggle> */}

                {/* <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="#">Some news</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="#">Another news</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="#">Something else here</MDBDropdownLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu> */}
              </MDBDropdown>
            </MDBNavbarItem>

            {/* <MDBNavbarItem className='me-3 me-lg-0'>
              <MDBNavbarLink href='#'>
                <MDBIcon fas icon='fill-drip' />
              </MDBNavbarLink>
            </MDBNavbarItem> */}
            {/* <MDBNavbarItem className='me-3 me-lg-0'>
              <MDBNavbarLink href='#'>
                <MDBIcon fab icon='github' />
              </MDBNavbarLink>
            </MDBNavbarItem> */}

            <MDBNavbarItem className='me-3 me-lg-0 d-flex align-items-center'>
              <MDBDropdown>

                <MDBDropdownToggle tag="a" href="#!" className="hidden-arrow nav-link">
                  <img src="image.png" className="rounded-circle" height="30" width="28" alt="" loading="lazy" />
                </MDBDropdownToggle>

                <MDBDropdownMenu>
                  {/* <MDBDropdownItem>
                    <Link href="#">My profile</Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link href="#">Settings</Link>
                  </MDBDropdownItem> */}
                  <MDBDropdownItem>
                    <a href="#">Log Out</a>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

export default Sidebar;
