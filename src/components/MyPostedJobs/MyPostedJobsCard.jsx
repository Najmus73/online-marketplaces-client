import { Link } from "react-router-dom";

const MyPostedJobsCard = ({ job }) => {
    const {image,jobTitle,category,deadline,description,minimumPrice,maximumPrice,email,_id} =job
    console.log(_id);
    return (
        <div className="pb-[25px] ">
            <div className="flex justify-between bg-base-100 shadow-xl">
                <div>
                <figure><img className="w-[400px] h-[270px]" src={image} alt="Album" /></figure>
                </div>
                <div className="w-[400px] p-5">
                    <h2 className="card-title">{jobTitle}</h2>
                    <p>{description}</p>
                </div>
                <div className="p-5 space-y-14">
                    <h1 className="text-xl font-bold">{category}</h1>
                    <h2 className="text-lg font-bold">Deadline : {deadline}</h2>
                     <p className="text-lg font-bold">Price Range : ${minimumPrice} to ${maximumPrice}</p>
                </div>
                <div className="flex flex-col justify-between p-5">
                    <Link to={`/update/${job._id}`}><button className="btn bg-pink-900 text-white hover:bg-pink-700">Update</button></Link>
                    <button className="btn bg-pink-900 text-white hover:bg-pink-700">Delete</button>
                </div>
            </div>
        </div>
    )
}
export default MyPostedJobsCard;