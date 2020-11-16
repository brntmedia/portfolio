import React from 'react';
import './SocialMedia.css';

function SocialMedia(){

    return(
        <ul className="soc">
            <li className="so"><a href="https://www.linkedin.com/in/tyler-burns-99a43718a/" target="blank"><i className="fab fa-linkedin-in"></i></a></li>
            <li className="so"><a href="https://github.com/brntmedia" target="blank"><i className="fab fa-github"></i></a></li>
            <li className="so"><a href="https://twitter.com/MediaBrnt" target="blank"><i className="fab fa-twitter"></i></a></li>
            <li className="so"><a href="https://www.instagram.com/" target="blank"><i className="fab fa-instagram"></i></a></li>
        </ul>
    );
}

export default SocialMedia;