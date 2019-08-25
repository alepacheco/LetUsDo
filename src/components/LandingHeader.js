import React from 'react';
import '../styles/components/LandingHeader.scss';
import Icon from '../static/images/undraw_process.svg';

export class LandingHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="landing-header">
                <div className="logo-text">
                    LetUsDo.app
                </div>

                <div className="main-content">
                    <h3>Get over with all the insudious task of your daily work.</h3>
                    <h4>Get someone to do it for you for a flat fee.</h4>
                </div>
                <div className="center-image">
                    <Icon width="250" height="250"/>
                </div>
            </div>
        );
    }
}

export default LandingHeader;