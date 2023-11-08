import '../Styles/Styles.css'
const SearchBox = () => {
    return (
        <div className="pb-[100px]" id='search'>
        <div className="w-[1087px] mx-auto h-[134px] shadow-2xl shadow-pink-900 mt-[-67px] bg-white rounded-lg">
            <div className="flex justify-center gap-5 py-[45px]">
                <div>
                    <input className="py-[10px] px-[15px] w-[400px] border border-pink-900 rounded-l-lg" type="text" placeholder="Search Your Products.." />
                    <button className="px-5 py-[10px] border border-pink-900 rounded-r-lg"style={{backgroundColor: '#E9E9ED'}}>All Categories</button>
                </div>
                <div>
                    <button className="px-5 py-[10px] bg-pink-900 text-white border border-white rounded-lg font-bold hover:bg-white hover:text-pink-900 hover:shadow-2xl hover:shadow-pink-900">Search Now</button>
                </div>
            </div>
        </div>
        <div className="w-[1050px] mx-auto h-[134px]  mt-[-146px] bg-white bg-opacity-50 rounded-lg">
           
        </div>
        <div className="w-[1020px] mx-auto h-[134px]  mt-[-146px] bg-white bg-opacity-50 rounded-lg">
           
        </div>
        </div>
    )
}
export default SearchBox;