import './css/header.css'
import Logo from '../assets/logo.png'
import { useState } from 'react'


const Header = () => {

    const [mobileMenu, setMobileMenu] = useState(false)
    const [show, setShow] = useState('hide-mobile-menu')
    const Showmenu = (e) => {
        e.preventDefault();
        setMobileMenu(() => mobileMenu ? false : true)
        if (!mobileMenu) {
            setShow('show-mobile-menu')
        } else {
            setShow('hide-mobile-menu')
        }
    }
    return (
        <div className="headers">
            <div className="header">
                <div className='head-nav'>
                    <img src={Logo} height="" width="" />

                    <div className='head-menu'>
                        <a href='#' >ABOUT US</a>
                        <a href='#' >HOW WE WORK</a>
                        <a href='#' >CONTACT</a>
                    </div>

                </div>

                <div className='head-mobile' >
                    <button onClick={Showmenu}>Menu</button>
                    <div className={show}>
                        <a href='#' >ABOUT US</a>
                        <a href='#' >HOW WE WORK</a>
                        <a href='#' >CONTACT</a>
                    </div>
                </div>


                <div className='head-reg'>
                    <span className='head-button'>
                        SIGN UP | LOG IN
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header