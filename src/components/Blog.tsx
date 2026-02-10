import { content, type Locale } from '../content'

type BlogProps = {
  locale: Locale
}

function Blog({ locale }: BlogProps) {
  const copy = content[locale]

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
      <h1 className="text-3xl font-semibold">{copy.blog.title}</h1>
      <p className="mt-3 text-slate-300">{copy.blog.subtitle}</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {copy.blogPosts.map((post) => (
          <article
            key={post.id}
            className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              {post.date}
            </p>
            <h3 className="mt-2 text-lg font-semibold">{post.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{post.excerpt}</p>
            {post.featured ? (
              <span className="mt-4 inline-flex rounded-full bg-sunrise-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900">
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
