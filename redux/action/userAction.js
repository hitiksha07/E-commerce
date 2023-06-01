import axios from "axios"
import { getuser } from "../userSlice"

export const getuserApi = () => {
    return async (dispatch) => {
        await axios.get('http://192.168.29.104:3001/user').then(res => {
            // console.log('res',res.data)
            dispatch(getuser(res.data))
        })
    }
}
export const adduserApi = (obj) => {
    return async (dispatch) => {
        await axios.post('http://192.168.29.104:3001/user',obj).then(res => {
            // console.log('res',res.data)
            dispatch(getuserApi())
        })
    }
}
export const updateUserData = (obj) => {
    return async (dispatch) => {
        await axios.put(`http://192.168.29.104:3001/user/${obj.id}`,obj).then(res => {
            // console.log('res',res.data)
            dispatch(getuserApi());
        })
    }
}