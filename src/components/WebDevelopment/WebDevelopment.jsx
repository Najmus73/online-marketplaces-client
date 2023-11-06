import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const WebDevelopment = () => {
    const [Jobs, setJobs] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    const filter = Jobs.filter(job => job.category == 'Web Development')

    return (
        <div>
            {
                filter.map(job =>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={job.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{job.jobTitle}</h2>
                            <p>{job.description}</p>
                            <h1 className="font-bold">DeadLine : {job.deadline}</h1>
                            <p className="text-lg font-bold text-blue-400">Price Range : ${job.minimumPrice} to ${job.maximumPrice}</p>
                            <div><Link to={`/Job-detail/${job._id}`}><button className="btn w-full bg-blue-400 hover:bg-blue-500 text-white">Bid now Button</button></Link></div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default WebDevelopment;