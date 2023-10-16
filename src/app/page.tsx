"use client";
import Image from "next/image";
import { useQuery, gql } from "@apollo/client";
import { GET_FEEDS } from "@/graphql/queries";
import { Skeleton } from "@mui/material";

interface Feed {
  _id: string;
  title: string;
  content: string;
  image: string;
  createdAt: string;
}

export default function Home() {
  const { loading, error, data } = useQuery(GET_FEEDS);

  if (loading) {
    return (
      <main className="ml-auto mr-auto flex-col items-center justify-between p-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <li
            key={index}
            className="border border-pink-200 rounded overflow-auto flex flex-col mt-4"
          >
            <Skeleton
              className="dark:bg-gray-500"
              width="100%"
              height={200}
              animation="wave"
            />
            <div className="p-4">
              <Skeleton
                className="dark:bg-gray-500"
                variant="text"
                width="75%"
                height={24}
              />
              <Skeleton
                className="dark:bg-gray-500"
                variant="text"
                width="100%"
                height={16}
              />
            </div>
          </li>
        ))}
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p>Error: {error.message}</p>
      </main>
    );
  }

  const feeds: Feed[] = data.getAllFeeds;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-1">
      <ul>
        {feeds.map((feed) => (
          <li
            key={feed._id}
            className="border border-pink-200 rounded overflow-auto flex flex-col max-w-lg mt-4 min-w-full"
          >
            <Image
              src={feed.image}
              alt={feed.title}
              width="0"
              height="0"
              objectFit="cover"
              layout="responsive"
              placeholder="blur"
              blurDataURL="data:..."
              loading="lazy"
            />

            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{feed.title}</h3>
              <p>{feed.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
