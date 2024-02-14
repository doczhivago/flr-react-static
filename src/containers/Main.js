//Create a 2 x 3 flex box grid with the following sections: Home, Services, Portfolio, Testimonial, Contact, and About.
// All css should be in Main.css

import React from 'react';
import './Main.css';

class Main extends React.Component {
    render() {
        return (
            <div className='main'>
                <section className='home'>
                    <h2>Home</h2>
                    <p className="about__description">We are a team of designers and developers, we work with startups and companies to build products and services.</p>
                </section>
                <section className='services'>
                    <h2>Services</h2>
                    <p className="about__description">We are a team of designers and developers, we work with startups and companies to build products and services.</p>
                </section>
                <section className='portfolio'>
                    <h2>Portfolio</h2>
                    <p className="about__description">We are a team of designers and developers, we work with startups and companies to build products and services.</p>
                </section>
                <section className='testimonial'>
                    <h2>Testimonial</h2>
                    <p className="about__description">We are a team of designers and developers, we work with startups and companies to build products and services.</p>
                    <a href="#about" className="button button--flex">
                        Download Presentation
                        <i className="ri-file-download-line button__icon"></i>
                    </a>
                </section>
                <section className='contact'>
                    <h2>Contact</h2>
                    <p className="about__description">We are a team of designers and developers, we work with startups and companies to build products and services.</p>
                    <a href="#about" className="button button--flex">
                        Download Presentation
                        <i className="ri-file-download-line button__icon"></i>
                    </a></section>
                <section className='about'>
                    <div className="about__container">
                        <div className="about__data">
                            <h2 className="section__title about__title">About us</h2>
                            <p className="about__description">We are a team of designers and developers, we work with startups and companies to build products and services.</p>
                            <a href="#about" className="button button--flex">
                                Download Presentation
                                <i className="ri-file-download-line button__icon"></i>
                            </a>
                        </div>

                        <div className="about__img">
                            <img src="./assets/img/about1.png" alt="" className="about__img" />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Main;