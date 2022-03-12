import Image from 'next/image';
import Link from 'next/link';

const TopStories = ({posts}) => {         

  const sub = (str) => str.substring(0,150)

  return (
    <div className='bg-white w-full'>
      <p className="font-bold pt-4 text-sky-500 text-xl md:text-2xl  lg:text-3xl mb-2"> Top Stories</p>
     <div className='border-b-[1px] border-gray-500'></div>
     <div className="bg-white px-[3.3rem]  text-gray-800 subpixel-antialiased  flex gap-8 pt-4">
      
       {posts.slice(0,3).map((item,index)=>{

         const text  = sub (item.content.rendered)
         const {jetpack_featured_media_url = "/img/coffee-1.jpg", } = item

         return(
        <div key={index} className='flex flex-col flex-1 '>
       <Image src={jetpack_featured_media_url } alt='' width={300} height={200} className='object-cover rounded-xl f'/>

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
