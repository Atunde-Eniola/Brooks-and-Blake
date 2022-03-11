export const getStaticPaths = async () => {
  const res = await fetch('https://brooksandblake.com/blogapis/wp-json/wp/v2/posts/{id}');
  const data = await res.json();

  // const paths = data.map(about => {
  //   return{
  //     params: {id: about.id.toString()}
  //   }
  // })

  return{
    paths,
    fallback: false

  }
}


export const getInitialProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://brooksandblake.com/blogapis/wp-json/wp/v2/posts/{id}/' + id);
  const data = await res.json();

  return{
    props : {about : data}
  }
}

const Details = (about) => {
  return (
    <div>
      {about.post}
    </div>
  )
}

export default Details
