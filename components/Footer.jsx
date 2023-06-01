import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTshirt, FaTwitterSquare } from "react-icons/fa";
function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container py-5">
                    <div className="row g-5 row-cols-1 row-cols-md-2 row-cols-lg-4">
                        <div className="col">
                            <div>
                                <Link href='/'>
                                    <img src="/e-logo.png" alt="" className='img-fluid' />
                                </Link>
                                <div>
                                    <p className='text-white py-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et dolores tempora maiores unde molestiae excepturi officiis saepe eum voluptates iure ipsa ullam illo eius ut rerum, illum, necessitatibus consectetur id sapiente tempore. Fuga, distinctio aliquid.</p>
                                </div>
                                <div className='footer-icon'>
                                    <span><FaFacebookSquare /></span>
                                    <span> <FaInstagramSquare /></span>
                                    <span> <FaLinkedin /></span>
                                    <span> <FaTwitterSquare /></span>
                                </div>
                            </div>
                        </div>
                        <div className="col ps-5 text-center">
                            <div>
                                <p className='text-opacity-50 text-white '>Our Services</p>
                                <ul className='list-unstyled link-clr-footer'>
                                <li> <Link href='/about' className='text-decoration-none'>About Us</Link></li>
                                <li> <Link href='/' className='text-decoration-none'>Careers</Link></li>
                                <li> <Link href='/' className='text-decoration-none'>Services</Link></li>
                                <li> <Link href='/' className='text-decoration-none'>Our Work </Link></li>
                                <li> <Link href='/' className='text-decoration-none'>Help Center</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col text-center">
                            <div>
                                <p className='text-opacity-50 text-white'>Company</p>
                                <ul className='list-unstyled link-clr-footer'>
                                <li> <Link href='/term&condition' className='text-decoration-none'>Terms & Condition</Link></li>
                                <li> <Link href='/contact' className='text-decoration-none'>Contact Us</Link></li>
                                <li> <Link href='/privacy' className='text-decoration-none'>Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col text-center">
                            <div>
                                <p className='text-opacity-50 text-white'>Shope</p>
                                <ul className='list-unstyled link-clr-footer'>
                                    <li> <Link href='/tshirt' className='text-decoration-none'>  T-shirt</Link></li>
                                    <li><Link href='/hoodies' className='text-decoration-none'> Hoodies</Link></li>
                                    <li><Link href='/mugs' className='text-decoration-none'>Mugs</Link></li>
                                    <li><Link href='/stationary' className='text-decoration-none'>Stationary</Link></li>
                                    <li> <Link href='/shoes' className='text-decoration-none'>Shoes</Link></li>
                                    <li> <Link href='/bags' className='text-decoration-none'> Bags</Link></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer