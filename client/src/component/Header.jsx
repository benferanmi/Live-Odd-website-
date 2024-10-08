import './css/header.css'
import Logo from '../assets/logo.png'
// import { useState } from 'react'
import Basketball from '../assets/basketball.png'
import AmericanFootball from '../assets/americanfootball.png'
import { Link } from 'react-router-dom'


const Header = () => {

    // const [mobileMenu, setMobileMenu] = useState(false)
    // const [show, setShow] = useState('hide-mobile-menu')
    // const Showmenu = (e) => {
    //     e.preventDefault();
    //     setMobileMenu(() => mobileMenu ? false : true)
    //     if (!mobileMenu) {
    //         setShow('show-mobile-menu')
    //     } else {
    //         setShow('hide-mobile-menu')
    //     }
    // }
    return (
        <div className="headers">
            <div className="header">
                <div className='head-nav'>
                    <img className='head-nav-img' src={Logo} height="" width="" />

                    <div className='head-menu'>
                        <a href='#' >ABOUT US</a>
                        <a href='#' >HOW WE WORK</a>
                        <a href='#' >CONTACT</a>
                    </div>

                        <img className='des-hide hn-img-left' src={Basketball} alt='' />
                        <img className='des-hide hn-img-right' src={AmericanFootball} alt='' />

                </div>

                <div className='head-mobile' >
                    {/* <button onClick={Showmenu}>Menu</button>
                    <div className={show}>
                        <a href='#' >ABOUT US</a>
                        <a href='#' >HOW WE WORK</a>
                        <a href='#' >CONTACT</a>
                    </div> */}
                </div>


                <div className='head-reg'>
                    <span className='head-button'>
                        <Link to="auth/login">SIGN UP | LOG IN</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header