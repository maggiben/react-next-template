export const CL_CLIENT = 'client'
export const CL_CLIENT_PAGE_VIEW = 'fvg.client.pv'

type ClientEventTypes = 
  typeof CL_CLIENT
  | typeof CL_CLIENT_PAGE_VIEW

export type PageViewType = typeof CL_CLIENT_PAGE_VIEW


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
    if (window && window.dataLayer && typeof window.dataLayer.push === 'function')  {
      window.dataLayer.push({ event, payload })
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('trackEvent error: ', event)
  }
}