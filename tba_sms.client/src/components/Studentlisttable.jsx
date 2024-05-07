import { BarChartLine } from 'react-bootstrap-icons';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

const Studentlisttable = () => {
  return (
    <>
    <div className="mb-3 mt-3">
        <div className='myprofilehead d-flex'>
            <div><BarChartLine size={40} className=''/></div>
            <span><div className='myprofiletxt ms-3'>Class Strength</div></span>
            <span><div className='myprofiletxt ms-3'>(PG)</div></span>
        </div>
    </div>
    <div className='me-5'>
        <Table striped bordered hover className='text-center tablefont'>
          <thead>
            <tr style={{height: '30px'}}>
              <th className='col-1'>S.No</th>
              <th className='col-2'>GR No.</th>
              <th className='col-2'>Student Name</th>
              <th className='col-2'>Father's Name</th>
              <th className='col-3'>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{height: '40px'}}>
              <td>1</td>
              <td>0001</td>
              <td>Syed Ehtisham Khan</td>
              <td>Syed Faheem Khan</td>
              <td><Link to='/studentprofile' ><button className='btn btnclasslist lh-sm me-2 '>View Profile</button></Link>
              <Link to='/sponsorcart'><button className='btn btnclasslist lh-sm '>Add to Sponsor</button></Link></td>
            </tr>
          </tbody>  
        </Table>
        <Link to='/classlist'><button className='btn btn-primary btnstudent btn-color'>Go to Class Lists</button></Link>
    </div>
    </>
  );
}

export default Studentlisttable;