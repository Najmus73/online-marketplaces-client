const OurServiceSystem = () =>{
    return (
        <div className="py-[50px]">
            <h1 className="text-2xl font-bold text-center text-pink-900">Our Service Quality</h1>
            <div className="flex w-[1450px] mx-auto justify-between py-[50px] px-[150px]">
                <div className="w-[350px] h-[395px] shadow-xl  border border-pink-900 hover:shadow-2xl hover:shadow-pink-900  p-[20px] flex flex-col justify-center text-center space-y-5">
                    <div className="flex justify-center"><img className="w-[112px]" src="https://i.ibb.co/54CLvWY/feature1.png" alt="" /></div>
                    <h1>Best UX Research</h1>
                    <p>Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut scelerisque the mattis, leo quam aliquet diam congue is laoreet elit metus.</p>
                </div>
                <div className="w-[350px] h-[395px]  shadow-xl border border-pink-900 hover:shadow-2xl hover:shadow-pink-900 p-[20px] flex flex-col justify-center text-center space-y-5">
                    <div className="flex justify-center"><img src="https://i.ibb.co/mHvp0rX/feature2.png" alt="" /></div>
                    <h1>Fully Responsive</h1>
                    <p>Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut scelerisque the mattis, leo quam aliquet diam congue is laoreet elit metus.</p>
                </div>
                <div className="w-[350px] h-[395px] shadow-xl border border-pink-900 hover:shadow-2xl hover:shadow-pink-900 p-[20px] flex flex-col justify-center text-center space-y-5">
                    <div className="flex justify-center"><img src="https://i.ibb.co/6wQYPdm/feature3.png" alt="" /></div>
                    <h1>Buy & Sell Easily</h1>
                    <p>Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut scelerisque the mattis, leo quam aliquet diam congue is laoreet elit metus.</p>
                </div>
            </div>
        </div>
    )
}
export default OurServiceSystem;