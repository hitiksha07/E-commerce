import axios from "axios"
import { getproduct } from "../userSlice"

export const getproductApi = () => {
    return async (dispatch) => {
        await axios.get('http://192.168.29.104:3001/product').then(res => {
            // console.log('res',res.data
            dispatch(getproduct(res.data))
        })
    }
}
