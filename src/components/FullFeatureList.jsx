import React from 'react';
import { FullFeature } from './FullFeature';
import Selection from '../static/images/undraw_selection.svg';
import Sprint from '../static/images/undraw_design_sprint.svg';
import Park from '../static/images/undraw_at_the_park.svg';

export const FullFeatureList = () => (
  <div className="full-feature-list">
    <FullFeature Image={Sprint} title="What can we do?">
      We can do both <b>online or in person tasks in London</b>.
      <br />
      Anything that you can delegate to somebody without much domain specific knowledge that can be
      done in <b>between an hour</b> is a good task for us.
      <br />
      We will try to do whatever you need, if we can’t make it you’ll receive a full refund
    </FullFeature>

    <FullFeature Image={Selection} title="How does it work?" imageSide="right">
      Once you find a task that you would like to delegate to us, write all the details down that we
      will need to perform it.
      <br />
      Include things like <b>timelines</b> if any and other details.
      <br />
      Once you have the description ready you can summit it to us, we will receive it and just do
      it. If we need more information to complete it
      <br />
      <b>we will contact you to the email summited</b> or elsewhere provided. If we find that the{' '}
      <b>task is ineligible</b> by been too complex or it cannot be competed in an hour we will give
      you a <b>full refund.</b>
    </FullFeature>

    <FullFeature Image={Park} title="Need help?">
      If you have any issue with your order contact us by email at:{' '}
      <a href="mailto:support@letusdo.app">support@letusdo.app</a>
    </FullFeature>
  </div>
);

export default FullFeatureList;
