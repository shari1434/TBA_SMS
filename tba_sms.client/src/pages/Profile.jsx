import { useParams } from "react-router-dom";
import { useGetSponsorByIdQuery } from "../Services/Sponsor";
import Profileform from "../components/Profileform";
import Sidebar from "../components/Sidebar";


const Profile = () => {
    const {id} = useParams();
    const { data, error, isLoading } = useGetSponsorByIdQuery(id)

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
                            <img src={data?.picture} alt='image' className='stdprofileimg pb-2' />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-center mt-5 pt-5">{data?.firstName}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;