import getConfig from 'next/config'
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const gtmId = serverRuntimeConfig?.gtmId

let apiSearch = publicRuntimeConfig?.apiSearch

// Para el SSR
if (typeof window === 'undefined') {
    
    // eslint-disable-next-line no-console
    console.log('window', 'undefined');
    // eslint-disable-next-line no-console
    console.log('process', process.env);
    apiSearch = serverRuntimeConfig?.apiSearch
}

export {
  apiSearch,
  gtmId
}
