import { ToManyRelation, ToOneRelation } from '../../../dist'
import { BaseModel } from './BaseModel'

export class Hero extends BaseModel {
  protected static jsonApiType = 'heros'

  public setName(name: string) {
    this.setAttribute('name', name)
  }

  public getName() {
    return this.getAttribute('name')
  }

  public bestFriend(): ToOneRelation {
    return this.hasOne(Hero)
  }

  public friends(): ToManyRelation {
    return this.hasMany(Hero)
  }

  public foes(): ToManyRelation {
    return this.hasMany(Hero, 'enemies')
  }
}
