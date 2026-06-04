// Dados completos dos 8 cases — inclui story, imagens, vídeos e depoimentos
// Para editar textos: altere os campos "story[].text" e "testimonial.quote"
// Para adicionar Vimeo: coloque o ID do vídeo no campo "vimeoId"

export const casesDetail = [
  // ═══════════════════════════════════════════════════════════════════
  // CASE 01 — KS METAIS
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 'ks',
    num: '01',
    name: 'KS Metais',
    logo: '/assets/img/ks_logo.png',
    accent: '#C0392B',
    tag: 'B2B Industrial · BR / PT / EU',
    segment: 'B2B · Carrinhos & Utilitários · Varejo & Industrial',

    headline: 'De $10 por lead para $2,24.',
    headlineSub: 'Redução de CPL em 30 dias',

    metrics: [
      { num: '79%', label: 'Redução no CPL' },
      { num: '381', label: 'Leads / 30 dias' },
      { num: '$1,50', label: 'Melhor CPL alcançado' },
      { num: '$852', label: 'Verba investida (30 dias)' },
    ],

    story: [
      {
        step: '01 · O PROBLEMA',
        title: 'Custo inviável para escalar',
        text: 'Valmor chegou por indicação pagando $10–11 por conversa no WhatsApp — um custo inviável para crescer com consistência. A empresa precisava reduzir drasticamente o CPL sem comprometer a qualidade dos leads.',
      },
      {
        step: '02 · O DIAGNÓSTICO',
        title: 'Nível de consciência baixo',
        text: 'Os criativos geravam cliques, mas o lead chegava sem entender o produto. A pessoa mandava mensagem e desaparecia, sem qualificação, sem conversão. O problema não era o alcance — era a educação.',
      },
      {
        step: '03 · A ESTRATÉGIA',
        title: 'Educação antes do clique',
        text: 'Reestruturamos toda a produção criativa para elevar o nível de consciência do lead. Cada vídeo passou a educar sobre o produto antes de direcionar ao WhatsApp ou Instagram. Leads que chegam entendendo o produto convertem.',
      },
      {
        step: '04 · A EXPANSÃO',
        title: '🇵🇹 Vendas na Europa · Multinacionais',
        text: 'A KS Metais fabrica e exporta carrinhos e utilitários para supermercados, logística e armazéns no Brasil e na Europa, atendendo redes como Leroy Merlin e Carrefour. As campanhas foram adaptadas para gerar leads qualificados nos dois mercados simultaneamente.',
      },
    ],

    sectionLabels: {
      expo: 'PRESENÇA & EXPO · ExpoSupermercado 2025 · São Paulo',
      results: 'RESULTADOS REAIS · Últimos 30 dias · Fev–Mar 2026',
      video: 'DEPOIMENTO · Valmor · Fundador KS Metais',
      gallery: 'GALERIA · Criativos & Materiais',
    },

    expoPhotos: [
      '/assets/img/image-6-3.jpg',
      '/assets/img/image-6-1.jpg',
    ],

    resultsImage: '/assets/img/image-8-1.png',
    resultsLabel: 'Print real · Meta Ads Manager · Fev–Mar 2026',

    vimeoId: '1175273058',
    vimeoColor: 'C0392B',

    testimonial: {
      photo: '/assets/img/image-8-2.jpg',
      quote: 'Arthur entendeu o nosso negócio, identificou onde estávamos perdendo dinheiro e entregou resultados reais em poucas semanas. O CPL caiu mais de 79% e a qualidade dos leads melhorou muito.',
      author: 'Valmor',
      role: 'Fundador, KS Metais',
    },

    gallery: [
      '/assets/img/ks_new_5003_image-1-1.png',
      '/assets/img/ks_new_5000_image-1-2.png',
      '/assets/img/ks_new_5001_image-1-3.png',
      '/assets/img/ks_new_5004_image-1-5.png',
      '/assets/img/ks_new_5005_image-1-4.png',
      '/assets/img/ks_new_5002_image-1-6.png',
    ],
  },

  // ═══════════════════════════════════════════════════════════════════
  // CASE 02 — PICK MY BRAIN
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 'pmb',
    num: '02',
    name: 'Pick My Brain',
    logo: '/assets/img/image-10-1.png',
    accent: '#888888',
    tag: 'AI SaaS · Silicon Valley',
    segment: 'Plataforma AI · Marketplace de Conhecimento · EUA',

    headline: '0 para 500 assinaturas pagas.',
    headlineSub: 'Do lançamento à tração internacional',

    metrics: [
      { num: '0 → 500', label: 'Assinaturas pagas' },
      { num: '3', label: 'Mercados internacionais' },
      { num: 'EUA', label: 'Mercado principal' },
      { num: 'AI', label: 'Categoria · Silicon Valley' },
    ],

    story: [
      {
        step: '01 · O DESAFIO',
        title: 'Produto novo, zero audiência',
        text: 'Pick My Brain chegou sem nenhuma base de usuários, sem histórico de campanhas e com o desafio de lançar uma plataforma AI num mercado extremamente competitivo nos EUA.',
      },
      {
        step: '02 · O DIAGNÓSTICO',
        title: 'Awareness antes de conversão',
        text: 'Em SaaS early-stage, converter frio direto para assinatura raramente funciona. A estratégia precisava primeiro construir awareness e autoridade da plataforma para depois converter.',
      },
      {
        step: '03 · A ESTRATÉGIA',
        title: 'Funil em 2 etapas',
        text: 'Campanha de awareness com conteúdo de valor posicionando a plataforma como referência, seguida de retargeting agressivo para os usuários engajados. O custo de aquisição caiu à medida que o funil aqueceu.',
      },
      {
        step: '04 · O RESULTADO',
        title: '500 assinantes em meses',
        text: 'De zero a 500 assinaturas pagas, com crescimento consistente mês a mês. A plataforma saiu do anonimato para ter tração real em 3 mercados internacionais.',
      },
    ],

    sectionLabels: {
      results: 'RESULTADOS · Meta Ads Manager',
      gallery: 'PLATAFORMA · Screenshots & Criativos',
    },

    gallery: [
      '/assets/img/image-12-1.jpg',
      '/assets/img/image-12-2.jpg',
      '/assets/img/image-12-3.jpg',
      '/assets/img/image-13-1.png',
      '/assets/img/image-13-2.png',
      '/assets/img/image-13-3.png',
      '/assets/img/image-13-4.png',
      '/assets/img/image-13-5.png',
      '/assets/img/image-13-6.png',
    ],

    resultsImage: '/assets/img/image-14-1.png',
    resultsLabel: 'Meta Ads Manager · Campanha de Conversão',

    extraImages: [
      '/assets/img/image-14-2.png',
      '/assets/img/image-14-3.jpg',
    ],
  },

  // ═══════════════════════════════════════════════════════════════════
  // CASE 03 — MOSSY
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 'mossy',
    num: '03',
    name: 'MOSSY',
    logo: '/assets/img/image-15-1.png',
    accent: '#AAAAAA',
    tag: 'E-commerce · Moda · BR / PT',
    segment: 'E-commerce de Moda · Brasil e Portugal',

    headline: 'ROAS 10x.',
    headlineSub: 'De R$30K para R$180K por mês',

    metrics: [
      { num: 'ROAS 10x', label: 'Retorno sobre investimento' },
      { num: 'R$180K', label: 'Faturamento mensal no pico' },
      { num: 'R$30K', label: 'Faturamento inicial' },
      { num: '6x', label: 'Crescimento em receita' },
    ],

    story: [
      {
        step: '01 · O CONTEXTO',
        title: 'Marca com produto bom, escala travada',
        text: 'MOSSY tinha produto validado e base de clientes fiel, mas as campanhas não conseguiam escalar. O ROAS caía toda vez que aumentavam o budget.',
      },
      {
        step: '02 · O DIAGNÓSTICO',
        title: 'Estrutura de campanha inadequada',
        text: 'A estrutura de campanhas não separava tráfego frio de retargeting. Sem essa separação, o algoritmo misturava audiências e o custo por compra subia constantemente.',
      },
      {
        step: '03 · A ESTRATÉGIA',
        title: 'Funil separado + criativos segmentados',
        text: 'Reconstruímos a estrutura completa: topo, meio e fundo de funil com criativos específicos para cada etapa. Isso permitiu escalar o budget no topo sem comprometer o retorno no fundo.',
      },
      {
        step: '04 · O RESULTADO',
        title: 'R$30K para R$180K em meses',
        text: 'ROAS consistente em 10x com budget 6x maior. A marca passou a ter previsibilidade no faturamento e capacidade real de escalar.',
      },
    ],

    sectionLabels: {
      gallery: 'CRIATIVOS & PRODUTO',
      results: 'RESULTADOS · Meta Ads',
    },

    gallery: [
      '/assets/img/image-1-1.jpeg',
      '/assets/img/image-1-2.jpeg',
      '/assets/img/image-1-3.jpeg',
      '/assets/img/image-1-4.jpeg',
      '/assets/img/image-1-5.jpeg',
      '/assets/img/image-2-1_m1.png',
    ],

    resultsImage: '/assets/img/image-4-6.png',
    resultsLabel: 'Meta Ads Manager · Campanha de Vendas',

    extraImages: [
      '/assets/img/image-4-1.jpeg',
      '/assets/img/image-4-2.jpeg',
      '/assets/img/image-4-3.jpeg',
    ],
  },

  // ═══════════════════════════════════════════════════════════════════
  // CASE 05 — TRAFFIC RAPTORS
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 'tr',
    num: '05',
    name: 'Traffic Raptors',
    logo: '/assets/img/image-19-1.png',
    accent: '#D4AF37',
    tag: 'Nutraceuticals · USA / CA / EU / AU',
    segment: 'Suplementos · 4 Mercados Internacionais',

    headline: 'ROAS 3.4–5.3x.',
    headlineSub: '4 mercados simultâneos — EUA, Canadá, Europa, Austrália',

    metrics: [
      { num: 'ROAS 5.3x', label: 'Pico de retorno' },
      { num: 'ROAS 3.4x', label: 'Mínimo mantido' },
      { num: '4', label: 'Mercados simultâneos' },
      { num: 'EUA+CA', label: 'Mercados principais' },
    ],

    story: [
      {
        step: '01 · O DESAFIO',
        title: 'Escalar em 4 países ao mesmo tempo',
        text: 'Traffic Raptors precisava operar campanhas de nutraceuticals em EUA, Canadá, Europa e Austrália simultaneamente — cada mercado com suas regras, sazonalidades e audiências distintas.',
      },
      {
        step: '02 · O DIAGNÓSTICO',
        title: 'Campanhas genéricas sem adaptação local',
        text: 'Os criativos e copy não respeitavam as diferenças culturais entre mercados. O que funcionava no Brasil não convertia nos EUA. A falta de adaptação local destruía o ROAS.',
      },
      {
        step: '03 · A ESTRATÉGIA',
        title: 'Estrutura multi-mercado com criativos locais',
        text: 'Criamos uma estrutura separada por mercado, com criativos e copy adaptados para cada país. Testes sistemáticos em cada mercado permitiram identificar os ângulos de conversão específicos.',
      },
      {
        step: '04 · O RESULTADO',
        title: 'ROAS mantido entre 3.4x e 5.3x',
        text: 'Com operação simultânea em 4 países, mantivemos ROAS consistente entre 3.4x e 5.3x. A escala foi sustentável porque cada mercado tinha sua própria estrutura otimizada.',
      },
    ],

    sectionLabels: {
      gallery: 'CRIATIVOS · Campanhas Multi-Mercado',
      results: 'RESULTADOS · Meta Ads Manager',
    },

    gallery: [
      '/assets/img/tr_import_1000_image-1-1.png',
      '/assets/img/tr_import_1001_image-2-1.png',
      '/assets/img/tr_import_1002_image-4-1.jpeg',
      '/assets/img/tr_import_1003_image-4-2.jpeg',
      '/assets/img/tr_import_1004_image-4-3.jpeg',
      '/assets/img/tr_import_1005_image-4-4.jpeg',
    ],

    extraImages: [
      '/assets/img/tr_import_1006_image-5-1.jpeg',
      '/assets/img/tr_import_1007_image-5-2.jpeg',
    ],
  },

  // ═══════════════════════════════════════════════════════════════════
  // CASE 06 — ROTOPLAST
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 'rp',
    num: '06',
    name: 'Rotoplast',
    logo: '/assets/img/image-21-1.png',
    accent: '#F5C518',
    tag: 'B2B Industrial · Resfriamento Evaporativo · BR',
    segment: 'Equipamentos Industriais · Brasil',

    headline: 'CPL $1,34.',
    headlineSub: 'Leads B2B qualificados para resfriamento industrial',

    metrics: [
      { num: '$1,34', label: 'CPL alcançado' },
      { num: 'B2B', label: 'Segmento industrial' },
      { num: 'BR', label: 'Mercado' },
      { num: 'Quente', label: 'Qualidade dos leads' },
    ],

    story: [
      {
        step: '01 · O NEGÓCIO',
        title: 'Equipamentos de resfriamento evaporativo',
        text: 'Rotoplast atua no mercado industrial B2B com sistemas de resfriamento evaporativo para galpões, fábricas e armazéns. Ticket alto, ciclo de venda longo, lead precisa ser altamente qualificado.',
      },
      {
        step: '02 · O DESAFIO',
        title: 'Gerar leads que realmente compram',
        text: 'Em B2B industrial, quantidade de leads não é o objetivo — qualidade é. Um lead não qualificado custa mais caro do que não ter lead. O desafio era gerar decisores.',
      },
      {
        step: '03 · A ESTRATÉGIA',
        title: 'Qualificação via criativo',
        text: 'Desenvolvemos criativos que já qualificam o lead antes do clique: linguagem técnica, casos de uso específicos, foco em dor real (calor no galpão = perda de produtividade). Leads que clicam já sabem o que é o produto.',
      },
      {
        step: '04 · O RESULTADO',
        title: 'CPL de $1,34 com leads quentes',
        text: 'CPL de $1,34 com leads que chegam entendendo o produto e prontos para negociar. O custo de aquisição, cruzado com o ticket médio, gerou um ROI consistente.',
      },
    ],

    sectionLabels: {
      gallery: 'PRODUTO & CAMPANHAS',
      results: 'RESULTADOS · Meta Ads',
    },

    gallery: [
      '/assets/img/image-25-1.jpg',
      '/assets/img/image-27-1.jpg',
    ],
  },

  // ═══════════════════════════════════════════════════════════════════
  // CASE 07 — CASA TROPICAL
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 'ct',
    num: '07',
    name: 'Casa Tropical',
    logo: '/assets/img/image-5-1.png',
    accent: '#E89685',
    tag: 'Moda Premium · BR / PT',
    segment: 'Moda Premium · E-commerce · Collab Saint Laurent',

    headline: 'ROAS 6x.',
    headlineSub: 'De 7K para 32K seguidores · Collab YSL',

    metrics: [
      { num: 'ROAS 6x', label: 'Retorno sobre investimento' },
      { num: '7K → 32K', label: 'Seguidores Instagram' },
      { num: '4.6x', label: 'Crescimento de audiência' },
      { num: 'YSL', label: 'Collab Saint Laurent' },
    ],

    story: [
      {
        step: '01 · A MARCA',
        title: 'Moda premium com identidade forte',
        text: 'Casa Tropical é uma marca de moda premium com posicionamento aspiracional. O desafio era crescer a base de seguidores qualificados e converter esse crescimento em vendas reais.',
      },
      {
        step: '02 · O DIAGNÓSTICO',
        title: 'Audiência não convertia em compra',
        text: 'A marca tinha conteúdo bonito mas campanhas que geravam engajamento, não vendas. O funil estava incompleto — entrava tráfego mas o retorno financeiro era baixo.',
      },
      {
        step: '03 · A ESTRATÉGIA',
        title: 'Conteúdo premium + funil de conversão',
        text: 'Separamos as campanhas de crescimento de audiência (conteúdo de marca, collab YSL) das campanhas de conversão (catálogo, oferta direta). Cada objetivo com sua estrutura específica.',
      },
      {
        step: '04 · O RESULTADO',
        title: 'ROAS 6x + 32K seguidores',
        text: 'Crescimento de 7K para 32K seguidores com ROAS 6x nas campanhas de conversão. A collab com Saint Laurent amplificou o alcance e reforçou o posicionamento premium da marca.',
      },
    ],

    sectionLabels: {
      expo: 'LOJA & COLLAB · Casa Tropical × Saint Laurent',
      results: 'RESULTADOS · Meta Ads Manager',
      gallery: 'CAMPANHA & CRIATIVOS',
    },

    expoPhotos: [
      '/assets/img/ct/store1.jpg',
      '/assets/img/ct/store2.jpg',
      '/assets/img/ct/store3.jpg',
      '/assets/img/ct/ysl_event1.jpg',
      '/assets/img/ct/ysl_event2.jpg',
      '/assets/img/ct/ysl_bags.jpg',
    ],

    resultsImage: '/assets/img/ct/meta_manager.png',
    resultsLabel: 'Meta Ads Manager · Campanhas de Conversão',

    testimonial: {
      photo: '/assets/img/ct/founder_white.png',
      quote: 'As campanhas trouxeram o crescimento que precisávamos — tanto em audiência quanto em vendas. O ROAS de 6x superou nossas expectativas.',
      author: 'Fundadora',
      role: 'Casa Tropical',
    },

    gallery: [
      '/assets/img/ct/founder_blue.jpg',
      '/assets/img/ct/founder_green.jpg',
      '/assets/img/ct/ysl_shelf.jpg',
      '/assets/img/ct_new_5009_image-1-1.png',
      '/assets/img/ct_new_5006_image-1-2.png',
      '/assets/img/ct_new_5007_image-1-3.png',
      '/assets/img/ct_new_5011_image-1-4.png',
      '/assets/img/ct_new_5010_image-1-5.png',
      '/assets/img/ct_new_5008_image-1-6.png',
    ],

    extraImages: [
      '/assets/img/ct/meta_roas1435.jpg',
      '/assets/img/ct/meta_roas1446.jpg',
    ],
  },

  // ═══════════════════════════════════════════════════════════════════
  // CASE 08 — BLOOM → LOUM
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 'bloom',
    num: '08',
    name: 'Bloom → Loum',
    logo: '/assets/img/bloom_2000_image-1-1.png',
    accent: '#C0A0E0',
    tag: 'Moda Feminina · BR / PT',
    segment: 'E-commerce de Moda Feminina · Rebranding',

    headline: 'ROAS 19x.',
    headlineSub: 'R$686K em conversões registradas',

    metrics: [
      { num: 'ROAS 19x', label: 'Retorno sobre investimento' },
      { num: 'R$686K', label: 'Em conversões registradas' },
      { num: '19x', label: 'Retorno por real investido' },
      { num: 'BR/PT', label: 'Mercados' },
    ],

    story: [
      {
        step: '01 · O REBRANDING',
        title: 'Bloom virou Loum',
        text: 'A marca passou por um rebranding completo — nova identidade, novo nome, novo posicionamento. O desafio era lançar a nova marca sem perder a base existente e escalar as vendas.',
      },
      {
        step: '02 · O DESAFIO',
        title: 'Lançar e escalar ao mesmo tempo',
        text: 'Em um rebranding, há dois riscos: perder clientes antigos na transição e não conseguir construir audiência nova rápido o suficiente. Precisávamos gerenciar os dois ao mesmo tempo.',
      },
      {
        step: '03 · A ESTRATÉGIA',
        title: 'Retenção + aquisição em paralelo',
        text: 'Campanhas de retargeting para a base existente (comunicando a transição) em paralelo com campanhas de aquisição para a nova marca. Budget dividido estrategicamente entre os dois objetivos.',
      },
      {
        step: '04 · O RESULTADO',
        title: 'ROAS 19x · R$686K em conversões',
        text: 'O melhor ROAS de todo o portfólio: 19x de retorno. R$686.000 em conversões registradas diretamente pelo Meta Ads, com a marca nova estabelecida e crescendo.',
      },
    ],

    sectionLabels: {
      gallery: 'COLEÇÃO & CRIATIVOS',
      results: 'RESULTADOS · Meta Ads Manager',
    },

    gallery: [
      '/assets/img/bloom_2001_image-2-1.png',
      '/assets/img/bloom_2002_image-4-1.jpeg',
      '/assets/img/bloom_2003_image-4-2.jpeg',
      '/assets/img/bloom_2004_image-4-3.jpeg',
      '/assets/img/bloom_2005_image-4-4.jpeg',
      '/assets/img/bloom_2006_image-5-1.jpeg',
    ],

    resultsImage: '/assets/img/bloom_2007_image-5-2.png',
    resultsLabel: 'Meta Ads Manager · Campanhas de Conversão',
  },

  // ═══════════════════════════════════════════════════════════════════
  // CASE 09 — NEGÃOZIN
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 'neg',
    num: '09',
    name: 'Negãozin',
    logo: '/assets/img/negaozin.jpg',
    logoRound: true,
    accent: '#DDDDDD',
    tag: 'Creator · 868K TikTok · BR / PT',
    segment: 'Creator Economy · Instagram & TikTok',

    headline: '9K para 136K seguidores.',
    headlineSub: '19,8 milhões de views · 868K no TikTok',

    metrics: [
      { num: '136K', label: 'Seguidores Instagram' },
      { num: '868K', label: 'Seguidores TikTok' },
      { num: '19,8M', label: 'Views orgânicos' },
      { num: '15x', label: 'Crescimento de audiência' },
    ],

    story: [
      {
        step: '01 · O CREATOR',
        title: 'Potencial sem distribuição',
        text: 'Negãozin chegou com 9K seguidores no Instagram e conteúdo de qualidade, mas sem estratégia de distribuição paga. O crescimento orgânico estava travado.',
      },
      {
        step: '02 · O DIAGNÓSTICO',
        title: 'Conteúdo bom, distribuição zero',
        text: 'O problema não era o conteúdo — era a distribuição. Os vídeos tinham potencial viral mas não estavam chegando em novas audiências. Faltava um sistema de amplificação.',
      },
      {
        step: '03 · A ESTRATÉGIA',
        title: 'Amplificação de conteúdo viral',
        text: 'Identificamos os conteúdos com maior potencial de compartilhamento e amplificamos com budget estratégico. Tráfego pago acelerou o orgânico — um vídeo impulsionado chegava ao FYP do TikTok e explodia.',
      },
      {
        step: '04 · O RESULTADO',
        title: '9K → 136K no Instagram · 868K no TikTok',
        text: '19,8 milhões de views totais. De creator com 9K para influenciador com mais de 1 milhão de seguidores somando as plataformas. Crescimento que gerou monetização e parcerias comerciais.',
      },
    ],

    sectionLabels: {
      gallery: 'CONTEÚDO & CRIATIVOS',
      results: 'CRESCIMENTO · Analytics',
    },

    gallery: [
      '/assets/img/neg_3000_image-2-1.png',
      '/assets/img/neg_3001_image-4-1.jpeg',
      '/assets/img/neg_3002_image-4-2.jpeg',
      '/assets/img/neg_3003_image-5-1.jpeg',
      '/assets/img/neg_3004_image-5-2.jpeg',
      '/assets/img/neg_3005_image-5-3.jpeg',
    ],
  },
]
