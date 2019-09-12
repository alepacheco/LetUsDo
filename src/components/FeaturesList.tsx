import React from 'react';
import 'src/styles/components/FeaturesList.scss';
// @ts-ignore
import cafe from 'src/static/images/cafe.png';
// @ts-ignore
import london from 'src/static/images/london-bridge.png';
// @ts-ignore
import cash from 'src/static/images/cash.png';
import CenteredContent from './CenteredContent';

type ListElementProps = {
  image?: string;
  title: string;
};


const ListElement: React.FC<ListElementProps> = ({ image, title, children }) => (
  <div className="item">
    <img alt="" className="feature-icon" src={image} />
    <div className="list-element-title">{title}</div>
    <div className="list-element-body">{children}</div>
  </div>
);


export const FeaturesList = () => (
  <div className="features-list">
    <CenteredContent>
      <ListElement image={london} title="Based in London">
        We are starting in London and have people on the streets ready to take on some work as soon
        as you send us a request.
      </ListElement>
      <ListElement image={cash} title="Flat fee">
        To make it even easier there is no pricing guide, you will always pay the same whatever the
        task at hand is. <b>Just 20£</b>
      </ListElement>
      <ListElement image={cafe} title="Worries free service">
        lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip
        lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet
      </ListElement>
    </CenteredContent>
  </div>
);

export default FeaturesList;
