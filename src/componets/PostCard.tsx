import { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import Image from "next/image";

function capitalizeFirstLetter(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export default function PostCard(post: Post) {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg">
      <Link href={post.url}>
        <Image
          src={post.image as string}
          alt={post.title}
          width={720}
          height={0}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300"
          sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
        />
        <div className="px-8">
          <h2 className="text-lg font-bold">{post.title}</h2>
          <div className="pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-bold text-gray-700 mr-2 mb-2">
              {capitalizeFirstLetter(post.category)}
            </span>
            <div className="inline-block flex-wrap">
              {post.tags &&
                post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-light text-gray-700 mr-2 mb-2"
                  >
                    {capitalizeFirstLetter(tag)}
                  </span>
                ))}
            </div>
            <time
              dateTime={post.date}
              className="inline-block mb-2 px-3 text-xs text-gray-600"
            >
              {format(parseISO(post.date), "LLLL d, yyyy")}
            </time>
          </div>
        </div>
      </Link>
    </div>
  );
}