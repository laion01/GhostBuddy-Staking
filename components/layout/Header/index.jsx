import Image from 'next/image';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { FontAwesomeSvgIcon } from 'react-fontawesome-svg-icon';
import { faBars} from '@fortawesome/free-solid-svg-icons'
import Button from './Button';
import { ConnectWallet } from "@thirdweb-dev/react";

export default function Header() {
    const [ isDropDown, openDropdown ] = useState(false);
    const [ isShadow, showShadow] = useState(false);
    useEffect(() => {
        if(window) {
            window.onscroll = function() {
                checkScroll();
            }
        }
    }, [])

    const checkScroll = function() {
        if(window.pageYOffset > window.innerHeight * 0.75) {
            showShadow(true);
        } else {
            showShadow(false);
        }
    }

    return (
        <div className="z-30 fixed w-full top-0 pt-[17px] flex justify-center transition-all duration-500 bg-white h-[97px] mb-[20px]">
            <div className='w-[1280px] flex justify-between'>
                <div className='h-[114px] flex'>
                    <Image 
                        src='/images/Logo_160px.png' 
                        alt=''
                        width={160}
                        height={114}
                    />
                </div>
                <div className='flex justify-end items-center'>
                    <Navbar className="hidden lg:block"/>
                    {/* <button className='flex justify-center items-center bg-[#AAEFFF] border-[#400077] border-[2px] rounded-[10px] px-[28px] py-[14px] text-[16px] text-[#440077]' style={{boxShadow: "0px 5px 0px #400077"}}>
                        <Image alt="" src="/images/down.png" width={16} height={9}/>
                        <p className='ml-[15px]'>Connect Wallet</p>
                    </button> */}
                    <ConnectWallet className='bg-[#AAEFFF] border-[#400077] border-[2px] rounded-[10px] '
                        colorMode="dark"
                        accentColor="#AAEFFF"
                    />
                    <div className='block lg:hidden'>
                        <div className='w-[40px] h-[40px] flex justify-center items-center'
                        onClick={() => openDropdown(true)}>
                            <FontAwesomeSvgIcon icon={ faBars } className="w-[30px] h-[30px] text-[white]"/>
                        </div>
                        { isDropDown &&
                            <div className='fixed w-full left-0 z-50 top-0'>
                                <div className='flex w-full flex-col p-[20px] bg-[#000020] shadow'>
                                    <Button link='#about' label='About' target='_self'></Button>
                                    <Button link='#games' label='Projects' target='_self'></Button>
                                    <Button link='hhttps://docs.google.com/presentation/d/1n33uTwCbqi3RnSLIxhGcTiK0ccQCH4klerCywgxUIS4/edit' label='Pitch Deck' target='_blank'></Button>
                                    <Button link='https://meta-xseed.gitbook.io/metaxseed-games-studio-usdxseed/' label='Whitepaper' target='_blank'></Button>
                                    <Button link='#team' label='Roadmap' target='_self'></Button>
                                </div>
                            </div>
                        }
                        {isDropDown &&
                            <div className='fixed left-0 top-0 w-[100%] h-[100%] bg-[#00000090]' onClick={() => openDropdown(false)}> 
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}