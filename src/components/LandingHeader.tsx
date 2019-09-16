import React from 'react';
import 'src/styles/components/LandingHeader.scss';
// @ts-ignore
import Icon from 'src/static/images/undraw_process.svg';

export const LandingHeader = () => (
  <div className="landing-header">
    <div className="logo-text">LetUsDo.app</div>
    <div className="main-content">
      <b>Delegate your tasks on-demand.</b>
      <div className="subtitle">
        Work clutters our minds. Choose what matters, delegate the rest.
      </div>
    </div>
  </div>
);

export default LandingHeader;
