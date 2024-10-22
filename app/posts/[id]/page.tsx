type Postprops = {
    params: {
        id: string;
    };
};

const Post = ({params}: Postprops) => {
  return (
    <h2>Post id = {params.id}</h2>
  )
}

export default Post