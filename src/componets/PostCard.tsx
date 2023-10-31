import { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import Image from "next/image";

export default function PostCard(post: Post) {
  return (
    <div className="group inline-block overflow-hidden rounded-xl">
      <Link
        href={post.url}
        className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
      >
        <div className="mb-3">
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
        </div>
        <h2 className="mb-1 text-xl">{post.title}</h2>
      </Link>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
    </div>
  );
}
