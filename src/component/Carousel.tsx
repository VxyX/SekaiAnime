import spyx from '../assets/spyx.png'

export default function Carousel() {
    return (<div className="w-full h-[75vh] relative">
        {/* image container */}
        <div className="w-full h-full">
            <div className='w-full h-full'>
                <img src={spyx} className='object-cover w-full h-full object-top'/>
            </div>
           
            <div className="w-full h-full bg-gradient-to-r from-black from-1% to-transparent to-100% absolute top-0 opacity-95">

            </div>
            
        </div>

        {/* text container */}
        <div className='absolute top-0 flex w-full items-center h-full'>
            {/* left arrow carrousel */}
            <div className='w-[5%]'>
                ada
            </div>
            <div className='w-1/2 ml-5'>
                <span className='font-normal text-4xl'>
                    This Day
                </span>
                <div className='flex flex-col'>
                    <span className='font-bold text-7xl mt-5'>
                        Spy x Family
                    </span>
                    <span className='font-thin text-sm w-[70%] mt-5 text-justify'>
                        Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis. In spite of their plots, renowned spy and master of disguise "Twilight" fulfills dangerous missions...
                    </span>
                    <div className='flex mt-5'>
                        <button type='button' className=''>
                            Watch Now
                        </button>
                        <span className='ml-10'>
                            Score 8.8/10
                        </span>
                    </div>
                </div>
            </div>
            {/* right arrow carrousel */}
            <div className='w-[5%] ml-auto'>
                ada
            </div>
        </div>
        
        


    </div>)
}