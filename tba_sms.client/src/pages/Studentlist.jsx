import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Studentlisttable from '../components/Studentlisttable';

const Studentlist = () => {
    const {classId} = useParams()

    return (
        <>
            <Sidebar />
            <div className="dashboardbody">
                <div className="row dashboardbox pt-5 pb-5">
                    <div className="col-10 classlist">
                        <Studentlisttable classId={classId} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Studentlist;