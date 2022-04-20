import Image from 'next/image'
const SmallCard = ({ img, location, distance }) => {
    return (
        <div className="flex space-x-2 items-center mt-4 rounded-xl cursor-pointer hover:bg-gray-200 hover:scale-105 transition transform duration-1050 ease-out">
            <div className='relative h-16 w-16'>
                <Image 
                    className='rounded-xl'
                    src={img}
                    layout='fill'
                    className='rounded-lg'
                />
            </div>
            <div>
                <h2 className='font-bold'>{location}</h2>
                <p className='text-gray-400'>{distance}</p>
            </div>
        </div>
    )
}

export default SmallCard
