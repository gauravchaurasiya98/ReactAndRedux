import { Form, redirect, useOutletContext } from "react-router-dom";

export const addPost = async (reqObj) => {
  const formData = await reqObj.request.formData();
  const postData = Object.fromEntries(formData);

  return fetch("https://dummyjson.com/posts/add", {
    method: reqObj.request.method,
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
      console.log(post);
      return redirect("/");
    });
};

const CreatePost = () => {
  const setSelectedTab = useOutletContext();

  const handleSelectedTab = () => setSelectedTab("VIEW");

  return (
    <div className="col-md-10 col-sm-10 row row-cols-1 m-0 px-0 py-3 text-white">
      <Form method="POST">
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
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSelectedTab}
          >
            Post
          </button>
        </fieldset>
      </Form>
    </div>
  );
};

export default CreatePost;
