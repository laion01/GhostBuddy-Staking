import Image from "next/image"
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon";
import Link from "next/link";
import { faLinkedin, faTwitter, faGithub, faInstagram, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function ItemView({member, onCloser}) {

    return (
        
        <div className="w-full h-[100vh] fixed top-0 left-0 z-40 items-center flex justify-center">
            <div className="w-full h-full fixed top-0 left-0 bg-[#00000080] blur-sm"
                onClick={() => onCloser(false)}></div>
            <div className="z-45 w-[800px] max-h-[calc(100vh-100px)] my-[30px] flex flex-col md:flex-row bg-[black] shadow rounded-[20px] drop-shadow-xxl mx-[50px] transition-opacity duration-300 border-[1px] border-[#ffffff40] overflow-hidden justify-center items-center">
                <div className="min-w-[250px] w-[250px] h-[250px] m-[10px] rounded-[8px] overflow-hidden flex justify-center overflow-hidden">
                    <Image src={member.avatar} alt="" width={500} height={500}/>
                </div>
                <div className="h-[270px] flex flex-col justify-between px-[20px] py-[20px] bg-[#000030] overflow-y-auto">
                    <div className="flex flex-col justify-start">
                        <div className="flex items-center md:flex-row flex-col flex-wrap">
                            <h3 className="text-[white] text-[24px]"> { member.name } </h3>
                            <p className="text-[gray] text-[16px] ml-[5px] pt-[6px]"> { member.role} </p>
                        </div>
                        
                        <p className="text-[white] text-[14px] mt-[10px]"> { member.content }</p>
                    </div>
                    
                    <div className="flex justify-between items-center mt-[5px] px-[5px]">
                        <div className="flex items-center">
                            {member.websiteLink?.length > 0 && 
                                <Link href={member.websiteLink}>
                                    <a target="_blank" className="flex justify-center items-center">
                                        <FontAwesomeSvgIcon icon={faLink} className="w-[24px] h-[24px] text-[#A0A0ff]"/>
                                        <p className="ml-[10px] text-[#A0A0ff]"> Website </p>
                                    </a>
                                </Link>
                            }
                        </div>
                        <div className="flex mt-[5px]">
                            { member.linkedinLink?.length > 0 && 
                                <Link href={member.linkedinLink}>
                                    <a target="_blank" className="flex justify-center items-center text-white mr-[10px]">
                                        <FontAwesomeSvgIcon icon={faLinkedin} className="w-[24px] h-[24px] text-[#A0A0ff]"/>
                                    </a>
                                </Link>
                            }
                            { member.twitterLink?.length > 0 && 
                                <Link href={member.twitterLink}>
                                    <a target="_blank" className="flex justify-center items-center text-white mr-[10px]">
                                        <FontAwesomeSvgIcon icon={faTwitter} className="w-[24px] h-[24px] text-[#A0A0ff]"/>
                                    </a>
                                </Link>
                            }
                            { member.instagramLink?.length > 0 && 
                                <Link href={member.instagramLink}>
                                    <a target="_blank" className="flex justify-center items-center text-white mr-[10px]">
                                        <FontAwesomeSvgIcon icon={faInstagram} className="w-[24px] h-[24px] text-[#A0A0ff]"/>
                                    </a>
                                </Link>
                            }
                            { member.githubLink?.length > 0 && 
                                <Link href={member.githubLink}>
                                    <a target="_blank" className="flex justify-center items-center text-white mr-[10px]">
                                        <FontAwesomeSvgIcon icon={faGithub} className="w-[24px] h-[24px] text-[#A0A0ff]"/>
                                    </a>
                                </Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}