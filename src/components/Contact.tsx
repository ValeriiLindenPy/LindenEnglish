import { content, type Locale } from '../content'
import RequestForm from './RequestForm'

type ContactProps = {
  locale: Locale
}

function Contact({ locale }: ContactProps) {
  const copy = content[locale]

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <section className="rounded-3xl border border-[#3b2a20] bg-[#24170f]/60 p-6">
        <h1 className="text-3xl font-semibold">{copy.contact.title}</h1>
        <p className="mt-3 text-[#e2d2c4]">{copy.contact.subtitle}</p>
        <div className="mt-6 grid gap-4 text-sm text-[#f0e2d5]">
          <div>
            <p className="text-xs font-semibold text-[#c9b7a5]">
              {copy.contact.locationLabel}
            </p>
            <p className="mt-1">Novi Sad, Serbia</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#c9b7a5]">
              {copy.contact.emailLabel}
            </p>
            <p className="mt-1">valeriilinden@gmail.com</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#c9b7a5]">
              {copy.contact.phoneLabel}
            </p>
            <p className="mt-1">+381 621 11 06 23</p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-[#3b2a20] bg-[#24170f]/60 p-6">
        <h2 className="text-sm font-semibold text-[#c9b7a5]">
          {copy.request.title}
        </h2>
        <p className="mt-3 text-sm text-[#e2d2c4]">
          {copy.request.description}
        </p>
        <RequestForm copy={copy.request} />
      </section>
    </div>
  )
}

export default Contact
