import axios from 'axios'
import qs from 'querystring'

const get = ({url , params}) => {
    return axios({
        url,
        params,
        method: 'get'
    })
    .then(res => {
        return res.data
    })
    .catch((err) => {
        return err.message
    })
}
const post = ({url, data, headers = {}}) => {
    data = qs.stringify(data)
    return axios({
      url,
      method: 'POST',
      data,
      headers: {
        ...headers,
        'content-type': 'application/x-www-form-urlencoded'
      }
    })
    .then(result => {
      return result
    })
  }

export {
    get,
    post
}