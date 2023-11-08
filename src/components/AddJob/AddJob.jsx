import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const AddJob = () => {
    const { user } = useContext(AuthContext)
    const {email} = user;
    const navigate = useNavigate()
    const handleAddJob = e => { 
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const email = form.email.value;
        const jobTitle = form.jobTitle.value;
        const category = form.category.value;
        const deadline = form.deadline.value;
        const description = form.description.value;
        const minimumPrice = form.minimumPrice.value;
        const maximumPrice = form.maximumPrice.value;
        const newJob = { image, jobTitle, category, deadline, description, minimumPrice, maximumPrice,email }
        console.log(newJob);

        fetch('https://online-marketplaces-server-site-lzf582omn.vercel.app/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)

        })
         .then(res=> res.json())
         .then(data =>{
            console.log(data);
            if(data.insertedId){
                swal("Good job!", "Successfully Added a Job", "success")
                navigate('/myPostedJobs')
            }
         })
    }
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>True | AddJob</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h1 className="py-[50px] font-bold text-2xl text-pink-900 text-center">Job Posting By Fill Up This Form</h1>
            <div className="h-[500px] w-[1350px] mx-auto pt-[50px]">
                <form onSubmit={handleAddJob}>
                    <div className="flex justify-between pb-[10px]">
                        <div className="flex flex-col">
                            <label>Image</label>
                            <input className="border border-pink-900 py-[5px] pr-[460px]" type="text" name="image" placeholder="Enter Image Url" required/>
                        </div>
                        <div className="flex flex-col">
                            <label>Job Title</label>
                            <input className="border border-pink-900 py-[5px] pr-[460px]" type="text" name="jobTitle" placeholder="Enter Job Title" required/>
                        </div>
                    </div>
                    <div className="flex justify-between pb-[10px]">
                        <div className="flex flex-col">
                            <label>Category</label>
                            <input list='data' className="border border-pink-900 py-[5px] pr-[460px]" type="text" name="category" placeholder="Enter Category" required/>
                            <datalist id='data'>
                                <option>Web Development</option>
                                <option>Digital Marketing</option>
                                <option>Graphics Design</option>
                            </datalist>
                        </div>
                        <div className="flex flex-col">
                            <label>Deadline</label>
                            <input className="border px-[44px] border-pink-900 py-[5px] pr-[460px]" type="date" name="deadline" placeholder="Enter Deadline Time" required/>
                        </div>
                    </div>
                    <div className="flex justify-between pb-[10px]">
                        <div className="flex flex-col">
                            <label>Description</label>
                            <input className="border border-pink-900 py-[5px] pr-[460px]" type="text" name="description" placeholder="Enter Job Description" required/>
                        </div>
                        <div className="flex flex-col">
                            <label>Email</label>
                            <input className="border border-pink-900 py-[5px] pr-[460px]" type="email" name="email" defaultValue={email} readOnly/>
                        </div>         
                    </div>
                    <div className="flex justify-between pb-[10px]">
                        <div className="flex flex-col">
                            <label>Maximum Price</label>
                            <input className="border border-pink-900 py-[5px] pr-[460px]" type="number" name="maximumPrice" placeholder="Enter Maximum Price" required/>
                        </div>
                        <div className="flex flex-col">
                            <label>Minimum Price</label>
                            <input className="border border-pink-900 py-[5px] pr-[460px]" type="number" name="minimumPrice" placeholder="Enter Minimum Price" required/>
                        </div>
                    </div>

                    <div className="pt-[30px]">
                        <input type="submit" value="Add Job" className="btn btn-block bg-pink-900 font-bold text-white" />
                    </div>
                </form>

            </div>
        </div>
    )
}
export default AddJob;