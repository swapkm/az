"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const CREATE_BLOG = gql`
  mutation CreateBlog($title: String!, $content: String!, $authorId: ID!) {
    createBlog(title: $title, content: $content, authorId: $authorId) {
      _id
      title
      content
      author {
        _id
      }
      createdAt
    }
  }
`;

interface Blog {
  _id: string;
  title: string;
  content: string;
  authorId: string;
  createdAt: string;
}

export default function BlogCreate() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const authorId = "652b4e3eadb5bf91b3ff12ae";

  const [createBlog] = useMutation(CREATE_BLOG);

  const [blog, setBlog] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleCreateBlog = async () => {
    try {
      const { data } = await createBlog({
        variables: { title, content, authorId },
      });
      console.log(data.createBlog);
      // Handle success, for example, you can redirect to the created blog post.
      console.log("Blog created:", data.createBlog);

      // Update the UI to show the newly created feed
      setBlog([...blog, data.createBlog]);

      // Reset input fields and show success message
      setTitle("");
      setContent("");
      setMessage("Blog created successfully");
    } catch (error) {
      console.error("Error creating the blog:", error);
    } finally {
      setLoading(false); // Stop loading, whether successful or not
    }
  };

  const  modules  = {
    toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline"],
        [{ color: [] }, { background: [] }],
        ["blockquote"],
        [{ list:  "ordered" }, { list:  "bullet" }],
        ["link", "image", "video"],
        [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }]
        
    ],
};

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">New Blog</h1>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Content:</label>
          <div className="min-h-[200px]">
            <ReactQuill theme="snow" value={content} onChange={setContent} placeholder={"Write something awesome..."} modules={modules} />
          </div>
        </div>

        <button
          type="button"
          onClick={handleCreateBlog}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          {loading ? "Creating..." : "Create"}
        </button>
        {message && (
          <p
            className={`mt-2 ${
              message.includes("Error") ? "text-red-600" : "text-green-600"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
