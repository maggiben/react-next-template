import pjson from '../../package.json';
export const CU_CLIENT_FRONT = pjson.name;
export const CU_CLIENT_FRONT_PAGE_VIEW = `fvg.${CU_CLIENT_FRONT}.page_view`;
export const CU_CLIENT_FRONT_SEARCH = `fvg.${CU_CLIENT_FRONT}.search`;
export const CU_CLIENT_FRONT_500_PAGE_VIEW = `fvg.${CU_CLIENT_FRONT}.500.pv`;
export const CU_CLIENT_FRONT_404_PAGE_VIEW = `fvg.${CU_CLIENT_FRONT}.404.pv`;
export const CU_CLIENT_FRONT_NO_RESULTS = `fvg.${CU_CLIENT_FRONT}.no.results`;

type ClientEventTypes = 
  typeof CU_CLIENT_FRONT
  | typeof CU_CLIENT_FRONT_PAGE_VIEW
  | typeof CU_CLIENT_FRONT_SEARCH
  | typeof CU_CLIENT_FRONT_404_PAGE_VIEW 
  | typeof CU_CLIENT_FRONT_500_PAGE_VIEW
  | typeof CU_CLIENT_FRONT_NO_RESULTS

export type PageViewType = typeof CU_CLIENT_FRONT_PAGE_VIEW | typeof CU_CLIENT_FRONT_SEARCH | typeof CU_CLIENT_FRONT_404_PAGE_VIEW | typeof CU_CLIENT_FRONT_500_PAGE_VIEW | typeof CU_CLIENT_FRONT_NO_RESULTS


declare global {
  interface Window {
    dataLayer?: any[]
  }
}

interface TrackEventProps {
  event: ClientEventTypes
  payload?: any
}

export const trackEvent = ({ event, payload }: TrackEventProps) => {
  try {
    const global = window as any;
    if (global && global.gtag && typeof global.gtag === 'function')  {
      global.gtag('event', event, payload);
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('trackEvent error: ', event)
  }
}