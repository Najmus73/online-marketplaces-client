import { useEffect, useState } from "react";

const GraphicsDesign = () => {
    const [Jobs, setJobs] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    const filter = Jobs.filter(job => job.category == 'Graphics Design')

    return (
        <div className="w-[1450px] mx-auto">
        <div className='grid grid-cols-3'>
            {
                filter.map(job =>
                    <div className="card card-compact w-[450px] bg-base-100 shadow-xl">
                        <figure><img src={job.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{job.jobTitle}</h2>
                            <p>{job.description}</p>
                            <h1 className="font-bold">DeadLine : {job.deadline}</h1>
                            <p className="text-lg font-bold text-blue-400">Price Range : ${job.minimumPrice} to ${job.maximumPrice}</p>
                        </div>
                    </div>
                )
            }
        </div>
        </div>
    )
}

export default GraphicsDesign;