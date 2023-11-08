import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import WebDevelopment from '../WebDevelopment/WebDevelopment';
import DigitalMarketing from '../DigitalMarketing/DigitalMarketing';
import GraphicsDesign from '../GraphicsDesign/GraphicsDesign';
const ReactTabs = () => {
    return (
        <div className='w-[1450px] mx-auto'>
            <Tabs>
                <TabList className="border-[2px] border-pink-900 flex justify-between gap-[50px] px-[200px] py-[8px] rounded-lg">
                    <Tab className="font-bold text-pink-900">Web development</Tab>
                    <h1 className="border-l-2 border-pink-900"></h1>
                    <Tab className="font-bold text-pink-900">Digital marketing</Tab>
                    <h1 className="border-l-2 border-pink-900"></h1>
                    <Tab className="font-bold text-pink-900">Graphics design</Tab>
                </TabList>
                <div className='py-[50px]'>
                    <TabPanel>
                        <WebDevelopment></WebDevelopment>
                    </TabPanel>
                    <TabPanel>
                        <DigitalMarketing></DigitalMarketing>
                    </TabPanel>
                    <TabPanel>
                        <GraphicsDesign></GraphicsDesign>
                    </TabPanel>    
                </div>
            </Tabs>
        </div>
    )
}
export default ReactTabs;