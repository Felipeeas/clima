import { GET_CLIMATE } from './actionTypes'
import axios from 'axios'

const authBaseURL = 'http://api.openweathermap.org/data/2.5/find?'
const API_KEY = '1a23d949b8592bb630f660a596c9fb2c'

export const getClimate = payload => {
    return (dispatch) => {

        axios.get(`${authBaseURL}lat=${payload.lat}&lon=${payload.lng}&cnt=15&APPID=${API_KEY}`)
            .then(res => {

                const dados = {...res.data.list[0].main, lat:payload.lat, lng:payload.lng }

                dispatch(Climate(dados));
            })
    }
}

export const Climate = clima => {
    return {
        type: GET_CLIMATE,
        payload: clima
    }
}

