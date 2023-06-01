
import { addCartsData, updateCartsqty } from '@/redux/action/cartsAction'
import { updateUserData } from '@/redux/action/userAction'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { BsCartFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'

function AddCartButton(props) {
    const [obj, setobj] = useState({ ...props.data })
    const user = useSelector(state => state.user.user);
    const route = useRouter()
    let value;
    if (typeof window !== "undefined") {
        value = JSON.parse(localStorage.getItem('login'));
    }
    let userData = JSON.parse(JSON.stringify(user))
    let match = userData?.find(x => x.email == value?.email);
    let dd = { ...match }
    let isAdded = dd.carts?.find(x => x.id == obj.id)
    // console.log('added', isAdded)
    let dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(getCartsApi())
    //     dispatch(getuserApi())
    //     dispatch(getproductApi())
    // }, [])
    // console.log('data', obj)
    // console.log('match', match)
    const addCartData = () => {
        if (dd) {
            if (!isAdded) {
                dd.carts?.push(obj)
                dispatch(addCartsData(obj))
                dispatch(updateUserData(dd))
                route.push('/carts')
            }
            else {
                let data = { ...isAdded };
                data.qty = 1 + data.qty;
                dispatch(updateCartsqty(data));
                let index = dd?.carts?.findIndex(x => x.id == data.id);
                dd?.carts?.splice(index, 1, data)
                dispatch(updateUserData(dd))
                route.push('/carts')
            }
        }
        else {
            route.push('/login')
        }
    }
    return (
        <>
            {
                isAdded ?
                    <button  className="btn col-auto btn-sec position-relative" onClick={addCartData}><BsCartFill className='fs-2' />Added to Cart <span className='fw-bold position-absolute text-black  qty'>{isAdded.qty}</span>
                    </button>
                    : <button  className="btn col-auto btn-pri" onClick={addCartData}><BsCartFill className='fs-2' />  Add to Cart</button>

            }
        </>
    )
}

export default AddCartButton