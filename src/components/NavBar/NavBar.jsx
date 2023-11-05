import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";
import swal from "sweetalert";
const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSignOut = () => {
        logOut()
            .then(() => {
                if (user) {
                    swal("Good job!", "Successfully Sign Out", "success")
                    navigate('/login')
                }
            })
            .catch(err => {
                swal("error", `${err.message}`, "error");
            })
    }
    const navItems = <>
        <NavLink to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-400 border-b-4 border-blue-400 font-bold" : "font-bold text-blue-400"}>HOME
        </NavLink>
        <NavLink to="/add-job"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-400 border-b-4 border-blue-400 font-bold" : "font-bold text-blue-400"}>ADDJOB
        </NavLink>
        <NavLink to="/myPostedJobs"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-400 border-b-4 border-blue-400 font-bold" : "font-bold text-blue-400"}>MYPOSTEDJOB
        </NavLink>
        <NavLink to="/myBids"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-400 border-b-4 border-blue-400 font-bold" : "font-bold text-blue-400"}>MYBIDS
        </NavLink>
        <NavLink to="/bidRequests"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-400 border-b-4 border-blue-400 font-bold" : "font-bold text-blue-400"}>BIDREQUESTS
        </NavLink>
        {
            !user && <>
                <div className="flex gap-[5px]">
                    <NavLink to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-blue-400 border-b-4 border-blue-400 font-bold" : "font-bold text-blue-400"}>LOGIN
                    </NavLink>
                    <h1 className="border-l-2 border-blue-400"></h1>
                    <NavLink to="/register"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-blue-400 border-b-4 border-blue-400 font-bold" : "font-bold text-blue-400"}>REGISTER
                    </NavLink>
                </div>
            </>
        }
        {
            user ? <>
                <span className="text-blue-400 font-bold uppercase">{user.displayName}</span>
                <div className="avatar">
                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user.photoURL} />
                    </div>
                </div>
                <button onClick={handleSignOut} className=" text-white rounded-md px-3 py-1 font-bold border border-blue-500 bg-blue-400">Log Out</button>
            </>
                :
                ""
        }

    </>
    return (
        <div>
            <div className="w-[1450px] mx-auto">
                <div className="lg:flex justify-between text-center items-center h-24">
                    <div className="text-center">
                        <Link to="/"><h1 className="text-xl font-bold text-blue-400 border-b-4 border-blue-400">True Lancer</h1></Link>
                    </div>
                    <div>
                        <ul className="flex gap-5">
                            {navItems}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NavBar;

