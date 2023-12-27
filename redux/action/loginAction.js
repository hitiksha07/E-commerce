import axios from "axios"
import { getLoginUser } from "../userSlice"

export const getLoginApi = () => {
    return async (dispatch) => {
        await axios.get('http://localhost:3001/login').then(res => {
            // console.log('res',res.data)
            dispatch(getLoginUser(res.data))
        })
    }
}
export const addLoginApi = (obj) => {
    return async (dispatch) => {
        await axios.post('http://localhost:3001/login',obj).then(res => {
            // console.log('res',res.data)
            dispatch(getLoginApi())
        })
    }
}

export const deleteLoginData = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:3001/login/${id}`).then(res => {
            console.log('delete',res.data)
            dispatch(getLoginApi())
        })
    }
}