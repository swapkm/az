import Image from 'next/image'
import { ModeToggle } from "@/components/mode-toggle";
import Link from 'next/link';

export default function Header() {
  return (
      <nav className="sticky top-0 max-w-5xl w-full items-center justify-between flex border-gray-300 p-2 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit rounded-xl border bg-gray-200 ">
        <div className='text-2xl font-bold'>
        <Link href="/" className='text-black dark:text-white'>AZ</Link>
          </div>
        <ModeToggle />
      </nav>
  )
}