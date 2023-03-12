import request from '@/utils/request'

export function getCategories(params) {
  return request({
    url: '/v1/categories',
    method: 'get',
    params: params
  })
}

export function getRanks(params) {
  return request({
    url: '/v1/ranks',
    method: 'get',
    params: params
  })
}

export function getRankSofts(params) {
  return request({
    url: '/v1/rank-softs',
    method: 'get',
    params: params
  })
}

export function getRankById(params) {
  return request({
    url: `/v1/rank/${params.rank_id}`,
    method: 'get',
    params: params
  })
}

export function getSofts(params) {
  return request({
    url: '/v1/softs',
    method: 'get',
    params: params
  })
}

export function getSoftsById(params) {
  return request({
    url: `/v1/softs/${params.id}`,
    method: 'get',
    params: params
  })
}

export function getRecommands(params) {
  return request({
    url: '/v1/recommands',
    method: 'get',
    params: params
  })
}
