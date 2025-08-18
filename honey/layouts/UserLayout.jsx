import { Outlet } from 'react-router-dom'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'

const UserLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default UserLayout
