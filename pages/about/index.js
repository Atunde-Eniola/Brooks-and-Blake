// import axios from "axios"
import Comments from "../../components/Comments"
import Post from "../../components/Post"
import TopStories from "../../components/TopStories"
import UserPost from "../../components/UserPost"
import { useDispatch, useSelector } from 'react-redux';


const About = ({data}) => {
  console.log("___DATA___", data)
const dispatch = useDispatch();
const {posts} = useSelector((state) => state.post);
console.log("___STATE___", posts)
  return (
    <div>
      <Post/>
      <UserPost/>
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

