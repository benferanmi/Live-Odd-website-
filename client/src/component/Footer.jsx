import './css/footer.css'
import Logo from '../assets/logo.png'

const Footer = () => {
    return (
        <footer>
            <div className="footers">
                <div className="footer">
                    <div className='footer-left'>
                        <div className='fotl'>
                            <img src={Logo} alt='logo' />

                            <span>
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor</p>
                            </span>
                        </div>
                    </div>
                    <div className='footer-right'>
                        <div className='fotr-nav'>
                            <h3>
                                Navigation
                            </h3>

                            <div className='fot-nav'>
                                <a href='#'>About us</a>
                                <a href='#'>How We Work</a>
                                <a href='#'>Game schedule</a>
                                <a href='#'>Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer