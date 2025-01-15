/* Generated from com.transperfect.glvox:userapi:0.0.1-SNAPSHOT */
import { Builder } from '../Builder'
import { Model } from '../Model'
import { PaginationStrategy } from '../PaginationStrategy'
import { ToManyRelation } from '../relation/ToManyRelation'
import { ToOneRelation } from '../relation/ToOneRelation'

export class SDK extends Model {
  static jsonApiBaseUrl = ''
  static paginationStrategy = PaginationStrategy.PageBased
  static paginationPageNumberParamName = 'page[offset]'
  static paginationPageSizeParamName = 'page[limit]'
}

type User = {
  data: {
    type: 'users'
    id: string
    attributes: {
      name?: string
      username?: string
      firstName?: string
      lastName?: string
      role?: string
      status?: string
      createdDate?: string
      updatedDate?: string
      previousLoginDate?: string
      lastLoginDate?: string
    }
    relationships?: {}
  }
}

type UserIncluded = null

class UserModel extends SDK {
  static jsonApiType = 'users'

  // Relationships

  setAttributes(attributes?: Partial<User['data']['attributes']>) {
    this.setAllAttributes(attributes)
  }
}

type UserBuilder = Builder<UserModel> & {
  /*
   * Builder instance methods
   */
}

type UserResource = typeof UserModel & {
  /*
   * Model static methods
   */
}

interface UserModel {
  /*
   * Model instance methods
   */
  getAttributes(): User['data']['attributes']
}

type TextSegment = {
  data: {
    type: 'textSegments'
    id: string
    attributes: {
      operationId?: string
      createdDate?: string
      updatedDate?: string
      order?: number
      text?: string
      pitch?: number
      speed?: number
      emotion?: number
      resemblance?: number
      emphasis?: number
      enrichment?: boolean
      pronunciations?: TextSegmentPronunciations
      pauses?: TextSegmentPauses
    }
    relationships?: {}
  }
}

type TextSegmentPronunciations = {
  selectedText?: string
  interpretAs?: string
  alphabet?: string
  value?: string
  start?: number
  end?: number
}[]

type TextSegmentPauses = {
  position?: number
  strength?: string
  time?: string
}[]

type TextSegmentIncluded = null

class TextSegmentModel extends SDK {
  static jsonApiType = 'textSegments'

  // Relationships

  setAttributes(attributes?: Partial<TextSegment['data']['attributes']>) {
    this.setAllAttributes(attributes)
  }
}

type TextSegmentBuilder = Builder<TextSegmentModel> & {
  /*
   * Builder instance methods
   */
}

type TextSegmentResource = typeof TextSegmentModel & {
  /*
   * Model static methods
   */
}

interface TextSegmentModel {
  /*
   * Model instance methods
   */
  getAttributes(): TextSegment['data']['attributes']
}

type Block = {
  data: {
    type: 'blocks'
    id: string
    attributes: {
      name?: string
      category?: string
      createdDate?: string
      updatedDate?: string
      segmentsCount?: number
    }
    relationships?: {}
  }
}

type BlockIncluded = null

class BlockModel extends SDK {
  static jsonApiType = 'blocks'

  // Relationships

  setAttributes(attributes?: Partial<Block['data']['attributes']>) {
    this.setAllAttributes(attributes)
  }
}

type BlockBuilder = Builder<BlockModel> & {
  /*
   * Builder instance methods
   */
}

type BlockResource = typeof BlockModel & {
  /*
   * Model static methods
   */
}

interface BlockModel {
  /*
   * Model instance methods
   */
  getAttributes(): Block['data']['attributes']
}

type Project = {
  data: {
    type: 'projects'
    id: string
    attributes: {
      name?: string
      jobId?: string
      description?: string
      projectType?: string
      blocksCount?: number
      segmentsCount?: number
      createdDate?: string
      updatedDate?: string
      status?: string
      isLegacy?: boolean
      author?: ProjectAuthor
      importTasks?: ProjectImportTasks
      speakers?: ProjectSpeakers
      pronunciations?: ProjectPronunciations
    }
    relationships?: {
      organization: {
        data: {
          type: 'organizations'
          id: string
        }
      }
      linguists: {
        data: {
          type: 'users'
          id: string
        }[]
      }
      projectManagers: {
        data: {
          type: 'users'
          id: string
        }[]
      }
    }
  }
}

type ProjectAuthor = {
  name?: string
  username?: string
  firstName?: string
  lastName?: string
  role?: string
  status?: string
  createdDate?: string
  updatedDate?: string
  previousLoginDate?: string
  lastLoginDate?: string
  id?: string
}

type ProjectImportTasks = {
  status?: string
  fileName?: string
  fileContentType?: string
  message?: string
  id?: string
}[]

type ProjectSpeakers = {
  voiceId?: string
  id?: string
}[]

type ProjectPronunciations = {
  selectedText?: string
  interpretAs?: string
  alphabet?: string
  value?: string
  start?: number
  end?: number
}[]

type ProjectIncluded = null | Organization['data'] | User['data']

class ProjectModel extends SDK {
  static jsonApiType = 'projects'

  // Relationships
  organization(): ToOneRelation<OrganizationModel> {
    return this.hasOne(OrganizationModel)
  }
  getOrganization(): OrganizationModel {
    return this.getRelation('organization')
  }
  linguists(): ToManyRelation<UserModel> {
    return this.hasMany(UserModel)
  }
  getLinguists(): UserModel[] {
    return this.getRelation('linguists')
  }
  projectManagers(): ToManyRelation<UserModel> {
    return this.hasMany(UserModel)
  }
  getProjectManagers(): UserModel[] {
    return this.getRelation('projectManagers')
  }

  setAttributes(attributes?: Partial<Project['data']['attributes']>) {
    this.setAllAttributes(attributes)
  }
}

type ProjectBuilder = Builder<ProjectModel> & {
  /*
   * Builder instance methods
   */
}

type ProjectResource = typeof ProjectModel & {
  /*
   * Model static methods
   */
}

interface ProjectModel {
  /*
   * Model instance methods
   */
  getAttributes(): Project['data']['attributes']
}

type Organization = {
  data: {
    type: 'organizations'
    id: string
    attributes: {
      name?: string
      accountManagerEmail?: string
      usersCount?: number
      voicesCount?: number
      projectAId?: string
      contactEmail?: string
      salesTicket?: string
      notes?: string
      isJobIdRequired?: boolean
      createdDate?: string
      updatedDate?: string
      status?: string
      organizationQuota?: number
      retentionDays?: string
    }
    relationships?: {}
  }
}

type OrganizationIncluded = null

class OrganizationModel extends SDK {
  static jsonApiType = 'organizations'

  // Relationships

  setAttributes(attributes?: Partial<Organization['data']['attributes']>) {
    this.setAllAttributes(attributes)
  }
}

type OrganizationBuilder = Builder<OrganizationModel> & {
  /*
   * Builder instance methods
   */
}

type OrganizationResource = typeof OrganizationModel & {
  /*
   * Model static methods
   */
}

interface OrganizationModel {
  /*
   * Model instance methods
   */
  getAttributes(): Organization['data']['attributes']
}

export const models = {
  users: UserModel,
  textsegments: TextSegmentModel,
  blocks: BlockModel,
  projects: ProjectModel,
  organizations: OrganizationModel,
}

export type Resources = {
  users: UserResource
  textsegments: TextSegmentResource
  blocks: BlockResource
  projects: ProjectResource
  organizations: OrganizationResource
}
