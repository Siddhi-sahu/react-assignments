import React from "react";

const PhoneLogin = () => {
  return (
    <div className="phoneLogin">
      <div className="heading">Login via OTP</div>
      <form onSubmit={() => {}}>
        <input type="text" placeholder="Enter your mobile number" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PhoneLogin;
