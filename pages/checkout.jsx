
import Link from 'next/link';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


function Checkout() {
  const user = useSelector(state => state.user.user);

  let value;
  if (typeof window !== "undefined") {
    value = JSON.parse(localStorage.getItem('login'))
  }
  
  let match = user?.find(x => x.email == value?.email);
  let dd = { ...match }


  let dispatch = useDispatch()


  let total = [];
  dd.carts?.map((x, i) => {
    let price = x.qty * x.price
    total.push(price)
    return total
  })

  let sum = 0;
  for (let i = 0; i < total.length; i++) {
    sum += total[i]
  }

  return (
    <>
      {
        match ? <>
          <div className="container my-5 pt-5 bg-white shadow  bg-opacity-10 w-50 m-auto">
            <h1 className='text-center border-bottom'>
              <img src="/e-logo.png" className='img-fluid' width={150} alt="" />
            </h1>
            <div className="row g-4 py-2">
              <div className="col">
                <div className="row">
                  <div className="col-4">
                    <h5 className='text-dark  fw-normal px-3'>First Name:</h5>
                  </div>
                  <div className="col">
                    <h5 className='py-1'>{match?.fname}</h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <h5 className='text-dark  fw-normal px-3'>Last Name:</h5>
                  </div>
                  <div className="col">
                    <h5 className='py-1'>{match?.lname}</h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <h5 className='text-dark  fw-normal px-3'>email:</h5>
                  </div>
                  <div className="col">
                    <h5 className='py-1'>{match?.email}</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row">
                  <div className="col-auto">
                    <h5 className='text-dark  fw-normal px-3'>Total Amount:</h5>
                  </div>
                  <div className="col">
                    <h5>{sum}/-</h5>
                  </div>
                </div>
              </div>
            </div>
            <table className='table fs-5'>
              <thead>
                <tr>
                  <th>item</th>
                  <th>Product Name</th>
                  <th>Type</th>
                  <th>Quantity</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody className='table-group-divider'>
                {
                  dd.carts?.map((x, i) => {
                    return <tr key={i}>
                      <td className='py-5'>{i + 1}.</td>
                      <td className='py-5'>{x.title}</td>
                      <td className='py-5'>{x.types}</td>
                      <td className='py-5'>{x.qty}</td>
                      <td className='py-5'>{x.price}/-</td>
                    </tr>
                  })
                }
              </tbody>
            </table>
            <div className='text-end me-5 p-5'>
              <h4>Total Amount : {sum}/- </h4>
            </div>
          </div>
        </> : <>
          <div className="container mt-5 py-5 ">
            <div className="row ">
              <div className="col-md-12">
                <div className="card shadow">
                  <div className="card-body cart">
                    <div className="col-sm-12 empty-cart-cls text-center">
                      <img src="/logincheckout.jpg" height={200} width={300} className="img-fluid mb-4 mr-3" />
                      <h3><strong>Your Are not Login/Register</strong></h3>
                      <h4>First Of all Login to checkOut  :) </h4>
                      <Link href='/login' className="btn btn-primary cart-btn-transform m-3" data-abc="true">Login</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      }

    </>
  )
}

export default Checkout