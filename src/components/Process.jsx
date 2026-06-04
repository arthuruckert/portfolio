import { useInView } from '../hooks/useInView'

const STEPS = [
  {
    num: '01',
    title: 'Diagnóstico',
    desc: 'Entendo o negócio, histórico de campanhas e onde está o dinheiro sendo desperdiçado. Sem diagnóstico real, qualquer estratégia é chute.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Estratégia',
    desc: 'Monto o plano completo: funil de aquisição, segmentação de audiências, orçamento por campanha e KPIs que fazem sentido para o negócio.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Criativos & Testes',
    desc: 'Produzo e testo criativos de forma sistemática — VSLs, UGC, estáticos. Cada variável tem uma hipótese. Elimino o que não converte, escalo o que funciona.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7"/>
        <rect x="1" y="5" width="15" height="14" rx="2"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Escala',
    desc: 'Com campanhas validadas, escalamos o budget de forma controlada. Mais volume sem perder eficiência — esse é o objetivo final.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
]

export default function Process() {
  const [ref, inView] = useInView()

  return (
    <section id="process" className="section" ref={ref}>
      <div className={inView ? 'anim-slideLeft anim-d1' : 'anim-hidden'}>
        <div className="section-label">Processo</div>
      </div>
      <h2 className={`section-title${inView ? ' anim-fadeUp anim-d2' : ' anim-hidden'}`}>
        Como trabalho
      </h2>

      <div className="process-grid">
        {STEPS.map((s, i) => (
          <div
            key={s.num}
            className={`process-step${inView ? ` anim-fadeUp anim-d${i + 3}` : ' anim-hidden'}`}
          >
            <span className="process-step-num">{s.num}</span>
            <div className="process-step-icon">{s.icon}</div>
            <h3 className="process-step-title">{s.title}</h3>
            <p className="process-step-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
