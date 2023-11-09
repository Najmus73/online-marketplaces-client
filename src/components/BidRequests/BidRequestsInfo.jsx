import { useState } from "react";

const BidRequestsInfo = ({bid}) => {
    const {_id} = bid;
    const [request,setRequest]=useState(false);
    const [color,setColor] = useState(false)

   

    const handleAcceptReject = id =>{
      setRequest("Accepted")
      setColor('text-green-400')
  }
  const handleReject = id =>{
     setRequest('Rejected')
     setColor('text-red-400')
  }
  
    return (
        <tr>
            <td className="font-bold text-lg">{bid.title}</td>
            <td className="font-bold text-lg">{bid.BidEmail}</td>
            <td className=" font-bold text-lg">{bid.deadline}</td>
            <td className=" font-bold text-lg">${bid.price}</td>
            <td className={`${request ? color : 'text-yellow-400'} font-bold text-lg`}>{request ? request:'Pending'}</td>
            <td><button onClick={()=>handleAcceptReject(_id)} className={`btn bg-pink-900 text-white hover:bg-pink-700`}>Accept</button></td>
            <td><button onClick={()=>handleReject(_id)} className="btn bg-pink-900 text-white hover:bg-pink-700">Reject</button></td>
        </tr>
    )

}
export default BidRequestsInfo;