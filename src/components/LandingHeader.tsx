import React from 'react';
import 'src/styles/components/LandingHeader.scss';
// @ts-ignore
import Icon from 'src/static/images/undraw_process.svg';

export const LandingHeader = () => (
  <div className="landing-header">
    <div className="logo-text">LetUsDo.app</div>
    <div className="main-content">
      We know there are thing and you don’t want to do. Here we are to help you with the tasks you
      don’t feel like doing
    </div>
    <div className="center-image">
      <Icon width="250" height="250" />
    </div>
  </div>
);

export default LandingHeader;
