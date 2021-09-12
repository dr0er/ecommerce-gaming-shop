import conn from './api'

const endpoint = 'users'

const get = (): Promise<any> => {
  return conn.get(endpoint)
}

export default { get }
