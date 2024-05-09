import { FormControl } from 'react-bootstrap';
import { PersonBoundingBox } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useForm } from 'react-hook-form';
import {  useParams } from 'react-router-dom';
import { useGetSponsorByIdQuery, useUpdateSponsorMutation } from '../Services/Sponsor';

function EditProfileform() {
    const {id} = useParams();
    const { data:sponsor } = useGetSponsorByIdQuery(id)
    const [updateSponsor, { error, isLoading }] = useUpdateSponsorMutation();


        const {
          register,
          handleSubmit,
          watch,
          formState: { errors },
        } = useForm()
      
        // const onSubmit = (data) => console.log(data)

        const onSubmit = async (formData) => {
            try {
                await updateSponsor({ sponsorId: id, data: formData });
                // Handle success (maybe redirect or show a success message)
            } catch (error) {
                // Handle error
            }
        };

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row className="mb-3 mt-3">
                    <Form.Group as={Col} className='myprofilehead'>
                        <Form.Label><PersonBoundingBox size={40} className='' /></Form.Label>
                        <Form.Label className='myprofiletxt ms-3'>My Profile</Form.Label>
                    </Form.Group>
                </Row>

                <Row className="mb-3 mt-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>First Name</Form.Label>
                        <FormControl type="text" placeholder="Enter first name" defaultValue={sponsor?.firstName} {...register("firstName")} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Last Name</Form.Label>
                        <FormControl type="text" placeholder="Enter last name" defaultValue={sponsor?.lastName} {...register("lastName")} />
                    </Form.Group>
                </Row>

                <Row className="mb-3 mt-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Father's Name</Form.Label>
                        <FormControl type="text" placeholder="Enter father's name" defaultValue={sponsor?.fatherName} {...register("fatherName")} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Contact #</Form.Label>
                        <FormControl type="text" placeholder="Enter contact number" defaultValue={sponsor?.phoneNo} {...register("phoneNo")} />
                    </Form.Group>
                </Row>

                <Row className="mb-3 mt-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Address</Form.Label>
                        <FormControl type="text" placeholder="Enter address" defaultValue={sponsor?.address} {...register("address")} />
                    </Form.Group>
                </Row>

                
                <Row className="mb-3 mt-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>City</Form.Label>
                        <FormControl type="text" placeholder="Enter your city" defaultValue={sponsor?.city} {...register("city")} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Country</Form.Label>
                        <FormControl type="text" placeholder="Enter contact number" defaultValue={sponsor?.country} {...register("country")} />
                    </Form.Group>
                </Row>

                <Row className="mb-3 mt-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Occupation</Form.Label>
                        <FormControl type="text" placeholder="Enter occupation" defaultValue={sponsor?.occupation} {...register("occupation")} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Gender</Form.Label>
                        <FormControl type="text" placeholder="Specify male or female" defaultValue={sponsor?.gender} {...register("gender")} />
                    </Form.Group>

                    {/* <Form.Group as={Col} controlId="formGridRadio">
                        <Form.Label>Select Gender</Form.Label>
                        <Form.Check
                            type="radio"
                            name="occupation"
                            id="radioFather"
                            label="Male"
                            className="ms-4"
                            checked={String(sponsor?.gender).toLowerCase() == "male"}
                            {...register("gender")}
                        />
                        <Form.Check
                            type="radio"
                            name="occupation"
                            id="radioMother"
                            label="Female"
                            className="ms-4"
                            checked={String(sponsor?.gender).toLowerCase() == "female"}
                            {...register("gender")}
                        />
                    </Form.Group> */}
                </Row>

                <Row className="mb-3 mt-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Email Address</Form.Label>
                        <FormControl type="text" placeholder="Enter email address" defaultValue={sponsor?.email} {...register("email")} />
                    </Form.Group>
                </Row>

                <Button variant="primary" type='submit' className='mb-5 btn-color'>
                    Save Profile
                </Button>
            </Form>
        </>
    );
}

export default EditProfileform;