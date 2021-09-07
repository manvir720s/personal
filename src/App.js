
/*function App() {
  return (
    <All />
  );
}*/

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Blog from './components/blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/portfolio';
import Certificates from './components/Certificates'
import Resume from'./components/Resume';
import Testimonials from'./components/Testimonials';
//function App() {
class App extends Component {
  render() {
  return (
    <body data-spy="scroll" data-target="#pb-navbar" data-offset="200">

      <Header />
      <Home />
      <About />
      <Portfolio />
      <Resume />
      <Testimonials />
      <Contact />
      <Footer />
    </body>
  );
  }
}
export default App;