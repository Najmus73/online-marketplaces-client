import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const PlaceBidForm = ({ find }) => {
    const { email } = find
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleBid = e => {
        e.preventDefault();
        const form = e.target;
        const price = form.price.value;
        const BidEmail = form.BidEmail.value;
        const email = form.email.value;
        const deadline = form.deadline.value;
        const title = form.title.value;
        const Bid = {
            price,
            BidEmail,
            buyerEmail: email,
            deadline,
            title
        }

        if (email == user.email) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You Can't Bid In Your Own Job",
                footer: '<a href="#">Why do I have this issue?</a>'
            }); 
        }else{
            fetch('https://online-marketplaces-server-site-iota.vercel.app/bids', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(Bid)
    
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        swal("Good job!", "Successfully Added a Bid", "success")
                        navigate('/myBids');
                    }
                })
        }               

     

    }
    return (
        <div>
            <div className="h-[500px] w-[1450px] mx-auto pt-[50px]">
                <form onSubmit={handleBid}>
                    <div className="flex justify-between pb-[10px]">
                        <div className="flex flex-col">
                            <label>Price</label>
                            <input className="border border-pink-900 py-[5px] pr-[460px]" type="text" name="price" placeholder="Your bidding amount" required/>
                        </div>
                        <div className="flex flex-col">
                            <label>Bider Email</label>
                            <input className="border border-pink-900 py-[5px] pr-[460px]" type="text" name="BidEmail" defaultValue={user.email} readOnly />
                        </div>
                    </div>
                    <div className="flex justify-between pb-[10px]">
                        <div className="flex flex-col">
                            <label>Buyer Email</label>
                            <input className="border border-pink-900 py-[5px] pr-[460px]" type="text" name="email" defaultValue={email} readOnly />

                        </div>
                        <div className="flex flex-col">
                            <label>Deadline</label>
                            <input className="border px-[44px] border-pink-900 py-[5px] pr-[460px]" type="date" name="deadline" placeholder="Enter Deadline Time" required />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label>Job Title</label>
                        <input className="border px-[44px] border-pink-900 py-[5px] pr-[460px]" type="text" name="title" defaultValue={find.jobTitle} readOnly />
                    </div>
                    <div className="pt-[30px]">
                        <input type="submit" value="Click Here To Bid" className="btn btn-block bg-pink-900 font-bold hover:bg-pink-700 text-white" />
                    </div>
                </form>

            </div>
        </div>
    )
}
export default PlaceBidForm;