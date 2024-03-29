import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import useAuth from '../hooks/useAuth'
import Header from "./Header"

const Layout = () => {
    const user = useAuth().auth
    return (
        <>
            {!user ? <Header /> : <Navbar />}
            <main className="App">
                <Outlet />
            </main>
        </>
    )
}

export default Layout
