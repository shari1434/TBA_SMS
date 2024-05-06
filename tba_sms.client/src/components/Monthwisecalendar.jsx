import Button from 'react-bootstrap/Button';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

function Monthwisecalendar() {
    return (
        <>
            <Sidebar />
            <div className="dashboardbody">
                <div className="row dashboardbox pt-5 pb-5">
                    <div className="col-11 activitybox">
                        <div className='row pb-3'>
                            <Button className='actvityboxes me-4' style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(255,255,255,0.7)), url(school.jpg)'}}><Link to='/datewisecalendar' className='textdecor'>August</Link></Button>
                            <Button className='actvityboxes me-4' style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(255,255,255,0.7)), url(school.jpg)'}}><Link to='/datewisecalendar' className='textdecor'>September</Link></Button>
                            <Button className='actvityboxes me-4' style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(255,255,255,0.7)), url(school.jpg)'}}><Link to='/datewisecalendar' className='textdecor'>October</Link></Button>
                            <Button className='actvityboxes me-2' style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(255,255,255,0.7)), url(school.jpg)'}}><Link to='/datewisecalendar' className='textdecor'>November</Link></Button>
                        </div>
                        <div className='row pb-3'>
                            <Button className='actvityboxes me-4' style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(255,255,255,0.7)), url(school.jpg)'}}><Link to='/datewisecalendar' className='textdecor'>December</Link></Button>
                            <Button className='actvityboxes me-4' style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(255,255,255,0.7)), url(school.jpg)'}}><Link to='/datewisecalendar' className='textdecor'>January</Link></Button>
                            <Button className='actvityboxes me-4'style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(255,255,255,0.7)), url(school.jpg)'}}><Link to='/datewisecalendar' className='textdecor'>February</Link></Button>
                            <Button className='actvityboxes me-2' style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(255,255,255,0.7)), url(school.jpg)'}}><Link to='/datewisecalendar' className='textdecor'>March</Link></Button>
                        </div>
                        <div className='row'>
                            <Button className='actvityboxes me-4' style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(255,255,255,0.7)), url(school.jpg)'}}><Link to='/datewisecalendar' className='textdecor'>April</Link></Button>
                            <Button className='actvityboxes me-4' style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(255,255,255,0.7)), url(school.jpg)'}}><Link to='/datewisecalendar' className='textdecor'>May</Link></Button>
                            <Button className='actvityboxes me-4' style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(255,255,255,0.7)), url(school.jpg)'}}><Link to='/datewisecalendar' className='textdecor'>June</Link></Button>
                            <Button className='actvityboxes me-2' style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(255,255,255,0.7)), url(school.jpg)'}}><Link to='/datewisecalendar' className='textdecor'>July</Link></Button>
                        </div>
                        <div className='row mt-3'>
                            <Link to='/activitycalendar'>
                                <Button className='classbtn col-2'>Back to Classes</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Monthwisecalendar;