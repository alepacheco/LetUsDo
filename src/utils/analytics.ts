import ReactGA from 'react-ga';
import { History, Location } from 'history';

const debug = false;
const trackPageView = (location: Location) => {
  ReactGA.set({
    page: location.pathname,
  });
  ReactGA.pageview(location.pathname);
};

const initGa = (history: History) => {
  ReactGA.initialize('UA-143596433-1', {
    debug,
  });
  if (debug) {
    ReactGA.ga('set', 'sendHitTask', null);
  }
  trackPageView(history.location);
  history.listen(trackPageView);
};

export {
  initGa as default,
  trackPageView,
};
