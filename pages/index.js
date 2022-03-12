import Head from 'next/head';
import BasePost from '../components/BasePost';
import CategoryName from '../components/CategoryName';
 import Postitems from '../components/PostItems';
import SecondPosts from '../components/SecondPosts';
import { useDispatch, useSelector } from 'react-redux';
import { savePost } from '../redux/postReducer';
import { wrapper } from '../redux/store';



 function Home({data}) {

 // This hook returns a reference to the dispatch function from the Redux store----savePost
 const dispatch = useDispatch(); 

 //Allows you to extract data from the Redux store state, using a selector function
 // also  return new values when the state is updated.
const {posts} = useSelector((state) => state.post);

  return (
    <div className='px-2 md:px-3 lg:px-[3.3rem] mb-12'>
    <Head>
      <title>B+B Challenge</title>
      <meta name="description"  content="Figma challenge"/>
    </Head>
    <CategoryName/>
    <Postitems posts={posts}/>
    <CategoryName/>
    <SecondPosts data={data}/>
    <CategoryName/>
    <BasePost posts={posts} />
      </div>
  )
}

//getInitialProps enables server side rendering(SSR) 
//it means sending the page with the data already populated from the server.

Home.getInitialProps = wrapper.getInitialPageProps(
  ({ dispatch }) =>
    async () => {
      const res = await fetch('https://brooksandblake.com/blogapis/wp-json/wp/v2/posts/')
      const json = await res.json()
      
       dispatch(savePost(json));
    }
);
export default Home
  
 


