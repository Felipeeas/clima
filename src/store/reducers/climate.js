import { GET_CLIMATE } from '../actions/actionTypes'

const initialState = {
    humidity:null,
    pressure:null,
    temp:null,
    temp_max:null,
    temp_min:null,
    lat:null,
    lng:null
    
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CLIMATE:
            return {
                ...state,
                humidity: action.payload.humidity,
                pressure: action.payload.pressure,
                temp: action.payload.temp,
                temp_max: action.payload.temp_max,
                temp_min: action.payload.temp_min,
                lat: action.payload.lat,
                lng: action.payload.lng
                
            }
        default:
            return state
    }
}

export default reducer