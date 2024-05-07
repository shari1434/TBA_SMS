import axios from "axios";
import { useState } from "react";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const handlefirstNameChange = (value) => {
    setFirstName(value);
  };
  const handlelastNameChange = (value) => {
    setLastName(value);
  };
  const handleoccupationChange = (value) => {
    setOccupation(value);
  };
  const handlegenderChange = (value) => {
    setGender(value);
  };
  const handlephoneChange = (value) => {
    setPhone(value);
  };
  const handleemailChange = (value) => {
    setEmail(value);
  };
  const handleaddressChange = (value) => {
    setAddress(value);
  };
  const handlepasswordChange = (value) => {
    setPassword(value);
  };

  const handleSubmit = () => {
    const data = {
      FirstName: firstName,
      LastName: lastName,
      Occupation: occupation,
      Gender: gender,
      Phone: phone,
      Email: email,
      Address: address,
      Password: password,
      IsActive: 1
    };
  console.log(data);
  const url = "https://localhost:7067/api/User/Reg";
  axios.post(url, data).then((result) => {
      alert(result.data);

  }).catch((error) => {
    alert(error);
  });

  }
  return (
    <>
      <section className=" gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div
                className="card shadow-2-strong card-registration shadow-lg"
                style={{ borderRadius: "20px" }}
              >
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">
                    Registration Form
                  </h3>
                  <form >
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            name="firstname"
                            className="form-control form-control-lg"
                            placeholder="firstName"
                            onChange={(e) =>
                              handlefirstNameChange(e.target.value)
                            }
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            name="lastname"
                            placeholder="lastName"
                            onChange={(e) =>
                              handlelastNameChange(e.target.value)
                            }
                            className="form-control form-control-lg"
                            
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            name="occupation"
                            onChange={(e) =>
                              handleoccupationChange(e.target.value)
                            }
                            placeholder="Occupation"
                            
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <h6 className="mb-2 pb-1">Gender: </h6>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            onChange={(e) => handlegenderChange(e.target.value)}
                            value="Female"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="femaleGender"
                          >
                            Female
                          </label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            onChange={(e) => handlegenderChange(e.target.value)}
                            value="Male"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="maleGender"
                          >
                            Male
                          </label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            onChange={(e) => handlegenderChange(e.target.value)}
                            name="gender"
                            value="Others"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="otherGender"
                          >
                            Other
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="email"
                            onChange={(e) => handleemailChange(e.target.value)}
                            name="email"
                            className="form-control form-control-lg"
                            placeholder="Email"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="tel"
                            onChange={(e) => handlephoneChange(e.target.value)}
                            name="phone"
                            className="form-control form-control-lg"
                            placeholder="Contact No"
                            
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            onChange={(e) =>
                              handleaddressChange(e.target.value)
                            }
                            name="address"
                            className="form-control form-control-lg"
                            placeholder="Address"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 mb-4 ">
                        <div className="form-outline">
                          <input
                            type="password"
                            className="form-control form-control-lg"
                            placeholder="password"
                            name="password"
                            onChange={(e) =>
                              handlepasswordChange(e.target.value)
                            }
                          />
                         
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-2">
                      <button
                        className="btn btn-warning btn-lg"
                        type="submit"
                        value="Submit"
                        onClick={() => handleSubmit()}
                      >
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Signup;
