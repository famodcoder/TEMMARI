import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Temmari',
  description: 'Read the Temmari privacy policy for data handling and customer privacy.',
}

export default function PrivacyPage() {
  return (
    <main className="page page--privacy">
      <div className="page__inner">
        <div className="eyebrow">
          <span className="eyebrow-line" />
          <span className="eyebrow-text">Privacy Policy</span>
        </div>
        <h1 className="section-heading">We protect your privacy and personal data.</h1>
        <p className="page__intro">
          Temmari collects only the information needed to process orders, respond to inquiries, and improve your experience.
          We never sell your data to third parties.
        </p>
      </div>
    </main>
  )
}
