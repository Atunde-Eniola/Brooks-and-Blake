import axios from 'axios'
import { useState } from 'react'
import * as MdIcon from 'react-icons/md'


/// contains post details and feedbacks from the user

const Comments = ({post_id}) => {    
const [value, setValue] = useState({})
const [loading, setLoading] = useState(false)


// a function called to handle the textfield
  const handleOnChange = (e) =>{

    setValue({...value, [e.target.name]: e.target.value })
    
   }
 
///function that recieves and send input as response back to our serve as shown below.
  const handleSubmit = (e) =>{
    e.preventDefault();
    setLoading(true)
    
    
    //sending request to the server
    axios.post(`https://brooksandblake.com/blogapis/wp-json/wp/v2/posts/${post_id}`,value).then((response)=>{
          console.log(response)
          setLoading(false)  
          setValue({username: '', email: '', text: ''})
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response);
        setLoading(false)
        setValue({username: '', email: '', text: ''})
      } 
      
    });
  }
  

  return (
    <div className='bg-white w-full px-[3.3rem]'>
     <div className='border-b-[1px] border-gray-500'>
     <h1 className='font-bold text-sky-500 text-2xl md:text-[2rem]  lg:text-[2.15rem] leading-tight '>Reader Comments</h1>
     </div>
      <div className='bg-gray-50 w-full py-2  md:6 lg:py-8 px-3'>
        <div className='w-10/12 h-24 bg-white rounded-2xl shadow-md my-4 px-5 py-2'>
         
          <p className='text-[12px] font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illum  </p>
          <div className='flex justify-between  '>
            <div className='flex flex-col mt-1 sm:mt-3 md:mt-4 lg:mt-5 xl:mt-6'>
              <span className='text-sm font-bold text-gray-800'>Felix</span>
              <span className='text-[.6rem] font-medium text-gray-400'>An hour ago</span>
            </div>
            <div className='flex mt-5 sm:mt-8 md:mt-10'>
              <MdIcon.MdMessage className='h-4 w-4 mr-1 cursor-pointer'/>
              <span className='text-[.6rem] font-medium text-gray-400 cursor-pointer'>Reply Comment</span>
            </div>
          </div>
          </div>

          <div className='w-10/12 h-24 bg-white rounded-2xl shadow-md my-4 px-5 py-2'>
         
         <p className='text-[12px] font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illum </p>
         <div className='flex justify-between  '>
           <div className='flex flex-col mt-1 sm:mt-3 md:mt-4 lg:mt-5 xl:mt-6'>
             <span className='text-sm font-bold text-gray-800'>Jack</span>
             <span className='text-[.6rem] font-medium text-gray-400'>3 mins ago</span>
           </div>
           <div className='flex mt-5 sm:mt-8 md:mt-10'>
             <MdIcon.MdMessage className='h-4 w-4 mr-1 cursor-pointer'/>
             <span className='text-[.6rem] font-medium text-gray-400 cursor-pointer'>Reply Comment</span>
           </div>
         </div>
         </div>

         <div className='bg-white w-10/12 xs:h-96 lg:h-80 py-3  px-6 mt-11'>
           <h3 className='text-gray-800 font-bold my-1 md:my-2 lg:my-4 px-7'>Join the conversation</h3>

             <input onChange={handleOnChange} className='border-gray-300 border h-16 w-5/6 rounded-3xl focus:outline-none flex items-center px-7 my-1 md:my-3 lg:my-6' type="text" value={value.text} name='text' id='text' placeholder='Write your comment'/>
             
             <form className='xl:flex-row  my-6 lg:flex'>
               <div className=' xs:mx-2 md:mx-4 font-medium my-1 md:my-2 lg:my-3'>
                 
                 <label className="block text-gray-800 text-sm font-semibold mb-2" htmlFor="username">
                 Your Name
              </label>
                 <input onChange={handleOnChange} className='px-6 border-gray-300 border h-10 w-72 rounded-3xl focus:outline-none' id="username" value={value.username} type="text" name='username'/>
               </div>

               <div className='xs:mx-2  md:mx-4 font-medium my-3'>
                 
                 <label className="block text-gray-800 text-sm font-semibold mb-2" htmlFor="email">Email Address</label>
                 <input onChange={handleOnChange} className='px-6 focus:outline-none border-gray-300 border h-10 w-72 rounded-3xl' type="email" name='email' value={value.email} id="email"/>
               </div>
             </form>

             <div className={`${loading? "bg-sky-100" : "bg-sky-400"} text-white h-10 w-72 rounded-3xl flex justify-center cursor-pointer`}>
               <button disabled={loading} onClick={handleSubmit} className='font-semibold '>Submit</button>
               </div>
             
             
         </div>
      </div>
    </div>
  )
}

export default Comments