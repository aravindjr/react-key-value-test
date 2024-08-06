import { useParams } from "react-router-dom";
import { useGetPostDetailsQuery } from "../../redux/api/post";
import Post from "../../components/Post";
import PostComments from "../../components/PostComments";

export default function PostDetails() {
  const { id } = useParams();

  const { data, isFetching } = useGetPostDetailsQuery(id);

  if (isFetching) return "Loading...";

  return (
    <div>
      <h1>Post details</h1>
      <Post title={data.title} body={data.body} />
      <PostComments postId={id} />
    </div>
  );
}
