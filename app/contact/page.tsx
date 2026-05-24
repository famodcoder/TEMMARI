import type { Metadata } from 'next'
import { WA_LINK } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Contact Temmari',
  description: 'Get in touch with Temmari for bespoke orders, styling help, and customer service.',
}

export default function ContactPage() {
  return (
    <main className="page page--contact">
      <div className="page__inner">
        <div className="eyebrow">
          <span className="eyebrow-line" />
          <span className="eyebrow-text">Contact</span>
        </div>
        <h1 className="section-heading">Let&apos;s make your next look unforgettable.</h1>
        <p className="page__intro">
          Need styling advice, bespoke tailoring, or a quote? Reach out directly on WhatsApp and our team will respond quickly.
        </p>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-fill">
          Chat on WhatsApp
        </a>

        <div className="page__section">
          <h2>Customer support</h2>
          <p>
            For order enquiries, product availability, and delivery questions, we&apos;re here to help. Use WhatsApp for the fastest response.
          </p>
        </div>
      </div>
    </main>
  )
}
