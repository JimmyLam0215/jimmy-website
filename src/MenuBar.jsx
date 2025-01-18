import { Link } from 'react-router-dom';
import Fade from "react-reveal/Fade";

function MenuBar(){

    const separator = {
        border: "ridge",
        marginLeft: "20%",
    }
    
    return (
        <>        
            <div className="menu-bar">
                <a className="menu-bar-button" href='#home'>Home</a>
                <a className="menu-bar-button" href='#programming-language'>Skills</a>
                <a className="menu-bar-button" href='#experiences'>Experiences</a>
                <a className="menu-bar-button">Blog</a>
                <a className="menu-bar-button">Gallery</a>
            </div>
            <div style={separator}>

            </div>
        </>
    );
}

export default MenuBar