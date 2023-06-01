import Link from 'next/link'
import React from 'react'

function Privacy() {
    return (
        <>
            <div className="container my-5 py-5">
                <h1>Privacy Policy</h1>
                <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.

                    We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</p>
                <h3>Interpretation and Definitions</h3>
                <div>
                    <h4>Interpretation</h4>
                    <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                </div>
                <div>
                    <h4>Definitions</h4>
                    <p>For the purposes of this Privacy Policy:</p>
                    <p><span className='fw-bold'>Account</span> means a unique account created for You to access our Service or parts of our Service.</p>
                    <p><span className='fw-bold'>Company</span>  (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to e-commerce, surat, Gujarat.</p>
                    <p><span className='fw-bold'>Cookies</span> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</p>
                    <p><span className='fw-bold'>Country</span>  refers to: Uttar Pradesh, India</p>
                    <p><span className='fw-bold'>Device</span>   means any device that can access the Service such as a computer, a cellphone or a digital tablet.</p>
                    <p><span className='fw-bold'>Personal</span>   Data is any information that relates to an identified or identifiable individual.</p>
                </div>
                <div className="text-end">
                    <Link href='/' className='btn btn-pri'>Back to Shopping</Link>
                </div>
            </div>
        </>

    )
}

export default Privacy