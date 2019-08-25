import React from 'react';
import '../styles/components/LandingHeader.scss';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'

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
                    <ResponsiveEmbed aspect="a16by9">
                        <embed type="image/svg+xml" src="static/images/undraw_process.svg" />
                    </ResponsiveEmbed>
                </div>
            </div>
        );
    }
}

export default LandingHeader;