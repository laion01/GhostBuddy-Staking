import { useState, useEffect } from 'react';
import Image from 'next/image';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeSvgIcon } from 'react-fontawesome-svg-icon';

let timerId;

/* eslint-disable @next/next/no-img-element */
export default function LogoVideo({}) {
    const [selectedScreen, selectScreen] = useState(0);
    const [ml, setPosition] = useState(-5);
    const [sliderPos, setSliderPos] = useState(0);
    const getPosition = (id) => {
        const p = 5 - screens.length * 80 / 2 + 40 + 80 * id;
        return p;
    }

    const onSelectScreen = (i) => {
        selectScreen(i)
    }

    const onNext = () => {
        // clearTimeout(timerId);
        if(selectedScreen == screens.length - 1) {
            selectScreen(0);
        } else {
            selectScreen(selectedScreen + 1);
        }
    }

    const onPrev = () => {
        // clearTimeout(timerId);
        if(selectedScreen == 0) {   
            selectScreen(screens.length - 1);
        } else {
            selectScreen(selectedScreen - 1);
        }
    }

    useEffect(() => {
        setPosition(getPosition(selectedScreen));
        setSliderPos((selectedScreen * -200) + '%')
        
        timerId = setTimeout(() => {
            if(selectedScreen == screens.length - 1) {
                selectScreen(0);
            } else {
                selectScreen(selectedScreen + 1);
            }
        }, screens[selectedScreen].videoLength);

        return () => {
            clearTimeout(timerId);
        }
    }, [selectedScreen]);


    return (
        <div className='w-full h-[100vh] flex justify-center overflow-hidden relative'>
            <div className='w-full transition-all duration-700 flex' style={{marginLeft: sliderPos}}>
                { screens.map((screen, index) => {
                        return (
                            <div className='relative min-w-full h-full' key={index}>
                                <video autoPlay={true} className="absolute top-0 left-0 min-h-[100%] min-w-[100%] object-cover" playsInline muted loop>
                                    <source src={screen.bgVideo} type='video/mp4'/>
                                </video>
                                <div className='absolute flex flex-col w-full md:w-[50%] h-full pt-[100px] pr-[50px] md:pr-[0px] pl-[50px] justify-center items-center'>
                                    { screen.logoImage.length >0 &&
                                        <div className='mb-[20px]'>
                                            <img src={screen.logoImage} alt="" style={{marginBottom: 30, marginLeft: 15, marginRight: 15}}/>
                                        </div>
                                    }
                                    { screen.title.showTitle > 0 &&
                                        <h1 className='text-[48px] text-white font-bold drop-shadow-2xl text-center'> {screen.title}</h1>
                                    }
                                    <div className='flex flex-wrap justify-center'>
                                        <button className='w-fit h-[60px] px-[20px] bg-[#5080ff] hover:bg-[#ff0000] rounded-[40px] text-[24px] text-white mb-[10px] font-bold mr-[10px]'> Vist Website </button>
                                        <button className='w-fit h-[60px] px-[20px] bg-[#5080ff] hover:bg-[#9090ff] rounded-[40px] text-[24px] text-white mb-[10px] font-bold'> Buy Now </button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                )}
            </div>
            <div className='w-full h-full absolute top-0 left-0 flex justify-between items-center pointer-events-none'>
                <div className='h-full w-[50px] md:w-[100px] flex justify-center items-center bg-transparent opacity-0 md:opacity-10 hover:opacity-100 transition-all duration-500 pointer-events-auto' onClick={() => onPrev()}>
                    <FontAwesomeSvgIcon icon={faCaretLeft} className='w-[24px] h-[24px] text-white bg-[#ffffff80] rounded-[20px] p-[8px]'/>
                </div>
                <div className='h-full w-[50px] md:w-[100px] flex justify-center items-center bg-transparent opacity-0 md:opacity-10 hover:opacity-100 transition-all duration-500 pointer-events-auto' onClick={() => onNext()}>
                    <FontAwesomeSvgIcon icon={faCaretRight} className='w-[24px] h-[24px] text-white bg-[#ffffff80] rounded-[20px] p-[8px]'/>
                </div>
            </div>
            <div className='absolute w-full bottom-[50px] flex justify-center items-center'>
                { screens.map((screen, index) => {
                        return (
                            <div className='w-[30px] h-[10px] bg-[#ffffff80] mx-[5px] rounded-[5px]' key={index} onClick={() => onSelectScreen(index)}> </div>
                        )
                    }
                )}
            </div>
            <div className='absolute w-full bottom-[50px] flex justify-center items-center pointer-events-none'>
                <div className='w-[30px] h-[10px] bg-[#ffffffa0] mr-[5px] rounded-[5px] transition-all duration-700' style={{marginLeft: ml}}> </div>
            </div>
        </div>
    )
}

const screens = [
    {
        showTitle: false,
        title: "Age of Dragons",
        bgImage: "",
        width: 600, height: 570,
        logoImage: "/images/gameLogos/aod_logo.png",
        bgVideo: "/videos/web_aod.m4v",
        videoLength: 12000,
        websiteLink: "https://aod.localhost:3000/"
    }, {
        showTitle: false,
        title: "Block Football Manager",
        bgImage: "",
        width: 4000, height: 4000,
        logoImage: "/images/gameLogos/bfm_logo.png",
        bgVideo: "/videos/web_bfm.m4v",
        videoLength: 8000,
        websiteLink: "https://bfn.localhost:3000/"
    }, {
        showTitle: false,
        title: "Chain Ski",
        bgImage: "",
        width: 501, height: 301,
        logoImage: "/images/gameLogos/chainski_logo.png",
        bgVideo: "/videos/web_chainski.m4v",
        videoLength: 9000,
        websiteLink: "https://chainski.localhost:3000/"
    }, {
        showTitle: false,
        title: "Defi Gravity",
        bgImage: "",
        width: 1920, height: 1080,
        logoImage: "/images/gameLogos/defi_gravity_logo.png",
        bgVideo: "/videos/web_defi_gravity.m4v",
        videoLength: 8000,
        websiteLink: "https://defigravity.localhost:3000/"
    }, {
        showTitle: false,
        title: "Mext-X",
        bgImage: "",
        width: 1000, height: 525,
        logoImage: "/images/gameLogos/meta_x_logo_white.png",
        bgVideo: "/videos/web_metax.m4v",
        videoLength: 9000,
        websiteLink: "https://metax.localhost:3000/"
    }, {
        showTitle: false,
        title: "Music Beatz",
        bgImage: "",
        width: 614, height: 145,
        logoImage: "/images/gameLogos/music_beatz_logo.png",
        bgVideo: "/videos/web_music_beatz.m4v",
        videoLength: 10000,
        websiteLink: "https://musicbeatz.localhost:3000/"
    }, {
        showTitle: true,
        title: "Odin's Ring",
        bgImage: "",
        width: 0, height: 0,
        logoImage: "",
        bgVideo: "/videos/web_odin.m4v",
        videoLength: 10000,
        websiteLink: "https://odin.localhost:3000/"
    }, {
        showTitle: false,
        title: "OPERATION SATOSHI",
        bgImage: "",
        width: 1920, height: 1080,
        logoImage: "/images/gameLogos/op_sat_logo_white_large.png",
        bgVideo: "/videos/web_opsat.m4v",
        videoLength: 9000,
        websiteLink: "https://opsat.localhost:3000/"
    }, {
        showTitle: false,
        title: "X-SPEED",
        bgImage: "",
        width: 1000, height: 200,
        logoImage: "/images/gameLogos/xspeed_logo_white.png",
        bgVideo: "/videos/web_xspeed.m4v",
        videoLength: 10000,
        websiteLink: "https://xspeed.localhost:3000/"
    }, {
        showTitle: false,
        title: "SHOOTER RUN",
        bgImage: "",
        width: 433, height: 267,
        logoImage: "/images/gameLogos/shooter_run_logo_color.png",
        bgVideo: "/videos/web_shooter_run.m4v",
        videoLength: 10000,
        websiteLink: "https://xspeed.localhost:3000/"
    }, {
        showTitle: false,
        title: "DEFEND THE BASE",
        bgImage: "",
        width: 655, height: 254,
        logoImage: "/images/gameLogos/defendThebase_logo.png",
        bgVideo: "/videos/web_dtb.m4v",
        videoLength: 11000,
        websiteLink: "https://dtb.localhost:3000/"
    }, {
        showTitle: false,
        title: "X-SPACE",
        bgImage: "",
        width: 1920, height: 1080,
        logoImage: "/images/gameLogos/xspace_logo.png",
        bgVideo: "/videos/web_xspace.m4v",
        videoLength: 9000,
        websiteLink: "https://xspace.localhost:3000/"
    }, {
        showTitle: false,
        title: "X-FIGHTER",
        bgImage: "",
        width: 1352, height: 1153,
        logoImage: "/images/gameLogos/xfighter_logo.png",
        bgVideo: "/videos/web_xfighter.mp4",
        videoLength: 5000,
        websiteLink: "https://xfighter.localhost:3000/"
    }
]