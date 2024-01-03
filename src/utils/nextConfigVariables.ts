import getConfig from 'next/config'
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const gtmId = serverRuntimeConfig?.gtmId

let apiSearch = publicRuntimeConfig?.apiSearch
// Para el SSR
if (typeof window === 'undefined') {
  apiSearch = serverRuntimeConfig?.apiSearch
}

export default {
  apiSearch,
  gtmId
}
