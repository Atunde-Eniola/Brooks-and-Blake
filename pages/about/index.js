import Comments from "../../components/Comments"
import Post from "../../components/Post"
import TopStories from "../../components/TopStories"
import UserPost from "../../components/UserPost"
import { useDispatch, useSelector } from 'react-redux';



const About = ({data}) => {
const dispatch = useDispatch();
const {posts} = useSelector((state) => state.post);

  return (
    <div className='px-2 md:px-3 lg:px-[3.3rem] mb-12'>
      <Post data={data}/> 
      <UserPost data={data}/>  
      <Comments post_id={data.id}/>
      <TopStories posts={posts} />
    </div>
  )
}

About.getInitialProps = async ({query}) => {
  const {id} = query
  const res = await fetch(`https://brooksandblake.com/blogapis/wp-json/wp/v2/posts/${id}`)
  const json = await res.json()
  return { data: json }
}
export default About


