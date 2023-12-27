import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function HomeProducts(props) {
    return (
        <>
            {/* <Link href={x.title=='tshirt'?'/tshirt':x.title='hoddies'?'/hoddies':'/'}></Link> */}
            <Link href={props.link}>
                <div className="col">
                    <div className="card h-100 overflow-hidden">
                        <div className="row row-cols-2 h-100 g-3 p-3 bg-opacity-10 bg-black">
                            {
                                props.img.map((x, i) => {
                                    return <div className="col text-center overflow-hidden" key={i}>
                                        <img width={100} height={200} src={x} className=" card-img-top scal" alt="..." />
                                    </div>
                                })
                            }
                            <div className="card-body">
                                <h5 className="card-title">{props.title}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default HomeProducts