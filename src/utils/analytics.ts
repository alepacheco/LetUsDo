import ReactGA from 'react-ga';
import { History, Location } from 'history';

const debug = false;
const trackPageView = (location: Location) => {
  ReactGA.set({
    page: location.pathname
  });
  ReactGA.pageview(location.pathname);
};

const trackModalView = (location: string) => {
  ReactGA.modalview(location);
};

const trackEvent = ({category, action, label}: {category: string, action: string, label?: string}) => {
  ReactGA.event({
    category,
    action,
    label
  });
};

const initGa = (history: History) => {
  ReactGA.initialize('UA-143596433-1', {
    debug,
    gaOptions: {
      siteSpeedSampleRate: 20
    }
  });
  if (debug) {
    ReactGA.ga('set', 'sendHitTask', null);
  }
  trackPageView(history.location);
  history.listen(trackPageView);
};

export { initGa as default, trackPageView, trackEvent, trackModalView };
