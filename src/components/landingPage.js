import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import 'animate.css';
import { Link } from "react-router-dom";


export default class LandingPage extends React.Component {
    state = {
        data: [],
    }

    render() {
        return (<React.Fragment>

            <div className='carouselTitle bg-dark rounded-3 w-100'>
                <Carousel fade>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100" style={{ 'height': '650px', 'filter': 'brightness(110%)', 'opacity': '0.8' }}
                            src={"https://awparchitects.com/wp-content/uploads/2021/07/ISS-01.jpg"}
                            alt="First slide"
                        />
                        <Carousel.Caption className='text-end ' style={{ 'padding-bottom': '250px', 'filter': 'brightness(120%)', 'font-size': '25px' }}>
                            <h3 className="animated fadeInLeft">CAPS system login</h3>
                            <Link to="/student" className="butn">The Freedom to configure your course details anytime and anywhere</Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

           
        </React.Fragment>)
    }
}