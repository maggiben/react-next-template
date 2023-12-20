import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { apiSearch } from '../utils/nextConfigVariables';

class Api {
  private apiInstance: AxiosInstance

  constructor() {
    // eslint-disable-next-line no-console
    console.log('apiSearch', apiSearch);
    this.apiInstance = axios.create({
      baseURL: apiSearch,
    })
  }
  
  async get<T = any>(url: string, params?: object): Promise<T> {
    const response: AxiosResponse<T> = await this.apiInstance.get(url, { params })
    return response.data
  }

  async post<T = any>(url: string, data?: object): Promise<T> {
    const response: AxiosResponse<T> = await this.apiInstance.post(url, data)
    return response.data
  }

  async put<T = any>(url: string, data?: object): Promise<T> {
    const response: AxiosResponse<T> = await this.apiInstance.put(url, data)
    return response.data
  }

  async delete<T = any>(url: string, data?: object): Promise<T> {
    const response: AxiosResponse<T> = await this.apiInstance.delete(url, { data })
    return response.data
  }

  async patch<T = any>(url: string, data?: object): Promise<T> {
    const response: AxiosResponse<T> = await this.apiInstance.patch(url, data)
    return response.data
  }
}

export default new Api()
