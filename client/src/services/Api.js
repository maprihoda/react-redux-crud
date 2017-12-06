import axios from 'axios'

const API_ROOT = 'http://localhost:3001/api'

class ApiService {
  constructor() {
    const client = axios.create({
      baseURL: API_ROOT,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })

    client.interceptors.response.use(
      this.handleSuccess, this.handleError
    )
    this.client = client
  }

  handleSuccess(response) {
    return response
  }

  handleError(error) {
    return Promise.reject(error)
  }

  get(path, callback) {
    return this.client.get(path).then(
      response => callback(response.data)
    )
  }

  post(path, payload, callback) {
    return this.client.post(path, payload).then(
      response => callback(response.data)
    )
  }

  patch(path, payload, callback) {
    return this.client.patch(path, payload).then(
      response => callback(response.data)
    )
  }

  delete(path, callback) {
    return this.client.delete(path).then(
      response => callback(response.data)
    )
  }
}

export default new ApiService()
