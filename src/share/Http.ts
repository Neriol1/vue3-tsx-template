// import axios, { AxiosInstance } from 'axios'

// export class Http{
//   instance: AxiosInstance
//   constructor(baseURL: string){
//     this.instance = axios.create({
//       baseURL,
//     })
//   }
//   get(){
    
//   }
// }
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
type GetConfig = Omit<AxiosRequestConfig, 'url' | 'params' | 'method'>
type PostConfig = Omit<AxiosRequestConfig, 'url' | 'data' | 'method'>
type PatchConfig = Omit<AxiosRequestConfig, 'url' | 'data' | 'method'>
type DeleteConfig = Omit<AxiosRequestConfig, 'url' | 'method' | 'params'>

export class Http {
  instance: AxiosInstance
  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
    })
  }

  get<R = unknown>(url: string, query?: Record<string, JSONValue>, config?: GetConfig) {
    return this.instance.request<R>({ ...config, url, params: query, method: 'GET' })
  }

  post<R = unknown>(url: string, data?: Record<string, JSONValue>, config?: PostConfig) {
    return this.instance.request<R>({ ...config, url, data, method: 'POST' })
  }

  patch<R = unknown>(url: string, data?: Record<string, JSONValue>, config?: PatchConfig) {
    return this.instance.request<R>({ ...config, url, data, method: 'PATCH' })
  }

  delete<R = unknown>(url: string, query?: Record<string, string>, config?: DeleteConfig) {
    return this.instance.request<R>({ ...config, url, params: query, method: 'DELETE' })
  }
}

export const http = new Http('/')
