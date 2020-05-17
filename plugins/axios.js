import axios from 'axios'
import Cookies from 'js-cookie'
export default axios.create({
    baseURL: process.env.baseUrl,
    headers: {'Authorization': `Bearer ${Cookies.get('jwt')}`},
    // headers: {'Authorization': `Bearer ${store.token('jwt')}`},

})
