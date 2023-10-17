"use client";
import { useParams } from 'next/navigation';
import { useQuery, gql } from '@apollo/client';
import { GET_BLOG } from "@/graphql/queries";

export default function BlogPost() {
    const { id } = useParams();

  const { loading, error, data } = useQuery(GET_BLOG, {
    variables: { getBlogId: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const blog = data?.getBlog;

  return (
    <div>
      <h1>{blog?.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: blog?.content }} />
      <p>Author: {blog?.author._id}</p>
      <p>Created at: {blog?.createdAt}</p>
    </div>
  );
}