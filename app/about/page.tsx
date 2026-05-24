import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Temmari — Limitless Classic Styling',
  description: 'Learn about Temmari, our mission, and our fit-first approach to fashion.',
}

export default function AboutPage() {
  return (
    <main className="page page--about">
      <div className="page__inner">
        <div className="eyebrow">
          <span className="eyebrow-line" />
          <span className="eyebrow-text">About Temmari</span>
        </div>
        <h1 className="section-heading">Fashion for every body, every budget.</h1>
        <p className="page__intro">
          Temmari was created to bring thoughtful tailoring, modern silhouettes, and high-quality materials
          to people who want to look extraordinary without compromise.
        </p>

        <section className="page__section">
          <h2>Our Story</h2>
          <p>
            We believe great style should be accessible, inclusive, and authentic. Every collection is designed
            with careful attention to fit, fabric, and the confidence our customers deserve.
          </p>
        </section>

        <section className="page__section" id="sizes">
          <h2>Size Guide</h2>
          <p>
            Whether you choose ready-to-wear or bespoke, Temmari is built to celebrate all shapes and sizes.
            We offer made-to-measure tailoring and flexible sizing options to help you feel confident in every piece.
          </p>
          <ul>
            <li>Ready-to-wear: S, M, L, XL, XXL</li>
            <li>Custom fits available with our bespoke service</li>
            <li>Dedicated support for shape-specific styling and tailoring</li>
          </ul>
        </section>
      </div>
    </main>
  )
}
