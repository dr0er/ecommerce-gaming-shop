const connections = {
  development: 'https://gorest.co.in/public/v1/',
  production: 'https://gorest.co.in/public/v1/',
  test: 'https://gorest.co.in/public/v1/',
}

const handleResponse = (response: {
  ok: boolean
  statusText?: string
  json: () => Promise<any>
}) => {
  return response.json().then((json) => {
    if (!response.ok) {
      const error = (json && json.message) || response.statusText
      return Promise.reject(error)
    }

    return Promise.resolve(json)
  })
}

class Connection {
  private base_url: string
  private headers: { 'Content-Type': string; Authorization?: string }

  constructor(baseUrl: string) {
    this.base_url = baseUrl
    this.headers = { 'Content-Type': 'application/json' }
  }

  setAuthToken(token: string) {
    if (token && token.indexOf('Bearer ') === 0) {
      this.headers.Authorization = token
    } else {
      this.headers.Authorization = token
    }
  }

  get = <ReturnType>(url: string): Promise<ReturnType> => {
    const requestOptions = {
      method: 'GET',
      headers: this.headers,
    }
    return fetch(this.base_url + url, requestOptions).then(handleResponse)
  }

  post = <BodyType, ReturnType>(url: string, body: BodyType): Promise<ReturnType> => {
    const requestOptions = {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(body),
    }
    return fetch(this.base_url + url, requestOptions).then(handleResponse)
  }

  put = <BodyType, ReturnType>(url: string, body: BodyType): Promise<ReturnType> => {
    const requestOptions = {
      method: 'PUT',
      headers: this.headers,
      body: JSON.stringify(body),
    }
    return fetch(this.base_url + url, requestOptions).then(handleResponse)
  }

  patch = <BodyType, ReturnType>(url: string, body: BodyType): Promise<ReturnType> => {
    const requestOptions = {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(body),
    }
    return fetch(this.base_url + url, requestOptions).then(handleResponse)
  }

  remove = <ReturnType>(url: string): Promise<ReturnType> => {
    const requestOptions = {
      method: 'DELETE',
      headers: this.headers,
    }
    return fetch(this.base_url + url, requestOptions).then(handleResponse)
  }
}

const conn = new Connection(connections[process.env.NODE_ENV])

export default conn
