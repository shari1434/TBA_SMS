import Button from 'react-bootstrap/Button';
import EditProfileform from '../components/EditProfileform';
import Sidebar from '../components/Sidebar';

function EditProfile() {
    return (
        <>
            <Sidebar />
            <div className="dashboardbody">
                <div className="row dashboardbox pt-1 pb-5">
                    <div className="col-7 profileform">
                        <EditProfileform />
                    </div>
                    <div className="col-4 profilepic">
                        <div className="profilepicback" >
                            <div className="profileimg">
                            <img src="profile.jpg" className='profileimg' />
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <Button variant="primary" className='profilebtn btn-color'>
                                Upload Photo
                            </Button>
                        </div>
                        <div>
                            <h3 className="text-center mt-1">Andrew Smith</h3>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default EditProfile;