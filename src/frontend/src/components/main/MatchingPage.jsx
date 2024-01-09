import React, { useState ,useEffect } from "react";
import "./mainPage.css";
import Menubar from "./menuBar"
import axios from "axios";
function MatchingPage() {

    useEffect(() => {

        // MatchingPage에 접근할 때 서버에 요청을 보냄
        fetch('/crawling/match')
            .then(response => response.json())
            .then(data => {
                console.log("access"  + data);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
            <div className="top">
                <div className="top_left_content">
                    happy
                </div>
                <div className="top_right_content">
                    hi
                </div>
            </div>
            <div className="bottom">
                <Menubar />
            </div>
        </div>
    );
}

export default MatchingPage;