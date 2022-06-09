import { AxiosInstance } from 'axios'
import { PostRessource } from 'utils/ressources/PostRessource'
import { ApiResponse } from 'utils/repositories/ApiResponse'

export class PostRepository {
  private client: AxiosInstance
  protected url: string

  constructor(clientInstance: AxiosInstance) {
    this.client = clientInstance
    this.url = '/api/posts'
  }

  public async getAll(): Promise<ApiResponse<[PostRessource]>> {
    try {
      return await this.client.get(this.url)
    } catch (error) {
      throw new Error(error.message)
    }
  }
}