import Link from 'next/link';
import React, { useState } from 'react'
import { BsDashCircleFill, BsFillPlusCircleFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserData } from '@/redux/action/userAction';
// export const getServerSideProps = async (req, res) => {
//   const respons = await fetch('http://localhost:3001/user');
//   const data = await respons.json();
  
//   return {
//     props: {
//       data: [...data]
//     }
//   }
// }
// export const getServerSideProps = async (req, res) => {
//   const respons = await fetch('http://localhost:3001/user');
//   const data = await respons.json();
//   return {
//     props: {
//       data: [...data]
//     }
//   }
// }
function carts({ data }) {
  // console.log('data',data)
  // const [user, setuser] = useState(data)
  const user = useSelector(state => state.user?.user);
  // let user = data
  let dispatch = useDispatch()


  let value;
  if (typeof window !== "undefined") {
    value = JSON.parse(localStorage.getItem('login'))
  }
  let usercarts = JSON.parse(JSON.stringify(user))
  let match = usercarts?.find(x => x.email == value?.email);
  let dd = { ...match }
  console.log('first', match)
  const removeCart = (id) => {
    let cartsOf = dd.carts?.find(x => x.id == id)
    let carrt = dd?.carts?.filter(x => x.id != cartsOf.id);
    dd.carts = carrt
    dispatch(updateUserData(dd))
  }
  const incrementQty = (x) => {
    let data = { ...x }
    data.qty = 1 + data.qty;

    let index = dd?.carts?.findIndex(x => x.id == data.id);
    dd?.carts?.splice(index, 1, data);
    dispatch(updateUserData(dd))

  }
  const decremenyQty = (x) => {
    let data = { ...x }
    if (data.qty != 0) {
      data.qty = data.qty - 1;
      let index = dd?.carts?.findIndex(x => x.id == data.id);
      dd?.carts?.splice(index, 1, data)
      dispatch(updateUserData(dd))
    }
    if (data.qty <= 0) {
      let index = dd?.carts?.findIndex(x => x.id == data.id);
      dd?.carts?.splice(index, 1)
      dispatch(updateUserData(dd))
    }
  }

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
      <div className='my-5 py-5 container bg-opacity-25 bg-black'>
        {
          dd.carts ? <>
            {
              dd.carts?.length == 0 ? <>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="card">
                        <div className="card-body cart">
                          <div className="col-sm-12 empty-cart-cls text-center">
                            <img src="/empty-cart.png" className="img-fluid mb-4 mr-3" />
                            <h3><strong>Your Cart is Empty</strong></h3>
                            <h4>Add something to make me happy :) </h4>
                            <Link href='/' className="btn btn-primary cart-btn-transform m-3" data-abc="true">continue shopping</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </> :
                <>
                  <div className="container">
                    <div className="row bg-white rounded-top m-0 py-4 d-none d-md-block">
                      <div className="col-3 text-center">
                        <h4> Product</h4>
                      </div>
                      <div className="col-2 text-center ms-auto">
                        <h4>Price</h4>
                      </div>
                    </div>
                  </div>
                  {
                    dd?.carts.map((x, i) => {
                      return <div className='' key={i}>
                        <div className="container">
                          <div className="card border-bottom m-0" >
                            <div className="row  m-0">
                              <div className="col col-lg-3 bg-white rounded-2 text-center">
                                <img width={200} height={250} className="card-img-top" style={{ objectFit: "contain", width: "initial" }} src={x?.img} alt="Card image cap img-fluid" />
                              </div>
                              <div className="col">
                                <div className="card-body">
                                  <h3 className="card-title">{x?.title}</h3>
                                  <div className='row'>
                                    <div className="col-auto mt-4 user-select-none">
                                      <h5>quantity: <span><BsDashCircleFill onClick={() => decremenyQty(x)} className='pointer' /></span><span className='mx-2'>{x.qty}</span><span><BsFillPlusCircleFill onClick={() => incrementQty(x)} className='pointer' /></span></h5>
                                    </div>
                                    <div className="col text-lg-end text-start">
                                      <h4 className='mt-4  clr-orange'>{x?.price}/-</h4>
                                    </div>
                                  </div>
                                  <button className="btn mt-4 col-auto btn-pri" onClick={() => removeCart(x.id)}>Remove</button>
                                  <hr />
                                  <div className="text-secondary">
                                    <h6>About Product</h6>
                                    <p className="card-text">{x?.des}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    })
                  }
                  <div className='row'>
                    <div className="col">
                      <Link href='/' className="btn mt-4 col-auto ms-3 btn-pri ms-3">Continue shopping</Link>
                      <Link href={value ? '/checkout' : '/login'} className="btn mt-4 col-auto ms-3 btn-pri">Process To buy</Link>
                    </div>
                    <div className="col-auto mt-4 me-2">
                      <h4>Sub Total : {sum} </h4>
                    </div>
                  </div>
                </>
            }
          </> : <>
            <div className="container  py-5 ">
              <div className="row ">
                <div className="col-md-12">
                  <div className="card shadow">
                    <div className="card-body cart">
                      <div className="col-sm-12 empty-cart-cls text-center">
                        <img src="/logincheckout.jpg" height={200} width={300} className="img-fluid mb-4 mr-3" />
                        <h3><strong>Your Are not Login/Register</strong></h3>
                        <h4>First Of all Login  :) </h4>
                        <Link href='/login' className="btn btn-primary cart-btn-transform m-3" data-abc="true">Login</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        }
      </div>
    </>
  )
}

export default carts