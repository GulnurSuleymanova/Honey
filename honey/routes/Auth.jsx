
import { Navigate } from 'react-router'

const Auth = ({ children }) => {
    let token = localStorage.getItem('token')
    return (
        token ? children : <Navigate to='/login' />
    )
}

export default Auth
