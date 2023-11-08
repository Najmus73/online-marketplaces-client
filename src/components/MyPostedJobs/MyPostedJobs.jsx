import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import MyPostedJobsCard from "./MyPostedJobsCard";
import { Helmet } from "react-helmet";

const MyPostedJobs = () =>{
    const AllJobs = useLoaderData();
    const { user } = useContext(AuthContext);
    const filter = AllJobs.filter(job=>job.email == user.email)
    return (
        <div className="w-[1450px] mx-auto py-[50px] pb-[500px]">
            <Helmet>
                <meta charSet="utf-8" />
                <title>True | MyPostedJobs</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h1 className="pb-[50px]  font-bold text-2xl text-pink-900 text-center">Job That You Listed</h1>
           {
            filter.map(job=><MyPostedJobsCard key={job._id} job={job}></MyPostedJobsCard>)
           }
        </div>
    )
}
export default MyPostedJobs;