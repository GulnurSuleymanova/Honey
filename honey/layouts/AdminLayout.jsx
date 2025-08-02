import { Outlet } from "react-router"
import SiderBar from "../components/admin/SiderBar"

const AdminLayout = () => {
    return (
        <div className="flex">
            <div className="flex-1/6">
                <SiderBar />
            </div>
            <div className="flex-5/6">
                <Outlet />
            </div>
        </div>
    )
}

export default AdminLayout
