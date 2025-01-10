import { Model } from '../Model'
import { ToOneRelation } from '../relation/ToOneRelation'

export class SDK extends Model {
  static jsonApiBaseUrl = ''
}

class ProjectResource extends SDK {
  static jsonApiType = 'projects'
}

class BlockResource extends SDK {
  static jsonApiType = 'blocks'

  project(): ToOneRelation<ProjectResource, this> {
    return this.hasOne(ProjectResource)
  }
}

class UserResource extends SDK {
  static jsonApiType = 'users'
}

export const GLVoiceResources = {
  users: UserResource,
  blocks: BlockResource,
  project: ProjectResource,
}
