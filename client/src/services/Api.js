// @flow

import axios from 'axios'

import type { Axios } from 'axios'

const API_ROOT = 'http://localhost:3001/api'

class ApiService {
  client: Axios

  constructor() {
    const client = axios.create({
      baseURL: API_ROOT,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })

    this.client = client
  }

  get(path: string): Promise<Object> | Promise<Array<Object>> {
    return this.client.get(path).then(response => response.data)
  }

  post(path: string, payload: Object): Promise<Object> {
    return this.client.post(path, payload).then(response => response.data)
  }

  patch(path: string, payload: Object): Promise<Object> {
    return this.client.patch(path, payload).then(response => response.data)
  }

  delete(path: string): Promise<number> {
    return this.client.delete(path).then(response => response.data)
  }
}

export default new ApiService()
