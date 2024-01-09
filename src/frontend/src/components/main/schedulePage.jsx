import React, { useState ,useEffect } from "react";
import "./mainPage.css";
import Menubar from "./menuBar"
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";

function SchedulePage() {

    const [value, onChange] = useState(new Date());
    // dateClick 함수를 선언
    const dateClick = (info) => {
        alert(info.dateStr);
    };

    return (
        <div>
            <div className="top">
                <div className="top_left_content">
                    <FullCalendar
                        // 날짜 클릭 시 이벤트 발생
                        dateClick={dateClick}
                        defaultView="dayGridMonth"
                        plugins={[dayGridPlugin, interactionPlugin]}
                        events={[
                            { title: 'event 1', date: '2023-12-17' },
                            { title: 'event 2', date: '2023-12-18' }
                        ]}
                    />
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

export default SchedulePage;