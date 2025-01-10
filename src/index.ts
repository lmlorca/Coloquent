/**
 * main
 */
export { Builder } from './Builder'
export { AxiosHttpClient } from './httpclient/axios/AxiosHttpClient'
export { AxiosHttpClientPromise } from './httpclient/axios/AxiosHttpClientPromise'
export { AxiosHttpClientResponse } from './httpclient/axios/AxiosHttpClientResponse'
/**
 * httpclient
 */
export { HttpClient } from './httpclient/HttpClient'
export { HttpClientPromise } from './httpclient/HttpClientPromise'
export { HttpClientResponse } from './httpclient/HttpClientResponse'
export { Model } from './Model'
export { PaginationStrategy } from './PaginationStrategy'
/**
 * relation
 */
export { Relation } from './relation/Relation'
export { ToManyRelation } from './relation/ToManyRelation'
export { ToOneRelation } from './relation/ToOneRelation'
export { PluralResponse } from './response/PluralResponse'
/**
 * response
 */
export { Response } from './response/Response'
export { RetrievalResponse } from './response/RetrievalResponse'
export { SaveResponse } from './response/SaveResponse'
export { SingularResponse } from './response/SingularResponse'
export { SortDirection } from './SortDirection'

import { GLVoiceResources, SDK } from './glvoiceresources/GLVoiceResources'

declare type GLVoiceSDK = {
  setToken: (token: string) => void
} & typeof GLVoiceResources

export default function (config: { baseUrl?: string }): GLVoiceSDK {
  SDK.jsonApiBaseUrl = config.baseUrl || ''

  return {
    ...GLVoiceResources,
    setToken: function (token: string) {
      SDK.effectiveHttpClient.getImplementingClient().defaults.headers[
        'Authorization'
      ] = `Bearer ${token}`
    },
  }
}
