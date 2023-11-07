import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DigitalMarketing = () => {
    const [Jobs, setJobs] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    const filter = Jobs.filter(job => job.category == 'Digital Marketing')

    return (
        <div>
            {
                filter.map(job =>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl hover:shadow-2xl hover:shadow-pink-900">
                        <figure><img src={job.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{job.jobTitle}</h2>
                            <p>{job.description}</p>
                            <h1 className="font-bold">DeadLine : {job.deadline}</h1>
                            <p className="text-lg font-bold text-pink-900">Price Range : ${job.minimumPrice} to ${job.maximumPrice}</p>
                            <div><Link to={`/Job-detail/${job._id}`}><button className="btn w-full bg-pink-900 hover:bg-pink-700 text-white">Bid now Button</button></Link></div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default DigitalMarketing;