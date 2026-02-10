import { content, type Locale } from '../content'

type AboutProps = {
  locale: Locale
}

function About({ locale }: AboutProps) {
  const copy = content[locale]

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <section className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
        <h1 className="text-3xl font-semibold">{copy.about.title}</h1>
        <p className="mt-4 text-slate-300">{copy.about.summary}</p>
        <h2 className="mt-6 text-sm uppercase tracking-[0.3em] text-slate-400">
          {copy.about.specialtiesTitle}
        </h2>
        <ul className="mt-4 grid gap-3 text-sm text-slate-200">
          {copy.about.specialties.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-sunrise-200" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
        <h2 className="text-sm uppercase tracking-[0.3em] text-slate-400">
          {copy.about.experienceTitle}
        </h2>
        <ul className="mt-4 grid gap-3 text-sm text-slate-200">
          {copy.about.experience.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-sunrise-200" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <h2 className="mt-6 text-sm uppercase tracking-[0.3em] text-slate-400">
          {copy.about.educationTitle}
        </h2>
        <ul className="mt-4 grid gap-3 text-sm text-slate-200">
          {copy.about.education.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-sunrise-200" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default About
