import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID vNHTXpIzaj0wdDSOT0eCx5oMc-ux_QLRMFI0I1EBd5k'
    }
})