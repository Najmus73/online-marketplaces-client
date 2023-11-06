import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import MyPostedJobsCard from "./MyPostedJobsCard";

const MyPostedJobs = () =>{
    const AllJobs = useLoaderData();
    const { user } = useContext(AuthContext);
    const filter = AllJobs.filter(job=>job.email == user.email)
    return (
        <div className="w-[1450px] mx-auto">
           {
            filter.map(job=><MyPostedJobsCard key={job._id} job={job}></MyPostedJobsCard>)
           }
        </div>
    )
}
export default MyPostedJobs;