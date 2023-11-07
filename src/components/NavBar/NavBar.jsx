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
                isPending ? "pending" : isActive ? "text-white border-b-4 border-white font-bold" : "font-bold text-white"}>HOME
        </NavLink>
        <NavLink to="/add-job"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white border-b-4 border-white font-bold" : "font-bold text-white"}>ADDJOB
        </NavLink>
        <NavLink to="/myPostedJobs"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white border-b-4 border-white font-bold" : "font-bold text-white"}>MYPOSTEDJOB
        </NavLink>
        <NavLink to="/myBids"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white border-b-4 border-white font-bold" : "font-bold text-white"}>MYBIDS
        </NavLink>
        <NavLink to="/bidRequests"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white border-b-4 border-white font-bold" : "font-bold text-white"}>BIDREQUESTS
        </NavLink>
        {
            !user && <>
                <div className="flex gap-[5px]">
                    <NavLink to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white border-b-4 border-white font-bold" : "font-bold text-white"}>LOGIN
                    </NavLink>
                    <h1 className="border-l-2 border-white"></h1>
                    <NavLink to="/register"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white border-b-4 border-white font-bold" : "font-bold text-white"}>REGISTER
                    </NavLink>
                </div>
            </>
        }
        {
            user ? <>
                <span className="text-white font-bold uppercase">{
                   
                   user.displayName ? <>{user.displayName}</>:<>{user.email}</>

                }</span>
                <div className="avatar">
                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user.photoURL} />
                    </div>
                </div>
                <button onClick={handleSignOut} className=" text-white rounded-md px-3 py-1 font-bold border border-white hover:bg-white hover:text-pink-900">Log Out</button>
            </>
                :
                ""
        }

    </>
    return (
        <div className="bg-pink-900">
            <div className="w-[1450px] mx-auto">
                <div className="lg:flex justify-between text-center items-center h-24">
                    <div className="text-center">
                        <Link to="/"><h1 className="text-xl font-bold text-white border-b-4 border-white">True Lancer</h1></Link>
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

