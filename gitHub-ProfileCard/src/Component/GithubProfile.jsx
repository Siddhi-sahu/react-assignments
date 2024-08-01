import React, { useEffect, useState } from "react";
import axios from "axios";

const GithubProfile = () => {
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/Siddhi-sahu"
        );
        console.log(response.data);
        setProfile(response.data);
      } catch {
        console.log("error");
      }
    };
    fetchData();
  }, []);

  if (!profile) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex items-center justify-center ">
      <div className="w-1/2 min-h-60 bg-zinc-500 text-white flex items-center justify-between m-9  rounded-lg">
        <div>
          <img
            className="w-28 h-28 rounded-md mt-8 mx-20"
            src="https://avatars.githubusercontent.com/u/167862155?v=4"
            alt=""
          />
          <div className="mx-20 my-2">
            <div className="p-1">followers: {profile.followers}</div>
            <div className="p-1">followings: {profile.following}</div>
          </div>
        </div>

        <div className="my-9 mx-24 ">
          <div className="p-1">username: {profile.login}</div>
          <div className="p-1">bio: {profile.bio}</div>
          <div className="p-1">email: {profile.email}</div>
          <div className="p-1">public repo: {profile.public_repos}</div>
          <div className="p-1">type: {profile.type}</div>
        </div>
      </div>
    </div>
  );
};

export default GithubProfile;
