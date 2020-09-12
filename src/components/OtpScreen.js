import React, { useState } from "react";
// import {Redirect} from 'react-router-dom'
import { useHistory } from "react-router-dom";
import "../App.css";

const OtpScreen = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const history = useHistory();

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  const handleSubmit = () => {
    // alert("Entered OTP is " + otp.join(""))
    console.log("object", otp.join(""));
    if (otp.join("") === "1234") {
        history.push("/success")
    }else{
        alert("Please enter a valid otp");
    }
  };
  return (
    <div className="row">
      <img
        src="https://t4.ftcdn.net/jpg/01/86/12/63/240_F_186126352_WQiMSAWksKh87XuXc5ePXXFhOQi96paS.jpg"
        className="image"
      />
      <div className="col text-center">
        <h2 className="head">Please verify Mobile number</h2>
        <p className="head">
          Enter the OTP sent to you to verify your identity
        </p>

        {otp.map((data, index) => {
          return (
            <input
              className="otp-field"
              type="text"
              name="otp"
              maxLength="1"
              key={index}
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onFocus={(e) => e.target.select()}
            />
          );
        })}

        <p>OTP Entered - {otp.join("")}</p>
        <p>
          <button
            className="ver"
            onClick={(e) => setOtp([...otp.map((v) => "")])}
          >
            Clear
          </button>
          <button
            className="ver"
            // onClick={e =>
            //     alert("Entered OTP is " + otp.join(""))
            // }
            onClick={handleSubmit}
          >
            Verify OTP
          </button>
        </p>
      </div>
    </div>
  );
};

export default OtpScreen;
