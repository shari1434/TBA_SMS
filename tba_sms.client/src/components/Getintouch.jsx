import Form from 'react-bootstrap/Form';

function Getintouch () {
    return(
        <>
            <div> 
                <Form>
                    <Form.Control className='mb-3 bg-light' type="text" size="lg" placeholder="Your Name"/>
                    <Form.Control className='mb-3 bg-light' type="text" size="lg" placeholder="Phone Number"/>
                    <Form.Control className='mb-3 bg-light' type="email" size="lg" placeholder="Email"/>
                    <Form.Control className='mb-3 bg-light' size="lg" as="textarea" rows={5} placeholder="Message"/>
                    <button className='btn btn-primary mb-3'>SEND NOW</button>    
                </Form>
            </div>
        </>        
    )
}

export default Getintouch;