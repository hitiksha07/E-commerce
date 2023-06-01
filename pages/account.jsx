import { deleteLoginData } from '@/redux/action/loginAction';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { BsPersonCircle } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

function account() {
    const user = useSelector(state => state.user.user);
    const router = useRouter();


    // useEffect(() => {
    //     dispatch(getuserApi())
    // }, [])

    let value;
    if (typeof window !== "undefined") {
        value = JSON.parse(localStorage.getItem('login'))
    }
    let dd = user?.find(x => x.email == value?.email)
    let match = { ...dd }
    let dispatch = useDispatch()

    const logout = () => {
        dispatch(deleteLoginData(value.id))
        localStorage.removeItem('login');
        setTimeout(() => {
            router.push('/')
        }, 500);
    }
    return (
        <>
            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-3">
                        <h3>First Name:</h3>
                    </div>
                    <div className="col">
                        <h3>{match.fname}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <h3>Last Name:</h3>
                    </div>
                    <div className="col">
                        <h3>{match.lname}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <h3>Email:</h3>
                    </div>
                    <div className="col">
                        <h3>{match.email}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <h3>Phone No:</h3>
                    </div>
                    <div className="col">
                        <h3>{match.phone}</h3>
                    </div>
                </div>
                <button onClick={logout} className='btn p-2 btn-sec link-clr nav-link'>
                    <BsPersonCircle />Logout
                </button>
            </div>
        </>
    )
}

export default account