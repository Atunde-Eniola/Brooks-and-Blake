// import axios from "axios"
import Comments from "../components/Comments"
import Post from "../components/Post"
import TopStories from "../components/TopStories"
import UserPost from "../components/UserPost"


const About = ({data}) => {
  console.log("___DATA___", data)

  return (
    <div>
      <Post/>
      <UserPost/>
      <Comments/>
      <TopStories/>
    </div>
  )
}

About.getInitialProps = async (ctx) => {
  
  // const res = await fetch('https://brooksandblake.com/blogapis/wp-json/wp/v2/posts/{id}')
  // const json = await res.json()
  return { data: ctx }
}
export default About


