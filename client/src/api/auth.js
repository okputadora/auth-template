import { request } from '@/utils/request'

export const login = (credentials) => (
  request({
    method: 'POST',
    url: '/login',
    authenticated: false,
    data: credentials,
  })
)

export default {}
