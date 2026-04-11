export interface SellingPoint {
  icon: string
  title: string
  description: string
}

export interface PackageOption {
  name: string
  description: string
  includes: string[]
  moq: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface Product {
  id: string
  slug: string
  name: string
  category: string
  categorySlug: string
  image: string
  description: string
  shortDescription: string
  features: string[]
  specifications: Record<string, string>
  sellingPoints: SellingPoint[]
  applicationScenarios: string[]
  packageOptions: PackageOption[]
  certifications: string[]
  faq: FAQ[]
}

export interface ProductCategory {
  slug: string
  name: string
  description: string
  image: string
}

export const categories: ProductCategory[] = [
  {
    slug: 'concrete-nailers',
    name: 'Concrete Nailers',
    description: '20V lithium-ion cordless concrete nail guns for driving fasteners into concrete and steel substrates with consistent penetration depth.',
    image: '/placeholder.png',
  },
  {
    slug: 'wood-nailers',
    name: 'Wood Nailers',
    description: '20V lithium-ion cordless nailers for framing, trim, and finish carpentry applications in residential and commercial construction.',
    image: '/placeholder.png',
  },
  {
    slug: 'insulation-fasteners',
    name: 'Insulation Fasteners',
    description: '20V lithium-ion cordless fastening tools designed specifically for insulation materials installation.',
    image: '/placeholder.png',
  },
  {
    slug: 'fencing-staplers',
    name: 'Fencing Staplers',
    description: '20V lithium-ion cordless fencing staplers for fast, reliable fencing and wire mesh installation.',
    image: '/placeholder.png',
  },
  {
    slug: 'accessories',
    name: 'Accessories',
    description: 'Batteries, chargers, nails, and accessories for the NailTask 20V cordless nailer platform.',
    image: '/placeholder.png',
  },
]

const products: Product[] = [
  // Concrete Nailers
  {
    id: 'DCCN100X2',
    slug: 'dccn100x2',
    name: 'Cordless Concrete Nail Gun',
    category: 'Concrete Nailer',
    categorySlug: 'concrete-nailers',
    image: '/placeholder.png',
    shortDescription: 'Cordless Concrete Nail Gun',
    description: 'The DCCN100X2 is our flagship 20V lithium-ion cordless concrete nail gun, delivering powerful and consistent driving force for concrete and steel fastening. No gas or compressed air required — fully cordless operation for maximum portability on the jobsite. Features a robust magnesium housing, tool-free depth adjustment, and high-capacity magazine.',
    features: [
      '20V Lithium-ion Battery System',
      'Powerful for concrete and steel',
      'No gas or compressed air required',
      'Tool-free depth adjustment',
      'High-capacity magazine',
      'Dry-fire lockout protection',
      'Integrated LED work light',
    ],
    specifications: {
      'Battery': '20V / 4.0Ah Li-ion',
      'Fastener Range': '15–72mm concrete pins',
      'Magazine Capacity': '40 pins',
      'Weight': '3.8 kg (with battery)',
      'Max Concrete Hardness': '50 MPa',
      'Power Settings': '5 adjustable levels',
      'Housing Material': 'Magnesium alloy',
      'Certifications': 'CE, RoHS',
    },
    sellingPoints: [
      { icon: 'zap', title: 'Fully Cordless Operation', description: '20V lithium-ion battery eliminates the need for gas fuel cells or compressed air — maximum portability on any jobsite.' },
      { icon: 'shield', title: 'Powerful Driving Force', description: 'Drives pins into concrete and steel substrates up to 50 MPa with consistent penetration depth.' },
      { icon: 'feather', title: 'Lightweight Design', description: 'Magnesium alloy housing keeps weight manageable for extended overhead and vertical work.' },
    ],
    applicationScenarios: [
      'MEP conduit and bracket mounting',
      'Steel decking attachment',
      'Concrete formwork connections',
      'Fire-stop installation',
      'Cable tray fastening',
      'HVAC duct strap mounting',
    ],
    packageOptions: [
      { name: 'Tool Only', description: 'DCCN100X2 nailer without battery.', includes: ['DCCN100X2 Nailer', 'Safety glasses', 'Cleaning kit', 'Carrying case'], moq: '50 units' },
      { name: 'Complete Kit', description: 'Full kit with battery and charger.', includes: ['DCCN100X2 Nailer', '2x 20V 4.0Ah Batteries', 'Fast charger', 'Safety glasses', 'Cleaning kit', 'Carrying case'], moq: '30 units' },
    ],
    certifications: ['CE Certified', 'RoHS Compliant', 'ISO 9001:2015', 'TUV Tested'],
    faq: [
      { question: 'What is the maximum concrete hardness this tool can handle?', answer: 'The DCCN100X2 is rated for concrete up to 50 MPa compressive strength.' },
      { question: 'How many shots per battery charge?', answer: 'Approximately 800–1,000 shots per charge depending on substrate hardness and pin length.' },
      { question: 'What is the minimum order quantity?', answer: 'MOQ is 50 units for Tool Only packages and 30 units for Complete Kits. OEM/ODM orders start at 200 units.' },
      { question: 'Can this tool fasten into structural steel?', answer: 'Yes, the DCCN100X2 can drive pins into mild steel up to 6mm thickness.' },
    ],
  },
  {
    id: 'DCCN90S2',
    slug: 'dccn90s2',
    name: 'Cordless Concrete Nail Gun (Compact)',
    category: 'Concrete Nailer',
    categorySlug: 'concrete-nailers',
    image: '/placeholder.png',
    shortDescription: 'Cordless Concrete Nail Gun (Compact)',
    description: 'The DCCN90S2 is a compact 20V lithium-ion cordless concrete nail gun designed for tight spaces and overhead work. Its lightweight body and ergonomic design make it easy to operate in confined areas while maintaining powerful driving force for concrete and steel fastening.',
    features: [
      'Compact design, easy to operate',
      'Lightweight body',
      'Ideal for tight spaces',
      '20V Li-ion battery powered',
      'Tool-free depth adjustment',
      'Anti-vibration handle',
    ],
    specifications: {
      'Battery': '20V / 2.0Ah Li-ion',
      'Fastener Range': '15–57mm concrete pins',
      'Magazine Capacity': '30 pins',
      'Weight': '2.9 kg (with battery)',
      'Max Concrete Hardness': '40 MPa',
      'Power Settings': '3 adjustable levels',
      'Housing Material': 'Reinforced polymer',
      'Certifications': 'CE, RoHS',
    },
    sellingPoints: [
      { icon: 'feather', title: 'Compact & Lightweight', description: 'At only 2.9 kg, the compact design reduces fatigue and fits easily into tight work areas.' },
      { icon: 'zap', title: 'Easy to Operate', description: 'Simple one-hand operation with intuitive controls for fast concrete and steel fastening.' },
      { icon: 'target', title: 'Tight Space Access', description: 'Compact nose design reaches areas that full-size concrete nailers cannot access.' },
    ],
    applicationScenarios: [
      'Overhead MEP installation',
      'Confined space fastening',
      'Light concrete fastening',
      'Electrical conduit mounting',
      'Small bracket installation',
      'Renovation and remodel projects',
    ],
    packageOptions: [
      { name: 'Tool Only', description: 'DCCN90S2 nailer without battery.', includes: ['DCCN90S2 Nailer', 'Safety glasses', 'Carrying case'], moq: '50 units' },
      { name: 'Complete Kit', description: 'Full kit with battery and charger.', includes: ['DCCN90S2 Nailer', '2x 20V 2.0Ah Batteries', 'Fast charger', 'Safety glasses', 'Carrying case'], moq: '30 units' },
    ],
    certifications: ['CE Certified', 'RoHS Compliant', 'ISO 9001:2015'],
    faq: [
      { question: 'How does this compare to the DCCN100X2?', answer: 'The DCCN90S2 is a compact version designed for tight spaces and lighter applications. For heavy-duty concrete work, the DCCN100X2 is recommended.' },
      { question: 'Is the battery interchangeable with other NailTask tools?', answer: 'Yes, all NailTask 20V batteries are cross-compatible across the entire cordless platform.' },
      { question: 'What is the minimum order quantity?', answer: 'MOQ is 50 units for Tool Only and 30 units for Complete Kits.' },
    ],
  },
  // Wood Nailers
  {
    id: 'DCFN110-3490',
    slug: 'dcfn110-3490',
    name: '34° Cordless Framing Nail Gun',
    category: 'Framing Nailer',
    categorySlug: 'wood-nailers',
    image: '/placeholder.png',
    shortDescription: '34° Cordless Framing Nail Gun',
    description: 'The DCFN110-3490 is a 20V lithium-ion cordless framing nail gun with 34° angled magazine for optimal framing work. High efficiency continuous nailing with adjustable depth control makes it ideal for residential and commercial wood framing, sheathing, and decking applications.',
    features: [
      '34° angle for framing work',
      'High efficiency continuous nailing',
      'Depth adjustment',
      '20V Li-ion battery powered',
      'Dual-mode trigger (sequential/bump)',
      'Anti-dry-fire mechanism',
      'Rafter hook and belt clip',
    ],
    specifications: {
      'Battery': '20V / 4.0Ah Li-ion',
      'Fastener Range': '50–90mm framing nails',
      'Nail Angle': '34°',
      'Magazine Capacity': '88 nails',
      'Weight': '3.5 kg (with battery)',
      'Shots Per Charge': '700',
      'Collation': 'Paper tape',
      'Certifications': 'CE',
    },
    sellingPoints: [
      { icon: 'target', title: '34° Angled Magazine', description: '34° angle provides optimal access for framing corners and tight joist-to-joist connections.' },
      { icon: 'zap', title: 'High Efficiency Nailing', description: 'Brushless motor delivers consistent driving power for continuous framing work throughout the day.' },
      { icon: 'settings', title: 'Adjustable Depth', description: 'Tool-free depth adjustment ensures proper nail depth across different lumber types and thicknesses.' },
    ],
    applicationScenarios: [
      'Residential wood-frame construction',
      'Commercial light-frame construction',
      'Sheathing and subflooring',
      'Deck framing',
      'Timber truss assembly',
    ],
    packageOptions: [
      { name: 'Tool Only', description: 'DCFN110-3490 nailer without battery.', includes: ['DCFN110-3490 Nailer', 'Rafter hook', 'Belt clip', 'Carrying case'], moq: '50 units' },
      { name: 'Complete Kit', description: 'Full kit with battery, charger, and nails.', includes: ['DCFN110-3490 Nailer', '2x 20V 4.0Ah Batteries', 'Fast charger', '2,000 framing nails (75mm)', 'Rafter hook', 'Belt clip', 'Carrying case'], moq: '30 units' },
    ],
    certifications: ['CE Certified', 'ISO 9001:2015'],
    faq: [
      { question: 'What nail types are compatible?', answer: 'The DCFN110-3490 accepts 34° paper tape clipped head nails from 50mm to 90mm.' },
      { question: 'How many shots per charge?', answer: 'Approximately 700 shots per charge with the 4.0Ah battery in standard framing conditions.' },
      { question: 'What is the minimum order quantity?', answer: 'MOQ is 50 units for Tool Only and 30 units for Complete Kits.' },
    ],
  },
  {
    id: 'DCWN80-Brad',
    slug: 'dcwn80-brad',
    name: '18G Cordless Brad Nailer',
    category: 'Brad Nailer',
    categorySlug: 'wood-nailers',
    image: '/placeholder.png',
    shortDescription: '18G Cordless Brad Nailer',
    description: 'The DCWN80-Brad is a 20V lithium-ion cordless 18-gauge brad nailer for trim, molding, and finish carpentry. Zero ramp-up time for instant firing, with no-mar tip protection and adjustable depth control for professional-quality finish work.',
    features: [
      '18-gauge brad nail compatibility',
      'No-mar tip included',
      'Tool-free depth adjustment',
      '20V Li-ion battery powered',
      '100-nail magazine capacity',
      'Lightweight design (2.2 kg)',
      '360° adjustable exhaust',
    ],
    specifications: {
      'Battery': '20V / 2.0Ah Li-ion',
      'Fastener Range': '15–50mm brad nails',
      'Gauge': '18',
      'Magazine Capacity': '100 nails',
      'Weight': '2.2 kg (with battery)',
      'Shots Per Charge': '1,000',
      'Certifications': 'CE',
    },
    sellingPoints: [
      { icon: 'feather', title: 'Lightweight 2.2 kg', description: 'One of the lightest cordless brad nailers — reduces hand fatigue during precision trim work.' },
      { icon: 'target', title: 'No-Mar Precision', description: 'Included no-mar tip protects finished surfaces during crown molding and cabinetry installation.' },
      { icon: 'zap', title: 'Instant Firing', description: 'Zero ramp-up time — fires instantly for fast, consistent finish work.' },
    ],
    applicationScenarios: [
      'Crown molding and baseboard installation',
      'Door and window casing',
      'Cabinetry and millwork',
      'Furniture assembly',
      'Picture frame manufacturing',
    ],
    packageOptions: [
      { name: 'Tool Only', description: 'DCWN80-Brad nailer without battery.', includes: ['DCWN80-Brad Nailer', 'No-mar tip', 'Carrying case'], moq: '100 units' },
      { name: 'Complete Kit', description: 'Full kit with battery and charger.', includes: ['DCWN80-Brad Nailer', '2x 20V 2.0Ah Batteries', 'Fast charger', 'No-mar tip set', 'Carrying case'], moq: '50 units' },
    ],
    certifications: ['CE Certified', 'ISO 9001:2015'],
    faq: [
      { question: 'What nail brands are compatible?', answer: 'The DCWN80-Brad accepts all standard 18-gauge brad nails from 15mm to 50mm.' },
      { question: 'Is this suitable for hardwood trim?', answer: 'Yes, the brushless motor delivers reliable power to drive brads into hardwoods including oak, maple, and cherry.' },
      { question: 'What is the minimum order quantity?', answer: 'MOQ is 100 units for Tool Only and 50 units for Complete Kits.' },
    ],
  },
  {
    id: 'DCWN95-Finish',
    slug: 'dcwn95-finish',
    name: '16G Cordless Finish Nailer',
    category: 'Finish Nailer',
    categorySlug: 'wood-nailers',
    image: '/placeholder.png',
    shortDescription: '16G Cordless Finish Nailer',
    description: 'The DCWN95-Finish is a 20V lithium-ion cordless 16-gauge finish nailer delivering professional-quality fastening for trim, cabinetry, and interior woodwork. Brushless motor technology ensures consistent drive power from first nail to last with up to 800 shots per charge.',
    features: [
      '16-gauge finish nail compatibility',
      'Brushless motor technology',
      'Up to 800 shots per charge',
      '20V Li-ion battery powered',
      'Tool-free depth adjustment',
      'Dry-fire lockout',
      'LED work light',
    ],
    specifications: {
      'Battery': '20V / 4.0Ah Li-ion',
      'Fastener Range': '32–64mm finish nails',
      'Gauge': '16',
      'Magazine Capacity': '110 nails',
      'Weight': '3.2 kg (with battery)',
      'Shots Per Charge': '800',
      'Motor Type': 'Brushless',
      'Certifications': 'CE, RoHS',
    },
    sellingPoints: [
      { icon: 'zap', title: 'Cordless Freedom', description: 'No hose, no compressor — instant mobility across the entire jobsite with 20V lithium-ion power.' },
      { icon: 'battery', title: '800 Shots Per Charge', description: 'High-capacity 4.0Ah battery delivers a full day of finish carpentry on a single charge.' },
      { icon: 'settings', title: 'Brushless Motor', description: 'Maintenance-free brushless motor provides consistent drive power and 2x longer motor life.' },
    ],
    applicationScenarios: [
      'Finish carpentry and trim work',
      'Cabinet and closet installation',
      'Baseboard and crown molding',
      'Interior door hanging',
      'Renovation and remodel projects',
    ],
    packageOptions: [
      { name: 'Tool Only', description: 'DCWN95-Finish nailer without battery.', includes: ['DCWN95-Finish Nailer', 'No-mar tip', 'Belt hook', 'Carrying case'], moq: '50 units' },
      { name: 'Complete Kit', description: 'Full kit with battery and charger.', includes: ['DCWN95-Finish Nailer', '2x 20V 4.0Ah Batteries', 'Fast charger', 'No-mar tip', 'Belt hook', 'Carrying case'], moq: '30 units' },
    ],
    certifications: ['CE Certified', 'RoHS Compliant', 'ISO 9001:2015', 'UL Listed'],
    faq: [
      { question: 'Is the battery compatible with other NailTask 20V tools?', answer: 'Yes, the 20V battery platform is fully cross-compatible across all NailTask cordless tools.' },
      { question: 'How long does the battery take to charge?', answer: 'The included fast charger delivers a full charge in 45 minutes.' },
      { question: 'What is the minimum order quantity?', answer: 'MOQ varies by package: 50 units (Tool Only) or 30 units (Complete Kit).' },
    ],
  },
  // Insulation Fasteners
  {
    id: 'DCCN120IP',
    slug: 'dccn120ip',
    name: 'Cordless Insulation Nailer',
    category: 'Insulation Nailer',
    categorySlug: 'insulation-fasteners',
    image: '/placeholder.png',
    shortDescription: 'Cordless Insulation Nailer',
    description: 'The DCCN120IP is a 20V lithium-ion cordless insulation nailer designed specifically for insulation materials. Fast fastening with improved efficiency and safe, reliable operation make it the ideal tool for insulation board, foam panel, and thermal wrap installation.',
    features: [
      'Designed for insulation materials',
      'Fast fastening, improved efficiency',
      'Safe and reliable operation',
      '20V Li-ion battery powered',
      'Adjustable depth control',
      'Large-head fastener compatible',
      'Lightweight ergonomic design',
    ],
    specifications: {
      'Battery': '20V / 4.0Ah Li-ion',
      'Fastener Range': '25–120mm insulation pins',
      'Pin Head Type': 'Large washer head',
      'Magazine Capacity': '30 pins',
      'Weight': '3.4 kg (with battery)',
      'Shots Per Charge': '600',
      'Housing Material': 'Reinforced polymer',
      'Certifications': 'CE, RoHS',
    },
    sellingPoints: [
      { icon: 'shield', title: 'Insulation Specialist', description: 'Purpose-built for insulation materials — large washer-head pins prevent pull-through in foam and fiber boards.' },
      { icon: 'zap', title: 'Fast & Efficient', description: '20V cordless operation eliminates hose management and enables fast insulation fastening across large areas.' },
      { icon: 'target', title: 'Safe & Reliable', description: 'Safety-interlock firing mechanism and dry-fire lockout ensure safe operation on insulation sites.' },
    ],
    applicationScenarios: [
      'Rigid insulation board installation',
      'Foam panel attachment to concrete',
      'Thermal wrap fastening',
      'EIFS system installation',
      'Roof insulation attachment',
      'Wall cavity insulation support',
    ],
    packageOptions: [
      { name: 'Tool Only', description: 'DCCN120IP nailer without battery.', includes: ['DCCN120IP Nailer', 'Safety glasses', 'Carrying case'], moq: '50 units' },
      { name: 'Insulation Kit', description: 'Complete kit for insulation projects.', includes: ['DCCN120IP Nailer', '2x 20V 4.0Ah Batteries', 'Fast charger', '500 insulation pins (assorted)', 'Safety glasses', 'Carrying case'], moq: '25 units' },
    ],
    certifications: ['CE Certified', 'RoHS Compliant', 'ISO 9001:2015', 'TUV Tested'],
    faq: [
      { question: 'What insulation materials is this tool designed for?', answer: 'The DCCN120IP works with rigid foam boards (EPS, XPS, polyiso), mineral wool, and other common insulation materials.' },
      { question: 'Can it fasten insulation to concrete?', answer: 'Yes, the DCCN120IP can drive insulation pins into concrete substrates up to 40 MPa to secure insulation boards directly.' },
      { question: 'What is the minimum order quantity?', answer: 'MOQ is 50 units for Tool Only and 25 units for Insulation Kits.' },
    ],
  },
  {
    id: 'DCIF150',
    slug: 'dcif150',
    name: 'Cordless Insulation Fastening System',
    category: 'Insulation Fastener',
    categorySlug: 'insulation-fasteners',
    image: '/placeholder.png',
    shortDescription: 'Cordless Insulation Fastening System',
    description: 'The DCIF150 is a heavy-duty 20V lithium-ion cordless insulation fastening system for large-scale commercial insulation projects. Extended pin capacity and high driving force make it ideal for thick insulation board and multi-layer insulation installations.',
    features: [
      'Heavy-duty insulation fastening',
      'Extended pin capacity (50 pins)',
      'High driving force for thick boards',
      '20V Li-ion battery powered',
      'Depth stop adjustment',
      'Ergonomic grip design',
    ],
    specifications: {
      'Battery': '20V / 5.0Ah Li-ion',
      'Fastener Range': '50–150mm insulation pins',
      'Pin Head Type': 'Large washer head',
      'Magazine Capacity': '50 pins',
      'Weight': '3.9 kg (with battery)',
      'Shots Per Charge': '500',
      'Housing Material': 'Magnesium alloy',
      'Certifications': 'CE, RoHS',
    },
    sellingPoints: [
      { icon: 'zap', title: 'Heavy-Duty Power', description: 'High driving force handles thick insulation boards up to 150mm for commercial and industrial projects.' },
      { icon: 'shield', title: '50-Pin Magazine', description: 'Extended magazine capacity reduces reloads and improves productivity on large insulation projects.' },
      { icon: 'settings', title: 'Precision Depth Stop', description: 'Adjustable depth stop ensures consistent pin depth without over-driving into insulation material.' },
    ],
    applicationScenarios: [
      'Commercial building insulation',
      'Industrial facility insulation',
      'Multi-layer insulation systems',
      'Cold storage facility construction',
      'Thick rigid board installation',
    ],
    packageOptions: [
      { name: 'Tool Only', description: 'DCIF150 system without battery.', includes: ['DCIF150 Fastener', 'Safety glasses', 'Carrying case'], moq: '50 units' },
      { name: 'Professional Kit', description: 'Complete kit for commercial insulation.', includes: ['DCIF150 Fastener', '2x 20V 5.0Ah Batteries', 'Fast charger', '1,000 insulation pins (assorted)', 'Safety glasses', 'Carrying case'], moq: '25 units' },
    ],
    certifications: ['CE Certified', 'RoHS Compliant', 'ISO 9001:2015'],
    faq: [
      { question: 'What is the maximum insulation thickness this can handle?', answer: 'The DCIF150 can fasten insulation boards up to 150mm thick using the appropriate pin length.' },
      { question: 'Is the battery interchangeable?', answer: 'Yes, all NailTask 20V batteries are cross-compatible. The 5.0Ah battery provides maximum runtime for large projects.' },
      { question: 'What is the minimum order quantity?', answer: 'MOQ is 50 units for Tool Only and 25 units for Professional Kits.' },
    ],
  },
  // Fencing Staplers
  {
    id: 'DCFS200',
    slug: 'dcfs200',
    name: 'Cordless Fencing Stapler',
    category: 'Fencing Stapler',
    categorySlug: 'fencing-staplers',
    image: '/placeholder.png',
    shortDescription: 'Cordless Fencing Stapler',
    description: 'The DCFS200 is a 20V lithium-ion cordless fencing stapler for fast, reliable fencing and wire mesh installation. Designed for agricultural fencing, garden fencing, and vineyard trellis work with a high-capacity staple magazine and ergonomic one-hand operation.',
    features: [
      'Designed for fencing work',
      'High-capacity staple magazine',
      'One-hand operation',
      '20V Li-ion battery powered',
      'Wire guide for accurate placement',
      'Durable all-weather housing',
    ],
    specifications: {
      'Battery': '20V / 4.0Ah Li-ion',
      'Staple Size': '25–50mm fencing staples',
      'Magazine Capacity': '100 staples',
      'Weight': '3.1 kg (with battery)',
      'Shots Per Charge': '900',
      'Wire Gauge Range': '8–16 gauge wire',
      'Housing Material': 'Reinforced polymer',
      'Certifications': 'CE',
    },
    sellingPoints: [
      { icon: 'zap', title: 'Fast Fencing', description: '20V cordless operation delivers rapid staple driving for quick fence line completion.' },
      { icon: 'target', title: 'Wire Guide System', description: 'Built-in wire guide ensures accurate staple placement around fence wire for secure hold.' },
      { icon: 'shield', title: 'All-Weather Durability', description: 'Reinforced housing and sealed internals withstand outdoor work conditions in all weather.' },
    ],
    applicationScenarios: [
      'Agricultural fencing',
      'Garden and property fencing',
      'Vineyard trellis installation',
      'Wire mesh attachment',
      'Livestock enclosure construction',
    ],
    packageOptions: [
      { name: 'Tool Only', description: 'DCFS200 stapler without battery.', includes: ['DCFS200 Stapler', 'Wire guide', 'Carrying case'], moq: '50 units' },
      { name: 'Fencing Kit', description: 'Complete kit for fencing projects.', includes: ['DCFS200 Stapler', '2x 20V 4.0Ah Batteries', 'Fast charger', '2,000 fencing staples', 'Wire guide', 'Carrying case'], moq: '30 units' },
    ],
    certifications: ['CE Certified', 'ISO 9001:2015'],
    faq: [
      { question: 'What wire gauges can this stapler handle?', answer: 'The DCFS200 accommodates fence wire from 8 to 16 gauge, covering most agricultural and garden fencing applications.' },
      { question: 'Can it be used in wet conditions?', answer: 'Yes, the sealed housing and weather-resistant design allow operation in rain and damp conditions.' },
      { question: 'What is the minimum order quantity?', answer: 'MOQ is 50 units for Tool Only and 30 units for Fencing Kits.' },
    ],
  },
  {
    id: 'DCFS180S',
    slug: 'dcfs180s',
    name: 'Cordless Fencing Stapler (Compact)',
    category: 'Fencing Stapler',
    categorySlug: 'fencing-staplers',
    image: '/placeholder.png',
    shortDescription: 'Cordless Fencing Stapler (Compact)',
    description: 'The DCFS180S is a compact 20V lithium-ion cordless fencing stapler for lighter fencing applications. Its smaller form factor makes it ideal for garden fencing, small enclosures, and repair work where full-size staplers are too bulky.',
    features: [
      'Compact and lightweight',
      'Ideal for garden fencing',
      'Quick staple loading',
      '20V Li-ion battery powered',
      'Anti-jam mechanism',
      'Comfortable grip design',
    ],
    specifications: {
      'Battery': '20V / 2.0Ah Li-ion',
      'Staple Size': '19–38mm fencing staples',
      'Magazine Capacity': '80 staples',
      'Weight': '2.4 kg (with battery)',
      'Shots Per Charge': '1,200',
      'Wire Gauge Range': '10–16 gauge wire',
      'Housing Material': 'Reinforced polymer',
      'Certifications': 'CE',
    },
    sellingPoints: [
      { icon: 'feather', title: 'Compact Design', description: 'Lightweight 2.4 kg body makes it easy to carry and use for extended garden fencing sessions.' },
      { icon: 'wrench', title: 'Anti-Jam Mechanism', description: 'Quick-release mechanism clears staple jams without tools for uninterrupted work.' },
      { icon: 'zap', title: '1,200 Shots Per Charge', description: 'Efficient motor design delivers outstanding battery life for small-to-medium fencing projects.' },
    ],
    applicationScenarios: [
      'Garden and decorative fencing',
      'Small animal enclosures',
      'Fence repair and maintenance',
      'Light wire mesh attachment',
      'Trellis and plant support installation',
    ],
    packageOptions: [
      { name: 'Tool Only', description: 'DCFS180S stapler without battery.', includes: ['DCFS180S Stapler', 'Carrying case'], moq: '100 units' },
      { name: 'Garden Kit', description: 'Complete kit for garden fencing.', includes: ['DCFS180S Stapler', '2x 20V 2.0Ah Batteries', 'Charger', '1,000 fencing staples', 'Carrying case'], moq: '50 units' },
    ],
    certifications: ['CE Certified', 'ISO 9001:2015'],
    faq: [
      { question: 'How does this compare to the DCFS200?', answer: 'The DCFS180S is a compact version for lighter fencing work. For heavy agricultural fencing, the DCFS200 is recommended.' },
      { question: 'What is the minimum order quantity?', answer: 'MOQ is 100 units for Tool Only and 50 units for Garden Kits.' },
    ],
  },
  // Accessories
  {
    id: 'DC-BAT20V',
    slug: 'dc-bat20v',
    name: '20V Li-ion Battery Pack',
    category: 'Accessory',
    categorySlug: 'accessories',
    image: '/placeholder.png',
    shortDescription: '20V 4.0Ah Li-ion Battery Pack',
    description: 'The DC-BAT20V is a 20V 4.0Ah lithium-ion battery pack compatible with all NailTask 20V cordless tools. Features battery level indicator, overcharge protection, and temperature management for extended battery life and safe operation.',
    features: [
      '20V / 4.0Ah capacity',
      'Compatible with all NailTask 20V tools',
      'Battery level indicator',
      'Overcharge protection',
      'Temperature management',
      'Fast charge capable (45 min)',
    ],
    specifications: {
      'Voltage': '20V',
      'Capacity': '4.0Ah',
      'Cell Type': 'Lithium-ion',
      'Charge Time': '45 minutes (fast charger)',
      'Weight': '0.6 kg',
      'Compatibility': 'All NailTask 20V tools',
      'Protection': 'Overcharge, over-discharge, temperature',
      'Certifications': 'CE, RoHS, UL',
    },
    sellingPoints: [
      { icon: 'battery', title: 'Universal 20V Platform', description: 'One battery fits all NailTask 20V tools — simplified inventory and maximum flexibility.' },
      { icon: 'shield', title: 'Smart Protection', description: 'Built-in overcharge, over-discharge, and temperature management extend battery lifespan.' },
      { icon: 'zap', title: '45-Min Fast Charge', description: 'Compatible with NailTask fast charger for rapid recharge between jobs.' },
    ],
    applicationScenarios: [
      'Spare battery for extended work sessions',
      'Fleet battery management',
      'Replacement for worn batteries',
      'Upgrade from 2.0Ah to 4.0Ah',
      'Distributor consumable inventory',
    ],
    packageOptions: [
      { name: 'Single Pack', description: 'Single 20V 4.0Ah battery.', includes: ['1x 20V 4.0Ah Battery'], moq: '100 units' },
      { name: '2-Pack', description: 'Two batteries for uninterrupted work.', includes: ['2x 20V 4.0Ah Batteries'], moq: '50 packs' },
      { name: 'Fleet Pack (10)', description: 'Bulk battery pack for contractors.', includes: ['10x 20V 4.0Ah Batteries', 'Carrying case'], moq: '20 packs' },
    ],
    certifications: ['CE Certified', 'RoHS Compliant', 'UL Listed'],
    faq: [
      { question: 'Is this compatible with all NailTask 20V tools?', answer: 'Yes, the DC-BAT20V is fully compatible with every NailTask 20V cordless tool.' },
      { question: 'What is the expected battery lifespan?', answer: 'The DC-BAT20V is rated for 1,000+ charge cycles with proper care. Battery level indicator helps monitor remaining capacity.' },
      { question: 'What is the minimum order quantity?', answer: 'MOQ is 100 units for single packs, 50 for 2-packs, or 20 for Fleet Packs.' },
    ],
  },
]

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug)
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return categories.find((c) => c.slug === slug)
}

export default products
