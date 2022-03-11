import * as BsIcons from 'react-icons/bs'

const CategoryName = () => {
  return (
    <div className="bg-white mb-5  mt-20 px-[3.3rem] flex justify-between items-center  ">
      <div><h1 className="font-bold text-sky-500 text-2xl md:text-[2rem]  lg:text-[2rem] ">Category Name</h1></div>
      <div className=' text-gray-900 '>
      <button className='flex text-base font-bold'>More News <BsIcons.BsArrowRight  className='h-5 w-5 mt-0.5 ml-2 text-red-600'/></button>
      </div>
    </div>
  )
}

export default CategoryName
