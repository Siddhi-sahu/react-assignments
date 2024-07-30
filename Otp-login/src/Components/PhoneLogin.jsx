import React, { useState } from "react";
import "./PhoneLogin.css";
import OtpLogin from "./OtpLogin";

const PhoneLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const handleChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
      alert("invalid Mobile Number");
      return;
    }
    setShowOtpInput(true);
    console.log(phoneNumber);
  };
  const onSubmit = (otp) => {
    console.log("Login Successful " + otp);
  };
  return (
    <>
      {!showOtpInput ? (
        <div className="phoneLogin">
          <div className="heading">Login via OTP</div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your mobile number"
              value={phoneNumber}
              onChange={handleChange}
            />

            <button type="submit">Send OTP</button>
          </form>
          <p className="phoneHint">enter 10 digit Phone number</p>
        </div>
      ) : (
        <>
          <OtpLogin length={4} onSubmit={onSubmit} phoneNumber={phoneNumber} />
        </>
      )}
    </>
  );
};

export default PhoneLogin;
