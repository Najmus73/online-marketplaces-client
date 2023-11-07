import Banner from "../Banner/Banner";
import ReactTabs from "../ReactTabs/ReactTabs";
import SearchBox from "./SearchBox";

const Home = () =>{
    return(
        <div>
            <Banner></Banner>
            <SearchBox></SearchBox>
            <ReactTabs></ReactTabs>
        </div>
    )
}
export default Home;