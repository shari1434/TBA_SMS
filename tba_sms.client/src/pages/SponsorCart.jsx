import { Table } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';
import { BarChartLine, Cart } from 'react-bootstrap-icons';

const SponsorCart = () => {
    return (
        <>
            <Sidebar />
            <div className="dashboardbody">
                <div className="row dashboardbox pt-5 pb-5">
                    <div className="col-10 classlist">
                        <div className="mb-3 mt-3">
                            <div className='myprofilehead d-flex'>
                                <div><Cart size={40} className='' /></div>
                                <span><div className='myprofiletxt ms-3'>My Student Cart</div></span>
                            </div>
                        </div>
                        <div className='me-5'>
                            <Table striped bordered hover className='text-center tablefont'>
                                <thead>
                                    <tr style={{ height: '30px' }}>
                                        <th className='col-1'>S.No</th>
                                        <th className='col-2'>GR No.</th>
                                        <th className='col-2'>Student Name</th>
                                        <th className='col-2'>Father's Name</th>
                                        <th className='col-1'>Class</th>
                                        <th className='col-3'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ height: '40px' }}>
                                        <td>1</td>
                                        <td>0001</td>
                                        <td>Syed Ehtisham Khan</td>
                                        <td>Syed Faheem Khan</td>
                                        <td>PG</td>
                                        <td><button className='btn btnclasslist lh-sm me-2'>Remove</button>
                                            <button className='btn btnclasslist lh-sm'>Sponsor</button></td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Link to='/studentlist'><button className='btn btn-primary btnstudent btn-color'>Back</button></Link>
                            <Link to='/classlist'><button className='btn btn-primary btnstudent me-3 btn-color '>Go to Class Lists</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SponsorCart;