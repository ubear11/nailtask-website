export interface Application {
  slug: string
  name: string
  shortDescription: string
  description: string
  image: string
  challenges: string[]
  solutions: string[]
  recommendedProducts: string[] // product slugs
}

const applications: Application[] = [
  {
    slug: 'construction-framing',
    name: 'Construction Framing',
    shortDescription: 'Structural framing solutions for residential and commercial wood-frame construction.',
    description: 'Wood-frame construction demands fastening tools that deliver consistent driving depth, withstand all-day production use, and meet structural code requirements. NailTask framing nailers are engineered for the rigors of professional framing — from single-family residential to multi-story commercial timber structures. Our full round head nailers comply with building code requirements, while our clipped head options maximize magazine capacity for high-production environments.',
    image: '/placeholder.png',
    challenges: [
      'Inconsistent nail depth affecting structural integrity',
      'Tool downtime from jams and mechanical failures',
      'Worker fatigue during long production days',
      'Building code compliance for fastener specifications',
    ],
    solutions: [
      'Precision depth-of-drive adjustment ensures code-compliant connections',
      'Tool-free jam release and hardened internal components minimize downtime',
      'Ergonomic lightweight designs with anti-vibration technology',
      'Full round head nail compatibility meets ICC-ES requirements',
    ],
    recommendedProducts: ['dcfn110-3490', 'dcwn95-finish', 'dcwn80-brad'],
  },
  {
    slug: 'concrete-fastening',
    name: 'Concrete Fastening',
    shortDescription: 'Direct fastening solutions for concrete, masonry, and steel substrates.',
    description: 'Concrete and steel fastening in commercial construction requires tools that deliver reliable penetration without pre-drilling. NailTask concrete nailers and powder-actuated tools are purpose-built for MEP installation, steel track attachment, electrical conduit mounting, and general concrete connections. Our gas-actuated and powder-actuated systems eliminate the need for rotary hammers and anchors in most light-to-medium duty applications.',
    image: '/placeholder.png',
    challenges: [
      'Pre-drilling adds significant labor time and cost',
      'Inconsistent penetration depth in varying concrete hardness',
      'Dust and debris management on occupied jobsites',
      'Worker training requirements for powder-actuated tools',
    ],
    solutions: [
      'Direct fastening eliminates pre-drilling — up to 5x faster installation',
      'Adjustable power settings for consistent depth across substrate hardness',
      'Gas-actuated tools produce minimal dust compared to drilling',
      'Intuitive operation with comprehensive safety training materials',
    ],
    recommendedProducts: ['dccn100x2', 'dccn90s2'],
  },
  {
    slug: 'roofing',
    name: 'Roofing',
    shortDescription: 'High-speed fastening systems for shingle, membrane, and metal roofing installations.',
    description: 'Roofing contractors work against weather windows and tight schedules. NailTask coil roofing nailers are designed for maximum speed and reliability on the roof — where tool downtime means lost revenue. High-capacity 120-nail magazines minimize reloads, while lightweight magnesium housings reduce fatigue during overhead work. Adjustable depth controls ensure proper shingle tab penetration without breakthrough.',
    image: '/placeholder.png',
    challenges: [
      'Time pressure from weather-dependent scheduling',
      'Frequent magazine reloads slow production pace',
      'Overhead work causes rapid worker fatigue',
      'Inconsistent nail depth damages shingles or misses decking',
    ],
    solutions: [
      '120-nail coil magazines for extended run time between reloads',
      'Sub-2.5 kg tool weight reduces overhead fatigue',
      'Shingle guide ensures consistent nail placement',
      'Micro-adjustable depth control prevents over/under driving',
    ],
    recommendedProducts: ['dcfn110-3490', 'dccn120ip'],
  },
  {
    slug: 'steel-decking',
    name: 'Steel Decking',
    shortDescription: 'Fastening solutions for steel deck attachment in commercial and industrial construction.',
    description: 'Steel deck attachment in commercial construction requires precise, high-strength fastening into structural steel. NailTask powder-actuated and gas-actuated tools deliver consistent pin penetration through corrugated steel decking into structural members. Our tools are engineered for the demanding cycle counts of commercial decking projects, with hardened pistons and precision-machined firing chambers.',
    image: '/placeholder.png',
    challenges: [
      'High-strength steel requires significant driving energy',
      'Consistency across thousands of connections per floor',
      'Noise and vibration in enclosed structures',
      'Tool wear from repetitive high-energy cycles',
    ],
    solutions: [
      'Optimized combustion chambers deliver consistent penetration energy',
      'Magazine-fed systems maintain pace across production runs',
      'Anti-vibration handle designs reduce operator strain',
      'Hardened steel pistons withstand 50,000+ cycle service life',
    ],
    recommendedProducts: ['dccn100x2', 'dccn90s2'],
  },
  {
    slug: 'wood-framing',
    name: 'Wood Framing & Sheathing',
    shortDescription: 'Complete fastening systems for wall framing, floor sheathing, and roof decking.',
    description: 'Wall framing, floor sheathing, and roof decking are the backbone of residential construction. NailTask provides a complete system of framing nailers, nails, and accessories optimized for production-speed framing. Whether you choose gas-actuated for portability or pneumatic for continuous heavy-duty use, our framing tools deliver the reliability that professional framers demand.',
    image: '/placeholder.png',
    challenges: [
      'Balancing speed with code-compliant connections',
      'Compressor setup time and hose management on framing sites',
      'Nail collation compatibility across brands',
      'Harsh outdoor conditions affecting tool performance',
    ],
    solutions: [
      'Gas-actuated options eliminate compressor dependency entirely',
      'Universal collation compatibility (21° and 34° options)',
      'All-weather seals and corrosion-resistant finishes',
      'Dual-mode triggers for both production and precision work',
    ],
    recommendedProducts: ['dcfn110-3490', 'dcwn95-finish', 'dcwn80-brad'],
  },
  {
    slug: 'industrial-assembly',
    name: 'Industrial Assembly',
    shortDescription: 'Fastening tools for pallet manufacturing, crate assembly, and industrial production lines.',
    description: 'Industrial assembly environments demand tools that run continuously at high cycle rates without overheating or loss of driving force. NailTask pneumatic nailers and staplers are engineered for factory production lines — from pallet manufacturing to furniture assembly to packaging operations. Our tools feature hardened internal components rated for 1,000,000+ cycle service life.',
    image: '/placeholder.png',
    challenges: [
      'Continuous high-cycle operation causes premature tool failure',
      'Inconsistent fastener placement affects product quality',
      'Tool weight and ergonomics affect operator productivity',
      'Maintenance and repair downtime impacts production schedules',
    ],
    solutions: [
      'Precision-machined cylinders rated for 1M+ cycle service life',
      'Contact-trip triggers ensure consistent sequential placement',
      'Lightweight aluminum bodies with rubber overmold grips',
      'Modular internal design for fast field-serviceable maintenance',
    ],
    recommendedProducts: ['dcwn80-brad', 'dcwn95-finish'],
  },
]

export function getApplicationBySlug(slug: string): Application | undefined {
  return applications.find((a) => a.slug === slug)
}

export default applications
