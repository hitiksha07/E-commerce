
import AddCartButton from '@/components/AddCartButton'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
export const getServerSideProps = async (req, res) => {
  const respons = await fetch('http://localhost:3001/product');
  const data = await respons.json();
  return {
    props: {
      data: [...data]
    }
  }
}
function shoes({data}) {
  // let dispatch = useDispatch()
  // let allProduct = useSelector(state => state.user.product)
  let shoes = data?.filter(x => x.types == "shoes")

  return (
    <>
      <div className="container mt-5 py-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 h-100  g-3 p-3 bg-opacity-10 bg-black">
          {
            shoes?.map((x, i) => {
              return <div className="col h-100" key={i} >
                <div className="card h-100 overflow-hidden">
                  <Link href={`/products/${x.id}`} className='text-body text-decoration-none ' >
                    <div className='p-3 product-img'>
                      <img src={x.img} className="card-img-top border shadow-sm" alt="..." />
                    </div>
                    <div className="card-body py-0">
                      <h5 className="card-title">{x.title.slice(0, 20)}</h5>
                      <p className="card-text">{x.des}</p>
                    </div>
                  </Link>
                  <div className="card-footer row ">
                    <h4 className='col'>{x.price}/-</h4>
                    <div className="col-auto">
                      <AddCartButton data={x} />
                    </div>
                  </div>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </>
  )
}

export default shoes