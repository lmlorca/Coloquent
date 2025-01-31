import { Builder } from '../Builder'
import { Model } from '../Model'
import { QueryMethods } from '../QueryMethods'
import { PluralResponse } from '../response/PluralResponse'
import { SingularResponse } from '../response/SingularResponse'
import { SortDirection } from '../SortDirection'
import { Relation } from './Relation'

export class ToManyRelation<M extends Model = Model, R extends Model = Model>
  extends Relation<R>
  implements QueryMethods<M, PluralResponse<M>>
{
  get(page?: number): Promise<PluralResponse<M>> {
    return <Promise<PluralResponse<M>>>(
      new Builder(
        this.getType(),
        this.getName(),
        this.getReferringType().effectiveJsonApiType,
        this.getReferringObject().getApiId()
      ).get(page)
    )
  }

  first(): Promise<SingularResponse<M>> {
    return new Builder<M>(
      this.getType(),
      this.getName(),
      this.getReferringType().effectiveJsonApiType,
      this.getReferringObject().getApiId()
    ).first()
  }

  find(id: string | number): Promise<SingularResponse<M>> {
    return new Builder<M>(
      this.getType(),
      this.getName(),
      this.getReferringType().effectiveJsonApiType,
      this.getReferringObject().getApiId()
    ).find(id)
  }

  where(attribute: string, value: string): Builder<M> {
    return new Builder<M>(
      this.getType(),
      this.getName(),
      this.getReferringType().effectiveJsonApiType,
      this.getReferringObject().getApiId()
    ).where(attribute, value)
  }

  with(value: any): Builder<M> {
    return new Builder<M>(
      this.getType(),
      this.getName(),
      this.getReferringType().effectiveJsonApiType,
      this.getReferringObject().getApiId()
    ).with(value)
  }

  public orderBy(
    attribute: string,
    direction?: SortDirection | string
  ): Builder<M> {
    return new Builder<M>(
      this.getType(),
      this.getName(),
      this.getReferringType().effectiveJsonApiType,
      this.getReferringObject().getApiId()
    ).orderBy(attribute, direction)
  }

  option(queryParameter: string, value: string): Builder<M> {
    return new Builder<M>(
      this.getType(),
      this.getName(),
      this.getReferringType().effectiveJsonApiType,
      this.getReferringObject().getApiId()
    ).option(queryParameter, value)
  }
}
