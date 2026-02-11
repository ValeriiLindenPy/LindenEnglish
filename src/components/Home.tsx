import { NavLink } from 'react-router-dom'
import { content, type Locale } from '../content'
import { SHOW_BLOG } from '../siteConfig'
import RequestForm from './RequestForm'

type HomeProps = {
  locale: Locale
}

function Home({ locale }: HomeProps) {
  const copy = content[locale]
  const featuredPosts = copy.blogPosts.filter((post) => post.featured)

  return (
    <div className="flex flex-col gap-16">
      <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#3b2a20] bg-[#24170f]/70 px-4 py-2 text-xs font-semibold text-[#e7d7c8]">
            <span className="h-2 w-2 rounded-full bg-sunrise-300" />
            {copy.hero.badge}
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {copy.hero.title}
            </h1>
            <p className="max-w-2xl text-lg text-[#e5d5c6]">
              {copy.hero.subtitle}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#request"
              className="rounded-full bg-sunrise-300 px-6 py-3 text-sm font-semibold text-[#2b1a10] shadow-[0_12px_30px_rgba(251,239,118,0.25)]"
            >
              {copy.hero.ctaPrimary}
            </a>
            {SHOW_BLOG ? (
              <NavLink
                to="/blog"
                className="rounded-full border border-[#3b2a20] px-6 py-3 text-sm font-semibold text-[#f3e8dc] transition hover:border-[#5a3c2c] hover:text-white"
              >
                {copy.hero.ctaSecondary}
              </NavLink>
            ) : null}
          </div>
          <div className="rounded-3xl border border-[#3b2a20] bg-[#24170f]/60 p-6">
            <h2 className="text-sm font-semibold text-[#c9b7a5]">
              {copy.highlights.title}
            </h2>
            <ul className="mt-4 grid gap-3 text-sm text-[#f0e2d5]">
              {copy.highlights.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-sunrise-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative rounded-3xl border border-[#3b2a20] bg-gradient-to-br from-[#2a1a12] via-[#1d130d] to-[#2a1a12] p-6">
          <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-sunrise-300/30 blur-2xl" />
          <div className="flex h-full flex-col justify-between gap-6">
            <img
              src="/my-photo.png"
              alt="Valerii Linden portrait"
              className="w-full rounded-2xl object-cover shadow-lg"
            />
            <div className="space-y-2">
              <p className="text-xs font-semibold text-[#c9b7a5]">
                English Tutor
              </p>
              <p className="text-lg font-semibold">
                A1-B1 structured lessons
              </p>
              <p className="text-sm text-[#e2d2c4]">
                Novi Sad, Serbia - Online
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        {SHOW_BLOG ? (
          <div className="rounded-3xl border border-[#3b2a20] bg-[#24170f]/60 p-6">
            <h2 className="text-sm font-semibold text-[#c9b7a5]">
              {copy.blog.title}
            </h2>
            <p className="mt-3 text-lg text-[#f0e2d5]">{copy.blog.subtitle}</p>
            <div className="mt-6 grid gap-4">
              {featuredPosts.map((post) => (
                <article
                  key={post.id}
                  className="rounded-2xl border border-[#3b2a20] bg-[#1b110c]/70 p-4"
                >
                  <p className="text-xs font-semibold text-[#c9b7a5]">
                    {post.date}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">{post.title}</h3>
                  <p className="mt-2 text-sm text-[#e2d2c4]">
                    {post.excerpt}
                  </p>
                </article>
              ))}
            </div>
          </div>
        ) : null}
        <div
          id="request"
          className="rounded-3xl border border-[#3b2a20] bg-[#24170f]/60 p-6"
        >
          <h2 className="text-sm font-semibold text-[#c9b7a5]">
            {copy.request.title}
          </h2>
          <p className="mt-3 text-sm text-[#e2d2c4]">
            {copy.request.description}
          </p>
          <RequestForm copy={copy.request} />
        </div>
      </section>
    </div>
  )
}

export default Home
