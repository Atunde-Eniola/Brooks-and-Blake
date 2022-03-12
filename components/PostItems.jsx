import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'

const PostItems = ({posts}) => {
  
  //converting js html language
  const sub = (str) => str.substring(0,150)

  return (
    <div className="bg-white px-[3.3rem]  text-gray-800 subpixel-antialiased grid gap-x-4 gap-y-10 grid-col-1  md:grid-cols-2 lg:grid-cols-4 ">
      {posts.slice(0,8).map((item,index)=>{
        
        const text  = sub(item.content.rendered)
        const {jetpack_featured_media_url = "/img/coffee-1.jpg", } = item

      return(
        <div key={index} className='' > 
        <Image src= {jetpack_featured_media_url} alt='' width='500' height='330' className='object-cover' />
       <h3 className='text-[1rem]  font-bold leading-4  my-3 xs:px-6'>
         <Link href={{
            pathname: '/about',
            query: { id: item.id },
          }}>
          <a>{item.title.rendered}</a>
           </Link>
         </h3>
       <div className='text-[0.8rem] font-normal leading-4 xs:px-6' dangerouslySetInnerHTML={{__html: text}} />
     </div>
        
      )})}
    </div>
  )
}

export default PostItems
