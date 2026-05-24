import type { Metadata } from 'next'
import { WA_LINK } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Bespoke Tailoring — Temmari',
  description: 'Discover Temmari bespoke and made-to-measure tailoring for a perfect fit.',
}

export default function BespokePage() {
  return (
    <main className="page page--bespoke">
      <div className="page__inner">
        <div className="eyebrow eyebrow--gold">
          <span className="eyebrow-line" />
          <span className="eyebrow-text">Bespoke Tailoring</span>
        </div>
        <h1 className="section-heading section-heading--light">
          Tailored to you,
          <br />
          <em>from fabric to fit.</em>
        </h1>
        <p className="page__intro">
          Temmari bespoke offers a full made-to-measure experience: expert measurements, selected materials, and luxury finishing.
          Every piece is crafted to your body, your lifestyle, and your personal style.
        </p>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
          Start your bespoke order
        </a>
      </div>
    </main>
  )
}
