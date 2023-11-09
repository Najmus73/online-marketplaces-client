import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import MyBidsCard from "./MyBidsCard";
import { Helmet } from "react-helmet";

const MyBids = () => {
    const AllBids = useLoaderData();
    const { user } = useContext(AuthContext);
    const filterBid = AllBids.filter(bid => bid.BidEmail == user.email)
 

    return (
        <div className="w-[1450px] mx-auto py-[50px] pb-[550px] ">
            <Helmet>
                <meta charSet="utf-8" />
                <title>True | MyBids</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h1 className="pb-[50px]  font-bold text-2xl text-pink-900 text-center">Jobs That You Bid</h1>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th>Job title</th>
                            <th>Email</th>
                            <th>DeadLine</th>
                            <th>Bid Price</th>
                            <th>Status</th>
                            <th>Last Login</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            filterBid.map(bid => <MyBidsCard key={bid._id} bid={bid}></MyBidsCard>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default MyBids;
