import Image from 'next/image'
import Link from 'next/link'

const BasePost = ({posts}) => {
  const sub = (str) => str.substring(0,150)

  return (
    <div className="bg-white text-gray-800 subpixel-antialiased grid gap-x-4 gap-y-10 grid-col-1  md:grid-cols-2 lg:grid-cols-4  ">
      {posts.slice(0,4).map((item,index)=>{
       
       const text  = sub(item.content.rendered)
       const {jetpack_featured_media_url = "/img/coffee-1.jpg", } = item
       return(
        
        <div key={index} className='leading-none flex-1 mb-8' > 
        <Image src= {jetpack_featured_media_url} alt='' width={500} height={320} className='object-cover' />
       <h3 className='text-[1rem]  font-bold leading-none  my-3'>
         { ' ' }
         <Link href={{
            pathname: '/about',
            query: { id: item.id },
          }}>
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


//grid gap-x-4 gap-y-8 grid-col-1  md:grid-cols-2 lg:grid-cols-4