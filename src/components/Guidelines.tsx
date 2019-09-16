import React from 'react';
import FullFeature from 'components/FullFeature';

export const Guidelines = () => (
  <div className="text-center">
    <FullFeature title="Guidelines when ordering a task" hideImage>
      While we want to be very flexible, there are certain points to take into account.
      <br />
      <br />
      <ul>
        <li>
          Tasks should be able to be completed in around <b>one hour</b>
        </li>
        <li>
          On-site tasks are limited to <b>London zones 1-3</b>
        </li>
      </ul>
    </FullFeature>
  </div>
);

export default Guidelines;
