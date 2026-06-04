import { useInView } from '../hooks/useInView'
import { highlights } from '../data/cases'

const TICKER_ITEMS = [
  'Meta Ads', 'ROAS 19x', 'CPL $1,34', 'B2B · B2C', 'Silicon Valley',
  'E-commerce', 'Lead Gen', '50+ Marcas', 'Remote Worldwide', '$200K+/mês',
  'Creative Strategy', 'Nutraceuticals', 'Moda', 'SaaS', 'Creator Economy',
]

export default function Results() {
  const [ref, inView] = useInView()

  return (
    <section id="results" className="results-section" ref={ref}>
      {/* Ticker */}
      <div className="ticker-wrap">
        <div className="ticker-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="ticker-item">
              {item}
              <span className="ticker-sep" />
            </span>
          ))}
        </div>
      </div>

      {/* Results grid */}
      <div className="results-intro" style={{ paddingTop: 'var(--py)' }}>
        <div className={inView ? 'anim-slideLeft anim-d1' : 'anim-hidden'}>
          <div className="section-label">Resultados</div>
        </div>
        <h2
          className={`section-title${inView ? ' anim-fadeUp anim-d2' : ' anim-hidden'}`}
          style={{ marginBottom: 0 }}
        >
          Números reais.<br />Casos documentados.
        </h2>
      </div>

      <div className="results-grid" style={{ paddingBottom: 'var(--py)' }}>
        {highlights.map((h, i) => (
          <div
            key={h.num + h.ref}
            className={`result-card${inView ? ` anim-fadeUp anim-d${Math.min(i + 3, 8)}` : ' anim-hidden'}`}
          >
            <div className="result-num">{h.num}</div>
            <div className="result-label">{h.label}</div>
            <div className="result-ref">{h.ref}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
