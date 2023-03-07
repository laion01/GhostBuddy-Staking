import Image from "next/image";
import Launch from "./Launch";

export default function AboutUs() {
    return (
        <div className="flex flex-col text-[white] lg:mx-[100px] md:mx-[80px] mx-[50px] relative z-10 pointer-events-none" id="about">
            <h2 className="text-center text-[40px] font-bold mb-[20px] mt-[100px]">About Us</h2>
            <div className="w-full flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-[50%] flex flex-col">
                    <h3 className="text-[32px] text-white font-bold mb-[30px]"> Focusing on the Cutting Edge Technologies </h3>
                    <p className="mb-[20px]">MetaXSeed is focused on the combination of AAA, Indie games as well as gaming wearables and infrastructure for mass adoption. The project will use two coins - $XSEED (Games Studio, Launchpad, Incubator, NFTs) and $METAX (Open Metaverse, VR Wearables Integration, Gaming Infrastructure).</p>
                    <p className="font-bold">$XSEED Rewards</p>
                    <ul className="ml-[10px] mb-[20px]">
                        <li> 🟢 Free airdrops of all incubated games</li>
                        <li> 🟢 Profit share of game related transactions</li>
                        <li> 🟢 Transaction revenues from game related NFTs such as land and characters</li>
                        <li> 🟢 Access to seed rounds to every incubated game</li>
                        <li> 🟢 Access to seed rounds to every incubated game</li>
                        <li> 🟢 Metaverse advertising revenue</li>
                    </ul>
                    <p>MetaXSeed has a partnership with the prestigious Polygon Studios and is a member of the Blockchain Gaming Alliance (BGA) which is led by the founder of Sandbox ($SAND).</p>
                </div>
                <div>
                    <Image src="/images/xseed-1.svg" alt="" width={500} height={500} />
                </div>
            </div>
            <div className="flex flex-col mt-[20px]">
                <h3 className="text-[32px] text-white font-bold mb-[20px]"> Games Studio </h3>
                <p>A sophisticated factory system for quality games will be developed where incubated games can choose a level of incubation to suit their needs. Game developers will have access to games infrastructure modules for scalability, security and performance. Additionally, a team of game developers and 2D/3D artists will be at hand to make vision into reality. In exchange for incubation, $XSEED token holders will benefit from receiving free airdrops of the new games in proportion to their holdings. Games developers will have access to reusable code, 3D models, modules and components. Regular audits will be conducted to ensure integrity of the platform and associated games.</p>
            </div>
            <Launch/>
        </div>
    )
}