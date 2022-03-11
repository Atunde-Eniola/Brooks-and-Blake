// import axios from 'axios';
import Head from 'next/head';
import BasePost from '../components/BasePost';
import CategoryName from '../components/CategoryName';
 import Postitems from '../components/Postitems';
import SecondPosts from '../components/SecondPosts';
import { useDispatch, useSelector } from 'react-redux';
import { savePost } from '../redux/postReducer';
import { wrapper } from '../redux/store';



 function Home({data}) {

const dispatch = useDispatch();
const {posts} = useSelector((state) => state.post);

  return (
    <>
    <Head>
      <title>B+B Challenge</title>
      <meta name="description"  content="Figma challenge"/>
    </Head>
    <CategoryName/>
    <Postitems posts={posts}/>
    <CategoryName/>
    <SecondPosts/>
    <CategoryName/>
    <BasePost posts={posts} />
      </>
  )
}


Home.getInitialProps = wrapper.getInitialPageProps(
  ({ dispatch }) =>
    async () => {
      const res = await fetch('https://brooksandblake.com/blogapis/wp-json/wp/v2/posts/')
      const json = await res.json()
      
       dispatch(savePost(json));
    }
);
export default Home
  
 


