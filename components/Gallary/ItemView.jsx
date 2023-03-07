import Image from "next/image"
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon";
import Link from "next/link";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function ItemView({gameInfo, onCloser}) {
    return (
        <div className="w-full h-[100vh] fixed top-0 left-0 z-40 items-center flex justify-center">
            <div className="w-full h-full fixed top-0 left-0 bg-[#00000080] blur-sm"
                onClick={() => onCloser(false)}></div>
            <div className="z-45 w-[800px] max-h-[calc(100vh-100px)] my-[30px flex flex-col bg-[black] shadow rounded-[20px] drop-shadow-2xl mx-[50px] transition-opacity duration-300 ">
                <div className="w-full h-[250px] overflow-hidden flex justify-center overflow-hidden rounded-t-[20px]">
                    {/* <Image src={gameInfo.bgImage} alt="" width={800} height={gameInfo.height} layout={"intrinsic"}/> */}
                    <video autoPlay={true} className="relative w-full object-cover" playsInline muted loop>
                        <source src={gameInfo.video} type='video/mp4'/>
                    </video>
                </div>
                <div className="flex flex-col px-[20px] py-[20px] rounded-b-[20px] border-[4px] border-[#ffffffa0] border-t-[transparent] bg-[#000030] overflow-y-auto">
                    <div className="w-full flex items-center justify-between p-[10px]">
                        <div className="rounded-[16px] border-[1px] w-[32px] h-[32px]">
                            <Image src={gameInfo.coinImage} alt="" width={32} height={32}/>
                        </div>
                        <div className="flex items-center">
                            <div className="w-[32px] h-[32px] rounded-[12px] mr-[10px]">
                                <Image src={gameInfo.chainImage} alt="" width={32} height={32}/>
                            </div>
                            <p className="text-[14px] text-white bg-[gray] rounded-[12px] px-[8px] py-[4px]"> {gameInfo. status } </p>
                        </div>
                    </div>
                    <h3 className="text-[white] text-[24px]"> { gameInfo.title } </h3>
                    <p className="text-[gray] text-[16px] ml-[5px]"> { gameInfo.coinSymbol} </p>
                    <p className="text-[white] text-[14px]"> { gameInfo.context }</p>
                    <div className="flex justify-between items-center mt-[5px] px-[5px]">
                        <div className="flex items-center">
                            <Link href={gameInfo.websiteLink}>
                                <a target="_blank" className="flex justify-center items-center">
                                    <FontAwesomeSvgIcon icon={faLink} className="w-[24px] h-[24px] text-[#A0A0ff]"/>
                                    <p className="ml-[10px] text-[#A0A0ff]"> Website </p>
                                </a>
                            </Link>
                        </div>
                        <div>
                            <Link href={gameInfo.twitterLink}>
                                <a target="_blank" className="flex justify-center items-center">
                                    <FontAwesomeSvgIcon icon={faTwitter} className="w-[24px] h-[24px] text-[#A0A0ff]"/>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}