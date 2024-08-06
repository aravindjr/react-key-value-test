import PropTypes from "prop-types";
import { useGetPostCommentsQuery } from "../redux/api/post";
import PostComment from "./PostComment";

export default function PostComments({ postId }) {
  const { data, isFetching } = useGetPostCommentsQuery(postId);

  const renderComments = () => {
    if (isFetching) return "Fetching comments..";

    if (!data || data.length === 0) return "No comments.";

    return data.map((comment) => (
      <PostComment key={comment.id} name={comment.name} body={comment.body} />
    ));
  };

  return (
    <section className="post-comments">
      <h4>Post comments</h4>

      {renderComments()}
    </section>
  );
}

PostComments.propTypes = {
  postId: PropTypes.string.isRequired,
};
