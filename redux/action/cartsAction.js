import axios from "axios"
import { getcarts } from "../userSlice"

export const getCartsApi = () => {
    return async (dispatch) => {
        await axios.get('http://192.168.29.104:3001/carts').then(res => {
            // console.log('res',res.data)
            dispatch(getcarts(res.data));
        })
    }
}
export const addCartsData = (obj) => {
    return async (dispatch) => {
        await axios.post('http://192.168.29.104:3001/carts',obj).then(res => {
            // console.log('res',res.data)
            dispatch(getCartsApi());
        })
    }
}
export const updateCartsqty = (obj) => {
    return async (dispatch) => {
        await axios.put(`http://192.168.29.104:3001/carts/${obj.id}`,obj).then(res => {
            // console.log('res',res.data)
            dispatch(getCartsApi());
        })
    }
}

export const deleteCartsData = (id) => {
    return (dispatch) => {
        axios.delete(`http://192.168.29.104:3001/carts/${id}`).then(res => {
            // console.log('delete',res.data)
            dispatch(getCartsApi())
        })
    }
};