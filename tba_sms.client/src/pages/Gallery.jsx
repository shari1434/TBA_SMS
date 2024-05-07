import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";


const Gallery = () => {

    return (
        <>
            <Sidebar />
            <div className="dashboardbody dashboardbox">
                <div className="row pt-4 ms-5 me-5 text-center">
                    <div className="col-12 mb-3">
                        <h2 className="bg-warning pt-2 pb-3">Independence Day </h2>
                    </div>
                </div>
                <div className="row mt-2 ms-3 me-4">
                    <div className="col-3">
                        <div>
                            <img src="school.jpg" />
                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            <img src="school.jpg" />
                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            <img src="school.jpg" />
                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            <img src="school.jpg" />
                        </div>
                    </div>
                </div>

                <div className="row mt-2 ms-3 me-4">
                    <div className="col-3">
                        <div>
                            <img src="school.jpg" />
                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            <img src="school.jpg" />
                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            <img src="school.jpg" />
                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            <img src="school.jpg" />
                        </div>
                    </div>
                </div>

                <div className="row mt-2 ms-3 me-4 pb-5">
                    <div className="col-3">
                        <div>
                            <img src="school.jpg" />
                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            <img src="school.jpg" />
                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            <img src="school.jpg" />
                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            <img src="school.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gallery;