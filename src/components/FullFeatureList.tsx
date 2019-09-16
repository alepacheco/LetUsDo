import React from 'react';
import { FullFeature } from './FullFeature';
// @ts-ignore
import Selection from '../static/images/undraw_selection.svg';
// @ts-ignore
import Sprint from '../static/images/undraw_design_sprint.svg';
// @ts-ignore
import Park from '../static/images/undraw_at_the_park.svg';

export const FullFeatureList = () => (
  <div className="full-feature-list">
    <FullFeature Image={Sprint} title="Why we do it" imageSide="right" hideImage>
      We believe prioritisation is key if we want to achieve work-life balance, ||unfortunately life
      its messy and some things always come up when there is no one else to help out.|| With
      LetUsDo.app we want to change that. We literally give you an extra hand that is always there
      to help in whatever situation you need it.
    </FullFeature>

    <FullFeature Image={Selection} title="What do we do">
      We help people and organisations automate and delegate simple task in a on demand way. Using
      our website or out API we find and arrange someone to solve your task without any overhead on
      your side. We solve your problems and don’t create more overhead in your busy life.
    </FullFeature>

    <FullFeature Image={Park} title="How do we do it" imageSide="right">
      When we receive a task from you we will assign it to one of our internal staff and then they
      will do whatever needs to be done to complete it\* They will only contact you in case you
      specify it or if in ultimate necessity. We want to give a complete smooth experience and
      complete the task without bothering you, any inconvenience that happens is up to our staff to
      resolve. \* Tasks needs to be simple enough to be completed in around an hour time
    </FullFeature>
  </div>
);

export default FullFeatureList;
