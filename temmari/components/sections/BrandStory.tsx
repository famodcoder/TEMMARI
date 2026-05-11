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
        <span className="story__mono">Ti</span>
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

      <style jsx>{`
        .story {
          display: grid;
          grid-template-columns: 45% 55%;
          min-height: 640px;
          background: var(--slate);
        }

        /* Visual */
        .story__visual {
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(145deg, var(--wine-deep) 0%, var(--slate-mid) 55%, var(--slate) 100%);
        }
        .story__mono {
          font-family: var(--font-serif);
          font-size: 300px;
          color: rgba(255, 255, 255, 0.03);
          font-weight: 400;
          font-style: italic;
          user-select: none;
          line-height: 1;
        }
        .story__h-line {
          position: absolute;
          top: 50%; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(191,155,95,.35), transparent);
        }
        .story__v-line {
          position: absolute;
          left: 50%; top: 0; bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, transparent, rgba(191,155,95,.18), transparent);
        }
        .story__corner {
          position: absolute;
          width: 50px; height: 50px;
          border-color: rgba(191, 155, 95, 0.3);
          border-style: solid;
        }
        .story__corner--tl { top: 32px; left: 32px; border-width: 1px 0 0 1px; }
        .story__corner--br { bottom: 32px; right: 32px; border-width: 0 1px 1px 0; }

        /* Content */
        .story__content {
          padding: 90px 72px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .story__content .section-heading {
          margin-bottom: 24px;
        }
        .story__text {
          font-size: 14px;
          line-height: 2;
          color: rgba(255, 255, 255, 0.5);
          font-weight: 300;
          margin-bottom: 36px;
          max-width: 460px;
        }
        .story__values {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          list-style: none;
        }
        .story__value-tag {
          font-size: 9px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--gold-light);
          border: 1px solid rgba(191, 155, 95, 0.35);
          padding: 7px 15px;
          font-weight: 300;
        }

        @media (max-width: 1024px) {
          .story { grid-template-columns: 1fr; }
          .story__visual { min-height: 300px; }
          .story__content { padding: 60px 32px; }
        }
      `}</style>
    </section>
  )
}
