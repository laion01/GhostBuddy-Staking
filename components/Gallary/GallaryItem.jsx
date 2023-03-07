import Link from 'next/link';
import Image from 'next/image';

export default function GallaryItem({videoPath, imagePath, w, h, label, onClickHandler}) {
    return(
        <div className='flex flex-col items-center justify-center drop-shadow-2xl'
            onClick={() => onClickHandler()}>
            <div className='relative w-[280px] h-[350px] m-[10px] hover:p-[0px] p-[10px] rounded-[10px] transitioin-all duration-200 overflow-hidden'>
                <div className='absolte left-0 top-0 rounded-[10px] border-[1px] border-[transparent] overflow-hidden cursor-pointer pointer-events-auto'
                    onClick={() => onClickHandler()}>
                    <Image
                        src={imagePath}
                        alt=''
                        width={w}
                        height={h}/>
                </div>
                <div className='absolute left-0 top-0 w-full h-full opacity-0 hover:opacity-100 transition-all duration-1000 pointer-events-auto'>
                    <video autoPlay={true} className="relative w-full h-full object-cover" playsInline muted loop>
                        <source src={videoPath} type='video/mp4'/>
                    </video>
                </div>
            </div>
            <p className='text-[white] text-[24px]'> {label}</p>
        </div>
    );
}