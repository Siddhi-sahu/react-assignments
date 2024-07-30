import React, { useEffect, useRef, useState } from "react";
import "./OtpLogin.css";
import LoggedIn from "./LoggedIn";

const OtpLogin = ({ length = 4, onSubmit = () => {}, phoneNumber }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const [showLogin, setShowLogin] = useState(false);
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

    const newOtp = [...otp];

    //allow ONLY ONE input

    newOtp[index] = value.substring(value.length - 1);

    setOtp(newOtp);

    //trigger submit on 4 inputs
    const combinedOtp = newOtp.join("");

    if (combinedOtp.length === length) {
      onSubmit(combinedOtp);
      setShowLogin(true);
    }

    //move to next field if the current is filled
    if (value && inputRefs.current[index + 1] && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };
  const handleClick = (index) => {
    //get the latest input/move cursor to the last
    inputRefs.current[index].setSelectionRange(1, 1);
  };
  const handleKeyDown = (index, e) => {
    //move to prev field if backspace

    if (
      e.key === "Backspace" &&
      index > 0 &&
      inputRefs.current[index - 1] &&
      !otp[index]
    ) {
      inputRefs.current[index - 1].focus();
    }
  };

  //allow only one input in each field
  return (
    <>
      {!showLogin ? (
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
          <p className="hint">enter any 4 digit number</p>
        </div>
      ) : (
        <LoggedIn />
      )}
    </>
  );
};

export default OtpLogin;
