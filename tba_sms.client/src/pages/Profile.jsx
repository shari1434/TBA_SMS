import Profileform from "../components/Profileform";
import Sidebar from "../components/Sidebar";


const Profile = () => {

    return (
        <>
            <Sidebar />
            <div className="dashboardbody dashboardbox d-flex">
                <div className="pt-1 pb-5">
                    <div className="profileform">
                        <Profileform />
                    </div>
                </div>
                <div className="col-4 profilepic me-3">
                    <div className="profilepicback" >
                        <div className="">
                            <img src="profile.jpg" className='stdprofileimg pb-2' />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-center mt-5 pt-5">Andrew Smith</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;