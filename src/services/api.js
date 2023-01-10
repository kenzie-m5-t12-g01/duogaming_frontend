import axios from 'axios'

const api = axios.create({
    baseURL: 'https://duogamingbackend-production.up.railway.app/api',
    timeout: 5000
})

export default api