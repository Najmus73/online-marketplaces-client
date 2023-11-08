import Banner from "../Banner/Banner";
import ReactTabs from "../ReactTabs/ReactTabs";
import OurServiceSystem from "./OurServiceSystem";
import SearchBox from "./SearchBox";
import WhyChooseUs from "./WhyChooseUs";

const Home = () =>{
    return(
        <div id="home">
            <Banner></Banner>
            <SearchBox></SearchBox>
            <OurServiceSystem></OurServiceSystem>
            <ReactTabs></ReactTabs>
            <WhyChooseUs></WhyChooseUs>
        </div>
    )
}
export default Home;