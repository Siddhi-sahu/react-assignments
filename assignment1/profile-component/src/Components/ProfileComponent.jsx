import React from "react";
import profile_icon from "./Assets/profile.jpg";

function ProfileComponent() {
  return (
    <>
      <div className="profileCard">
        <div className="gradient"></div>
        <div className="profilePhoto">
          <img src={profile_icon} alt="" />
        </div>
        <div className="about">
          <div className="name">
            Jane Doe <span>32</span>
          </div>
          <div className="place">London</div>
        </div>

        <hr className="hr" />
        <div className="accountActivityNumbers">
          <span>80k</span>
          <span>803k</span>
          <span>1.4k</span>
        </div>
        <div className="accountaActivityLabels">
          <span>Followers</span>
          <span>Likes</span>
          <span>Photos</span>
        </div>
      </div>
    </>
  );
}

export default ProfileComponent;
