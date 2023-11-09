import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";
import { useState } from "react";
import BidRequestsInfo from "./BidRequestsInfo";

const BidRequests = () => {
    const AllBids = useLoaderData();
    const { user } = useContext(AuthContext);
    const filterBid = AllBids.filter(bid => bid.buyerEmail == user.email)
   
   
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
                                filterBid.map(bid =><BidRequestsInfo key={bid._id} bid={bid}></BidRequestsInfo>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default BidRequests;