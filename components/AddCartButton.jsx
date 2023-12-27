import { updateUserData } from '@/redux/action/userAction'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { BsCartFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
// export const getServerSideProps = async (req, res) => {
//     const respons = await fetch('http://localhost:3001/user');
//     const data = await respons.json();
//     return {
//       props: {
//         data: [...data]
//       }
//     }
//   }
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
    // console.log('match',match)
    let dd = { ...match }
    let isAdded = dd.carts?.find(x => x.id == obj.id)
    let dispatch = useDispatch()
    const addCartData = () => {
        if (match) {
            console.log('first')
            if (!isAdded) {
                dd.carts?.push(obj)
                dispatch(updateUserData(dd))
            }
            else {
                let data = { ...isAdded };
                data.qty = 1 + data.qty;
                let index = dd?.carts?.findIndex(x => x.id == data.id);
                dd?.carts?.splice(index, 1, data)
                dispatch(updateUserData(dd))
            }
            // route.push('/carts')
        }
        else {
            // route.push('/login')
        }
    }
    return (
        <>
            {
                isAdded ?
                    <button className="btn col-auto btn-sec position-relative" onClick={addCartData}><BsCartFill className='fs-2' />Added to Cart <span className='fw-bold position-absolute text-black  qty'>{isAdded.qty}</span>
                    </button>
                    : <button className="btn col-auto btn-pri" onClick={addCartData}><BsCartFill className='fs-2' />  Add to Cart</button>

            }
        </>
    )
}

export default AddCartButton