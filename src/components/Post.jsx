import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function Post({ id, title, body }) {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/posts/${id}`)} className="post">
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

Post.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
