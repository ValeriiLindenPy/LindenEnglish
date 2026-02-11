import { content, type Locale } from '../content'

type AboutProps = {
  locale: Locale
}

function About({ locale }: AboutProps) {
  const copy = content[locale]

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <section className="rounded-3xl border border-[#3b2a20] bg-[#24170f]/60 p-6">
        <h1 className="text-3xl font-semibold">{copy.about.title}</h1>
        <p className="mt-4 text-[#e2d2c4]">{copy.about.summary}</p>
        <h2 className="mt-6 text-sm font-semibold text-[#c9b7a5]">
          {copy.about.specialtiesTitle}
        </h2>
        <ul className="mt-4 grid gap-3 text-sm text-[#f0e2d5]">
          {copy.about.specialties.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-sunrise-300" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-[#3b2a20] bg-[#24170f]/60 p-6">
        <h2 className="text-sm font-semibold text-[#c9b7a5]">
          {copy.about.experienceTitle}
        </h2>
        <ul className="mt-4 grid gap-3 text-sm text-[#f0e2d5]">
          {copy.about.experience.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-sunrise-300" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <h2 className="mt-6 text-sm font-semibold text-[#c9b7a5]">
          {copy.about.educationTitle}
        </h2>
        <ul className="mt-4 grid gap-3 text-sm text-[#f0e2d5]">
          {copy.about.education.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-sunrise-300" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default About
