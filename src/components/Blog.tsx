import { content, type Locale } from '../content'

type BlogProps = {
  locale: Locale
}

function Blog({ locale }: BlogProps) {
  const copy = content[locale]

  return (
    <div className="rounded-3xl border border-[#3b2a20] bg-[#24170f]/60 p-6">
      <h1 className="text-3xl font-semibold">{copy.blog.title}</h1>
      <p className="mt-3 text-[#e2d2c4]">{copy.blog.subtitle}</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {copy.blogPosts.map((post) => (
          <article
            key={post.id}
            className="rounded-2xl border border-[#3b2a20] bg-[#1b110c]/70 p-5"
          >
            <p className="text-xs font-semibold text-[#c9b7a5]">
              {post.date}
            </p>
            <h3 className="mt-2 text-lg font-semibold">{post.title}</h3>
            <p className="mt-2 text-sm text-[#e2d2c4]">{post.excerpt}</p>
            {post.featured ? (
              <span className="mt-4 inline-flex rounded-full bg-sunrise-300 px-3 py-1 text-xs font-semibold text-[#2b1a10]">
                Featured
              </span>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  )
}

export default Blog
