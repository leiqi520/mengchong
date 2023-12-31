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

export const getListAPI = () => {
  return instance({
    url: '/pet/getList',
    method: 'GET',
  })
}

export const getCatAPI = () => {
  return instance({
    url: '/pet/getCat',
    method: 'GET',
  })
}

export const getDogAPI = () => {
  return instance({
    url: '/pet/getDog',
    method: 'GET',
  })
}

export const getOtherAPI = () => {
  return instance({
    url: '/pet/getOther',
    method: 'GET',
  })
}

export const getGerenAPI = ({ username }) => {
  return instance({
    url: '/pet/getGeren',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data: { username },
    method: 'POST',
  })
}