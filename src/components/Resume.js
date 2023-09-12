import React, { Component } from 'react';
class Resume extends Component {
    render() {
        return (
            <section class="site-section " id="section-resume">
                <div class="container ">
                    <div class="row">
                        <div class="col-md-12 mb-5">
                            <div class="section-heading text-center">
                                <h2>My <strong>Resume</strong></h2>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <h2 class="mb-5" >Education</h2>
                            <div class="resume-item mb-4">
                                <span class="date"><span class="icon-calendar"></span> September 2020 - Graduating 2025</span>
                                <span class="c3">University of Waterloo</span>
                                <h6>Bachelor of Computer Science (BCS)</h6>
                                <p><strong class="c4">Relevant Courses: </strong> Designing Functional Programs, Algorithm Design and Data Abstraction,
                                    Object-Oriented Software Development, Intro to Optimization, Logic and Computation, Foundations of Sequential Programs,
                                    Applications Development, Intro to Database Management, Operating Systems,
                                    and Intro to Artificial Intelligence</p>
                            </div>
                            <div class="resume-item mb-4">
                                <span class="date"><span class="icon-calendar"></span> September 2020 - Graduating 2025</span>
                                <span class="c3">Wilfrid Laurier University</span>
                                <h6>Bachelor of Business Administration (BBA)</h6>
                                <p><strong class="c4">Relevant Courses: </strong>: Understanding Business Environment, Financial Management I, and
                                    Organizational Behaviour I.</p>
                            </div>


                        </div>
                        <div class="col-md-6">


                            <h2 class="mb-5">Experience</h2>
                            <div class="resume-item mb-4">
                                <span class="date"><span class="icon-calendar"></span> Jan 2022 - April 2022</span>
                                <span class="c3">Motoinsight</span>
                                <h6>Data Automation Analyst</h6>
                                <ul>
                                    <li><strong class="c3">Data Validation and Cleansing Automation:</strong></li>
                                    <ul>
                                        <li><strong class="c3">Designed</strong> and <strong class="c3">maintained</strong> a comprehensive
                                            library of Python scripts utilizing <strong class="c3">Pandas</strong> and <strong class="c3">Selenium</strong>
                                            to streamline and automate data validation and cleansing processes. These scripts effectively identified and
                                            rectified data discrepancies, leading to a remarkable <strong class="c3">98% reduction</strong> in errors and
                                            inconsistencies within our datasets. This automation not only saved valuable time but also significantly
                                            improved data accuracy and reliability, contributing to more informed decision-making.</li>
                                    </ul>

                                    <li><strong class="c3">Image-Description Mismatch Detection Automation:</strong></li>
                                    <ul>
                                        <li><strong class="c3">Spearheaded</strong> the development and implementation of a Python script dedicated to
                                            automatically detecting image-description mismatches across various dealership websites. The script achieved an
                                            impeccable <strong class="c3">100% accuracy rate</strong>, ensuring that the visual and textual content on these
                                            platforms consistently aligned. This initiative not only enhanced the user experience for online customers but
                                            also upheld the reputation and professionalism of the company's digital presence.</li>
                                    </ul>

                                    <li><strong class="c3">Customized Automation for Language Conversion:</strong></li>
                                    <ul>
                                        <li>Collaborated closely with Quebec sales teams to address a critical need for language adaptation. <strong class="c3">Developed and implemented</strong>
                                            a customized script that automated the conversion of English PowerPoint presentations to French. This innovative solution led to
                                            a remarkable <strong class="c3">25% increase</strong> in productivity, as it eliminated the need for time-consuming manual
                                            translations. The script not only saved valuable resources but also ensured that the company's communication materials were
                                            localized accurately and efficiently, strengthening its outreach to French-speaking audiences.</li>
                                    </ul>

                                    <li><strong class="c3">Proficiency in Project Management Tools:</strong></li>
                                    <ul>
                                        <li>Demonstrated expertise in project management tools such as <strong class="c3">Confluence</strong>, <strong class="c3">Jira</strong>, and
                                            <strong class="c3">Salesforce</strong>, which played a pivotal role in facilitating effective collaboration and documentation within the
                                            organization. By utilizing these tools, I enhanced project tracking, streamlined communication, and ensured that all team members had
                                            access to essential project information. This proficiency not only improved overall project efficiency but also promoted transparency
                                            and accountability throughout the project lifecycle.</li>
                                    </ul>
                                </ul>
                            </div>
                            <div class="resume-item mb-4">
                                <span class="date"><span class="icon-calendar"></span> Jan 2022 - April 2022</span>
                                <span class="c3">Poize Wealthtech</span>
                                <h6>Software Developer</h6>
                                <ul>
                                    <li><strong class="c3">Portfolio Analysis and Reporting:</strong></li>
                                    <ul>
                                        <li>Developed a portfolio analysis in <strong class="c3">Python</strong> using <strong class="c3">QuantStats Module</strong>,
                                            enhancing data accuracy and collaboration with analytics teams.</li>
                                        <li>Created interactive analytics reports with <strong class="c3">Plotly, JavaScript, HTML, and Python</strong>
                                            for user-friendly data visualization.</li>
                                    </ul>
                                    <li><strong class="c3">API Enhancement and Integration:</strong></li>
                                    <ul>
                                        <li>Integrated <strong class="c3">Stripe</strong>  subscription services, enabling <strong class="c3">payment tracking</strong> and seamless communication with our API.</li>
                                        <li> Designed and implemented <strong class="c3">API Endpoints</strong> using <strong class="c3">Flask</strong> for stock ratings,
                                            journal entry updates, and real-time stock data retrieval, improving user experience and data availability.</li>
                                    </ul>

                                    <li><strong class="c3">Efficiency and Error Handling:</strong></li>
                                    <ul>
                                        <li>Optimized codebase with custom exception handling, ensuring user-friendly error messages and smoother operation.</li>
                                        <li>Implemented model validation using <strong class="c3">Pydantic</strong> for robust data handling and consistency.</li>
                                    </ul>
                                    <li><strong class="c3">Infrastructure and Dockerization:</strong></li>
                                    <ul>
                                        <li>Orchestrated <strong class="c3">Docker</strong>  image creation for website deployment, enhancing scalability and ease of management.</li>
                                    </ul>
                                </ul>
                            </div>
                            <div class="resume-item mb-4">
                                <span class="date"><span class="icon-calendar"></span> June 2020 - August 2020</span>
                                <span class="c3">WINterview</span>
                                <h6>Part-Time Backend Developer</h6>
                                <ul>
                                    <li>Used <strong class="c3">Java</strong> to fetch error-reports from
                                        <strong class="c3"> FireStore</strong> and store them in a
                                        local JSON file to reduce expenses of an online server</li>
                                    <li>Transferred data between <strong class="c3"> FireStore</strong> and
                                        <strong class="c3"> Realtime Database </strong>to improve efficiency
                                        of application
                                    </li>
                                    <li>Worked with other team members on <strong class="c3"> Github</strong> to share code and work
                                        on seperate branches </li>
                                </ul>

                            </div>

                            <div class="resume-item mb-4">
                                <span class="date"><span class="icon-calendar"></span> June 2020 - August 2020</span>
                                <span class="c3">WINterview</span>
                                <h6>Part-Time Backend Developer</h6>
                                <ul>
                                    <li>Used <strong class="c3">Java</strong> to fetch error-reports from
                                        <strong class="c3"> FireStore</strong> and store them in a
                                        local JSON file to reduce expenses of an online server</li>
                                    <li>Transferred data between <strong class="c3"> FireStore</strong> and
                                        <strong class="c3"> Realtime Database </strong>to improve efficiency
                                        of application
                                    </li>
                                    <li>Worked with other team members on <strong class="c3"> Github</strong> to share code and work
                                        on seperate branches </li>
                                </ul>

                            </div>
                            <div class="resume-item mb-4">
                                <span class="date"><span class="icon-calendar"></span> June 2020 - August 2020</span>
                                <span class="c3">M&M Carriers Ltd.</span>
                                <h6>Summer Intern</h6>
                                <ul>
                                    <li>Entered trip data into <strong class="c3">TransPlus</strong> to manage all the trips carried out by over 100 drivers</li>
                                    <li> Assisted the Accounting Department to help correlate invoicing, bills, and payroll between
                                        Transplus and <strong class="c3"> QuickBooks</strong>
                                    </li>
                                    <li> Provided consist updates to customers for trips enroute and created accurate ACE/ACI using
                                        <strong class="c3"> BorderConnect</strong>
                                    </li>

                                </ul>

                            </div>
                            <div class="resume-item mb-4">
                                <span class="date"><span class="icon-calendar"></span> June 2019 - August 2019</span>
                                <span class="c3">Hampton Inn, 8710 The Gore Rd, Brampton</span>
                                <h6>Breakfast Crew Member </h6>
                                <ul>
                                    <li>Ensured food was <strong class="c3">handled</strong> and <strong class="c3">stored</strong> correctly as well as making sure breakfast area was clean and up to company standards</li>
                                    <li><strong class="c3">Imporvised</strong> and <strong class="c3">adapted</strong> for shortages in supply and unforeseen circumstances</li>
                                    <li><strong class="c3">Communicated</strong> consistently with two coworkers to guarantee customer satisfaction</li>
                                    <li><strong class="c3">Managed</strong> and <strong class="c3">prepared</strong> inventory in anticpation of the following week's occupancy rate each day</li>
                                </ul>

                            </div>


                        </div>
                    </div>

                </div>
                <div class="container">

                    <div class="row mb-4 ">
                        <div class="col-md-12">
                            <div class="section-heading text-center">
                                <h2><strong>Certificates</strong></h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 col-lg-4 text-center mb-5">
                            <div class="site-service-item site-animate" data-animate-effect="fadeIn">

                                <img
                                    width="82%"
                                    src="https://blog.logomyway.com/wp-content/uploads/2021/11/meta-logo.png"

                                />
                                <h3 class="mb-2 mt-4">Full Stack Development</h3>
                                <p>For this certificate it brought together multiple skills to build a full-stack Django app. By the end of this course I was able to:
                                    Explain common concepts related to full stack development, Use HTML, CSS and JavaScript to develop well-structured,interactive and responsive
                                    websites, Build a full stack application using Django that stores its data in models on a MySQL database,Describe the different
                                    environments that web applications are deployed to
                                </p>
                                <p><a href="https://coursera.org/share/44f353f0d5411ed525d67c2b13b4740e"
                                    class="site-link">Certificate <i class="icon-chevron-right"></i></a></p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 text-center mb-5">
                            <div class="site-service-item site-animate" data-animate-effect="fadeIn">

                                <img
                                    width="82%"
                                    src="https://blog.logomyway.com/wp-content/uploads/2021/11/meta-logo.png"
                                />
                                <h3 class="mb-2 mt-4">API Development</h3>
                                <p>By the end of this course I was able to: Work with and build APIs, Build basic API and REST data backbones for web apps using Django,
                                    Discover emerging API technology, Test, optimize and develop documentation for an API
                                </p>
                                <p><a href="https://coursera.org/share/d8ce6c93c3b972b3fdf2026a0cc59b41"
                                    class="site-link">Certificate <i class="icon-chevron-right"></i></a></p>
                            </div>
                        </div>


                        <div class="col-md-6 col-lg-4 text-center mb-5">
                            <div class="site-service-item site-animate" data-animate-effect="fadeIn">

                                <img
                                    width="82%"
                                    src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/e8/7cc3d09d3f11e698dfff46d35f2da1/Stanford_Coursera_Logo.png?auto=format%2Ccompress&dpr=1&w=56px&h=56px&auto=format%2Ccompress&dpr=1&w=&h="

                                />
                                <h3 class="mb-2 mt-4">Machine Learning</h3>
                                <p>To attain this certificate I gained knowledge in using softwares such as MatLab and Octave to
                                    complete assignments that utilized Linear/Logistic Regression, Artifical Neural Networks, and other
                                    Machine Learning Algorithims.
                                </p>
                                <p><a href="https://coursera.org/share/44f353f0d5411ed525d67c2b13b4740e"
                                    class="site-link">Certificate <i class="icon-chevron-right"></i></a></p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 text-center mb-5">
                            <div class="site-service-item site-animate" data-animate-effect="fadeIn">

                                <img
                                    width="65%"
                                    src="data:image/jpeg;base64,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"
                                />
                                <h3 class="mb-2 mt-4">Front-End Web UI Frameworks and Tools: Bootstrap 4</h3>
                                <p>This course gave me an overview of client-side web UI frameworks using Bootstrap 4,
                                    Node.Js, JQuery, and CSS. I learned how to design and style a webpage using Bootstrap, and
                                    create a responsive web page design. First course needed for react specialization.
                                </p>
                                <p><a href="https://coursera.org/share/4e4caf175202b4204bb82d1a0338ee60"
                                    class="site-link">Certificate <i class="icon-chevron-right"></i></a></p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 text-center mb-5">
                            <div class="site-service-item site-animate" data-animate-effect="fadeIn">

                                <img
                                    width="65%"
                                    src="data:image/jpeg;base64,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"
                                />
                                <h3 class="mb-2 mt-4">Front-End Web Development with React</h3>
                                <p>By the end of this course I used JavaScript to develop a React application. I used
                                    features including components and forms as well as Reactstrap for responsiveness.
                                    As well as use Redux to design the React-Redux application. Second course needed for react specialization.
                                </p>
                                <p><a href="https://coursera.org/share/51c314c95adb44f26c0f2184cb98d341"
                                    class="site-link">Certificate <i class="icon-chevron-right"></i></a></p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 text-center mb-5">
                            <div class="site-service-item site-animate" data-animate-effect="fadeIn">

                                <img
                                    width="65%"
                                    src="data:image/jpeg;base64,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"
                                />
                                <h3 class="mb-2 mt-4">Server-side Development with NodeJS, Express and MongoDB</h3>
                                <p>This server-side course helped me gain skills in using Authentication, Node.js, MongoDb, and
                                    Express.Js. It also taught me how to configure a backend server using NodeJs framework
                                    and build a RESTful API for front-end to access backend services.
                                    Third and final course needed for react specialization.
                                </p>
                                <p><a href="https://coursera.org/share/9c42816d3f2e207a7f9735d4374303b0"
                                    class="site-link">Certificate <i class="icon-chevron-right"></i></a></p>
                            </div>
                        </div>




                    </div>
                </div>

            </section>
        );
    }
}
export default Resume;