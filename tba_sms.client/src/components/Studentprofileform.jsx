import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { PersonFill } from 'react-bootstrap-icons';
import { Table } from 'react-bootstrap';
function Studentprofileform() {
    return (
        <>
            <Row className="mb-3 mt-3">
                <Form.Group as={Col} className='myprofilehead'>
                    <Form.Label><PersonFill size={40} className='ms-2' /></Form.Label>
                    <Form.Label className='myprofiletxt ms-2'>Student's Profile</Form.Label>
                </Form.Group>
            </Row>
            <div className='mt-2 mb-5 ps-3 pe-5'>
                <h4 className='ms-2 textcolor'>Personal Information</h4>
                <div className='row ms-2'>
                    <div className='col-3 divcolor fw-bold'>
                        G.R. No
                    </div>
                    <div className='col-3 divcolor '>
                        0001
                    </div>
                    <div className='col-3 divcolor fw-bold'>
                        Class/Sec
                    </div>
                    <div className='col-3 divcolor'>
                        PG/Red
                    </div>
                </div>
                <div className='row ms-2'>
                    <div className='col-2 divcolor fw-bold'>
                        First Name
                    </div>
                    <div className='col-4 divcolor '>
                        Syeda 
                    </div>
                    <div className='col-2 divcolor fw-bold'>
                        Last Name
                    </div>
                    <div className='col-4 divcolor'>
                        Sara
                    </div>
                </div>
                <div className='row ms-2'>
                    <div className='col-3 divcolor fw-bold'>
                        D.O.B
                    </div>
                    <div className='col-3 divcolor'>
                         26/03/2021
                    </div>
                    <div className='col-3 divcolor fw-bold'>
                        Age
                    </div>
                    <div className='col-3 divcolor '>
                        3.2 Years
                    </div>
                </div>
                <div className='row ms-2'>
                    <div className='col-3 divcolor fw-bold'>
                        Date of Admission
                    </div>
                    <div className='col-3 divcolor '>
                         22/01/2024
                    </div>
                    <div className='col-3 divcolor fw-bold'>
                        Date of Leaving
                    </div>
                    <div className='col-3 divcolor'>
                        -
                    </div>
                </div>
                <div className='row ms-2'>
                    <div className='col-3 divcolor fw-bold'>
                        Last Class
                    </div>
                    <div className='col-3 divcolor'>
                         Nil
                    </div>
                    <div className='col-3 divcolor fw-bold'>
                        Gender
                    </div>
                    <div className='col-3 divcolor'>
                        Female
                    </div>
                </div>
                <div className='row ms-2'>
                    <div className='col-3 divcolor fw-bold'>
                        Contact No
                    </div>
                    <div className='col-3 divcolor'>
                         0300-2654121
                    </div>
                    <div className='col-3 divcolor fw-bold'>
                        Status
                    </div>
                    <div className='col-3 divcolor'>
                        Active
                    </div>
                </div>
                <div className='row ms-2'>
                    <div className='col-3 divcolor fw-bold'>
                        Address
                    </div>
                    <div className='col-9 divcolor'>
                    Umar Goth, Zila Malir, Deh Bijar Bhatti, Tappo, Songal Gadap Town, Karachi, 74800
                    </div>
                </div>
                <div className='row ms-2 d-none'>
                    <div className='col-3 divcolor'>
                        Medical Needs
                    </div>
                    <div className='col-9 divcolor fw-bold'>
                        Nil
                    </div>
                </div>
            </div>

            {/* ............Family Info........ */}

            <div className='mt-2 mb-5 ps-3 pe-5'>
                <h4 className='ms-2 textcolor'>Family Details</h4>
                <div className='row ms-2 text-center'>
                    <div className='col-1 divcolor fw-bold'>
                        S#
                    </div>
                    <div className='col-4 divcolor fw-bold'>
                        Name of Member
                    </div>
                    <div className='col-2 divcolor fw-bold'>
                        Relation
                    </div>
                    <div className='col-3 divcolor fw-bold'>
                        Occupation
                    </div>
                    <div className='col-2 divcolor fw-bold'>
                        Income
                    </div>
                </div>

                <div className='row ms-2 text-center'>
                    <div className='col-1 divcolor '>
                        1
                    </div>
                    <div className='col-4 divcolor '>
                        Syed Irfanullah Khan
                    </div>
                    <div className='col-2 divcolor '>
                        Father
                    </div>
                    <div className='col-3 divcolor '>
                        Laborer
                    </div>
                    <div className='col-2 divcolor '>
                        18000
                    </div>
                </div>
            </div>
                {/* ............Progress........ */}
            
            <div className='mt-2 mb-5 ps-3 pe-5 pb-2'>
                <h4 className='ms-2 textcolor'>Academic Progress</h4>
                <div className='row ms-2 text-center'>
                    <div className='col-1 divcolor fw-bold'>
                        S#
                    </div>
                    <div className='col-3 divcolor fw-bold'>
                        Name of Term
                    </div>
                    <div className='col-3 divcolor fw-bold'>
                        Total Marks 
                    </div>
                    <div className='col-3 divcolor fw-bold'>
                        Marks Obtained
                    </div>
                    <div className='col-2 divcolor fw-bold'>
                        Grade
                    </div>
                </div>
                <div className='row ms-2 text-center'>
                    <div className='col-1 divcolor '>
                        1
                    </div>
                    <div className='col-3 divcolor '>
                        First Term
                    </div>
                    <div className='col-3 divcolor '>
                        260
                    </div>
                    <div className='col-3 divcolor '>
                        300
                    </div>
                    <div className='col-2 divcolor '>
                        A+
                    </div>
                </div>
                <div className='row float-end mt-2'>
                    <div className='d-flex'>
                        <Link to='/studentlist'><button className='btn btn-primary btnstudent btn-color me-2'>Back</button></Link>
                        <Link to='/sponsorcart'><button className=' btn btn-primary btnstudent btn-color'>Add to Sponsor</button></Link>
                    </div>
                </div>
            </div>
            
            
        </>
    );
}

export default Studentprofileform;