import * as BsIcon from 'react-icons/bs'
import moment from "moment";


const UserPost = ({data}) => {     //the post label for the userpost
console.log("__DATA__", data)
  const fmtDate = moment(data.date).format('LL');  //date using moment
  const sub = (str) => str.substring(0,150) //convertion of js html language
  const text  = sub(data.content.rendered)

   const post =[
     {
      icon: <BsIcon.BsPersonSquare/>,
       title: 'Solomon James',
       
     },
     {
      icon: <BsIcon.BsFillCalendarPlusFill/>,
      title: fmtDate,
     
    },
    {
      icon: <BsIcon.BsClockFill/>,
      title: '6 mins Read',
      
    },
   ]

  return (
    <div className="bg-white w-full  mt-8">
      <div className='flex'>
        {post.map((item,index)=>(
          
            <div key={index} className=' mx-1 md:mx-4 flex '>
            <div className='text-xs mt-1 '>{item.icon}</div>
            <span className='  ml-2 text-gray-400 font-semibold text-[.78rem]'>{item.title}</span>
            </div>
            
        ))}
      </div>
      <h2 className='font-normal text-base text-gray-900 sm:pr-12 md:pr-24 lg:pr-36 mt-4 mb-8'dangerouslySetInnerHTML={{__html: text}}/>. 
      
    </div>
  )
}

export default UserPost
