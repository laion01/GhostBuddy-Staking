export default function Launch() {
    return (
        <div className="flex flex-col md:flex-row mt-[50px]">
            <div className="w-full md:w-[50%] mb-[20px] px-[10px] flex justify-center items-center px-[20px]">
                <video autoPlay={true} playsInline muted loop>
                    <source src="/videos/web_aod.m4v" type='video/mp4'/>
                </video>
            </div>
            <div className="flex flex-col px-[20px]">
                <h2 className="text-[50px] font-bold mb-[30px] leading-[90%]">XSEED Token Coming Soon</h2>
                <p>Sign up to our newsletter to keep upto date</p>
                <div className="flex items-center mt-[10px] mr-[30px]">
                    <input type="email" className="flex-grow outline-none bg-[white] h-[40px] rounded-l-[8px] text-black px-[10px]" />
                    <button className="h-[40px] bg-[black] border-[2px] border-[white] rounded-r-[20px] px-[20px]">
                        Sign up
                    </button>
                </div>
            </div>
        </div>
    )
}