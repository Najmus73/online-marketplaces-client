const MyBidsCard = ({ bid }) => {
    const { BidEmail, price, deadline, title } = bid;
    return (

        <tr>
            <td className="font-bold text-lg">{title}</td>
            <td className="font-bold text-lg">{BidEmail}</td>
            <td className=" font-bold text-lg">{deadline}</td>
            <td className=" font-bold text-lg">${price}</td>
            <td className="text-yellow-400 font-bold text-lg">Pending</td>
            <td><button className="btn bg-blue-400 text-white hover:bg-blue-600">Complete</button></td>
        </tr>

    )
}

export default MyBidsCard;