import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { PersonFill } from 'react-bootstrap-icons';
function Profileform() {
    return (
        <>  
        <Row className="mb-3 mt-3">
                <Form.Group as={Col} className='myprofilehead'>
                    <Form.Label><PersonFill size={40} className='ms-2' /></Form.Label>
                    <Form.Label className='myprofiletxt ms-2'>My Profile</Form.Label>
                </Form.Group>
            </Row>
            <div className='mt-2 mb-5 ps-3 pe-5'>
                <div className='row ms-2 mb-3'>
                    <div className='col-3 divcolor fw-bold'>
                        First Name
                    </div>
                    <div className='col-3 divcolor '>
                        Andrew
                    </div>
                    <div className='col-2 divcolor fw-bold'>
                        Last Name
                    </div>
                    <div className='col-4 divcolor'>
                        Smith
                    </div>
                </div>
                <div className='row ms-2 mb-3'>
                    <div className='col-3 divcolor fw-bold'>
                        Father's Name
                    </div>
                    <div className='col-9 divcolor '>
                        Lincoln Smith
                    </div>
                </div>
                <div className='row ms-2 mb-3'>
                    <div className='col-3 divcolor fw-bold'>
                        Occupation
                    </div>
                    <div className='col-3 divcolor'>
                         Private Business
                    </div>
                    <div className='col-2 divcolor fw-bold'>
                        Gender
                    </div>
                    <div className='col-4 divcolor '>
                        Male
                    </div>
                </div>
                
                <div className='row ms-2 mb-3'>
                    <div className='col-3 divcolor fw-bold'>
                        Contact No
                    </div>
                    <div className='col-3 divcolor'>
                         0300-2654121
                    </div>
                    <div className='col-2 divcolor fw-bold'>
                        Email
                    </div>
                    <div className='col-4 divcolor'>
                        andrew@gmail.com
                    </div>
                </div>
                <div className='row ms-2 mb-3'>
                    <div className='col-3 divcolor fw-bold'>
                        Address
                    </div>
                    <div className='col-9 divcolor'>
                    Umar Goth, Zila Malir, Deh Bijar Bhatti, Tappo, Songal Gadap Town, Karachi, 74800
                    </div>
                </div>
                <div className='row ms-2'>
                    <div className='col-3 divcolor fw-bold'>
                        City
                    </div>
                    <div className='col-3 divcolor '>
                        Karachi
                    </div>
                    <div className='col-2 divcolor fw-bold'>
                        Country
                    </div>
                    <div className='col-4 divcolor'>
                        Pakistan
                    </div>
                </div>
                <div className='row mb-5 mt-5 ms-1'>
                    <Link to="/editprofile">
                        <Button variant="primary btn-color">
                            Edit Profile
                        </Button>
                    </Link>
               </div>
            </div>
        </>
    );
}

export default Profileform;