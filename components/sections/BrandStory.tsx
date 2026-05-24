const VALUES = [
  'Inclusive Sizing',
  'Accessible Luxury',
  'Handcrafted Quality',
  'Timeless Style',
]

export default function BrandStory() {
  return (
    <section className="story" aria-labelledby="story-heading">

      {/* Visual panel */}
      <div className="story__visual" aria-hidden="true">
        <span className="story__mono">TEMMARI</span>
        <span className="story__h-line" />
        <span className="story__v-line" />
        <span className="story__corner story__corner--tl" />
        <span className="story__corner story__corner--br" />
      </div>

      {/* Content panel */}
      <div className="story__content">
        <div className="eyebrow eyebrow--gold">
          <span className="eyebrow-line" />
          <span className="eyebrow-text">Our Story</span>
        </div>

        <h2 id="story-heading" className="section-heading section-heading--light">
          Fashion for<br />
          <em>every body,</em><br />
          every budget
        </h2>

        <p className="story__text">
          Temmari was born from a real and personal truth — that style should never
          be a privilege. I started this brand putting finances, quality, different
          body types, creativity, comfort and sophistication into consideration.
          For people who deserve to look extraordinary without compromise.
        </p>

        <ul className="story__values" aria-label="Brand values">
          {VALUES.map((v) => (
            <li key={v} className="story__value-tag">{v}</li>
          ))}
        </ul>
      </div>

    </section>
  )
}
