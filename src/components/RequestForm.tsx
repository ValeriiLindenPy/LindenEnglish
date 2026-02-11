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
        className="rounded-2xl border border-[#3b2a20] bg-[#1b110c]/80 px-4 py-3 text-sm text-[#f3e8dc] outline-none focus:border-sunrise-300"
      />
      <input
        placeholder={copy.level}
        value={formData.level}
        onChange={handleChange('level')}
        className="rounded-2xl border border-[#3b2a20] bg-[#1b110c]/80 px-4 py-3 text-sm text-[#f3e8dc] outline-none focus:border-sunrise-300"
      />
      <input
        placeholder={copy.goal}
        value={formData.goal}
        onChange={handleChange('goal')}
        className="rounded-2xl border border-[#3b2a20] bg-[#1b110c]/80 px-4 py-3 text-sm text-[#f3e8dc] outline-none focus:border-sunrise-300"
      />
      <input
        placeholder={copy.contact}
        value={formData.contact}
        onChange={handleChange('contact')}
        className="rounded-2xl border border-[#3b2a20] bg-[#1b110c]/80 px-4 py-3 text-sm text-[#f3e8dc] outline-none focus:border-sunrise-300"
      />
      <button
        type="button"
        onClick={handleSubmit}
        disabled={status === 'submitting'}
        className="rounded-full bg-sunrise-300 px-6 py-3 text-sm font-semibold text-[#2b1a10] shadow-[0_12px_30px_rgba(251,239,118,0.25)]"
      >
        {status === 'submitting' ? 'Sending...' : copy.submit}
      </button>
      {status === 'success' ? (
        <p className="text-xs text-emerald-200">Request sent. I will reply soon.</p>
      ) : status === 'error' ? (
        <p className="text-xs text-rose-200">{errorMessage}</p>
      ) : (
        <p className="text-xs text-[#c9b7a5]">{copy.note}</p>
      )}
    </form>
  )
}

export default RequestForm
