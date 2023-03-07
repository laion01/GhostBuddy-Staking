import Link from 'next/link';
import Image from 'next/image';

export default function MemberItem({imagePath, name, onClickHandler}) {
    return(
        <div className='flex flex-col items-center justify-center'
            onClick={() => onClickHandler()}>
            <div className='relative w-[250px] h-[250px] m-[15px] hover:w-[270px] hover:h-[270px] hover:m-[5px] rounded-[100%] transitioin-all duration-200 overflow-hidden pointer-events-auto border-[4px] border-[white] grayscale'>
                <Image
                    src={imagePath}
                    alt=''
                    width={500}
                    height={500}/>
            </div>
            <p className='text-[white] text-[24px]'> {name}</p>
        </div>
    );
}