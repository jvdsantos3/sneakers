export function storeTokens(token: string, refreshToken: string) {
  sessionStorage.setItem('@sneakers_token', token)
  sessionStorage.setItem('@sneakers_refresh_token', refreshToken)
}

export function removeTokens() {
  sessionStorage.removeItem('@sneakers_token')
  sessionStorage.removeItem('@sneakers_refresh_token')
}

export function getToken() {
  return sessionStorage.getItem('@sneakers_token')
}

export function getRefreshToken() {
  return sessionStorage.getItem('@sneakers_refresh_token')
}
