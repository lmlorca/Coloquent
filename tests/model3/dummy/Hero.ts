import { ToManyRelation } from '../../../dist'
import { AntiHero } from './AntiHero'
import { BaseModel } from './BaseModel'

export class Hero extends BaseModel {
  protected static jsonApiType = 'heros'

  public antiHeroes(): ToManyRelation {
    return this.hasMany(AntiHero, 'anti-heroes')
  }

  public getAntiHeroes(): Array<AntiHero> {
    return this.getRelation('antiHeroes')
  }
}
