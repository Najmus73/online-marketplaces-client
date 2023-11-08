import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";
import { useState } from "react";

const BidRequests = () => {
    const AllBids = useLoaderData();
    const { user } = useContext(AuthContext);
    const filterBid = AllBids.filter(bid => bid.buyerEmail == user.email)
    const [request,setRequest]=useState();
    const [reject,setReject]=useState();
    
      const handleAcceptReject = () =>{
       return setRequest('Accepted')
    }
      const handleReject = () =>{
       return setReject('Rejected')
    }
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>True | BidRequests</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="w-[1450px] mx-auto py-[50px] pb-[550px]">
            <h1 className="pb-[50px]  font-bold text-2xl text-pink-900 text-center">Your Jobs That People Bids</h1>
                <div className="overflow-x-auto">
                    <table className="table table-xs">
                        <thead>
                            <tr>
                                <th>Job title</th>
                                <th>Bider Email</th>
                                <th>DeadLine</th>
                                <th>Bid Price</th>
                                <th>Status</th>
                                <th>Last Login</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                filterBid.map(bid =>
                                    <tr>
                                        <td className="font-bold text-lg">{bid.title}</td>
                                        <td className="font-bold text-lg">{bid.BidEmail}</td>
                                        <td className=" font-bold text-lg">{bid.deadline}</td>
                                        <td className=" font-bold text-lg">${bid.price}</td>
                                        <td className="text-yellow-400 font-bold text-lg">{request ? request:'Pending'}</td>
                                        <td><button onClick={handleAcceptReject} className={`btn bg-pink-900 text-white hover:bg-pink-700`}>Accept</button></td>
                                        <td><button onClick={handleReject} className="btn bg-pink-900 text-white hover:bg-pink-700">Reject</button></td>
                                    </tr>

                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default BidRequests;