import * as BsIcon from 'react-icons/bs'

const UserPost = () => {
   const post =[
     {
      icon: <BsIcon.BsPersonSquare/>,
       title: 'Solomon James',
       
     },
     {
      icon: <BsIcon.BsFillCalendarPlusFill/>,
      title: '1 March 2022',
     
    },
    {
      icon: <BsIcon.BsClockFill/>,
      title: '6 mins Read',
      
    },
   ]

  return (
    <div className="bg-white w-full px-[3.3rem] mt-8">
      <div className='flex'>
        {post.map((item,index)=>(
            <div key={index} className='mx-4 flex '>
            <div className='text-xs mt-1'>{item.icon}</div>
            <span className='ml-2 text-gray-400 font-semibold text-[.78rem]'>{item.title}</span>
            </div>
        ))}
      </div>
      <h2 className='font-normal text-base text-gray-900 sm:pr-12 md:pr-24 lg:pr-36 my-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sit, unde quo porro doloremque voluptates autem necessitatibus rem architecto similique! Dolore voluptatem nihil cupiditate tempore minima eos voluptates, laboriosam nesciunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus porro blanditiis maxime, autem ipsum debitis eaque soluta iure ad nulla magni. Fuga, voluptatem quisquam facere blanditiis aperiam quo voluptatum iusto. Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br/><br/> tenetur nisi omnis repudiandae et obcaecati architecto! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate aut architecto amet exercitationem temporibus expedita repudiandae corporis magni debitis quia ea officiis ab blanditiis necessitatibus, quibusdam excepturi quos, fugiat nobis.consectetur adipisicing elit. Quam ipsa corrupti ratione dolor, iure laboriosam laborum nulla illo tempore earum  Lorem ipsum dolor sit amet consectetur adipisicing elit  elit. Et esse autem aliquid? At, aliquam nisi. Quis eos iste doloremque animi minuquis<br/><br/> cupiditate rem sed laborum iste. Lorem ipsum, dolor s. Laboriosam tempora ipsam sit amet consectetur adipisicing elit. Magni assumenda est illum sapiente, fuga earum? Consectetur iure modi maxime dolorem ipsa, tenetur facilis ipsum, facere dignissimos quam vero voluptatum neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos repellat provident omnis odit magni pariatur tempore reprehenderit eaque explicabo assumenda architecto at unde excepturi, sint, suscipit totam, corrupti accusantium vero.Lorem ipsum dolor sit amet. 
      </h2>
    </div>
  )
}

export default UserPost
