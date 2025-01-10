export class FilterSpec {
  private attributes: string[]

  private value: string

  constructor(...value: string[]) {
    this.value = value.pop() || ''
    this.attributes = value
  }

  getFilters(): string[] {
    return this.attributes
  }

  toString(): string {
    return this.attributes.join(',')
  }

  getQuery(): string {
    return `filter${this.attributes.reduce((acc, val) => (acc += `[${val}]`), '')}`
  }

  getValue(): string {
    return this.value
  }
}
