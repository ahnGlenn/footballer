import React, { useEffect } from "react";
import "./mainPage.css";
import Menubar from "./menuBar"

function MainPage() {

  return (
      <div className="mainPage">
        <div className="top">
            <div className="top_left_content">
                <video className="myFace" width='500' height='500' muted autoPlay loop>
                    <source src={require("./memoji.mp4")} type="video/mp4"/>
                </video>
            </div>
            <div className="top_right_content">
                <h1>Hello world! this is Glenn's playground</h1>
                <br />
                <hr />
                <br />
                <h1>this is Footballers. Wellcome!</h1>
            </div>
        </div>
        <div className="bottom">
            <Menubar />
        </div>
      </div>
  );
}

export default MainPage;