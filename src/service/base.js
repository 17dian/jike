import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8088/'

export function get (url, params) {
    return axios
      .get(url, {
        params
      })
      .then(res => {
        const serverData = res.data
        if (serverData.code === ERR_OK) {
          return serverData.result
        }
      })
      .catch(e => {
        console.log(e)
      })
  }