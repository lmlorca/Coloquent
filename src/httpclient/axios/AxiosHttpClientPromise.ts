import { AxiosPromise } from 'axios'
import { HttpClientPromise } from '../HttpClientPromise'
import { HttpClientResponse } from '../HttpClientResponse'
import { Thenable } from '../Types'
import { AxiosHttpClientResponse } from './AxiosHttpClientResponse'

export class AxiosHttpClientPromise implements HttpClientPromise {
  private axiosPromise: AxiosPromise

  constructor(axiosPromise: AxiosPromise) {
    this.axiosPromise = axiosPromise
  }

  then<U>(
    onFulfilled?: (value: HttpClientResponse) => Thenable<U> | U,
    onRejected?: (error: any) => Thenable<U> | U
  ): Promise<U>
  then<U>(
    onFulfilled?: (value: HttpClientResponse) => Thenable<U> | U,
    onRejected?: (error: any) => void
  ): Promise<U> {
    const wrappedOnFulfilled =
      onFulfilled !== undefined
        ? (axiosResponse) =>
            onFulfilled(new AxiosHttpClientResponse(axiosResponse))
        : undefined
    return <Promise<U>>this.axiosPromise.then(wrappedOnFulfilled, onRejected)
  }

  catch<U>(onRejected?: (error: any) => Thenable<U> | U): Promise<U> {
    return <Promise<U>>this.axiosPromise.catch(onRejected)
  }
}
