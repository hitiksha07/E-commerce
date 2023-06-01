import Link from 'next/link'
import React from 'react'
import { FaMugHot, FaTshirt } from 'react-icons/fa'
import {  RiTShirt2Fill } from 'react-icons/ri'            
import { ImBooks } from 'react-icons/im'            
import { GiRunningShoe } from 'react-icons/gi'            
import { HiShoppingBag } from 'react-icons/hi'            

function About() {
  return (
    <div className="container my-5 py-5 text-center">
      <div>
        <img src="/e-commerce-logo.png" alt="" />
      </div>
      <div>
        <h2 className='p-3'>Welcome to e-commerce.com</h2>
        <p className='p-3 fs-5'>Introducing e-commerce, a revolutionary e-commerce platform that delivers amazing products at unbeatable prices. Built on a foundation of NextJs Only, our website offers a seamless shopping experience powered by server-side rendering. Whether you're a tech enthusiast or simply looking for a stylish geek T-shirt, e-commerce has something for everyone. And for those curious about the development process, be sure to check out the CodeWithHarry NextJs playlist on YouTube. Shop now at e-commerce and experience the future of online shopping.</p>
        <ul className='list-unstyled fs-5 text-start'>
          <h3> Items we Introduce</h3>
          <li>
            <Link href='/tshirt' className='text-decoration-none text-dark'><h4><FaTshirt/>  T-shirt</h4></Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, laborum harum, voluptas doloremque commodi corporis repellat sunt possimus laboriosam deleniti quo esse expedita consequuntur quis rem. Quam molestiae voluptatum officia.</p>
          </li>
          <li>
            <Link href='/hoodies' className='text-decoration-none text-dark'><h4><RiTShirt2Fill/> Hoodies</h4></Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, laborum harum, voluptas doloremque commodi corporis repellat sunt possimus laboriosam deleniti quo esse expedita consequuntur quis rem. Quam molestiae voluptatum officia.</p>
          </li>
          <li>
            <Link href='/mugs' className='text-decoration-none text-dark'><h4><FaMugHot/> Mugs</h4></Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, laborum harum, voluptas doloremque commodi corporis repellat sunt possimus laboriosam deleniti quo esse expedita consequuntur quis rem. Quam molestiae voluptatum officia.</p>
          </li>
          <li>
            <Link href='/stationary' className='text-decoration-none text-dark'><h4><ImBooks/> Stationary</h4></Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, laborum harum, voluptas doloremque commodi corporis repellat sunt possimus laboriosam deleniti quo esse expedita consequuntur quis rem. Quam molestiae voluptatum officia.</p>
          </li>
          <li>
            <Link href='/shoes' className='text-decoration-none text-dark'><h4><GiRunningShoe/> Shoes</h4></Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, laborum harum, voluptas doloremque commodi corporis repellat sunt possimus laboriosam deleniti quo esse expedita consequuntur quis rem. Quam molestiae voluptatum officia.</p>
          </li>
          <li>
            <Link href='/bags' className='text-decoration-none text-dark'><h4><HiShoppingBag/> Bags</h4></Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, laborum harum, voluptas doloremque commodi corporis repellat sunt possimus laboriosam deleniti quo esse expedita consequuntur quis rem. Quam molestiae voluptatum officia.</p>
          </li>
        </ul>
        <Link href='/' className='btn btn-pri'>Start Shopping</Link>
      </div>
    </div>
  )
}

export default About