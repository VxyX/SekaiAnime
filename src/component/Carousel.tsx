import spyx from '../assets/spyx.png'

export default function Carousel() {
    return (<div className="w-full h-[75vh] relative">
        {/* image container */}
        <div className="w-full h-full">
            <div className='w-full h-full'>
                <img src={spyx} className='object-cover w-full h-full object-top'/>
            </div>
           
            <div className="w-full h-full bg-gradient-to-r from-black from-1% to-transparent to-80% absolute top-0 opacity-95">

            </div>
            
        </div>

        {/* text container */}
        <div className='absolute top-0 flex w-full'>
            {/* left arrow carrousel */}
            <div className='w-[5%]'>
                ada
            </div>
            <div className='flex-grow ml-5 mt-20'>
                <span>
                    This Day
                </span>
                <div className='flex flex-col'>
                    <span>
                        Title
                    </span>
                    <span>
                        Desc
                    </span>
                    <div>
                        Watch now + Score
                    </div>
                </div>
            </div>
            {/* right arrow carrousel */}
            <div className='w-[5%]'>
                ada
            </div>
        </div>
        
        


    </div>)
}