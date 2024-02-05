import React, {useState, useEffect, useRef} from "react";
import "./MatchingPage.css";
import Menubar from "./menuBar"

function MatchingPage() {

    const [matchList, setMatchList] = useState([]);
    const templateRef = useRef();  // 문자메시지 템플릿 긁어오기

    useEffect(() => {

        // MatchingPage에 접근할 때 서버에 요청을 보냄
        fetch('/crawling/match')
            .then(response => response.json())
            .then(data => { setMatchList(data); })
            .catch(error => console.error('Error:', error));

    }, []);


    // -------------
    // 문자메시지(URI 스킴(URI Scheme)) 사용  'sms:' 형식
    // -------------
    const fn_smsShare = () =>{

        var recipientNumber = "010-7338-7045";
        var msg = templateRef.current.innerHTML.replaceAll('<br>', '\n');

        // eslint-disable-next-line no-restricted-globals
        location.href = 'sms:'+recipientNumber+'?body='+msg.replace(/(\n|n|rn)/g,"%0a");
    }


    return (
        <div className="matchingPage">
            <div className="top">
                <div className="top_left_content">
                    <table>
                        <tr>
                            <th>no. </th>
                            <th>title</th>
                            <th>msg</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>광명</td>
                            <td><button>click</button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>철산동</td>
                            <td><button>click</button></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>일직동</td>
                            <td><a onClick={fn_smsShare}>문자 전송</a></td>
                        </tr>
                    </table>
                    {/*<table>
                    <colgroup></colgroup>
                        <tr>
                            <th>no. </th>
                            <th>title</th>
                            <th>msg</th>
                        </tr>
                        {matchList.map((item, index) => (
                            <tr>
                                <th>{index}. </th>
                                <td>{item}</td>
                                <td>
                                    <button>send</button>
                                </td>
                            </tr>
                        ))}
                </table>*/}
                </div>
                <div className="top_right_content">
                   <div className="chat_wrap">
                       <div className="header">
                           MESSAGE TEMPLATE
                       </div>
                       <div contenteditable="true" className="template" ref={templateRef}>
                            [매칭 신청]<br />
                            1. 팀명 : TEAM IS <br />
                            2. 나이 : 30초반 <br />
                            3. 위치 : 광명,부천,안양 <br />
                            4. 실력 : 하하하하(선출 없음) <br />
                            <br />
                            게시글 보고 연락드립니다. 메시지 부탁드리겠습니다. <br />
                       </div>
                       <div className="sendBtn">send</div>
                   </div>
                </div>
            </div>
            <div className="bottom">
                <Menubar />
            </div>
        </div>
    );
}

export default MatchingPage;