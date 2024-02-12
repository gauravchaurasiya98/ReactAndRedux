import { BsEmojiSmile } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { FcLike } from "react-icons/fc";

import { useContext } from "react";
import { PostsContext } from "../store/posts-context";

const Post = ({ post }) => {
  const { deletePost, likePost } = useContext(PostsContext);

  return (
    <div className="col mt-0 px-4 py-3">
      <div className="card h-100 position-relative">
        <button
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill btn btn-danger"
          onClick={() => deletePost(post.id)}
        >
          <MdDeleteForever size={16} />
        </button>
        <BsEmojiSmile
          className="bd-placeholder-img card-img-top"
          size={200}
          role="img"
          preserveAspectRatio="xMidYMid slice"
        />
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
          <div className="d-flex flex-wrap justify-content-evenly">
            {post.tags.map((hashtag) => (
              <div
                key={hashtag}
                className="border rounded-pill p-1 bg-dark text-white hashtag-fs"
              >
                {`#${hashtag}`}
              </div>
            ))}
          </div>
        </div>
        <button
          className="position-absolute top-100 start-0 translate-middle badge rounded-pill btn btn-primary"
          onClick={() => likePost(post.id)}
        >
          {post.reactions !== 0 && (
            <span className="align-middle">{post.reactions} </span>
          )}
          <FcLike size={16} />
        </button>
      </div>
    </div>
  );
};

export default Post;
