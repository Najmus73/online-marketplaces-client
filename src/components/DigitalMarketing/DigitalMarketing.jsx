import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DigitalMarketing = () => {
    const [Jobs, setJobs] = useState([])
    useEffect(() => {
        fetch('https://online-marketplaces-server-site-lzf582omn.vercel.app/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    const filter = Jobs.filter(job => job.category == 'Digital Marketing')

    return (
        <div>
           <div className="pb-[50px] flex justify-center"><h1 className="text-2xl font-bold items-center text-pink-900 border-b-4 border-pink-900 w-[200px] shadow-2xl shadow-pink-900 ">Digital Marketing</h1></div>
                <div className="grid grid-cols-1 lg:grid lg:grid-cols-4 gap-[16px]" id="digital">
                    {
                        filter.map(job =>
                            <div className="card card-compact w-[350px] h-[580px] bg-base-100 shadow-xl hover:shadow-2xl hover:shadow-pink-900">
                                <figure><img className="w-[350px] h-[220px]" src={job.image} alt="Shoes" /></figure>
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
            
        </div>
    )
}

export default DigitalMarketing;