import React from 'react';
import './Intro.css'

class Intro extends React.Component {
    render() {
        return (
            <div className='intro'>
                <form>Revolutionary Tech</form>
                <div>
                    <header className="header" id="header">

                    </header>

                    <main className="main">
                        <section className="home section" id="home">

                        </section>

                        <section className="about section" id="about">
                            <div className="about__container container grid">
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
                        </section>}
                        </main>
                </div>
            </div>
        );
    }
}

export default Intro;