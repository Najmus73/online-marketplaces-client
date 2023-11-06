import { useLoaderData, useParams } from "react-router-dom";

const JobDetail = () =>{
    const allJobs = useLoaderData();

    const { _id } = useParams();

    const find = allJobs.find(job=>job._id == _id)

    console.log(find);
    return(
        <div>
            
        </div>
    )
}
export default JobDetail;