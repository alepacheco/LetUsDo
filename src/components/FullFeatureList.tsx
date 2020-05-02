import React from 'react';
import { FullFeature } from './FullFeature';

export const FullFeatureList = () => (
  <div>
    <FullFeature
      image="static/images/undraw_design_sprint.svg"
      title="Why we do it"
      imageSide="right"
      hideImage
    >
      We believe prioritisation is key to be more productive and we don’t want you to get distracted
      with things that are not worth your time. We literally give you an extra hand that is always
      there to help in whatever situation you need.
    </FullFeature>

    <FullFeature image="static/images/undraw_selection.svg" title="What do we do">
      We help people and organisations automate and delegate simple task in a on demand way. Whether
      you need to do a virtual/online task we can help you. Using our website or out API we find and
      arrange someone to solve your task without any overhead on your side
    </FullFeature>

    {/* <FullFeature
      image="static/images/undraw_at_the_park.svg"
      title="How do we do it"
      imageSide="right"
    >
      When we receive a task from you we will assign it to one of our internal staff and then they
      will do whatever needs to be done to complete it They will only contact you in case you
      specify it or in ultimate necessity. We want to give a complete smooth experience and complete
      the task without bothering you, any inconvenience that happens is up to our staff to resolve.
    </FullFeature> */}

    {/* <FullFeature image="static/images/undraw_terms.png" title="What can I order" imageSide="left">
      <div className="text-header">
        While we want to be very flexible there are certain points to take into account. If we
        cannot accept your task we will give you a complete refund.
      </div>
      <ul>
        <li>You can order online or on-site tasks</li>
        <li>
          On-site tasks are limited to <b>London zones 1-3</b>
        </li>
        <li>
          Tasks should be able to be completed in around <b>one hour</b>
        </li>
        <li>
          Tasks should be able to be completed by someone with no domain knowledge about them.
        </li>
      </ul>
    </FullFeature> */}
  </div>
);

export default FullFeatureList;
