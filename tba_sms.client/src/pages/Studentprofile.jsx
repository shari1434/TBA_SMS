import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Studentprofileform from '../components/Studentprofileform';

function Studentprofile() {
    return (
        <>
            <Sidebar />
            <div className="dashboardbody dashboardbox d-flex">
                <div className="pt-1 pb-5">
                    <div className="profileform">
                        <Studentprofileform />
                    </div>
                </div>
                <div className="col-4 profilepic me-3">
                    <div className="profilepicback" >
                        <div className="">
                            <img src="kid2.jpg" className='stdprofileimg pb-2' />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-center mt-5 pt-5">Syeda Sara</h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Studentprofile;