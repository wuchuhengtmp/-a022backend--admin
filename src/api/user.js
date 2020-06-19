import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/authorizations',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/me',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
