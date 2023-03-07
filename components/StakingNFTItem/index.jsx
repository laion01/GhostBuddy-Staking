import Image from "next/image";

export default function StakingNFTItem({data}) {
    return (
        <div className="flex flex-col m-[12px] bg-[url('/images/nftback.png')] bg-cover pb-[23px]">
            <div className="w-[203px] h-[203px] mt-[25px]">
                <Image alt="" src={data.image} width={200} height={200}/>
            </div>
            <p className="mx-[21px] mt-[15px] text-white"> Ghost Buddy #{data.id}</p>
            <div className="mx-[21px] mt-[16px] flex justify-between items-center">
                <p className="text-[#6C6376] text-[12px]"> Earned </p>
                <p className="text-[#91D2F6] text-[12px]"> 22.42 </p>
            </div>
            <div className="h-[8px] mx-[21px] bg-[#6C6376] overflow-hidden flex justify-end mt-[5px]">
                <div className="h-[8px] bg-white" style={{width : "30%"}}></div>
            </div>
            <p className="mx-[21px] text-[#6C6376] text-[12px]"> 5/7 days staking </p>
            <div className="mx-[21px] flex justify-between items-center">
                <button className="text-[16px] text-white pointer-events-auto"> Stake </button>
                <button className="text-[16px] text-[#91D2F6] pointer-events-auto"> Claim </button>
            </div>
        </div>
    )
}