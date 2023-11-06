import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import WebDevelopment from '../WebDevelopment/WebDevelopment';
import DigitalMarketing from '../DigitalMarketing/DigitalMarketing';
const ReactTabs = () => {
    return (
        <div className='w-[1450px] mx-auto'>
            <Tabs>
                <TabList className="border-[2px] border-blue-400 flex justify-between gap-[50px] px-[200px] py-[8px] rounded-lg">
                    <Tab className="font-bold text-blue-400">Web development</Tab>
                    <h1 className="border-l-2 border-blue-400"></h1>
                    <Tab className="font-bold text-blue-400">Digital marketing</Tab>
                    <h1 className="border-l-2 border-blue-400"></h1>
                    <Tab className="font-bold text-blue-400">Graphics design</Tab>
                </TabList>
                <div className='h-[700px]'>
                    <TabPanel className='grid grid-cols-3 pt-[50px]'>
                        <WebDevelopment></WebDevelopment>
                    </TabPanel>
                    <TabPanel>
                        <DigitalMarketing></DigitalMarketing>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                    </TabPanel>
                </div>
            </Tabs>
        </div>
    )
}
export default ReactTabs;