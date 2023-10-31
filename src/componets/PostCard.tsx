import { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import Image from "next/image";

function capitalizeFirstLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export default function PostCard(post: Post) {
  return (
    <div className="m-8 rounded-xl overflow-hidden shadow-lg">
      <Link
        href={post.url}
        className="hover:text-blue-900 dark:text-white"
      >
        {/* <div className="mb-3">
          <div
            className="absolute top-0 left-0 bottom-0 right-0 h-full
            bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-xl z-10
           "
          >
            <Image
              src={post.image as string}
              alt={post.title}
              width={720}
              height={0}
              className="aspect-square w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300"
              sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw  my-8"
            />
          </div>
        </div> */}
        <h2 className="mb-1 text-xl font-bold">{post.title}</h2>
        <div className="pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-bold text-gray-700 mr-2 mb-2">
          {capitalizeFirstLetter(post.category)}
          </span>
          <div className="inline-block flex-wrap">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-light text-gray-700 mr-2 mb-2"
              >
                {capitalizeFirstLetter(tag)}
              </span>
            ))}
          </div>
        <time dateTime={post.date} className="inline-block mb-2 px-3 text-xs text-gray-600">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        </div>
      </Link>
    </div>
  );
}
