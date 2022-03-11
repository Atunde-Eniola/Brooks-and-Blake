import Image from 'next/image';
import Link from 'next/link';

const TopStories = ({posts}) => {

  const sub = (str) => str.substring(0,150)

  return (
    <div className='bg-white w-full px-[3.3rem]'>
      <p className="font-bold text-sky-500 text-2xl md:text-[2rem]  lg:text-[2.15rem]"> Top Stories</p>
     <div className='border-b-[1px] border-gray-500'></div>
     <div className="bg-white px-[3.3rem]  text-gray-800 subpixel-antialiased grid gap-x-4 gap-y-10 grid-col-1  md:grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
      
       {posts.slice(0,3).map((item,index)=>{

         const text  = sub (item.content.rendered)

         return(
        <div key={index} className='flex flex-col '>
       <Image src={"/img/coffee-1.jpg"} alt='' width={400} height={220} className='object-cover rounded-xl'/>

       <h3 className='text-[1rem]  font-bold leading-4  my-3 xs:px-6'>
         <Link href={{
            pathname: '/about',
            query: { id: item.id },
          }}>
          <a>{item.title.rendered}</a>
           </Link>
         </h3>

       <div className='text-base font-bold'/>
       </div>
       )})}
       
     </div>
    </div>
  )
}

export default TopStories;
