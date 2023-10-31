// app/page.tsx
import Link from 'next/link'
import { compareDesc } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import PostCard from '@/componets/postCard'

export default function Home() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className="mx-auto max-w-xl py-8">
      {posts.map((post, idx) => (
        <div key={idx} className="mb-10">
        <PostCard {...post} />
      </div>
      ))}
    </div>
  )
}