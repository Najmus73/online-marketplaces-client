import { useLoaderData, useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PlaceBidForm from "../PlaceBidForm/PlaceBidForm";
import { Helmet } from "react-helmet";

const JobDetail = () => {
    const allJobs = useLoaderData();

    const { _id } = useParams();

    const find = allJobs.find(job => job._id == _id)

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>True | JobDetails</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="w-[1450px] mx-auto pt-[50px] flex gap-[150px]">
                <div className="pb-[100px] w-[700px]">
                    <h1 className="text-2xl font-bold">{find.jobTitle}</h1>
                    <div className="pt-[20px]"><img className="w-[700px] h-[500px]" src={find.image} alt="" /></div>
                    <h1 className="text-2xl font-bold pt-[25px]">About This Job</h1>
                    <p className="w-[700px]">{find.description}</p>
                </div>

                <div className="w-[600px] pt-[51px]">
                    <Tabs className='border-2 border-pink-900 h-[500px] rounded-lg'>
                        <TabList className='flex justify-between  border-[2px] border-pink-900 px-[50px] rounded-lg py-[8px]'>
                            <Tab className="font-bold text-pink-900">Basic</Tab>
                            <h1 className="border-l-2 border-pink-900"></h1>
                            <Tab className="font-bold text-pink-900">Standard</Tab>
                        </TabList>

                        <TabPanel>
                            <div className="p-[50px]">
                                <h1 className="text-2xl font-bold">Basic Price Range : ${find.minimumPrice}</h1>
                                <h1 className="text-2xl font-bold py-[30px]">Deadline : {find.deadline}</h1>
                                <div className="pt-[200px]"><button className="btn bg-pink-900 text-white hover:bg-pink-700 w-full">Contact Me</button></div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="p-[50px]">
                                <h1 className="text-2xl font-bold">Standard Price Range : ${find.maximumPrice}</h1>
                                <h1 className="text-2xl font-bold py-[30px]">Deadline : {find.deadline}</h1>
                                <div className="pt-[200px]"><button className="btn bg-pink-900 text-white hover:bg-pink-700 w-full">Contact Me</button></div>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
              <div className="flex justify-end mt-[-250px] p-5"><h1>Scroll Down</h1></div>
              <div className="pt-[230px]"><h1 className="text-center font-bold text-2xl">Place Your Bid Here</h1></div>
  
             <PlaceBidForm find={find}></PlaceBidForm>
            
        </div>
    )
}
export default JobDetail;