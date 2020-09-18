import React from "react";
import Axios from "./Axios";
import "./App.css";
import Single from "./components/Single";
import Post from "./components/Post";
import "./assets/sass/__main.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Axios />
      <Single />
      <br />
      <br />
      <br />
      <Post />
    </div>
  );
}

export default App;
