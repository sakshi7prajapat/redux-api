import { useEffect } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from "react-redux";
import { fetchData, removePost } from "../store/slice/userSlice";

const Cards = () => {
  const dispatch = useDispatch();
  const { data: posts, loading, error } = useSelector((state) => state.posts);
  
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleRemovePost = (postId) => {
    dispatch(removePost(postId));
  };
  if (loading || !posts) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  return (
    <div>
      <h2>Posts</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        {posts.map((post) => (
          <div key={post.id} style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
         <div style={{display:"flex" , justifyContent:"flex-end"}}><button onClick={()=>{
               handleRemovePost(post.id)
            }}><CloseIcon/></button></div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;

