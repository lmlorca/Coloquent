import { models, Resources, SDK } from './GLVoiceResources'

type GLVoiceClient = {
  setToken: (token: string) => void
} & Resources

export const createGlVoiceClient = (options: { baseUrl?: string }) => {
  SDK.jsonApiBaseUrl = options.baseUrl || ''

  return {
    ...models,
    setToken: function (token: string) {
      SDK.effectiveHttpClient.getImplementingClient().defaults.headers[
        'Authorization'
      ] = `Bearer ${token}`
    },
  } as GLVoiceClient
}
