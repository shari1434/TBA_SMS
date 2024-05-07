import { Envelope, GeoAlt, Telephone } from "react-bootstrap-icons";

function Addressform () {
    return(
        <>
            <div className="address-box mb-3">  
                <Envelope size={22} className="mb-2"/>
                <h5 className="add-heading">EMAIL</h5>
                <p className="add-text">info@thebeginnersacademy.com</p>   
            </div>

            <div className="address-box mb-3">  
                <Telephone size={22} className="mb-2"/>
                <h5 className="add-heading">PHONE NUMBER</h5>
                <p className="add-text">92-311-2124666</p>   
            </div>

            <div className="address-box mb-3">  
                <GeoAlt size={22} className="mb-2"/>
                <h5 className="add-heading">ADDRESS</h5>
                <p className="add-text">Umar Goth, Zila Malir, Deh Bijar Bhatti, Tappo Songal Gadap, Sindh.</p>   
            </div>
            <div className="address-box mb-3 ">  
                <h5 className="add-heading">GOOGLE MAP</h5>
                <div class="embed-responsive embed-responsive-21by9 me-4">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14461.505411008082!2d67.16566775541992!3d25.021298899999994!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb34625deb50f8f%3A0x841f5e6b4b479dfb!2sThe%20Beginners%20Academy!5e0!3m2!1sen!2sus!4v1707808288314!5m2!1sen!2sus" style={{width: '100%'}} referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>   
            </div>
        </>        
    )
}

export default Addressform;