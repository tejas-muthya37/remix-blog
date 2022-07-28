import { redirect } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const action = async ({ request }) => {
  const form = await request.formData();
  const title = form.get("title");
  const body = form.get("body");

  const fields = { title, body };

  // @todo - submit to DB

  return redirect("/posts");
};

function NewPost() {
  return (
    <>
      <div className="page-header">
        <h1>New Post</h1>
        <Link to="/posts" className="btn btn-reverse">
          Back
        </Link>
      </div>

      <div className="page-content">
        <form method="POST">
          <div className="form-control">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" />
          </div>

          <div className="form-control">
            <label htmlFor="body">Post Body</label>
            <textarea name="body" id="body" />
          </div>

          <button className="btn btn-block" type="submit">
            Add Post
          </button>
        </form>
      </div>
    </>
  );
}

export default NewPost;
