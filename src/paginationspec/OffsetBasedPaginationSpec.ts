import { QueryParam } from '../QueryParam'
import { PaginationSpec } from './PaginationSpec'

export class OffsetBasedPaginationSpec extends PaginationSpec {
  protected pageOffsetParamName: string

  protected pageLimitParamName: string

  protected pageLimit: number

  protected pageOffset: number

  private queryParams: QueryParam[] = []

  constructor(
    pageOffsetParamName: string,
    pageLimitParamName: string,
    limit: number
  ) {
    super()
    this.pageOffsetParamName = pageOffsetParamName
    this.pageLimitParamName = pageLimitParamName
    this.pageLimit = limit
  }

  public getPaginationParameters(): QueryParam[] {
    this.queryParams = []

    if (this.pageOffset !== undefined) {
      this.queryParams.push(
        new QueryParam(`${this.pageOffsetParamName}`, this.pageOffset)
      )
      this.queryParams.push(
        new QueryParam(`${this.pageLimitParamName}`, this.pageLimit)
      )
    }

    return this.queryParams
  }

  public setPage(page: number) {
    page = Math.max(page, 1)
    this.pageOffset = (page - 1) * this.pageLimit
  }

  public setPageLimit(pageLimit: number) {
    this.pageLimit = pageLimit
  }
}
