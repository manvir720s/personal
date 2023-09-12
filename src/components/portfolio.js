import React, { Component } from 'react';
class Portfolio extends Component {
    render() {
        return (
            <section class="site-section" id="section-portfolio">
                <div class="container">
                    <div class="row">
                        <div class="section-heading text-center col-md-12">
                            <h2><strong>Projects</strong></h2>
                        </div>
                    </div>
                    <div class="filters">
                        <ul>
                            <li class="active" data-filter="*">All</li>
                            <li data-filter=".webapp">Web App Development</li>
                            <li data-filter=".mobileapp">Mobile App Development</li>
                            <li data-filter=".ml">Machine Learning</li>
                            <li data-filter=".pythonFlask">Stock Based</li>
                            <li data-filter=".opencv">OpenCV</li>
                        </ul>
                    </div>

                    <div class="filters-content">
                        <div class="row grid">
                            <div class="single-portfolio col-sm-4 all webapp">
                                <div class="relative">
                                    <div class="thumb">
                                        <div class="overlay overlay-bg"></div>
                                        <a href="https://github.com/manvir720s/RestaurantAPI">
                                            <img class="photo img-fluid" src="images/restaurantAPI.JPG" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div class="p-inner">
                                    <h4>Restaurant API</h4>
                                    <div class="cat">Django Rest Framework</div>
                                </div>
                            </div>

                            <div class="single-portfolio col-sm-4 all webapp">
                                <div class="relative">
                                    <div class="thumb">
                                        <div class="overlay overlay-bg"></div>
                                        <a href="https://github.com/manvir720s/LittleLemonReservations">
                                            <img class="photo img-fluid" src="images/LittleLemon.JPG" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div class="p-inner">
                                    <h4>Online Reservations</h4>
                                    <div class="cat">JavaScript + Django + SQL</div>
                                </div>
                            </div>

                            <div class="single-portfolio col-sm-4 all mobileapp">
                                <div class="relative">
                                    <div class="thumb">
                                        <div class="overlay overlay-bg"></div>
                                        <a href="https://github.com/manvir720s/AlarmJournal">
                                            <img class="photo img-fluid" src="images/alarmjournal.JPG" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div class="p-inner">
                                    <h4>Alarm Journal</h4>
                                    <div class="cat">Flutter + Dart</div>
                                </div>
                            </div>

                            <div class="single-portfolio col-sm-4 all webapp">
                                <div class="relative">
                                    <div class="thumb">
                                        <div class="overlay overlay-bg"></div>
                                        <a href="https://github.com/manvir720s/vehicleRepository.git">
                                            <img class="photo img-fluid" src="images/vehicle.JPG" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div class="p-inner">
                                    <h4>Vehicle Repository</h4>
                                    <div class="cat">MERN CRUD</div>
                                </div>
                            </div>

                            <div class="single-portfolio col-sm-4 all webapp">
                                <div class="relative">
                                    <div class="thumb">
                                        <div class="overlay overlay-bg"></div>
                                        <a href="https://github.com/manvir720s/firebaseToDo/tree/master">
                                            <img class="photo img-fluid" src="images/firebasecrud.JPG" alt="" />
                                        </a>
                                    </div>

                                </div>
                                <div class="p-inner">
                                    <h4>To Do list</h4>
                                    <div class="cat">FireBase CRUD</div>
                                </div>
                            </div>

                            <div class="single-portfolio col-sm-4 all ml">
                                <div class="relative">
                                    <div class="thumb">
                                        <div class="overlay overlay-bg"></div>
                                        <a href="https://github.com/manvir720s/predictage.git">
                                            <img
                                                class="photo img-fluid"

                                                src="images/agepredict.JPG" alt="" />
                                        </a>
                                    </div>

                                </div>
                                <div class="p-inner">
                                    <h4>Predict Age </h4>
                                    <div class="cat">ML Logistic Regression</div>
                                </div>
                            </div>



                            <div class="single-portfolio col-sm-4 all ml">
                                <div class="relative">
                                    <div class="thumb">
                                        <div class="overlay overlay-bg"></div>
                                        <a href="https://github.com/manvir720s/iris-classification.git">
                                            <img class="photo img-fluid" src="images/iris.JPG" alt="" />
                                        </a>
                                    </div>

                                </div>
                                <div class="p-inner">
                                    <h4>Iris Classifier</h4>
                                    <div class="cat">ML Classification</div>
                                </div>
                            </div>

                            <div class="single-portfolio col-sm-4 all pythonFlask">
                                <div class="relative">
                                    <div class="thumb">
                                        <div class="overlay overlay-bg"></div>
                                        <a href="https://github.com/manvir720s/dma-3ma-rsi-macd.git">
                                            <img class="photo img-fluid" src="images/macd.JPG" alt="" />
                                        </a>
                                    </div>

                                </div>
                                <div class="p-inner">
                                    <h4>DMA, MACD, RSI, 3MA Stock Predictor </h4>
                                    <div class="cat">Python and Flask</div>
                                </div>
                            </div>

                            <div class="single-portfolio col-sm-4 all ml">
                                <div class="relative">
                                    <div class="thumb">
                                        <div class="overlay overlay-bg"></div>
                                        <a href="https://github.com/manvir720s/CarPrices.git">
                                            <img class="photo img-fluid" src="images/determinePrice.JPG" alt="" />
                                        </a>
                                    </div>

                                </div>
                                <div class="p-inner">
                                    <h4>Predict Car Price</h4>
                                    <div class="cat">ML Multi-Linear</div>
                                </div>
                            </div>
                            <div class="single-portfolio col-sm-4 all ml">
                                <div class="relative">
                                    <div class="thumb">
                                        <div class="overlay overlay-bg"></div>
                                        <a href="https://github.com/manvir720s/GasolineType.git">
                                            <img class="photo img-fluid" src="images/fuelType.JPG" alt="" />
                                        </a>
                                    </div>

                                </div>
                                <div class="p-inner">
                                    <h4>Predict Gasoline Type</h4>
                                    <div class="cat">ML Logistic Regression</div>
                                </div>
                            </div>

                            <div class="single-portfolio col-sm-4 all opencv">
                                <div class="relative">
                                    <div class="thumb">
                                        <div class="overlay overlay-bg"></div>
                                        <a href="https://github.com/manvir720s/faceRecognition.git">
                                            <img class="photo img-fluid" src="images/opencv.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div class="p-inner">
                                    <h4>Facial Recognition</h4>
                                    <div class="cat">OpenCV</div>
                                </div>
                            </div>


                            <div class="single-portfolio col-sm-4 all pythonFlask">
                                <div class="relative">
                                    <div class="thumb">
                                        <div class="overlay overlay-bg"></div>
                                        <a href="https://github.com/manvir720s/financeoptomization.git">
                                            <img class="photo img-fluid" src="images/optomizer.JPG" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div class="p-inner">
                                    <h4>Portfolio Optomization</h4>
                                    <div class="cat">Python</div>
                                </div>
                            </div>
                            <div class="single-portfolio col-sm-4 all pythonFlask">
                                <div class="relative">
                                    <div class="thumb">
                                        <div class="overlay overlay-bg"></div>
                                        <a href="https://github.com/manvir720s/stock-techincals.git">
                                            <img class="photo img-fluid" src="images/ltsm.JPG" alt="" />
                                        </a>
                                    </div>

                                </div>
                                <div class="p-inner">
                                    <h4>LTSM Stock Predictor </h4>
                                    <div class="cat">Python</div>
                                </div>
                            </div>
                            <div class="single-portfolio col-sm-4 all ml">
                                <div class="relative">
                                    <div class="thumb">
                                        <div class="overlay overlay-bg"></div>
                                        <a href="https://github.com/manvir720s/heightWeight.git">
                                            <img class="photo img-fluid" src="images/heightweight.JPG" alt="" />
                                        </a>
                                    </div>

                                </div>
                                <div class="p-inner">
                                    <h4>Predict Height or Weight</h4>
                                    <div class="cat">ML Linear Regression</div>
                                </div>
                            </div>




                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Portfolio;