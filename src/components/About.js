import React, {Component} from 'react';
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
                                    src="images/m2.jpg"                                    
                                    alt="Image placeholder" 
                                    class="img-fluid "/>
                                </div>
                                <div class="col-lg-7 pl-lg-5">
                                    <div class="section-heading">
                                        <h1>About <strong>Me <Emoji name="fire" size="40"/> <Emoji name="racing_car" size="40"/></strong></h1>
                                    </div>
                                    <p class="lead">I am a 2nd Year Double Degree Computer Science (UW) 
                                    and Business (WLU) student graduating in 2025. I enjoy using my coding skills to create applications
                                    that can make our lives easier and help us understand large datasets better.  
                                     </p>
                                    
                                    <p class="lead">Besides doing school work and expanding my coding skills, some other things I enjoy 
                                    doing is playing volleyball basketball, and reading autobiographies. I'm also an absolute car fanatic as I spent more than time than 
                                    I would like to admit window-shopping on AutoTrader, watching car videos on YouTube, and 
                                    playing Forza Horizon 3, Project Cars 2, or Assetto Corsa on my Logitech G920. And when I'm not 
                                    doing any of that I'm usually watching
                                    Sopranos, South Park, and Billions</p>

                                    
                                    <h4><strong>Awards:</strong></h4>  
                                    <ul class = "lead">
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
                        
                <div style={{ textAlign: "center" }}>
                    <h2 class="carousel11">More About <strong>Me </strong></h2>
                    <p>Here's some pictures and a video that show more about myself</p>
                    <div >
                        <Carousel>
                        <Carousel.Item>
                            <img
                            className="center-block z"
                            width="30%"
                            src="images/23.jpg"
                            alt="First slide"
                            />

                            <Carousel.Caption>
                          
                            </Carousel.Caption>
                            <h3 class="carousel1">Book for September</h3>
                            <p class="carousel2 mb-5">This month I'm reading a book on Jim Simons of Renaissance Technologies</p>
                            
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
                             <h3 class="carousel1">Forza Horizon 3</h3>
                            <p class=" carousel2 mb-5">Here's a clip of me driving a twin turbo Lamborghini Huracan in FH3.</p>
                            
                        </Carousel.Item>
                        
                        <Carousel.Item>
                            <img
                            className="center-block l"
                            width="30%"
                            src="images/hh.jpg"
                            alt="Second slide"
                            />
                            <h3 class="carousel1" >Pandemic Project</h3>
                            <p class="carousel2 mb-5">During the pandemic, my dad and I decided to restore our 2004 Hummer H2</p>
                            
                        </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
	                </section>
        );
    }
}

export default About;