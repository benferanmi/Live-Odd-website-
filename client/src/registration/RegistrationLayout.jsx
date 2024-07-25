import Header from '../component/Header'
import Footer from '../component/Footer'
import { Outlet } from 'react-router-dom'



const RegistrationLayout = () => {
    return (
        <section>
            <Header />

            <Outlet />

            <Footer />
        </section>
    )
}

export default RegistrationLayout