import axios from 'axios'

export function fetchUser () {
  return	axios.get('https://www.apiopen.top/meituApi?page=1')
}
