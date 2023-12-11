import getConfig from 'next/config'
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const gtmId = serverRuntimeConfig?.gtmId

let apiSearch = publicRuntimeConfig?.apiSearch

// eslint-disable-next-line no-console
console.log('publicRuntimeConfig', publicRuntimeConfig)

// Para el SSR
if (typeof window === 'undefined') {
    apiSearch = serverRuntimeConfig?.apiSearch
}

export {
  apiSearch,
  gtmId
}