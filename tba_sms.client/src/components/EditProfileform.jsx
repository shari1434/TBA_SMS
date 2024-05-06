import { FormControl } from 'react-bootstrap';
import { PersonBoundingBox } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

function EditProfileform() {
    return (
        <>
            <Form>
                <Row className="mb-3 mt-3">
                    <Form.Group as={Col} className='myprofilehead'>
                        <Form.Label><PersonBoundingBox size={40} className='' /></Form.Label>
                        <Form.Label className='myprofiletxt ms-3'>My Profile</Form.Label>
                    </Form.Group>
                </Row>

                <Row className="mb-3 mt-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>First Name</Form.Label>
                        <FormControl type="text" placeholder="Enter first name" className='' />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Last Name</Form.Label>
                        <FormControl type="text" placeholder="Enter last name" className='' />
                    </Form.Group>
                </Row>

                <Row className="mb-3 mt-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Father's Name</Form.Label>
                        <FormControl type="text" placeholder="Enter father's name" className='' />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Contact #</Form.Label>
                        <FormControl type="text" placeholder="Enter contact number" className='' />
                    </Form.Group>
                </Row>

                <Row className="mb-3 mt-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Address</Form.Label>
                        <FormControl type="text" placeholder="Enter address" className='' />
                    </Form.Group>
                </Row>

                <Row className="mb-3 mt-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Occupation</Form.Label>
                        <FormControl type="text" placeholder="Enter occupation" className='' />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridRadio">
                        <Form.Label>Select Gender</Form.Label>
                        <Form.Check
                            type="radio"
                            name="occupation"
                            id="radioFather"
                            label="Male"
                            className="ms-4"
                        />
                        <Form.Check
                            type="radio"
                            name="occupation"
                            id="radioMother"
                            label="Female"
                            className="ms-4"
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-3 mt-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Email Address</Form.Label>
                        <FormControl type="text" placeholder="Enter email address" className='' />
                    </Form.Group>
                </Row>

                <Link to="/profile"><Button variant="primary" className='mb-5 btn-color'>
                    Save Profile
                </Button></Link>
            </Form>
        </>
    );
}

export default EditProfileform;