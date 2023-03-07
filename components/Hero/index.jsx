import { useState, useEffect } from 'react';
import Image from 'next/image';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeSvgIcon } from 'react-fontawesome-svg-icon';

let timerId;

/* eslint-disable @next/next/no-img-element */
export default function Hero({}) {
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
        <div className='w-full h-[100vh] flex flex-col overflow-hidden relative p-[100px]'>
            <div className='flex flex-col'>
                <div className='flex h-[24px]'>
                    <div className='w-[24px] h-[24px]'>
                        <Image alt="" src="/images/topleft.png" width={24} height={24} />
                    </div>
                    <div className='bg-[#5e6579] grow'></div>
                    <div className='w-[24px] h-[24px]'>
                        <Image alt="" src="/images/topright.png" width={24} height={24} />
                    </div>
                </div>
                <div className='flex bg-[#5e6579] p-[20px]'>
                    <h3 className='text-white text-[32px]'> TRILLIONAIRE THUGS</h3>
                </div>
            </div>
            <Image alt="" src="/images/hero/1.jpg" width={1501} height={746} />
            <div className='flex flex-col'>
                <div className='flex bg-[#5e6579] p-[20px]'>
                    <h3 className='text-white text-[32px]'> TRILLIONAIRE THUGS</h3>
                </div>
                <div className='flex h-[24px]'>
                    <div className='w-[24px] h-[24px]'>
                        <Image alt="" src="/images/bottomleft.png" width={24} height={24} />
                    </div>
                    <div className='bg-[#5e6579] grow'></div>
                    <div className='w-[24px] h-[24px]'>
                        <Image alt="" src="/images/bottomright.png" width={24} height={24} />
                    </div>
                </div>
                
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
        logoImage: "/images/hero/1.jpg",
        bgVideo: "/videos/web_aod.m4v",
        videoLength: 12000,
        websiteLink: "https://aod.localhost:3000/"
    }, {
        showTitle: false,
        title: "Block Football Manager",
        bgImage: "",
        width: 4000, height: 4000,
        logoImage: "/images/hero/2.jpg",
        bgVideo: "/videos/web_bfm.m4v",
        videoLength: 8000,
        websiteLink: "https://bfn.localhost:3000/"
    }
]