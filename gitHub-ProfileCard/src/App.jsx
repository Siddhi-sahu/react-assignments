import { useState } from "react";

import "./App.css";
import GithubProfile from "./Component/GithubProfile";

//
//Question.5 : Using  https://api.github.com/users/${username} API render your GitHub information as your GitHub info Card.
function App() {
  return <GithubProfile />;
}

export default App;
