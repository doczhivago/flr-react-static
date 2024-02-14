import React from 'react';
import './Intro.css'

class Intro extends React.Component {
    render() {
        return (
            <>
                <div className='introTitle'>
                    <header className="header" id="header">
                        Revolutionary Tech
                    </header>

                </div>
                <div className="introDescription">  Guiding you to the future of technology. </div>
            </>
        );
    }
}

export default Intro;