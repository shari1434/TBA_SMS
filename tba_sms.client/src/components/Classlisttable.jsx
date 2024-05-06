import { BarChartLine } from 'react-bootstrap-icons';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

const Classlisttable = () => {
  return (
    <>
    <div className="mb-3 mt-3">
        <div className='myprofilehead d-flex'>
            <div><BarChartLine size={40} className=''/></div>
            <span><div className='myprofiletxt ms-3'>List of Classes</div></span>
        </div>
    </div>
    <div className='me-5'>
        <Table striped bordered hover className='text-center tablefont'>
          <thead>
            <tr style={{height: '30px'}}>
              <th className='col-1'>S.No</th>
              <th className='col-2'>Class</th>
              <th className='col-2'>No. of Students</th>
              <th className='col-3'>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{height: '40px'}}>
              <td>1</td>
              <td>PG</td>
              <td>20</td>
              <td><Link to='/studentlist'><button className='btn btnclasslist lh-sm'>View Details</button></Link></td>
            </tr>
          </tbody>
        </Table>
    </div>
    </>
  );
}

export default Classlisttable;