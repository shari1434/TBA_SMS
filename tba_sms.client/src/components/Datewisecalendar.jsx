import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { Button } from 'react-bootstrap';

function Datewisecalendar() {
    return (
        <>
            <Sidebar />
            <div className="dashboardbody">
                <div className="row dashboardbox pt-5 pb-5">
                    <div className="col-11 activitybox">
                        <div className='calendardiv ps-3 pb-3 me-5'>
                            <div className='row ps-5 mb-2'>
                                <div className='col-3'>
                                    <h1 className='fw-bold border ms-3 mt-4 pb-1 ps-1 fs-calendar text-center bg-success'>PG</h1>
                                    <h1 className='fw-bold border ms-3 mt-2 pt-5 pb-5 ps-1 fs-calendar text-center bg-light'>December 2024</h1>
                                </div>
                                <div className='col-8'>
                                        <div className='row mb-2'>
                                            <div className=' mt-4 border text-center bg-light'>
                                                <h3 className='fw-bold '>Daily Activity Calendar </h3>
                                            </div>
                                        </div>
                                        <div className='row border bg-success'>
                                            <div className='col-4 mt-2 mb-2'>
                                                <img src="calendar.jpg" width={150} />
                                            </div>
                                            <div className='col-4  mt-2 '>
                                                <img src="calendar 2.webp" width={150} />
                                            </div>
                                            <div className='col-4 mt-2 '>
                                                <img src="calendar 3.webp" width={150} />
                                            </div>
                                        </div>
                                </div>    
                            </div>

                            <div className='row mb-1'>
                                <div className='col-2 bg-light me-1 boxsize'>
                                    <div className='row calendarbox'>   
                                        <p className='col-2 fw-bold text-secondary'>1</p>
                                        <p className='col-8 text-center text-success fw-bold'>Science</p>
                                    </div>
                                    <div className='row'>   
                                        <p className='col datefs text-secondary'>Lorem ipsum dolor sit, amet consectetur 
                                        adipisicing elit. Mollitia incidunt quo rerum possimus ipsam.
                                        </p>
                                    </div>
                                </div>

                                <div className='col-2 bg-light me-1 boxsize'>
                                    <div className='row'>   
                                        <p className='col-2 fw-bold text-secondary'>2</p>
                                        <p className='col-8 text-center text-danger fw-bold'>Writing</p>
                                    </div>
                                    <div className='row'>   
                                        <p className='col datefs text-secondary'>Lorem ipsum dolor sit, amet consectetur 
                                        adipisicing elit. Mollitia incidunt quo rerum possimus ipsam.
                                        </p>
                                    </div>
                                </div>

                                <div className='col-2 bg-light me-1 boxsize'>
                                    <div className='row'>   
                                        <p className='col-2 fw-bold text-secondary'>3</p>
                                        <p className='col-8 text-center text-warning fw-bold'>Reading</p>
                                    </div>
                                    <div className='row'>   
                                        <p className='col datefs text-secondary'>Lorem ipsum dolor sit, amet consectetur 
                                        adipisicing elit. Mollitia incidunt quo rerum possimus ipsam.
                                        </p>
                                    </div>
                                </div>

                                <div className='col-2 bg-light me-1 boxsize'>
                                    <div className='row'>   
                                        <p className='col-2 fw-bold text-secondary'>4</p>
                                        <p className='col-8 text-center text-info fw-bold'>Maths</p>
                                    </div>
                                    <div className='row'>   
                                        <p className='col datefs text-secondary'>Lorem ipsum dolor sit, amet consectetur 
                                        adipisicing elit. Mollitia incidunt quo rerum possimus ipsam.
                                        </p>
                                    </div>
                                </div>

                                <div className='col-2 bg-light me-1 boxsize'>
                                    <div className='row'>   
                                        <p className='col-2 fw-bold text-secondary'>5</p>
                                        <p className='col-8 text-center text-success fw-bold'>Play</p>
                                    </div>
                                    <div className='row'>   
                                        <p className='col datefs text-secondary'>Lorem ipsum dolor sit, amet consectetur 
                                        adipisicing elit. Mollitia incidunt quo rerum possimus ipsam.
                                        </p>
                                    </div>
                                </div> 

                                <div className='col-2 bg-light boxsize'>
                                    <div className='row'>   
                                        <p className='col-2 fw-bold text-secondary'>6</p>
                                        <p className='col-8 text-center text-danger fw-bold'>Rhymes</p>
                                    </div>
                                    <div className='row'>   
                                        <p className='col datefs text-secondary'>Lorem ipsum dolor sit, amet consectetur 
                                        adipisicing elit. Mollitia incidunt quo rerum possimus ipsam.
                                        </p>
                                    </div>
                                </div> 
                            </div>
                            
                            <div className='row mb-1'>
                                <div className='col-2 bg-light me-1 boxsize'>
                                    <div className='row calendarbox'>   
                                        <p className='col-2 fw-bold text-secondary'>7</p>
                                        <p className='col-8 text-center text-success fw-bold'>Science</p>
                                    </div>
                                    <div className='row'>   
                                        <p className='col datefs text-secondary'>Lorem ipsum dolor sit, amet consectetur 
                                        adipisicing elit. Mollitia incidunt quo rerum possimus ipsam.
                                        </p>
                                    </div>
                                </div>

                                <div className='col-2 bg-light me-1 boxsize'>
                                    <div className='row'>   
                                        <p className='col-2 fw-bold text-secondary'>8</p>
                                        <p className='col-8 text-center text-danger fw-bold'>Writing</p>
                                    </div>
                                    <div className='row'>   
                                        <p className='col datefs text-secondary'>Lorem ipsum dolor sit, amet consectetur 
                                        adipisicing elit. Mollitia incidunt quo rerum possimus ipsam.
                                        </p>
                                    </div>
                                </div>

                                <div className='col-2 bg-light me-1 boxsize'>
                                    <div className='row'>   
                                        <p className='col-2 fw-bold text-secondary'>9</p>
                                        <p className='col-8 text-center text-warning fw-bold'>Reading</p>
                                    </div>
                                    <div className='row'>   
                                        <p className='col datefs text-secondary'>Lorem ipsum dolor sit, amet consectetur 
                                        adipisicing elit. Mollitia incidunt quo rerum possimus ipsam.
                                        </p>
                                    </div>
                                </div>

                                <div className='col-2 bg-light me-1 boxsize'>
                                    <div className='row'>   
                                        <p className='col-2 fw-bold text-secondary'>10</p>
                                        <p className='col-8 text-center text-info fw-bold'>Maths</p>
                                    </div>
                                    <div className='row'>   
                                        <p className='col datefs text-secondary'>Lorem ipsum dolor sit, amet consectetur 
                                        adipisicing elit. Mollitia incidunt quo rerum possimus ipsam.
                                        </p>
                                    </div>
                                </div>

                                <div className='col-2 bg-light me-1 boxsize'>
                                    <div className='row'>   
                                        <p className='col-2 fw-bold text-secondary'>11</p>
                                        <p className='col-8 text-center text-success fw-bold'>Play</p>
                                    </div>
                                    <div className='row'>   
                                        <p className='col datefs text-secondary'>Lorem ipsum dolor sit, amet consectetur 
                                        adipisicing elit. Mollitia incidunt quo rerum possimus ipsam.
                                        </p>
                                    </div>
                                </div> 

                                <div className='col-2 bg-light boxsize'>
                                    <div className='row'>   
                                        <p className='col-2 fw-bold text-secondary'>12</p>
                                        <p className='col-8 text-center text-danger fw-bold'>Rhymes</p>
                                    </div>
                                    <div className='row'>   
                                        <p className='col datefs text-secondary'>Lorem ipsum dolor sit, amet consectetur 
                                        adipisicing elit. Mollitia incidunt quo rerum possimus ipsam.
                                        </p>
                                    </div>
                                </div> 
                            </div>

                            <div className='row mb-1'>
                                <div className='col-2 bg-light me-1 boxsize'>
                                    <div className='row calendarbox'>   
                                        <p className='col-2 fw-bold text-secondary'>13</p>
                                        <p className='col-8 text-center text-success fw-bold'>Science</p>
                                    </div>
                                    <div className='row'>   
                                        <p className='col datefs text-secondary'>Lorem ipsum dolor sit, amet consectetur 
                                        adipisicing elit. Mollitia incidunt quo rerum possimus ipsam.
                                        </p>
                                    </div>
                                </div>

                                <div className='col-2 bg-light me-1 boxsize'>
                                    <div className='row'>   
                                        <p className='col-2 fw-bold text-secondary'>14</p>
                                        <p className='col-8 text-center text-danger fw-bold'>Writing</p>
                                    </div>
                                    <div className='row'>   
                                        <p className='col datefs text-secondary'>Lorem ipsum dolor sit, amet consectetur 
                                        adipisicing elit. Mollitia incidunt quo rerum possimus ipsam.
                                        </p>
                                    </div>
                                </div>

                                <div className='col-2 bg-light me-1 boxsize'>
                                    <div className='row'>   
                                        <p className='col-2 fw-bold text-secondary'>15</p>
                                        <p className='col-8 text-center text-warning fw-bold'>Reading</p>
                                    </div>
                                    <div className='row'>   
                                        <p className='col datefs text-secondary'>Lorem ipsum dolor sit, amet consectetur 
                                        adipisicing elit. Mollitia incidunt quo rerum possimus ipsam.
                                        </p>
                                    </div>
                                </div>

                                <div className='col-2 bg-light me-1 boxsize'>
                                    <div className='row'>   
                                        <p className='col-2 fw-bold text-secondary'>16</p>
                                        <p className='col-8 text-center text-info fw-bold'>Maths</p>
                                    </div>
                                    <div className='row'>   
                                        <p className='col datefs text-secondary'>Lorem ipsum dolor sit, amet consectetur 
                                        adipisicing elit. Mollitia incidunt quo rerum possimus ipsam.
                                        </p>
                                    </div>
                                </div>

                                <div className='col-2 bg-light me-1 boxsize'>
                                    <div className='row'>   
                                        <p className='col-2 fw-bold text-secondary'>17</p>
                                        <p className='col-8 text-center text-success fw-bold'>Play</p>
                                    </div>
                                    <div className='row'>   
                                        <p className='col datefs text-secondary'>Lorem ipsum dolor sit, amet consectetur 
                                        adipisicing elit. Mollitia incidunt quo rerum possimus ipsam.
                                        </p>
                                    </div>
                                </div> 

                                <div className='col-2 bg-light boxsize'>
                                    <div className='row'>   
                                        <p className='col-2 fw-bold text-secondary'>18</p>
                                        <p className='col-8 text-center text-danger fw-bold'>Rhymes</p>
                                    </div>
                                    <div className='row'>   
                                        <p className='col datefs text-secondary'>Lorem ipsum dolor sit, amet consectetur 
                                        adipisicing elit. Mollitia incidunt quo rerum possimus ipsam.
                                        </p>
                                    </div>
                                </div> 
                            </div>

                            <div className='row mb-1'>
                                <div className='col-2 bg-light me-1 boxsize'>
                                    <div className='row calendarbox'>   
                                        <p className='col-2 fw-bold text-secondary'>19</p>
                                        <p className='col-8 text-center text-success fw-bold'>Science</p>
                                    </div>
                                    <div className='row'>   
                                        <p className='col datefs text-secondary'>Lorem ipsum dolor sit, amet consectetur 
                                        adipisicing elit. Mollitia incidunt quo rerum possimus ipsam.
                                        </p>
                                    </div>
                                </div>

                                <div className='col-2 bg-light me-1 boxsize'>
                                    <div className='row'>   
                                        <p className='col-2 fw-bold text-secondary'>20</p>
                                        <p className='col-8 text-center text-danger fw-bold'>Writing</p>
                                    </div>
                                    <div className='row'>   
                                        <p className='col datefs text-secondary'>Lorem ipsum dolor sit, amet consectetur 
                                        adipisicing elit. Mollitia incidunt quo rerum possimus ipsam.
                                        </p>
                                    </div>
                                </div>

                                <div className='col-2 bg-light me-1 boxsize'>
                                    <div className='row'>   
                                        <p className='col-2 fw-bold text-secondary'>21</p>
                                        <p className='col-8 text-center text-warning fw-bold'>Reading</p>
                                    </div>
                                    <div className='row'>   
                                        <p className='col datefs text-secondary'>Lorem ipsum dolor sit, amet consectetur 
                                        adipisicing elit. Mollitia incidunt quo rerum possimus ipsam.
                                        </p>
                                    </div>
                                </div>

                                <div className='col-2 bg-light me-1 boxsize'>
                                    <div className='row'>   
                                        <p className='col-2 fw-bold text-secondary'>22</p>
                                        <p className='col-8 text-center text-info fw-bold'>Maths</p>
                                    </div>
                                    <div className='row'>   
                                        <p className='col datefs text-secondary'>Lorem ipsum dolor sit, amet consectetur 
                                        adipisicing elit. Mollitia incidunt quo rerum possimus ipsam.
                                        </p>
                                    </div>
                                </div>

                                <div className='col-2 bg-light me-1 boxsize'>
                                    <div className='row'>   
                                        <p className='col-2 fw-bold text-secondary'>23</p>
                                        <p className='col-8 text-center text-success fw-bold'>Play</p>
                                    </div>
                                    <div className='row'>   
                                        <p className='col datefs text-secondary'>Lorem ipsum dolor sit, amet consectetur 
                                        adipisicing elit. Mollitia incidunt quo rerum possimus ipsam.
                                        </p>
                                    </div>
                                </div> 

                                <div className='col-2 bg-light boxsize'>
                                    <div className='row'>   
                                        <p className='col-2 fw-bold text-secondary'>24</p>
                                        <p className='col-8 text-center text-danger fw-bold'>Rhymes</p>
                                    </div>
                                    <div className='row'>   
                                        <p className='col datefs text-secondary'>Lorem ipsum dolor sit, amet consectetur 
                                        adipisicing elit. Mollitia incidunt quo rerum possimus ipsam.
                                        </p>
                                    </div>
                                </div> 
                            </div>

                            <div className='row mb-1'>
                                <div className='col-2 bg-light me-1 boxsize'>
                                    <div className='row calendarbox'>   
                                        <p className='col-2 fw-bold text-secondary'>25</p>
                                        <p className='col-8 text-center text-success fw-bold'>Science</p>
                                    </div>
                                    <div className='row'>   
                                        <p className='col datefs text-secondary'>Lorem ipsum dolor sit, amet consectetur 
                                        adipisicing elit. Mollitia incidunt quo rerum possimus ipsam.
                                        </p>
                                    </div>
                                </div>

                                <div className='col-2 bg-light me-1 boxsize'>
                                    <div className='row'>   
                                        <p className='col-2 fw-bold text-secondary'>26</p>
                                        <p className='col-8 text-center text-danger fw-bold'>Writing</p>
                                    </div>
                                    <div className='row'>   
                                        <p className='col datefs text-secondary'>Lorem ipsum dolor sit, amet consectetur 
                                        adipisicing elit. Mollitia incidunt quo rerum possimus ipsam.
                                        </p>
                                    </div>
                                </div>

                                <div className='col-2 bg-light me-1 boxsize'>
                                    <div className='row'>   
                                        <p className='col-2 fw-bold text-secondary'>27</p>
                                        <p className='col-8 text-center text-warning fw-bold'>Reading</p>
                                    </div>
                                    <div className='row'>   
                                        <p className='col datefs text-secondary'>Lorem ipsum dolor sit, amet consectetur 
                                        adipisicing elit. Mollitia incidunt quo rerum possimus ipsam.
                                        </p>
                                    </div>
                                </div>

                                <div className='col-2 bg-light me-1 boxsize'>
                                    <div className='row'>   
                                        <p className='col-2 fw-bold text-secondary'>28</p>
                                        <p className='col-8 text-center text-info fw-bold'>Maths</p>
                                    </div>
                                    <div className='row'>   
                                        <p className='col datefs text-secondary'>Lorem ipsum dolor sit, amet consectetur 
                                        adipisicing elit. Mollitia incidunt quo rerum possimus ipsam.
                                        </p>
                                    </div>
                                </div>

                                <div className='col-2 bg-light me-1 boxsize'>
                                    <div className='row'>   
                                        <p className='col-2 fw-bold text-secondary'>29</p>
                                        <p className='col-8 text-center text-success fw-bold'>Play</p>
                                    </div>
                                    <div className='row'>   
                                        <p className='col datefs text-secondary'>Lorem ipsum dolor sit, amet consectetur 
                                        adipisicing elit. Mollitia incidunt quo rerum possimus ipsam.
                                        </p>
                                    </div>
                                </div> 

                                <div className='col-2 bg-light boxsize'>
                                    <div className='row'>   
                                        <p className='col-2 fw-bold text-secondary'>30</p>
                                        <p className='col-8 text-center text-danger fw-bold'>Rhymes</p>
                                    </div>
                                    <div className='row'>   
                                        <p className='col datefs text-secondary'>Lorem ipsum dolor sit, amet consectetur 
                                        adipisicing elit. Mollitia incidunt quo rerum possimus ipsam.
                                        </p>
                                    </div>
                                </div> 
                            </div>

                            <div className='row mb-1 lastrow'>
                                <div className='col-2 bg-light boxsize'>
                                    <div className='row'>   
                                        <p className='col-2 fw-bold text-secondary'>31</p>
                                        <p className='col-8 text-center text-danger fw-bold'>Rhymes</p>
                                    </div>
                                    <div className='row'>   
                                        <p className='col datefs text-secondary'>Lorem ipsum dolor sit, amet consectetur 
                                        adipisicing elit. Mollitia incidunt quo rerum possimus ipsam.
                                        </p>
                                    </div>
                                </div> 
                            </div>                         
                        </div>
                        <div className='row mt-3'>
                            <Link to='/monthwisecalendar'>
                                <Button className='classbtn col-2'>Back to Month</Button>
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default Datewisecalendar;