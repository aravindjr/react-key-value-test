import { useState } from "react";
import Post from "../../components/Post";
import { useGetPostsQuery } from "../../redux/api/post";

export default function Home() {
  const [userId, setUserId] = useState("");

  const { data, isFetching } = useGetPostsQuery(userId);

  const renderProps = () => {
    if (isFetching) return "Loading...";

    if (!data || data.length === 0) return "No posts.";

    return data.map((post) => (
      <Post id={post.id} key={post.id} title={post.title} body={post.body} />
    ));
  };

  return (
    <div>
      <h1>Posts</h1>

      <input
        placeholder="Search posts by user ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />

      <section className="posts-wrapper">{renderProps()}</section>
    </div>
  );
}
