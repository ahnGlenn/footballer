import React, { useEffect } from "react";
import "./mainPage.css";
import Menubar from "./menuBar"

function MainPage() {

  return (
      <div className="mainPage">
        <div className="top">
            <div className="top_left_content">
                사진 영역???
            </div>
            <div className="top_right_content">
                <h1>Hello!</h1>
                <h1>this is Footballers</h1>
                <hr />
                <h5>Wellcome!!</h5>
            </div>
        </div>
        <div className="bottom">
            <Menubar />
        </div>
      </div>
  );
}

export default MainPage;