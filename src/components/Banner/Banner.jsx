const Banner = () => {
    return (
        <div>
            <div className="w-full h-[600px]" style={{ backgroundImage: `url("https://i.ibb.co/n8z017z/hero-area-bg1.jpg")` }}>
                <div className="space-y-10 pt-[100px]">
                    <div className="flex flex-col text-center">
                        <h1 className="text-white text-5xl pb-4 tracking-[4px]">Create Your Own</h1>
                        <h1 className="text-white text-5xl tracking-[4px]">Career With Our Marketplace</h1>
                    </div>
                    <div>
                        <p className="text-white text-center">MartPlace is the most powerful, & customizable template for Easy Digital Downloads Products</p>
                    </div>
                    <div className="flex justify-center gap-6">
                        <button className="px-5 py-[10px]  text-white border border-white rounded-2xl font-bold hover:bg-white hover:text-pink-900">View All Jobs</button>
                        <button className="px-5 py-[10px]  text-white border border-white rounded-2xl font-bold hover:bg-white hover:text-pink-900">Popular Jobs</button>
                    </div>
                </div>

                <div className="w-full h-[600px] bg-pink-900 mt-[-362px] bg-opacity-90">
                
               </div>

            </div>


            
        </div>
    )
}
export default Banner;