import Comments from "../../components/Comments"
import Post from "../../components/Post"
import TopStories from "../../components/TopStories"
import UserPost from "../../components/UserPost"
import { useDispatch, useSelector } from 'react-redux';



const About = ({data}) => {
const dispatch = useDispatch();
const {posts} = useSelector((state) => state.post);

  return (
    <div>
      <Post data={data}/> // contains the page post generated from the brooksandblake.com url (server)
      <UserPost data={data}/>  // th post label for the userpost
      <Comments post_id={data.id}/>// contains post details and feedbacks from the user
      <TopStories posts={posts} />// an array and its property
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


