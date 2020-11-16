import React from 'react';
import './css/AboutPage.css';
import Hero from '../components/hero/Hero'
import Content from '../components/Content'
import CV from '../components/assets/TB CV.pdf'

function AboutPage(props) {

    
    return(
        <div className="parent">
             <Hero title={props.title} />
            <Content>
                <p>Hello, my name is Tyler. I'm a web developer with experience in Node JS, React, HTML, CSS, Javascript, R, and REDCap.</p>

                <p>I hope to join your company and develop adaptive and modern websites that users will enjoy.</p>

                <p>I enthusiastically strive to learn new things. I began working on databases while at University, but found a love for web design while helping a client build a website as an Employment Specalist.</p>

                <p>I am currently running my own buisness building custom gaming PC's.  You can check it out <a href="https://www.facebook.com/marketplace/profile/100002003184924/?ref=share_attachment" target="_blank" rel="noopener noreferrer">here</a>, or on the homepage. </p>

                <p>My background in analytical psychology and statisitcs provides great insight into the mind of a user. If you would like to learn more you can refer to my CV, attached here <a href={CV} download>here</a></p>
                    
            </Content>
        </div>
    );
}

export default AboutPage;