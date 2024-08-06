import PropTypes from "prop-types";

export default function PostComment({ name, email, body }) {
  return (
    <div>
      <h6>
        {name} - {email}
      </h6>
      <p>{body}</p>
    </div>
  );
}

PostComment.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
