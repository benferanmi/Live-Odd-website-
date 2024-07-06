import './css/header.css'
import Logo from '../assets/logo.png'


const Header = () => {
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