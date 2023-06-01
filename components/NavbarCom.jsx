
import { deleteLoginData, getLoginApi } from '@/redux/action/loginAction';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { BsCaretUpFill, BsCartFill, BsPersonCircle } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
function NavbarCom() {
    // let carts = useSelector(state => state.user.carts);
    let login = useSelector(state => state.user.login);
    let user = useSelector(state => state.user.user)
    const router = useRouter();
    let dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(getCartsApi())
    //     dispatch(getLoginApi())
    //     // dispatch(getuserApi())
    // }, []);

    let value;
    if (typeof window !== "undefined") {
        value = JSON.parse(localStorage.getItem('login'));
    }
    let islogin = login?.find(x => x.email == value?.email)

    let match = user?.find(x => x.email == value?.email);
    let dd = { ...match }

    let qty = 0;
    for (let i = 0; i < dd.carts?.length; i++) {
        // qty.push(carts[i].qty)
        qty += dd.carts[i].qty
    };

    return (
        <>
            <div className="header fixed-top ">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>
                            <Link href='/' className='link-clr'>
                                <img src="/e-logo.png" height={200} width={150} alt="" className='img-fluid' />
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" className='fs-5'>
                            <Nav className="me-auto">
                                <Link href='/' className='link-clr nav-link '>Home</Link>
                                <Link href='/about' className='link-clr nav-link'>About</Link>
                                <NavDropdown title="Products" id="collasible-nav-dropdown" autoClose="default">
                                    <NavDropdown.Item> <Link data-rr-ui-dropdown-item href='/tshirt' className='link-clr-drop dropdown-item'>T-shirt</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link data-rr-ui-dropdown-item href='/mugs' className='link-clr-drop dropdown-item'>Mugs</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link data-rr-ui-dropdown-item href='/hoodies' className='link-clr-drop dropdown-item'>Hooddies</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link data-rr-ui-dropdown-item href='/shoes' className='link-clr-drop dropdown-item'>Shoes</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link data-rr-ui-dropdown-item href='/bags' className='link-clr-drop dropdown-item'>Bags</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link data-rr-ui-dropdown-item href='/stationary' className='link-clr-drop dropdown-item'>stationary</Link></NavDropdown.Item>
                                </NavDropdown>
                                <Link href='/contact' className='link-clr nav-link'>Contact</Link>
                            </Nav>
                            <Nav>
                                <Link href='/carts' className='link-clr nav-link position-relative'><BsCartFill className='fs-1' /> Carts
                                    <span className='position-absolute org-clr nav-cart'>
                                        {
                                            qty ? qty <= 9 ?
                                                `0${qty}` : qty : '00'
                                        }
                                    </span>
                                </Link>
                            </Nav>
                            {/* <button onClick={() => router.push('/login')} className='link-clr nav-link'>
                                <BsPersonCircle />Login
                            </button> */}
                            {
                                islogin?.email != null ?
                                    <>
                                        <button onClick={() => router.push('/account')} className='btn p-2 btn-sec link-clr nav-link'>
                                            <BsPersonCircle />Account
                                        </button>
                                    </> :
                                    <>
                                        <button onClick={() => router.push('/login')} className='btn p-2 btn-sec link-clr nav-link'>
                                            <BsPersonCircle />Login
                                        </button>
                                    </>
                            }
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}

export default NavbarCom