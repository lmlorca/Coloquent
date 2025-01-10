import { AxiosInstance } from 'axios'
import * as moxios from 'moxios'
import { Model, PaginationStrategy } from '../../../dist'

export abstract class BaseModel extends Model {
  protected static jsonApiBaseUrl = 'http://coloquent.app/api/'

  constructor() {
    super()
    moxios.install(
      <AxiosInstance>BaseModel.effectiveHttpClient.getImplementingClient()
    )
  }

  public static setPaginationStrategy(
    paginationStrategy: PaginationStrategy
  ): void {
    BaseModel.paginationStrategy = paginationStrategy
  }
}
