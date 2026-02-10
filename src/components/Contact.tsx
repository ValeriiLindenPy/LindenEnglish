import { content, type Locale } from '../content'
import RequestForm from './RequestForm'

type ContactProps = {
  locale: Locale
}

function Contact({ locale }: ContactProps) {
  const copy = content[locale]

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <section className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
        <h1 className="text-3xl font-semibold">{copy.contact.title}</h1>
        <p className="mt-3 text-slate-300">{copy.contact.subtitle}</p>
        <div className="mt-6 grid gap-4 text-sm text-slate-200">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              {copy.contact.locationLabel}
            </p>
            <p className="mt-1">Novi Sad, Serbia</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              {copy.contact.emailLabel}
            </p>
            <p className="mt-1">valeriilinden@gmail.com</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              {copy.contact.phoneLabel}
            </p>
            <p className="mt-1">+381 621 11 06 23</p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
        <h2 className="text-sm uppercase tracking-[0.3em] text-slate-400">
          {copy.request.title}
        </h2>
        <p className="mt-3 text-sm text-slate-300">
          {copy.request.description}
        </p>
        <RequestForm copy={copy.request} />
      </section>
    </div>
  )
}

export default Contact
