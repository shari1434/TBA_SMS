import Button from 'react-bootstrap/Button';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';

function ActivityCalendar() {
    return (
        <>
            <Sidebar />
            <div className="dashboardbody">
                <div className="row dashboardbox pt-5 pb-5">
                    <div className="col-11 classlist">
                        <div className='row pb-3'>
                        <Link to='/monthwisecalendar'>
                            <Button className='classbtn ms-2 me-2 col-2'>PG</Button>
                            <Button className='classbtn ms-2 me-2 col-2'>Nur</Button>
                            <Button className='classbtn ms-2 me-2 col-2'>Prep</Button>
                            <Button className='classbtn ms-2 me-2 col-2'>I</Button>
                            <Button className='classbtn ms-2 me-2 col-2'>II</Button>
                            </Link>
                        </div>
                        <div className='row pb-3'>
                        <Link to='/monthwisecalendar'>
                            <Button className='classbtn ms-2 me-2 col-2'>III</Button>
                            <Button className='classbtn ms-2 me-2 col-2'>IV</Button>
                            <Button className='classbtn ms-2 me-2 col-2'>V</Button>
                            <Button className='classbtn ms-2 me-2 col-2'>VI</Button>
                            <Button className='classbtn ms-2 me-2 col-2'>VII</Button>
                            </Link>
                        </div>
                        <div className='row'>
                        <Link to='/monthwisecalendar'>
                            <Button className='classbtn ms-2 me-2 col-2'>VIII</Button>
                            <Button className='classbtn ms-2 me-2 col-2'>IX</Button>
                            <Button className='classbtn ms-2 me-2 col-2'>X</Button>
                            <Button className='classbtn ms-2 me-2 col-2'>XI</Button>
                            <Button className='classbtn ms-2 me-2 col-2'>XII</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ActivityCalendar;