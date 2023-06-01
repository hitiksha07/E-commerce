import { adduserApi, getuserApi } from '@/redux/action/userAction';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';

function Signup() {
  let user = useSelector(state => state.user.user);

  let dispatch = useDispatch();

  let blankObj = {
    id: 0, fname: '', lname: '', email: '', password: '', phone: '',carts:[]
  }

  const [obj, setobj] = useState({ ...blankObj });
  // console.log('user',user)
  const [count, setcount] = useState(0);
  const router = useRouter();

  // useEffect(() => {
  //   dispatch(getuserApi())
  // }, []);
  let match = user?.find(x => x.email == obj.email);
  const Savedata = (e) => {
    e.preventDefault();
    if (match?.email == obj?.email) {
      Swal.fire('you are already register')
    }
    else {
      if (obj.id == '0') {
        let c = uuidv4();
        setcount(c)
        obj.id = c;
        // console.log(e.target.value)
        if (obj.fname != '' && obj.lname != '' && obj.email != '' && obj.password != '' && obj.phone != '') {
          // console.log('pass')
          dispatch(adduserApi(obj));
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
          setTimeout(() => {
            router.push('/login');
          }, 1400);
        }
        else {
          // console.log('error')
          console.log(obj);
          Swal.fire('plz fill all fild')
        }
        setobj({ ...blankObj });
      }
    }
  }

  const getvalue = (e) => {
    obj[e.target.name] = e.target.value
    setobj({ ...obj });
    // console.log('firstobj',obj)
  }

  return (
    <>
      <div className='container mt-5 py-5'>
        <div className="container bg-dark bg-opacity-10 p-5 w-50 m-auto mt-3">
          <h1 className='text-center pb-4'>Registration..</h1>
          <form action="" className='' onSubmit={Savedata}>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="fname" onChange={getvalue} value={obj.fname} name='fname' placeholder="First Name" />
              <label htmlFor="fname">First Name</label>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="lname" onChange={getvalue} value={obj.lname} name='lname' placeholder="Last Name" />
              <label htmlFor="lname">Last Name</label>
            </div>
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="floatingInput" onChange={getvalue} value={obj.email} name='email' placeholder="name@example.com" />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input type="number" className="form-control" id="phone" onChange={getvalue} name='phone' value={obj.phone} placeholder="Phone No." />
              <label htmlFor="phone">Phone No.</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password" className="form-control" id="floatingPassword" name='password' value={obj.password} onChange={getvalue} placeholder="Password" />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className='text-center '>
              <button className='btn btn-pri fs-5' type='submit'>Register..</button>
            </div>
          </form>
          <hr />
          <p className='text-center mt-5'>Already Have An Account......<Link href='/login'>Login</Link></p>
        </div>
      </div>
    </>
  )
}

export default Signup