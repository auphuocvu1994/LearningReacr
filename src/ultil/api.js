import axios from "axios"; //Sử dụng axios
import qs from 'qs';
const BASE_URL = 'https://randomuser.me/api/'

export const getListUser = (
    {
        results = 10,
        page = 1,
        seed = '' }
) => {
    const queryString = qs.stringify({ results, page, seed });
    return axios.get(`${BASE_URL}?${queryString}`).then(res => res.data);
}