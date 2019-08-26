import React from 'react';
import '../styles/components/Footer.scss';

export class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="footer" >
      <div className="separator" />
      <div className="wrapper" >
        lorem ipsum dolor sit amet, consectetur adip
      </div>
    </div>
    );
  }
}

export default Footer;
