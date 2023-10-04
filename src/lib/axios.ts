import axios, { AxiosResponse } from 'axios'
import { getRefreshToken, getToken, storeTokens } from '../util/sessionMethods'

const baseUrl = 'http://localhost:3333'

export const api = axios.create({
  baseURL: baseUrl,
})

api.interceptors.request.use(
  (config) => {
    const token = getToken()

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (err) => {
    return Promise.reject(err)
  },
)

const ignoredRoutes = ['/sessions', '/token/refresh']

async function tryRefreshToken() {
  const token = getRefreshToken()

  return axios
    .get(`${baseUrl}/token/refresh`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      storeTokens(response.data.token, response.data.refreshToken)
    })
}

async function error401handling(error: AxiosResponse) {
  await tryRefreshToken().then(() => api(error.config))
  return Promise.reject(error)
}

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      ignoredRoutes.includes(error.config.url) &&
      error.response.status === 401
    ) {
      return error401handling(error)
    }
  },
)
