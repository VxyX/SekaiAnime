import SekaiAnimeLogo from '../../public/logoMain.svg?react'
import profil from '../assets/281419.jpg'
import SearchIcon from '../assets/search.svg?react'

export default function Header() {
    return <div className="flex py-3 bg-lightPrimary text-white w-full h-16">
        <div className="ml-5 flex justify-center my-auto">
            <SekaiAnimeLogo height='40px' width='40px'/>
            <div className='flex flex-col ml-3'>
                <span className='font-semibold'>
                    Sekai Anime
                </span>
                <span className='font-thin text-[11px]'>
                    セカイアニメ
                </span>
            </div>
            
        </div>
        <div className="flex justify-end ml-auto  my-auto w-[35%] right-0">
            <form className='mr-5 my-auto flex-grow'>
                <div className='flex'>
                    <div className='flex bg-white rounded-l-full pr-2'>
                        <SearchIcon className='my-auto ml-2'/>
                    </div>
                    <input type='text' className='rounded-r-full w-full text-black'/>
                </div>
            </form>
            <div className='flex max-h-9'>
                <div className='flex flex-col mr-5'>
                    <span className='font-semibold text-[12px]'>
                        Welcome!,
                    </span>
                    <span className='font-thin text-[11px]'>
                        Kontol
                    </span>
                </div>
                <div className='rounded-full bg-lightPrimary overflow-hidden mr-5'>
                    <img className='' src={profil} height={40} width={40}/>
                </div>
            </div>
        </div>
    </div>
}