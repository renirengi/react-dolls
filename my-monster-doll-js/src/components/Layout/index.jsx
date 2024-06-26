import { Outlet } from "react-router-dom"
import Header from "../Header"

const Layout = () => {
    return (
        <div className="wrapper">
            <Header></Header>
            <div className="content">
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Layout