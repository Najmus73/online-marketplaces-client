import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import swal from "sweetalert";

const AddJob = () => {
    const { user } = useContext(AuthContext)
    const {email} = user;
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

        fetch('http://localhost:5000/jobs', {
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
            }
         })
    }
    return (
        <div>
            <div className="h-[500px] w-[1350px] mx-auto pt-[50px]">
                <form onSubmit={handleAddJob}>
                    <div className="flex justify-between pb-[10px]">
                        <div className="flex flex-col">
                            <label>Image</label>
                            <input className="border border-pink-900 py-[5px] pr-[460px]" type="text" name="image" placeholder="Enter Image Url" />
                        </div>
                        <div className="flex flex-col">
                            <label>Job Title</label>
                            <input className="border border-pink-900 py-[5px] pr-[460px]" type="text" name="jobTitle" placeholder="Enter Job Title" />
                        </div>
                    </div>
                    <div className="flex justify-between pb-[10px]">
                        <div className="flex flex-col">
                            <label>Category</label>
                            <input list='data' className="border border-pink-900 py-[5px] pr-[460px]" type="text" name="category" placeholder="Enter Category" />
                            <datalist id='data'>
                                <option>Web Development</option>
                                <option>Digital Marketing</option>
                                <option>Graphics Design</option>
                            </datalist>
                        </div>
                        <div className="flex flex-col">
                            <label>Deadline</label>
                            <input className="border px-[44px] border-pink-900 py-[5px] pr-[460px]" type="date" name="deadline" placeholder="Enter Deadline Time" />
                        </div>
                    </div>
                    <div className="flex justify-between pb-[10px]">
                        <div className="flex flex-col">
                            <label>Description</label>
                            <input className="border border-pink-900 py-[5px] pr-[460px]" type="text" name="description" placeholder="Enter Job Description" />
                        </div>
                        <div className="flex flex-col">
                            <label>Email</label>
                            <input className="border border-pink-900 py-[5px] pr-[460px]" type="email" name="email" defaultValue={email} readOnly/>
                        </div>         
                    </div>
                    <div className="flex justify-between pb-[10px]">
                        <div className="flex flex-col">
                            <label>Maximum Price</label>
                            <input className="border border-pink-900 py-[5px] pr-[460px]" type="text" name="maximumPrice" placeholder="Enter Maximum Price" />
                        </div>
                        <div className="flex flex-col">
                            <label>Minimum Price</label>
                            <input className="border border-pink-900 py-[5px] pr-[460px]" type="text" name="minimumPrice" placeholder="Enter Minimum Price" />
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