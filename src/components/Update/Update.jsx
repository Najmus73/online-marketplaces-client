import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import swal from "sweetalert";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";

const Update = () => {
    const { user } = useContext(AuthContext)
    const { email } = user;
    const allJobs = useLoaderData();
    const { image, jobTitle, category, deadline, description, minimumPrice, maximumPrice, _id } = allJobs;
    const handleUpdateJob = e => {
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
        const updateJob = { image, jobTitle, category, deadline, description, minimumPrice, maximumPrice, email }


        fetch(`https://online-marketplaces-server-site-iota.vercel.app/jobs/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateJob)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    swal("Good job!", "Successfully Added a Job", "success")
                }
            })
    }
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>True | Update</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h1 className="py-[50px] font-bold text-2xl text-pink-900 text-center">Job Update By Fill Up This Form</h1>
            <div className="h-[500px] w-[1350px] mx-auto pt-[50px]">
                <form onSubmit={handleUpdateJob}>
                    <div className="flex justify-between pb-[10px]">
                        <div className="flex flex-col">
                            <label>Image</label>
                            <input className="border border-pink-900 py-[5px] pr-[460px]" type="text" name="image" defaultValue={image} required />
                        </div>
                        <div className="flex flex-col">
                            <label>Job Title</label>
                            <input className="border border-pink-900 py-[5px] pr-[460px]" type="text" name="jobTitle" defaultValue={jobTitle} required />
                        </div>
                    </div>
                    <div className="flex justify-between pb-[10px]">
                        <div className="flex flex-col">
                            <label>Category</label>
                            <input list='data' className="border border-pink-900 py-[5px] pr-[460px]" type="text" name="category" defaultValue={category} required />
                            <datalist id='data'>
                                <option>Web Development</option>
                                <option>Digital Marketing</option>
                                <option>Graphics Design</option>
                            </datalist>
                        </div>
                        <div className="flex flex-col">
                            <label>Deadline</label>
                            <input className="border px-[44px] border-pink-900 py-[5px] pr-[460px]" type="date" name="deadline" defaultValue={deadline} required />
                        </div>
                    </div>
                    <div className="flex justify-between pb-[10px]">
                        <div className="flex flex-col">
                            <label>Description</label>
                            <input className="border border-pink-900 py-[5px] pr-[460px]" type="text" name="description" defaultValue={description} required />
                        </div>
                        <div className="flex flex-col">
                            <label>Email</label>
                            <input className="border border-pink-900 py-[5px] pr-[460px]" type="email" name="email" defaultValue={email} readOnly required />
                        </div>
                    </div>
                    <div className="flex justify-between pb-[10px]">
                        <div className="flex flex-col">
                            <label>Maximum Price</label>
                            <input className="border border-pink-900 py-[5px] pr-[460px]" type="number" name="maximumPrice" defaultValue={maximumPrice} required />
                        </div>
                        <div className="flex flex-col">
                            <label>Minimum Price</label>
                            <input className="border border-pink-900 py-[5px] pr-[460px]" type="number" name="minimumPrice" defaultValue={minimumPrice} required />
                        </div>
                    </div>

                    <div className="pt-[30px]">
                        <input type="submit" value="Update Job" className="btn btn-block bg-pink-900 font-bold text-white" />
                    </div>
                </form>

            </div>
        </div>
    )
}
export default Update;