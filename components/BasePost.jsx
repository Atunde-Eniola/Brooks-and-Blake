import Image from 'next/image'
import Link from 'next/link'

const BasePost = ({posts}) => {
  const sub = (str) => str.substring(0,150)

  return (
    <div className="bg-white px-[3.3rem]  text-gray-800 subpixel-antialiased grid gap-4  grid-col-1  md:grid-cols-2 lg:grid-cols-4 ">
      {posts.map((item,index)=>{
       
       const text  = sub(item.content.rendered)
       return(
        
        <div key={index} className='leading-none' > 
        <Image src= {"/img/coffee-1.jpg"} alt='' width={500} height={320} className='object-cover' />
       <h3 className='text-[1rem]  font-bold leading-none  my-3'>
         { ' ' }
         <Link href="/about">
           <a>{item.title.rendered}</a>
           </Link>
         
         </h3>
       <div className='text-[0.85rem] font-normal leading-none' dangerouslySetInnerHTML={{__html: text}} />
     </div>
        
      )})}
    </div>
  )
}

export default BasePost
