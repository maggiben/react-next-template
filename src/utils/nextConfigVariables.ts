import getConfig from 'next/config'
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const gtmId = serverRuntimeConfig?.gtmId

let apiSearch = publicRuntimeConfig?.apiSearch
// eslint-disable-next-line no-console
console.log('window', 'defined');
// eslint-disable-next-line no-console
console.log('process', process.env);
// eslint-disable-next-line no-console
console.log('publicRuntimeConfig', publicRuntimeConfig);
 
// Para el SSR
if (typeof window === 'undefined') {
    
    // eslint-disable-next-line no-console
    console.log('window', 'undefined');
    // eslint-disable-next-line no-console
    console.log('process', process.env);
    // eslint-disable-next-line no-console
    console.log('serverRuntimeConfig', serverRuntimeConfig);
    apiSearch = serverRuntimeConfig?.apiSearch
}

export {
  apiSearch,
  gtmId
}
