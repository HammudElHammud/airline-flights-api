import axios from 'axios';
import {SCHIPHOL_URL, SCHIPHOL_APP_APP_ID , SCHIPHOL_APP_APP_KEY} from './config'



export function createAxios(baseUrl = SCHIPHOL_URL) {
    axios.defaults.baseURL = baseUrl
    axios.defaults.headers.common = {
        ResourceVersion: 'v4',
        app_id: SCHIPHOL_APP_APP_ID,
        app_key: SCHIPHOL_APP_APP_KEY
    }
    return axios
}