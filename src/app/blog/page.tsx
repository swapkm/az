"use client";
import { useQuery } from "@apollo/client";
import { GET_BLOGS } from "@/graphql/queries";
import Link from "next/link";

interface Blog {
  _id: string;
  title: string;
  author: {
    _id: string;
  };
  createdAt: string;
}

export default function Blog() {
  const { loading, error, data } = useQuery(GET_BLOGS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const blogs: Blog[] = data.getAllBlog;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-1">
      <ul>
        {blogs.map((blog) => (
          <li
            key={blog._id}
            className="rounded overflow-auto flex flex-col max-w-lg mt-4 min-w-full"
          >
            <Link href={`/blog/${blog._id}`}>
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p>Author: {blog.author._id}</p>
              <p>Created at: {blog.createdAt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
