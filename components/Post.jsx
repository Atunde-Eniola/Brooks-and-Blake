import * as FaIcons from 'react-icons/fa'
import Image from 'next/image'

const Post = () => {
  return (
    <div className='px-[3.3rem] h-fit bg-white w-full'>
      <h1 className='font-light text-4xl font-faith text-gray-900 mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolorum repellendus Voluptas eos quia illoi.</h1>
      <div className='flex'>
        <span className='text-gray-400 text-[1.1rem] font-sans'>Share This Post:</span>
        <div className='mx-1 flex'>
        <FaIcons.FaFacebookSquare className='text-blue-600 h-7 w-7 rounded-[.7rem] mr-2 cursor-pointer'/>
        <FaIcons.FaTwitterSquare  className='text-blue-400 h-7 w-7 rounded-[.7rem] mr-2 cursor-pointer'/>
        <FaIcons.FaWhatsappSquare className='text-lime-400 h-7 w-7 rounded-[.7rem] mr-2 cursor-pointer'/>
        <FaIcons.FaLinkedin  className='text-blue-800 h-7 w-7 rounded-[.7rem] mr-2 cursor-pointer'/>
        </div>
      </div>
      <div className='mt-4 leading-none'>
        <Image src='/img/coffee-1.jpg' alt='' width={1200}  height={400} className='w-full object-cover leading-none'/>
      </div>
      <span className='text-gray-400 text-[10px] leading-none'>Financial Writer</span>
    </div>
  )
}

export default Post
