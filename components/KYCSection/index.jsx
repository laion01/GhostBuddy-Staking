import Image from "next/image";

export default function KYCSection() {
    return (
        <div className="flex flex-col text-[white] lg:mx-[100px] md:mx-[80px] mx-[50px] mt-[100px] relative z-10 pointer-events-none bg-[#303030a0] border-[3px] border-[#ffffffA0] pointer-events-auto">
            <div className="rounded-[20px] border-[1px] border-[transparent]">
                <Image src="/images/sale.jpg" alt="" width={1920} height={800}/>
            </div>
            <div className="flex flex-col md:flex-row mt-[10px]">
                <div className="flex flex-col  w-full md:w-[50%] p-[20px]">
                    <p className="mb-[5px]"> To contribute to our community private sale, please follow these steps: </p>
                    <p className="ml-[20px]">1. Complete KYC</p>
                    <p className="ml-[20px]">2. Return to our site after 12 hours. (We aim to get the KYC processed within 12 hours)</p>
                    <p className="ml-[20px] mb-[5px]">3. Click contribute</p>
                    <p className="font-bold">Only trust links from us and our official channels</p>
                </div>
                <div className="w-full md:w-[50%] p-[20px] pointer-events-auto">
                    <button className="w-full h-[40px] rounded-[20px] bg-[transparent] text-[white] border-[2px] border-[white] mt-[10px]"> Complete KYC </button>
                    <button className="w-full h-[40px] rounded-[20px] bg-[transparent] text-[white] border-[2px] border-[white] mt-[10px]"> Contribute </button>
                </div>
            </div>
        </div>
    )
}