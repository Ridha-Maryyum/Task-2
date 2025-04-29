// app/posts/[id]/page.tsx
'use client'

import { useParams } from 'next/navigation'
import { notFound } from 'next/navigation'

interface Post {
  id: string
  title: string
  content: string
}

const posts: Post[] = [
  { id: '1', title: 'My First Post', content: 'This is the content of my first blog post.' },
  { id: '2', title: 'Another Post', content: 'Here is the content for another blog post.' },
  { id: '3', title: 'Yet Another Post', content: 'This post is all about another topic.' },
]

export default function Page() {
  const params = useParams()
  const post = posts.find(p => p.id === params.id)

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg">{post.content}</p>
    </article>
  )
}