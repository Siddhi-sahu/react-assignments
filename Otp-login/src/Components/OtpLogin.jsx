import React, { useEffect, useRef, useState } from "react";
import "./OtpLogin.css";

const OtpLogin = ({ length = 4, onSubmit = () => {}, phoneNumber }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  //focus on the first input field

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  //enter otp
  const handleChange = (index, e) => {
    const value = e.target.value;

    if (isNaN(value)) return;

    setOtp(value);

    const newOtp = [...otp];
    console.log(otp, newOtp);
  };
  const handleClick = (e) => {};
  const handleKeyDown = (index, e) => {};

  //allow only one input in each field
  return (
    <div className="OtpLogin">
      <div className="heading">Enter Otp sent to {phoneNumber}</div>
      <div>
        {otp.map((value, index) => {
          return (
            <input
              value={value}
              key={index}
              type="text"
              ref={(input) => {
                inputRefs.current[index] = input;
              }}
              className="otpInputFields"
              onChange={(e) => handleChange(index, e)}
              onClick={() => handleClick(index)}
              onKeyDown={(e) => handleKeyDown(index, e)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OtpLogin;
