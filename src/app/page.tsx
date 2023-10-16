"use client";
import Image from "next/image";
import { useQuery, gql } from "@apollo/client";
import { GET_FEEDS } from "@/graphql/queries";

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
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const feeds: Feed[] = data.getAllFeeds;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Feeds</h2>
      <ul>
        {feeds.map((feed) => (
          <li
            key={feed._id}
            className="border border-gray-200 rounded overflow-hidden flex flex-col items-center"
          >
            <Image
              src={feed.image}
              alt={feed.title}
              width={100}
              height={100}
              objectFit="cover"
              layout="responsive"
            />

            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-black">
                {feed.title}
              </h3>
              <p className="text-gray-600">{feed.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
