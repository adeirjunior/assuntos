import PostPreview from '../components/post-preview'
import PostCard from './post-card'

export default function MoreStories({ posts }) {
  return (
    <section className='dark:selection:bg-light dark:selection:text-darker'>
      <h2 className="mb-20 dark:text-light text-center text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        Outros Posts
      </h2>
      <div className="grid grid-cols-1 place-content-center md:grid-cols-2 md:gap-x-10 lg:grid-cols-3 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostCard
            key={post.slug}
            title={post.title}
            category={post.category}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
