import Banner from "../Banner/Banner";
import ReactTabs from "../ReactTabs/ReactTabs";
import OurServiceSystem from "./OurServiceSystem";
import SearchBox from "./SearchBox";

const Home = () =>{
    return(
        <div>
            <Banner></Banner>
            <SearchBox></SearchBox>
            <ReactTabs></ReactTabs>
            <OurServiceSystem></OurServiceSystem>
        </div>
    )
}
export default Home;