import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postsActions } from "../store/posts-slice";
import { tabActions } from "../store/tab-slice";

const CreatePost = () => {
  const formRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlePostSubmission = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const postData = Object.fromEntries(formData);
    formRef.current.reset();

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: 5,
        title: postData.title,
        body: postData.content,
        tags: postData.hashtag.split("#"),
        reactions: 0,
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        dispatch(postsActions.addPost(post));
        dispatch(tabActions.setSelectedTab("VIEW"));
        navigate("/");
      });
  };

  return (
    <div className="col-md-10 col-sm-10 row row-cols-1 m-0 px-0 py-3 text-white">
      <form ref={formRef} onSubmit={handlePostSubmission}>
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
              name="title"
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
              name="content"
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
              name="hashtag"
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
