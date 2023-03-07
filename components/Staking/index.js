import StakingNFTItem from "components/StakingNFTItem";
import { useState } from "react"
import Image from "next/image";

export default function Staking() {

    const [selectedTab, selectTab] = useState(0);
    const [stakedGhost, setStakedGhost] = useState(5);
    const [unStakedGhost, setUnStakedGhost] = useState(5);
    return (
        <div className="flex flex-col pt-[200px] z-10 relative lg:mx-[100px] md:mx-[80px] mx-[50px] pointer-events-none">
            <div className="">
                <h2 className="text-white text-[32px]"> GB Staking </h2>
            </div>

            <div className="flex items-end">
                <button className={"min-w-[150px] px-[16px] py-[10px] mr-[10px] h-[50px] rounded-[8px] text-[16px] pointer-events-auto" + (selectedTab == 0 ? " bg-[#AAEFFF] text-black" : " bg-[transparent] text-white")}
                    onClick={() => { selectTab(0)}}
                >
                    All
                </button>
                <button className={"min-w-[150px] px-[16px] py-[10px] mr-[10px] h-[50px] rounded-[8px] text-[16px] pointer-events-auto" + (selectedTab == 1 ? " bg-[#AAEFFF] text-black" : " bg-[transparent text-white")}
                    onClick={() => { selectTab(1)}}
                >
                    Staked Ghost{stakedGhost > 0 ? `(${stakedGhost})` : ``}
                </button>
                <button className={"min-w-[150px] px-[16px] py-[10px] mr-[10px] h-[50px] rounded-[8px] text-[16px] pointer-events-auto" + (selectedTab == 2 ? " bg-[#AAEFFF] text-black" : " bg-[transparent text-white")}
                    onClick={() => { selectTab(2)}}
                >
                    Unstaked Ghost{unStakedGhost > 0 ? `(${unStakedGhost})` : ``}
                </button>

                <div className="grow"></div>
                <div className="flex bg-gradient-to-r border-[#400077] border-[2px] rounded-[10px]  h-[111px] w-[470px]"  style={{background: "linear-gradient(90deg, #AAEFFF 0%, #EEAFFF 100%)", boxShadow: "0px 5px 0px #400077"}}>
                    <div className="w-1/2 border-r-[2px] border-r-[black] flex flex-col px-[30px] justify-center">
                        <p className="text-[#6F617A] text-[16px]"> Total Rewards</p>
                        <p className="text-white text-[32px]">$5,555, 000 </p>
                    </div>
                    <div className="w-1/2 border-r-[2px] border-r-[black] flex flex-col px-[30px] justify-center">
                        <p className="text-[#6F617A] text-[16px]"> Available for claim </p>
                        <p className="text-white text-[32px]">$ 5.550 </p> 
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap justify-center mt-[60px]">
                <StakingNFTItem data={{ id: 1, image:"/images/nft_1.png"}}/>
                <StakingNFTItem data={{ id: 2, image:"/images/nft_2.png"}}/>
                <StakingNFTItem data={{ id: 3, image:"/images/nft_3.png"}}/>
                <StakingNFTItem data={{ id: 4, image:"/images/nft_4.png"}}/>
                <StakingNFTItem data={{ id: 5, image:"/images/nft_5.png"}}/>
            </div>

            <div className="flex justify-between items-center mb-[100px] mt-[50px]">
                <button className="flex items-center"> 
                    <p className="text-white mr-[10px]"> Powered by </p>
                    <Image alt="" src="/images/yxn.io.png" width={98} height={18} />
                </button>
                <button className="flex items-center"> 
                    <p className="flex flex text-white mr-[10px]"> Find all ghosts </p>
                    <Image alt="" src="/images/arrow_right.png" width={43} height={23} />
                </button>
            </div>
        </div>
    )
}