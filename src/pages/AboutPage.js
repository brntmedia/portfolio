import React from 'react';
import './css/AboutPage.css';
import headshot from './img/profile.jpg'

function AboutPage(props) {

    
    return(
        <div className="parent">
            <div className="pimg1">
                <div className="ptext">
                    <span className="border">
                        brntMedia 
                    </span>  
                </div>
            </div>

            <section className="section section-light">
                <article className="Post">
                    <h3> Background </h3>
                    <div class="personal">
                        <div className="headshot">
                            <img src={headshot} alt="" className="headshot"/>
                        </div>
                        <p class="description">
                            I have been studying code for two years.  My journey began programming operant chambers in UNCW's EAB lab using MED-PC.   This carried over into my position as a junior researcher in the Pond lab where I learned to use R.  I was then recruited to design a data base and form system for the TIDES project using REDCap.   
                        </p>
                    </div>
                    <a href="post.html" class="link-l">Resume</a>
                </article>
            </section>

            <div className="pimg2">
                <div className="ptext">
                <span className="border">
                    Image 2 text 
                </span>  
                </div>
            </div>

            <section className="section section-dark">
                <article className="Post">
                    <h3> Blog Post Two</h3>
                    <small> Posted by Tyler June 22nd</small>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, error. Sequi, eius amet eligendi et culpa natus, esse possimus asperiores, ea reprehenderit harum molestias cum. Repellendus fuga sint facere sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur unde voluptatibus soluta sit, temporibus velit qui aliquam mollitia et dolorem saepe dolores enim in ullam maiores impedit omnis deserunt recusandae?</p>
                        <a href="post.html">Read More</a>
                </article>
            </section>

            <div className="pimg3">
                <div className="ptext">
                    <span className="border">
                    Image 3 text 
                    </span>  
                </div>
            </div>

            <section className="section section-light">
                <article className="Post">
                    <h3> Blog Post Three</h3>
                    <small> Posted by Tyler June 22nd</small>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, error. Sequi, eius amet eligendi et culpa natus, esse possimus asperiores, ea reprehenderit harum molestias cum. Repellendus fuga sint facere sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur unde voluptatibus soluta sit, temporibus velit qui aliquam mollitia et dolorem saepe dolores enim in ullam maiores impedit omnis deserunt recusandae?</p>
                        <a href="post.html">Read More</a>
                </article>
            </section>
            <div className="pimg1">
                <div className="ptext">
                <span className="border">
                    Brnt Media 
                </span>  
                </div>
            </div>
        </div>
    );
}

export default AboutPage;