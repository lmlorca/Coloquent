/* Generated from com.transperfect.glvox:userapi:0.0.1-SNAPSHOT */
import { Builder } from '../Builder'
import { Model } from '../Model'
import { PaginationStrategy } from '../PaginationStrategy'

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
  }
}

class UserModel extends SDK {
  static jsonApiType = 'users'
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
  }
}

class BlockModel extends SDK {
  static jsonApiType = 'blocks'
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

class ProjectModel extends SDK {
  static jsonApiType = 'projects'
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

type Segment = {
  data: {
    type: 'segments'
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
      pronunciations?: SegmentPronunciations
      pauses?: SegmentPauses
    }
  }
}

type SegmentPronunciations = {
  selectedText?: string
  interpretAs?: string
  alphabet?: string
  value?: string
  start?: number
  end?: number
}[]

type SegmentPauses = {
  position?: number
  strength?: string
  time?: string
}[]

class SegmentModel extends SDK {
  static jsonApiType = 'segments'
}

type SegmentBuilder = Builder<SegmentModel> & {
  /*
   * Builder instance methods
   */
}

type SegmentResource = typeof SegmentModel & {
  /*
   * Model static methods
   */
}

interface SegmentModel {
  /*
   * Model instance methods
   */
  getAttributes(): Segment['data']['attributes']
}

export const models = {
  users: UserModel,
  blocks: BlockModel,
  projects: ProjectModel,
  segments: SegmentModel,
}

export type Resources = {
  users: UserResource
  blocks: BlockResource
  projects: ProjectResource
  segments: SegmentResource
}
