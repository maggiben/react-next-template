export const CL_CLIENT = 'client'
export const CL_CLIENT_PAGE_VIEW = 'fvg.client.pv'
export const CL_CLIENT_SEARCH = 'fvg.client.search'
export const CL_CLIENT_500_PAGE_VIEW = 'fvg.500.pv'
export const CL_CLIENT_404_PAGE_VIEW = 'fvg.404.pv'

type ClientEventTypes = 
  typeof CL_CLIENT
  | typeof CL_CLIENT_PAGE_VIEW
  | typeof CL_CLIENT_SEARCH
  | typeof CL_CLIENT_404_PAGE_VIEW 
  | typeof CL_CLIENT_500_PAGE_VIEW

export type PageViewType = typeof CL_CLIENT_PAGE_VIEW | typeof CL_CLIENT_SEARCH | typeof CL_CLIENT_404_PAGE_VIEW | typeof CL_CLIENT_500_PAGE_VIEW


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