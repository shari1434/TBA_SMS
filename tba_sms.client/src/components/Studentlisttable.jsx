import { BarChartLine } from 'react-bootstrap-icons';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { useGetStudentByClassIdQuery } from '../Services/Student';


const Studentlisttable = ({classId}) => {
   // Use the hook to fetch the class list
   const { data: classList, error, isLoading } = useGetStudentByClassIdQuery(classId);

   if (isLoading) {
       // Show loading message
       return <div>Loading...</div>;
   }

   if (error) {
       // Show error message
       return <div>Error loading data.</div>;
   }
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
                {classList && classList.map((student, index) => (
                    <tr key={student.id} style={{ height: '40px' }}>
                        <td>{index + 1}</td>
                        <td>{student.grNo}</td>
                        <td>{student.firstName} {student.lastName}</td>
                        <td>{student.fatherName}</td>
                        <td>
                            <Link to={`/studentprofile/${student.studentId}`}>
                                <button className='btn btnclasslist lh-sm me-2'>View Profile</button>
                            </Link>
                            <Link to={`/sponsorcart/${student.studentId}`}>
                                <button className='btn btnclasslist lh-sm'>Add to Sponsor</button>
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody> 
        </Table>
        <Link to='/classlist'><button className='btn btn-primary btnstudent btn-color'>Go to Class Lists</button></Link>
    </div>
    </>
  );
}

export default Studentlisttable;