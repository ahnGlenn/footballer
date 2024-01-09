/**/
import { BsPerson, BsTelephone } from "react-icons/bs";
import { AiOutlineHome, AiOutlineSearch, AiOutlineSchedule } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import  "./menuBar.css"

const MenuBar = () => {
    const navigate = useNavigate();
    return (
        <div className="Menubar">
            <div className="backgrondMenu">
                <AiOutlineHome
                    className="icon"
                    id="home"
                    data-tooltip-content="Home"
                    onClick={() => {
                        navigate("/mainPage");
                    }}
                />
                <AiOutlineSearch
                    className="icon"
                    id="matching"
                    data-tooltip-content="About Me"
                    onClick={() => {
                        navigate("/MatchingPage");
                    }}
                />
                <AiOutlineSchedule
                    className="icon"
                    id="project"
                    data-tooltip-content="Project"
                    onClick={() => {
                        navigate("/SchedulePage");
                    }}
                />
                <BsTelephone
                    className="icon"
                    id="contact"
                    data-tooltip-content="Contact"
                    onClick={() => {
                        navigate("/contact");
                    }}
                />

                {/*<ReactTooltip anchorId="home" />
                <ReactTooltip anchorId="me" />
                <ReactTooltip anchorId="project" />
                <ReactTooltip anchorId="contact" />*/}
            </div>
        </div>
    );
};

export default MenuBar;