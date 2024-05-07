import Classlisttable from '../components/Classlisttable';
import Sidebar from '../components/Sidebar';

const Classlist = () => {
    return (
        <>
            <Sidebar />
            <div className="dashboardbody">
                <div className="row dashboardbox pt-5 pb-5">
                    <div className="col-10 classlist">
                        <Classlisttable />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Classlist;