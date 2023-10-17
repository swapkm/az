import Image from 'next/image'
import { ModeToggle } from "@/components/mode-toggle";
import Link from 'next/link';

export default function Header() {
  return (
      <nav className="sticky top-1 max-w-5xl w-full items-center justify-between flex border-gray-300 p-2 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit rounded-xl border bg-white ">
        <div className='text-2xl font-bold'>
        <Link href="/" className='text-black dark:text-white'>AZ</Link>
          </div>
          
        <div className='flex space-x-4'>
          <Link href="/blog" className='text-black text-lg font-semibold dark:text-white'> Articles</Link>
        <ModeToggle /></div>
      </nav>
  )
}