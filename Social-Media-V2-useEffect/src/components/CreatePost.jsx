import { useContext, useRef } from "react";

import { PostsContext } from "../store/posts-context";

const CreatePost = () => {
  const title = useRef();
  const content = useRef();
  const hashtag = useRef();

  const { addPost } = useContext(PostsContext);

  const handlePostSubmission = (event) => {
    event.preventDefault();

    addPost({
      userId: 5,
      title: title.current.value,
      body: content.current.value,
      tags: hashtag.current.value.split("#"),
      reactions: 0,
    });

    title.current.value = "";
    content.current.value = "";
    hashtag.current.value = "";
  };

  return (
    <div className="col-md-10 col-sm-10 row row-cols-1 m-0 px-0 py-3 text-white">
      <form onSubmit={handlePostSubmission}>
        <fieldset className="border rounded-3 p-3">
          <legend
            className="m-0 text-center"
            style={{ float: "none", width: "fit-content" }}
          >
            Enter Post's Detail
          </legend>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title *
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Enter post's title"
              ref={title}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="content" className="form-label">
              Content *
            </label>
            <textarea
              className="form-control"
              id="content"
              rows="4"
              placeholder="Enter post's content..."
              ref={content}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="hashtag" className="form-label">
              HashTag
            </label>
            <input
              type="text"
              className="form-control"
              id="hashtag"
              placeholder="Enter hashtag seperated by #"
              ref={hashtag}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Post
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default CreatePost;
