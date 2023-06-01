import React from 'react'

function Contact() {
  return (
    <>
      <div className="container mt-5 py-5 bg-black bg-opacity-10">
        <div className="bg-white m-2 p-4">
          <div className='text-center'>
            <h1>Lets talk about everything!</h1>
            <img src="/e-commerce-logo.png" alt="" />
            <h3>Feel free to ask us anything!</h3>
            <p>If you have any questions regarding your order, feel free to send email, call or Whatsapp us on our support number</p>
          </div>
          <div className="row row-cols-1 row-cols-lg-2 g-5 p-5">
            <div className="col ">
              <div className="ms-lg-5 ps-lg-5">
                <h5>Corporate Address</h5>
                <p>CWH Solutions</p>
                <p>94, Ghair Saifuddin Domehla Road,<br />
                  Rampur, Uttar Pradesh, 244901</p>
              </div>
            </div>
            <div className="col">
              <div className=" ms-lg-5 ps-lg-5">
                <h5>Customer Support</h5>
                <p>Call/Whatsapp: +91 7**********</p>
                <p>Email: email@gmail.in</p>
                <p> Morning: 10AM - 6PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact