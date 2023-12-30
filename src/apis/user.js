import { instance } from '@/utils/http.js'
export const loginAPI = ({ username, password }) => {
  return instance({
    url: '/api/login',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    method: 'POST',
    data: {
      username,
      password
    }
  })
}

export const userListAPI = ({ username }) => {
  return instance({
    url: '/user/getList',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: window.sessionStorage.getItem('token')
    },
    method: 'POST',
    data: {
      username
    }
  })
}