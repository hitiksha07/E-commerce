
import AddCartButton from '@/components/AddCartButton'
import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Stationary() {
  let dispatch = useDispatch()
  let allProduct = useSelector(state => state.user.product)
  let stationary = allProduct?.filter(x => x.types =="stationary")
  // useEffect(() => {
  //   dispatch(getproductApi())
  // }, [])
  return (
    <>
     <div className="container mt-5 py-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 h-100  g-3 p-3 bg-opacity-10 bg-black">
        {
            stationary?.map((x, i) => {
              return <Link href={`/products/${x.id}`} className='text-body text-decoration-none ' key={i}>
                <div className="col h-100"  >
                  <div className="card h-100 overflow-hidden">
                    <div className='p-3 product-img'>
                      <img src={x.img} className="card-img-top border shadow-sm" alt="..." />
                    </div>
                    <div className="card-body py-0">
                      <h5 className="card-title">{x.title.slice(0, 20)}</h5>
                      <p className="card-text">{x.des}</p>
                    </div>
                    <div className="card-footer row ">
                      <h4 className='col'>{x.price}/-</h4>
                      <div className="col-auto">
                        <AddCartButton data={x} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            })
          }

        </div>
      </div>
    </>
  )
}

export default Stationary