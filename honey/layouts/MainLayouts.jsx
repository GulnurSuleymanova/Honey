import { Outlet } from 'react-router'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'

const MainLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout
