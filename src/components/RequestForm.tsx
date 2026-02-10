import { useState } from 'react'
import type { LocaleContent } from '../content'

type RequestFormProps = {
  copy: LocaleContent['request']
}

function RequestForm({ copy }: RequestFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    level: '',
    goal: '',
    contact: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (field: keyof typeof formData) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }))
  }

  const handleSubmit = async () => {
    setStatus('submitting')
    setErrorMessage('')
    try {
      const response = await fetch('/.netlify/functions/telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}))
        throw new Error(payload?.error || 'Failed to send request.')
      }

      setStatus('success')
      setFormData({ name: '', level: '', goal: '', contact: '' })
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send request.')
    }
  }

  return (
    <form className="mt-6 grid gap-4">
      <input
        placeholder={copy.name}
        value={formData.name}
        onChange={handleChange('name')}
        className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-slate-200 outline-none focus:border-sunrise-200"
      />
      <input
        placeholder={copy.level}
        value={formData.level}
        onChange={handleChange('level')}
        className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-slate-200 outline-none focus:border-sunrise-200"
      />
      <input
        placeholder={copy.goal}
        value={formData.goal}
        onChange={handleChange('goal')}
        className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-slate-200 outline-none focus:border-sunrise-200"
      />
      <input
        placeholder={copy.contact}
        value={formData.contact}
        onChange={handleChange('contact')}
        className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-slate-200 outline-none focus:border-sunrise-200"
      />
      <button
        type="button"
        onClick={handleSubmit}
        disabled={status === 'submitting'}
        className="rounded-full bg-sunrise-200 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-900"
      >
        {status === 'submitting' ? 'Sending...' : copy.submit}
      </button>
      {status === 'success' ? (
        <p className="text-xs text-emerald-300">Request sent. I will reply soon.</p>
      ) : status === 'error' ? (
        <p className="text-xs text-rose-300">{errorMessage}</p>
      ) : (
        <p className="text-xs text-slate-400">{copy.note}</p>
      )}
    </form>
  )
}

export default RequestForm
