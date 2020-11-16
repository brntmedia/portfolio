import React from 'react';
import Container from 'react-bootstrap/Container';

import SocialMedia from './SocialMedia/SocialMedia';
import './Footer.css';

function Footer(){

    return(
        <footer bg="dark" className="footer">
            <Container fluid={true}>
                <SocialMedia/>
                <p className="tag">
                {'\u00A9'}brntMedia 2020
                </p>
            </Container>
        </footer>
    );
};

export default Footer;