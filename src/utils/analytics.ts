import ReactGA from 'react-ga';

const debug = false;
const trackPageView = (location: string) => {
  ReactGA.set({
    page: location
  });
  ReactGA.pageview(location);
};

const trackModalView = (location: string) => {
  ReactGA.modalview(location);
};

const trackEvent = ({
  category,
  action,
  label
}: {
  category: string;
  action: string;
  label?: string;
}) => {
  ReactGA.event({
    category,
    action,
    label
  });
};

const initGa = () => {
  ReactGA.initialize('UA-143596433-1', {
    debug,
    gaOptions: {
      siteSpeedSampleRate: 20
    }
  });
  if (debug) {
    ReactGA.ga('set', 'sendHitTask', null);
  }
  trackPageView('/');
};

export { initGa as default, trackPageView, trackEvent, trackModalView };
