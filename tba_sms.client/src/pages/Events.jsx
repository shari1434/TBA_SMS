import { Link } from "react-router-dom";
import Profileform from "../components/Profileform";
import Sidebar from "../components/Sidebar";


const Events = () => {

    return (
        <>
            <Sidebar />
            <div className="dashboardbody dashboardbox">
                <div className="row pt-4 ms-5 me-5 text-center">
                    <div className="col-12 mb-3">
                        <h2 className="bg-warning pt-2 pb-3">Glimpse of School Events & Happenings </h2>
                    </div>
                </div>
                <div className="row mt-2 ms-3 me-4">
                    <div className="col-3">
                        <Link to="/gallery" className="eventheading">
                            <div className="bg-warning">
                                <img src="school.jpg" />
                                <h3 className="pt-2 ps-3 pb-2">Independence Day</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="col-3">
                        <div className="bg-warning">
                            <img src="school.jpg" alt="" />
                            <h3 className="pt-2 ps-3 pb-2">Independence Day</h3>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="bg-warning">
                            <img src="school.jpg" alt="" />
                            <h3 className="pt-2 ps-3 pb-2">Independence Day</h3>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="bg-warning">
                            <img src="school.jpg" alt="" />
                            <h3 className="pt-2 ps-3 pb-2">Independence Day</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Events;