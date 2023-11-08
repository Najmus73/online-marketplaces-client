import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";
import swal from "sweetalert";
import '../Styles/Styles.css'
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
                isPending ? "pending" : isActive ? "text-pink-900 border-b-4 border-pink-900 font-bold" : "font-bold text-pink-900"}>HOME
        </NavLink>
        <NavLink to="/add-job"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-pink-900 border-b-4 border-pink-900 font-bold" : "font-bold text-pink-900"}>ADDJOB
        </NavLink>
        <NavLink to="/myPostedJobs"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-pink-900 border-b-4 border-pink-900 font-bold" : "font-bold text-pink-900"}>MYPOSTEDJOB
        </NavLink>
        <NavLink to="/myBids"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-pink-900 border-b-4 border-pink-900 font-bold" : "font-bold text-pink-900"}>MYBIDS
        </NavLink>
        <NavLink to="/bidRequests"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-pink-900 border-b-4 border-pink-900 font-bold" : "font-bold text-pink-900"}>BIDREQUESTS
        </NavLink>
        {
            !user && <>
                <div className="flex gap-[5px]">
                    <NavLink to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-pink-900 border-b-4 border-pink-900 font-bold" : "font-bold text-pink-900"}>LOGIN
                    </NavLink>
                    <h1 className="border-l-2 border-pink-900"></h1>
                    <NavLink to="/register"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-pink-900 border-b-4 border-pink-900 font-bold" : "font-bold text-pink-900"}>REGISTER
                    </NavLink>
                </div>
            </>
        }
        {
            user ? <>
                <span className="text-pink-900 font-bold uppercase">{

                    user.displayName ? <>{user.displayName}</> : <>{user.email}</>

                }</span>
                <div className="avatar">
                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user.photoURL} />
                    </div>
                </div>
                <button onClick={handleSignOut} className=" text-pink-900 rounded-md px-3 py-1 font-bold border border-pink-900 hover:bg-pink-900 hover:text-white ">Log Out</button>
            </>
                :
                ""
        }

    </>
    return (
        <div className="shadow-xl">
            <div className="lg:w-[1450px] mx-auto h-24">
            <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-pink-900">
                        {navItems}
                        </ul>
                    </div>
                </div>
                <div className="lg:flex justify-between text-center items-center ">
                    <div className="text-center" id="logo">
                        <Link to="/"><h1 className="text-xl font-bold text-pink-900 border-b-4 border-pink-900">True Lancer</h1></Link>
                    </div>
                    <div id="lg-nav">
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



