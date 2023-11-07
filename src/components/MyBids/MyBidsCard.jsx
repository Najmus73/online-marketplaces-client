const MyBidsCard = ({ bid }) => {
    const { BidEmail, price, deadline, title } = bid;
    return (

        <tr>
            <td className="font-bold text-lg">{title}</td>
            <td className="font-bold text-lg">{BidEmail}</td>
            <td className=" font-bold text-lg">{deadline}</td>
            <td className=" font-bold text-lg">${price}</td>
            <td className="text-yellow-400 font-bold text-lg">Pending</td>
            <td><button className="btn bg-pink-900 text-white hover:bg-pink-700">Complete</button></td>
        </tr>

    )
}

export default MyBidsCard;