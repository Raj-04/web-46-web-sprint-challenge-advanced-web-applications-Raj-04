import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = () => {
    return axiosWithAuth()
    .get('/api/colors')
    .then((res) => {
        console.log('fetchColorService', res)
        return(res.data)
    })
    .catch((err) => {
        console.error(err)
    })
}

export default fetchColorService;