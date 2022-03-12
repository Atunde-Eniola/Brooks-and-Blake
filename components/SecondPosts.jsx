import Image from 'next/image';

const SecondPosts = () => {
  return (
    <>
      <div className='flex flex-col lg:flex-row  w-full h-fit gap-10'>
        <div className='flex-1  sm:mb-4 md:flex  md:flex-col mb-2 '>
         
          <Image
            src='/img/video-1.jpg'
            alt='video'
             width={400}
             height={320}
            className='object-cover '
          />
          
          <div className=' md:px-6 lg:px-0 '>
            <h2 className='text-[1rem] font-semibold'>
              {' '}
              porro distinctio nesciunt deserunt corporis.
            </h2>
            <span className='text-[.8rem] '>
              voluptatem officiis iure quas autem aliquid repudiandae deserunt.
            </span>
          </div>
        </div>
        <div className='flex-1 '>
          <div className='flex flex-col md:flex-row lg:flex-col gap-5 '>
            <div className='grow'>
              <div className='flex lg:justify-between xl:justify-around '>
                <Image
                  src='/img/video-1.jpg'
                  alt='video'
                  width={300}
                  height={160}
                  className='object-cover'
                />
                <div className='leading-none flex flex-col justify-between px-2'>
                  <span className='text-[1rem] leading-none font-medium mt-1 md:mt-3'>
                    Lorem ipsum dolor sit amet, consectenon.
                  </span>
                  <p className='leading-none text-[.8rem] mb-1 md:mb-7'>
                    Lorem ipsum dolor sit amet, consecteturblan.
                  </p>
                </div>
              </div>
            </div>
            <div className='grow '>
              <div className='flex lg:justify-between xl:justify-around '>
                <Image
                  src='/img/video-1.jpg'
                  alt='video'
                  width={300}
                  height={160}
                  className='object-cover '
                />
                <div className='leading-none flex flex-col justify-between px-2'>
                  <span className='text-[1rem] leading-none font-medium mt-2 md:mt-3'>
                    Lorem ipsum dolor sit amet, consectenon.
                  </span>
                  <p className='leading-none text-[.8rem] mb-2 md:mb-7'>
                    Lorem ipsum dolor sit amet, consecteturblan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondPosts;
