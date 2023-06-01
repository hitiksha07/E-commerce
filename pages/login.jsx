
import { addLoginApi, getLoginApi } from '@/redux/action/loginAction';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';

function Login() {
  let blankLoginObj = {
    id: 0, email: '', password: ''
  }
  const [LoginObj, setLoginObj] = useState({ ...blankLoginObj });
  const [loginarray, setloginarray] = useState([]);
  const [count, setcount] = useState(0)
  
  const router = useRouter();

  let user = useSelector((state) => state.user.user);
  const carts = useSelector(state => state.user?.carts);
  let cartUpdate = JSON.parse(JSON.stringify(carts))
  let value;
  if (typeof window !== "undefined") {
    value = JSON.parse(localStorage.getItem('login'))
  }

  let dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCartsApi())
  //   dispatch(getuserApi())
  //   dispatch(getLoginApi())
  // }, [])

  const getvalue = (e) => {
    LoginObj[e.target.name] = e.target.value;
    setLoginObj({ ...LoginObj })
  }
  let match = user?.find(x => x.email == LoginObj?.email);
  // console.log(match)
  const loginData = (e) => {
    e.preventDefault()
    if (match) {
      if (match?.password != LoginObj?.password) {
        // Swal.fire('plz enter correct pass')
        alert('plz enter correct pass')
      }
      else if (match?.password == LoginObj?.password) {
        if (LoginObj.id == 0) {
          // cartUpdate?.map((x, i) => {
          //   match?.carts?.push(x?.id)
          //   return dispatch(updateCartsqty(x))
          // });

          let c1 = uuidv4();
          setcount(c1);
          LoginObj.id = c1;
          LoginObj.userId = match.id
          loginarray.push(LoginObj)
          setloginarray([...loginarray]);
          dispatch(addLoginApi(LoginObj));
          // console.log(LoginObj)
          localStorage.setItem('login', JSON.stringify(LoginObj))
          setLoginObj({ ...blankLoginObj });
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
          setTimeout(() => {
            router.push('/');
          }, 1400);
        }
      }
    }
    else {
      // Swal.fire('You are not Register')
      alert('You are not Register')
    }
    // console.log(loginarray)
  }
  return (
    <>
      <div className='container mt-5 py-5'>
        <div className="container bg-dark bg-opacity-10 p-5 w-50 m-auto mt-3">
          <h1 className='text-center pb-4'>Login..</h1>
          <form action="" className='' onSubmit={loginData}>
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="floatingInput" name='email' value={LoginObj.email} onChange={getvalue} placeholder="name@example.com" />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password" className="form-control" id="floatingPassword" name='password' value={LoginObj.password} onChange={getvalue} placeholder="Password" />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className='text-center '>
              <button className='btn btn-pri fs-5' type='submit'>Login..</button>
            </div>
          </form>
          <hr />
          <p className='text-center mt-5'>Don't Have An Account......<Link href='/registration'>Register Now</Link></p>
        </div>
      </div>
    </>
  )
}

export default Login