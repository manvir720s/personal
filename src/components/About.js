import React, { Component } from 'react';
import Emoji from 'reactjs-emojis';

import Carousel from 'react-bootstrap/Carousel';
class About extends Component {
    render() {
        return (
            <section class="site-section" id="section-about">
                <div class="container">
                    <div class="row mb-5   align-items-center">
                        <div class="col-lg-5 pr-lg-5 mb-5 mb-lg-0">
                            <img
                                src="images/m2.JPG"
                                alt="Image placeholder"
                                class="img-fluid rrr " />
                        </div>
                        <div class="col-lg-7 pl-lg-5">
                            <div class="section-heading">
                                <h1>About <strong>Me <Emoji name="fire" size="40" /> <Emoji name="racing_car" size="40" /></strong></h1>
                            </div>
                            <p class="lead">I'm a 4th-year student pursuing a Double Degree in Computer Science at the University of Waterloo (UW)
                                and Business at Wilfrid Laurier University (WLU). My academic journey blends technical prowess and business acumen,
                                and I'm passionate about using my coding skills to craft applications that simplify daily tasks and enhance our understanding
                                of complex data. Whether it's building mobile apps for efficiency or web applications for data analysis, I derive immense
                                satisfaction from coding.</p>
                            <p class="lead">Beyond academics, I'm a sports enthusiast, often found on the basketball or volleyball court.
                                Cars fascinate me, not just as vehicles but as feats of engineering and design. In my spare time, I indulge in building mobile
                                and web apps, reading books, and occasionally testing my luck in poker. When it comes to entertainment, I have a penchant for TV shows
                                like "Billions," "South Park," and I find myself revisiting the timeless classic, "The Sopranos." I'm a well-rounded individual with
                                a passion for technology, sports, cars, literature, and the occasional card game. Don't hesitate to reach out if you'd like to chat
                                about coding, sports, or any of my other interests—I'm always up for a great conversation!</p>

                            <h4><strong>Awards:</strong></h4>
                            <ul class="lead">
                                <li class="about">Ernst and Young Entrance Scholarship, 2020-2021, Wilfrid Laurier University
                                    <ul>
                                        <li class="about2">Granted for being one of the two students entering the Lazaridis School of
                                            Business and Economics with the highest average from their top-six 4U/4M courses</li>
                                    </ul>
                                </li>
                                <li class="about">President's Gold Enterance Scholarship, 2020-2021, Wilfrid Laurier University
                                    <ul>
                                        <li class="about2">Received a scholarship for having an average above 95% in top six 4U/4M courses
                                        </li>
                                    </ul>
                                </li>
                                <li class="about">Excellence in Mathematics, 2019-2020, Brampton Christian School
                                    <ul>
                                        <li class="about2">
                                            Demonstrated the most interest and understanding of concepts introduced in Functions and Calculus
                                        </li>
                                    </ul>
                                </li>
                                <li class="about">Excellence in Business, 2019-2020, Brampton Christian School
                                    <ul>
                                        <li class="about2">
                                            Deployed an above-average understanding in Economics and Business courses
                                        </li>
                                    </ul>
                                </li>
                                <li class="about">Award of Excellence, 2019-2020, Brampton Christian School
                                    <ul>
                                        <li class="about2">Awarded for being the most outgoing and
                                            involved with the school in terms of academics, student council, sports, etc.
                                        </li>
                                    </ul>
                                </li>


                            </ul>
                            <p>
                                <a href="#section-contact" class="btn btn-primary mt-2 px-5 py-3 btn-sm smoothscroll">Hire Me</a>
                                <a href="Resume.pdf" class="btn btn-secondary ml-3 mt-2 px-5 py-3 btn-sm">Resume</a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* <div style={{ textAlign: "center" }}>
                    <h2 class="carousel11">More About <strong>Me </strong></h2>
                    <p>Here's some pictures and a video that show more about myself</p>
                    <div >
                        <Carousel>
                        <Carousel.Item>
                            <img
                            className="center-block z"
                            width="30%"
                            src="images/oct.jpg"
                            alt="First slide"
                            />

                            <Carousel.Caption>
                          
                            </Carousel.Caption>
                            <h3 class="carousel1">Book for May</h3>
                            <p class="carousel2 mb-5">This month I'm reading a book on how to play poker by Doyle Brunson</p>
                            
                        </Carousel.Item>
                        <Carousel.Item>
                            <a href ="https://www.youtube.com/watch?v=RP68TKXp5BQ">
                            <img
                            className="center-block l"
                            width="30%"
                            src="images/FH3_CarList.jpg"      
                            alt="Second slide"
                            />

                            </a>
                             <h3 class="carousel1">Sports</h3>
                            <p class=" carousel2 mb-5">In my free</p>
                            
                        </Carousel.Item>
                        
                        <Carousel.Item>
                            <img
                            className="center-block l"
                            width="30%"
                            src="images/hh.jpg"
                            alt="Second slide"
                            />
                            <h3 class="carousel1" >Pandemic Project</h3>
                            <p class="carousel2 mb-5">During the pandemic, my dad and I decided to restore a 2004 Hummer H2</p>
                            
                        </Carousel.Item>
                        </Carousel>
                    </div>
                </div> */}
            </section>
        );
    }
}

export default About;