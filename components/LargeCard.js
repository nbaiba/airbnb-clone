import Image from 'next/image'
const LargeCard = ({img, title, description, buttonText}) => {
    return (
        <section className="relative py-16 cursor-pointer">
            <div className='relative h-96 m-w-[300px]'>
                <Image
                    src={img}
                    layout = 'fill'
                    className='rounded-xl'
                    objectFit='cover'
                />
            </div>
            <div className='absolute top-32 left-12'>
                <h3 className='text-4xl mb-4 w-64'>{title}</h3>
                <p>{description}</p>

                <button className='text-sm text-white bg-gray-900 py-2 px-4 rounded-lg mt-5'>{buttonText}</button>
            </div>
        </section>
    )
}

export default LargeCard
