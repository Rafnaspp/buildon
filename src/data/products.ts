export const categories = [
  'Safety Products',
  'Fasteners',
  'Packing Materials',
  'Silicone & Sealants',
  'Abrasives',
  'Drill Bits & Router Bits',
  'Hand Tools',
  'Power Tools',
  'Lockings & Hinges'
]


export const products = [
  // Safety Products
  {
    slug: "safety-gloves",
    title: "Industrial Safety Gloves",
    category: "Safety Products",
    description:
      "Durable protective gloves designed for industrial work, construction, and heavy-duty handling.",

    image: "/images/products/safety/gloves.png"
  },

  {
    slug: "safety-shoes",
    title: "Steel Toe Safety Shoes",
    category: "Safety Products",
    description:
      "Heavy-duty safety footwear with steel toe protection for construction and industrial environments.",
    image: "/images/products/safety/shoes.png"
  },

  {
    slug: "safety-helmet",
    title: "Construction Safety Helmet",
    category: "Safety Products",
    description:
      "Protective safety helmet designed for construction sites and industrial environments.",
    image: "/images/products/safety/helmet.png"
  },

  {
    slug: "safety-goggles",
    title: "Industrial Safety Goggles",
    category: "Safety Products",
    description:
      "Protective eyewear designed to shield eyes from dust, chemicals, and debris.",
    image: "/images/products/safety/goggles.png"
  },

  {
  slug: "high-visibility-safety-vest",
  title: "High Visibility Reflective Safety Vest",
  category: "Safety Products",
  description:
    "Lightweight high-visibility safety vest with reflective strips for enhanced visibility in construction sites, road work, and industrial environments.",
  image: "/images/products/safety/vest.png"
},

{
  slug: "industrial-safety-coverall",
  title: "Industrial Protective Safety Coverall",
  category: "Safety Products",
  description:
    "Full body protective coverall designed to safeguard workers from dust, chemicals, and hazardous environments.",
  image: "/images/products/safety/coverall.png"
},

  {
    slug: "portable-eyewash-station",
    title: "Portable Eyewash Station",
    category: "Safety Products",
    description: "Portable green eyewash station with carrying handle, designed for emergency eye irrigation. Provides immediate first aid for eye contamination in workplaces where plumbed eyewash stations are unavailable.",
    image: "/images/products/safety/eye-washer.png"
  },
  {
    slug: "wall-mounted-eyewash-bowl",
    title: "Wall-Mounted Eyewash Bowl",
    category: "Safety Products",
    description: "Stainless steel wall-bracket eyewash bowl for fixed installation. Delivers a gentle, controlled flow of water to irrigate both eyes simultaneously in emergency situations.",
    image: "/images/products/safety/wall-eye-washer.png"
  },
  {
    slug: "foam-ear-plugs",
    title: "Foam Ear Plugs",
    category: "Safety Products",
    description: "Soft PU foam disposable ear plugs offering high noise reduction for hearing protection in industrial environments. Comfortable, single-use design suitable for extended wear.",
    image: "/images/products/safety/ear-plug.png"
  },
  {
    slug: "ear-muff-hearing-protector",
    title: "Ear Muff Hearing Protector",
    category: "Safety Products",
    description: "Over-ear hearing protection ear muffs with adjustable headband and cushioned ear cups. Provides high-level noise attenuation for use in loud industrial, construction, or manufacturing environments.",
    image: "/images/products/safety/earmuffs.png"
  },
  {
    slug: "half-face-respirator-mask",
    title: "Half-Face Respirator Mask",
    category: "Safety Products",
    description: "Dual-cartridge half-face respirator providing protection against gases, vapours, and particulates. Features replaceable filters and adjustable head straps for a secure seal.",
    image: "/images/products/safety/half-face-mask.png"
  },
  {
    slug: "ffp2-dust-respirator",
    title: "FFP2 Dust Respirator",
    category: "Safety Products",
    description: "Cup-shaped FFP2 valved respirator mask offering protection against fine dust, fumes, and airborne particles. Ergonomic design with adjustable nose clip for a comfortable, secure fit.",
    image: "/images/products/safety/n-95.png"
  },
  {
    slug: "disposable-surgical-face-mask",
    title: "Disposable Surgical Face Mask",
    category: "Safety Products",
    description: "3-ply disposable blue surgical face masks providing a barrier against droplets, dust, and contaminants. Lightweight and breathable, suitable for medical, industrial, and general use.",
    image: "/images/products/safety/surgical-mask.png"
  },
  {
    slug: "emergency-rescue-stretcher",
    title: "Emergency Rescue Stretcher",
    category: "Safety Products",
    description: "Orange foldable rescue stretcher designed for emergency patient transport. Lightweight, durable construction with carrying handles, suitable for confined spaces and difficult-to-access areas.",
    image: "/images/products/safety/rescue-stretcher.png"
  },
  {
    slug: "full-body-safety-harness",
    title: "Full Body Safety Harness",
    category: "Safety Products",
    description: "Full body fall arrest safety harness with adjustable straps, dorsal D-ring, and snap hooks. Meets international safety standards for working at height in construction and industrial settings.",
    image: "/images/products/safety/safety-harness.png"
  },
  {
    slug: "safety-harness-with-lanyard",
    title: "Safety Harness with Double Lanyard",
    category: "Safety Products",
    description: "Full body harness kit complete with double-leg energy-absorbing lanyard and snap hooks. Provides dual anchor point protection for continuous fall protection while working at height.",
    image: "/images/products/safety/harness-red.png"
  },
  {
    slug: "self-retracting-lifeline",
    title: "Self-Retracting Lifeline (SRL)",
    category: "Safety Products",
    description: "Compact self-retracting lifeline with automatic locking mechanism for fall arrest. Reduces free-fall distance and arresting forces, ideal for overhead anchorage in construction and maintenance work.",
    image: "/images/products/safety/lifeline.png"
  },
  {
    slug: "hazard-warning-tape",
    title: "Workland Hazard Warning Tape",
    category: "Safety Products",
    description: "Black and yellow striped barricade warning tape for marking hazardous areas, construction zones, and restricted access areas. Highly visible, tear-resistant, and suitable for indoor and outdoor use.",
    image: "/images/products/safety/warning-tape.png"
  },
  {
    slug: "traffic-safety-cone",
    title: "Traffic Safety Cone",
    category: "Safety Products",
    description: "High-visibility orange traffic cone with reflective band for road and worksite safety. Durable rubber base for stability, used to redirect traffic and demarcate hazardous zones.",
    image: "/images/products/safety/traffic-cone.png"
  },
  {
    slug: "safety-water-canteen",
    title: "Safety Water Canteen",
    category: "Safety Products",
    description: "Heavy-duty plastic safety water canteen with shoulder strap, available in orange and green. Designed for storing and transporting clean water or emergency eye/skin wash fluid on job sites.",
    image: "/images/products/safety/water-canteen.png"
  },
  {
    slug: "chemical-spill-kit",
    title: "Chemical Spill Kit (VenPlex)",
    category: "Safety Products",
    description: "Comprehensive chemical spill response kit in a high-visibility yellow bag. Includes absorbent pads, nitrile gloves, and containment materials for safe cleanup of hazardous chemical spills.",
    image: "/images/products/safety/clean-kit.png"
  },
  {
    slug: "absorbent-roll-white",
    title: "White Absorbent Roll",
    category: "Safety Products",
    description: "High-capacity white absorbent roll for soaking up oils, coolants, and general workplace spills. Tear-off sheet design for flexible use across various spill sizes and surfaces.",
    image: "/images/products/safety/roller-white.png"
  },
  {
    slug: "absorbent-roll-brown",
    title: "Brown Absorbent/Burlap Roll",
    category: "Safety Products",
    description: "Natural fibre absorbent roll for controlling and containing liquid spills in industrial environments. Versatile and eco-friendly, suitable for use around machinery, drains, and spill-prone areas.",
    image: "/images/products/safety/roller-brown.png"
  },
  {
    slug: "full-face-respirator",
    title: "Full Face Respirator",
    category: "Safety Products",
    description: "Full face gas mask respirator with wide-vision polycarbonate lens and twin filter ports. Provides complete facial and respiratory protection against toxic gases, chemical vapours, and fine particulates.",
    image: "/images/products/safety/mask.png"
  },
  {
    slug: "yellow-plastic-bucket",
    title: "Yellow Plastic Bucket",
    category: "Safety Products",
    description: "Heavy-duty yellow plastic construction bucket available in large and small sizes. Used for water, waste collection, mixing, and general material handling on construction and industrial sites.",
    image: "/images/products/safety/safety-bucket.png"
  },
  {
    slug: "platform-trolley",
    title: "Foldable Platform Trolley",
    category: "Safety Products",
    description: "Heavy-duty foldable platform trolley with ergonomic handle and swivel wheels. Designed for transporting heavy loads of equipment and materials safely around warehouses and work sites.",
    image: "/images/products/safety/trolley.png"
  },
  {
    slug: "manual-pallet-jack",
    title: "Manual Pallet Jack / Hand Truck",
    category: "Safety Products",
    description: "Orange hydraulic manual pallet jack for lifting and moving palletised loads. Features twin forks, a pump handle, and smooth-rolling wheels for efficient material handling in warehouses and loading bays.",
    image: "/images/products/safety/truck.png"
  },
// Fasteners
//============================================Bolts========================================
  {
    slug: "carriage-bolt",
    title: "Carriage Bolt",
    category: "Fasteners",
    description: "Carriage bolt with a smooth domed head and square neck to prevent rotation when tightening. Commonly used in wood and metal connections, decking, and furniture assembly.",
    image: "/images/products/bolts/11.png"
  },
  {
    slug: "dog-bolt",
    title: "DOG Bolt",
    category: "Fasteners",
    description: "DOG bolt with a round head and smooth shank, designed for use in formwork and scaffolding systems. Provides reliable clamping in temporary structural connections.",
    image: "/images/products/bolts/6.png"
  },
  {
    slug: "roofing-bolt",
    title: "Roofing Bolt",
    category: "Fasteners",
    description: "Roofing bolt with a large flat head and square nut, used to fasten metal roofing sheets and cladding panels. Provides a weatherproof, secure connection against roofing substrates.",
    image: "/images/products/bolts/10.png"
  },
  {
    slug: "gi-flant-bolt",
    title: "GI Flant Bolt",
    category: "Fasteners",
    description: "Galvanised iron flange bolt with a serrated flange beneath the hex head for enhanced grip and vibration resistance. Ideal for automotive, machinery, and structural applications.",
    image: "/images/products/bolts/8.png"
  },
  {
    slug: "t-bolt-gi",
    title: "T Bolt GI",
    category: "Fasteners",
    description: "Galvanised T-shaped bolt designed for use in channel and track systems. Slides into T-slots to allow flexible positioning and secure clamping in aluminium profiles and strut channels.",
    image: "/images/products/bolts/7.png"
  },
  {
    slug: "lifting-eye-bolt",
    title: "Lifting Eye Bolt",
    category: "Fasteners",
    description: "Forged steel eye bolt with a threaded shank for lifting and rigging applications. Designed to accept hooks, chains, and slings for safe vertical and angular load lifting.",
    image: "/images/products/bolts/1.png"
  },
  {
    slug: "gi-hex-bolt",
    title: "GI HEX Bolt",
    category: "Fasteners",
    description: "Galvanised iron hexagon head bolt for general structural and construction fastening. Corrosion-resistant zinc coating ensures durability in outdoor and high-moisture environments.",
    image: "/images/products/bolts/5.png"
  },
  {
    slug: "allen-bolt",
    title: "Allen Bolt",
    category: "Fasteners",
    description: "Hex socket cap head bolt (Allen bolt) tightened with an Allen/hex key. Used in machinery, equipment assembly, and applications requiring a flush or recessed fastener.",
    image: "/images/products/bolts/4.png"
  },
  {
    slug: "button-allen-bolt",
    title: "Button Allen Bolt",
    category: "Fasteners",
    description: "Socket button head bolt with a low-profile dome head and internal hex drive. Provides a smooth, rounded finish ideal for panels, guards, and applications where a low snag profile is required.",
    image: "/images/products/bolts/3.png"
  },
  {
    slug: "csk-allen-bolt",
    title: "CSK Allen Bolt",
    category: "Fasteners",
    description: "Countersunk socket head (CSK) Allen bolt designed to sit flush with the surface when installed. Used in precision engineering, metalwork, and applications requiring a clean flat finish.",
    image: "/images/products/bolts/2.png"
  },

  // ==================== WASHERS ====================
  {
    slug: "flat-washer",
    title: "Flat Washer",
    category: "Fasteners",
    description: "Standard flat washer used to distribute load under bolt heads and nuts, protecting surfaces from damage. Available in various sizes to suit different bolt diameters.",
    image: "/images/products/washers/61.png"
  },
  {
    slug: "big-od-flat-washer",
    title: "Big OD Flat Washer",
    category: "Fasteners",
    description: "Large outer diameter flat washer for distributing load over a wider area, ideal for use with oversized holes, soft materials, or where extra surface protection is required.",
    image: "/images/products/washers/4.png"
  },
  {
    slug: "spring-washer",
    title: "Spring Washer",
    category: "Fasteners",
    description: "Split ring spring washer that provides a locking action by exerting spring pressure against the fastener. Prevents loosening due to vibration in mechanical and structural assemblies.",
    image: "/images/products/washers/71.png"
  },
  {
    slug: "1-tab-washer",
    title: "1 Tab Washer",
    category: "Fasteners",
    description: "Single-tab locking washer with one bent tab to lock against a flat surface or into a keyway, preventing nut rotation. Used in machinery and automotive applications.",
    image: "/images/products/washers/72.png"
  },
  {
    slug: "2-tab-washer",
    title: "2 Tab Washer",
    category: "Fasteners",
    description: "Double-tab locking washer with two tabs for positive locking of fasteners. Provides enhanced security against loosening in high-vibration environments.",
    image: "/images/products/washers/73.png"
  },
  {
    slug: "external-teeth-lock-washer",
    title: "External Teeth Lock Washer",
    category: "Fasteners",
    description: "Star-shaped lock washer with external serrated teeth that bite into the mating surface and fastener to resist rotation and prevent loosening under vibration.",
    image: "/images/products/washers/2.png"
  },
  {
    slug: "internal-teeth-lock-washer",
    title: "Internal Teeth Lock Washer",
    category: "Fasteners",
    description: "Lock washer with internal serrated teeth for secure fastening without marring the outer surface. Ideal for small fasteners and electronics where a clean exterior appearance is needed.",
    image: "/images/products/washers/1.png"
  },
  {
    slug: "serrated-lock-washer-internal-teeth",
    title: "Serrated Lock Washer Internal Teeth",
    category: "Fasteners",
    description: "Serrated lock washer with internal teeth providing a strong grip on the bolt shank to prevent loosening. Suitable for compact assemblies requiring reliable vibration resistance.",
    image: "/images/products/washers/73.png"
  },
  {
    slug: "serrated-lock-washer-external-teeth",
    title: "Serrated Lock Washer External Teeth",
    category: "Fasteners",
    description: "Serrated lock washer with external teeth that grip into the bearing surface and underside of the bolt head for maximum anti-rotation performance in demanding applications.",
    image: "/images/products/washers/74.png"
  },
  {
    slug: "square-washer",
    title: "Square Washer",
    category: "Fasteners",
    description: "Square flat washer offering a larger bearing area than standard round washers. Used in timber construction, channel sections, and applications where square holes or wider load distribution is needed.",
    image: "/images/products/washers/52.png"
  },

  // ==================== SCREWS ====================
  {
    slug: "hex-head-self-drilling-screw",
    title: "Hex Head Self Drilling Screw",
    category: "Fasteners",
    description: "Hex washer head self-drilling screw with a drill-point tip that eliminates the need for pre-drilling. Widely used for fastening metal cladding, roofing sheets, and steel structures.",
    image: "/images/products/screws/1.png"
  },
  {
    slug: "csk-head-self-drilling-screw",
    title: "CSK Head Self Drilling Screw",
    category: "Fasteners",
    description: "Countersunk head self-drilling screw that drills its own pilot hole and sits flush with the surface upon installation. Ideal for metalwork and thin sheet applications.",
    image: "/images/products/screws/2.png"
  },
  {
    slug: "pan-head-self-drilling-screw",
    title: "Pan Head Self Drilling Screw",
    category: "Fasteners",
    description: "Pan head self-drilling screw with a flat-topped dome head and Phillips drive. The drill-point tip enables fast installation into metal without pre-drilling.",
    image: "/images/products/screws/3.png"
  },
  {
    slug: "wafer-head-self-drilling-screw",
    title: "Wafer Head Self Drilling Screw",
    category: "Fasteners",
    description: "Low-profile wafer head self-drilling screw designed for fastening thin sheet metal and light steel framing. The wide head provides good bearing surface without requiring a washer.",
    image: "/images/products/screws/4.png"
  },
  {
    slug: "pan-head-self-tapping-screw",
    title: "Pan Head Self Tapping Screw",
    category: "Fasteners",
    description: "Pan head self-tapping screw that cuts its own thread into pre-drilled holes in metal, plastic, or wood. Provides strong, reliable fastening in sheet metal and electrical enclosures.",
    image: "/images/products/screws/5.png"
  },
  {
    slug: "hex-washer-head-self-tapping-screw",
    title: "Hex Washer Head Self Tapping Screw",
    category: "Fasteners",
    description: "Hex washer head self-tapping screw with an integrated washer for improved load distribution. Taps its own thread into metal or plastic substrates for secure fastening.",
    image: "/images/products/screws/6.png"
  },
  {
    slug: "hex-head-self-tapping-screw",
    title: "Hex Head Self Tapping Screw",
    category: "Fasteners",
    description: "Hexagon head self-tapping screw driven with a wrench or socket for high-torque applications. Cuts its own thread in pre-drilled metal, wood, or plastic.",
    image: "/images/products/screws/7.png"
  },
  {
    slug: "csk-head-self-tapping-screw",
    title: "CSK Head Self Tapping Screw",
    category: "Fasteners",
    description: "Countersunk head self-tapping screw that forms its own thread while sitting flush with the surface. Suitable for sheet metal, plastic panels, and light fabrication work.",
    image: "/images/products/screws/8.png"
  },
  {
    slug: "oval-head-self-tapping-screw",
    title: "Oval Head Self Tapping Screw",
    category: "Fasteners",
    description: "Oval (raised countersunk) head self-tapping screw combining a decorative finish with a partially recessed head. Used in decorative panels and trim where a neat appearance is required.",
    image: "/images/products/screws/9.png"
  },
  {
    slug: "cheese-head-machine-screw",
    title: "Cheese Head Machine Screw",
    category: "Fasteners",
    description: "Cheese head machine screw with a cylindrical head and slotted or Phillips drive. Provides a deep drive recess for high torque applications in electrical equipment and precision assemblies.",
    image: "/images/products/screws/10.png"
  },
  {
    slug: "oval-head-machine-screw",
    title: "Oval Head Machine Screw",
    category: "Fasteners",
    description: "Oval head machine screw with a decorative raised countersunk profile. Used in finished panels, switchgear, and applications where aesthetics and a semi-flush head are important.",
    image: "/images/products/screws/11.png"
  },
  {
    slug: "pan-head-machine-screw",
    title: "Pan Head Machine Screw",
    category: "Fasteners",
    description: "Pan head machine screw with a flat-topped rounded head and Phillips or slotted drive. A versatile general-purpose fastener for metal, plastic, and electrical enclosure assembly.",
    image: "/images/products/screws/12.png"
  },
  {
    slug: "round-head-machine-screw",
    title: "Round Head Machine Screw",
    category: "Fasteners",
    description: "Round dome head machine screw providing a classic, high-profile head with a large bearing surface. Used in general machinery, brackets, and panel assembly.",
    image: "/images/products/screws/13.png"
  },
  {
    slug: "csk-head-machine-screw",
    title: "CSK Head Machine Screw",
    category: "Fasteners",
    description: "Countersunk flat head machine screw that sits completely flush when installed in a countersunk hole. Ideal for hinges, brackets, and any application requiring a smooth surface.",
    image: "/images/products/screws/14.png"
  },
  {
    slug: "csk-head-wood-screw",
    title: "CSK Head Wood Screw",
    category: "Fasteners",
    description: "Countersunk wood screw with a sharp tapered point and coarse thread for fast, secure fastening into timber. The CSK head sits flush with the wood surface for a clean finish.",
    image: "/images/products/screws/15.png"
  },

  // ==================== RODS ====================
  {
    slug: "threaded-rod",
    title: "Threaded Rod",
    category: "Fasteners",
    description: "Full-length threaded rod (stud rod) used for suspension, anchoring, and through-bolting applications. Available in various diameters and lengths, compatible with standard nuts and washers.",
    image: "/images/products/rods/1.png"
  },
  {
    slug: "round-bar",
    title: "Round Bar",
    category: "Fasteners",
    description: "Solid steel round bar used as a raw material for fabrication, shafts, pins, and structural supports. Available in mild steel, stainless steel, and other grades.",
    image: "/images/products/rods/2.png"
  },
  {
    slug: "engineering-stud",
    title: "Engineering Stud",
    category: "Fasteners",
    description: "Double-ended threaded engineering stud with threads on both ends and a plain shank in the middle. Used for permanent installation into tapped holes with a nut applied on the exposed end.",
    image: "/images/products/rods/3.png"
  },
  {
    slug: "square-bar",
    title: "Square Bar",
    category: "Fasteners",
    description: "Solid steel square bar used in fabrication, toolmaking, and structural applications. The square profile provides easy gripping and machining for custom fastener and engineering components.",
    image: "/images/products/rods/4.png"
  },
  {
    slug: "rectangle-bar",
    title: "Rectangle Bar",
    category: "Fasteners",
    description: "Flat rectangular steel bar used in construction, brackets, supports, and custom fabrication. Provides high strength with a broad flat profile for welding and bolted connections.",
    image: "/images/products/rods/5.png"
  },

  // ==================== RIVETS, PINS & INSERTS ====================
  {
    slug: "cotter-split-pin",
    title: "Cotter (Split) Pin",
    category: "Fasteners",
    description: "Split cotter pin inserted through a bolt or shaft hole and bent to lock components in position. Used to retain castle nuts, clevis pins, and axle assemblies against loosening.",
    image: "/images/products/pins/1.png"
  },
  {
    slug: "spring-dowel-pin",
    title: "Spring Dowel Pin",
    category: "Fasteners",
    description: "Slotted spring (roll) pin that compresses during installation to grip the hole walls. Provides self-retaining alignment and fastening in shafts, gears, and machine components.",
    image: "/images/products/pins/2.png"
  },
  {
    slug: "blind-rivet",
    title: "Blind Rivet",
    category: "Fasteners",
    description: "Pop rivet for one-sided fastening where access to the reverse side is restricted. The mandrel pulls through to expand the rivet body, creating a secure joint in sheet metal, plastic, and composites.",
    image: "/images/products/pins/3.png"
  },
  {
    slug: "straight-pin",
    title: "Straight Pin",
    category: "Fasteners",
    description: "Solid straight dowel pin for precise alignment and location of machine parts. Ground to tight tolerances for interference or clearance fits in drill-reamed holes.",
    image: "/images/products/pins/4.png"
  },
  {
    slug: "anvils-couper-bit",
    title: "Anvils Couper Bit",
    category: "Fasteners",
    description: "Anchor coupling bit (Anvil couper) used with hammer drills for setting and expanding anchor bolts into concrete and masonry. Ensures accurate and efficient anchor installation.",
    image: "/images/products/pins/5.png"
  },
  {
    slug: "stainless-steel-tam",
    title: "Stainless Steel Tam",
    category: "Fasteners",
    description: "Stainless steel anchor tam (tamper/plug) for securing fixings into masonry and concrete. Corrosion-resistant stainless construction ensures durability in harsh and wet environments.",
    image: "/images/products/pins/6.png"
  },
  {
    slug: "drop-in-anchor",
    title: "Drop In Anchor",
    category: "Fasteners",
    description: "Internal thread drop-in anchor for flush mounting in concrete. Installed into a pre-drilled hole and expanded with a setting tool to accept a machine bolt for heavy-duty attachments.",
    image: "/images/products/pins/7.png"
  },
  {
    slug: "r-pin",
    title: "R Pin",
    category: "Fasteners",
    description: "R-clip (hairpin cotter) used to retain clevis and hitch pins in place. The spring-loaded R shape provides quick, tool-free installation and removal in agricultural and trailer hitching applications.",
    image: "/images/products/pins/8.png"
  },
  {
    slug: "retaining-ring-internal-clip",
    title: "Retaining Ring Internal Clip",
    category: "Fasteners",
    description: "Internal circlip (snap ring) designed to fit into a bore or housing groove to retain shaft components axially. Installed with circlip pliers for secure assembly of bearings and pulleys.",
    image: "/images/products/pins/9.png"
  },
  {
    slug: "retaining-ring-external-clip",
    title: "Retaining Ring External Clip",
    category: "Fasteners",
    description: "External circlip (snap ring) fitting into a groove on a shaft to prevent axial movement of mounted components. Widely used in gearboxes, motors, and hydraulic cylinders.",
    image: "/images/products/pins/10.png"
  },

  // ==================== HOOKS & EYE HOOKS ====================
  {
    slug: "d-shackle",
    title: "D Shackle",
    category: "Fasteners",
    description: "Forged steel D-shackle (bow shackle) with a screw pin for connecting chains, ropes, and rigging hardware. Rated for specific working load limits in lifting and towing applications.",
    image: "/images/products/hooks/1.png"
  },
  {
    slug: "turnbuckle-hook-and-eye",
    title: "Turnbuckle Hook & Eye",
    category: "Fasteners",
    description: "Adjustable turnbuckle with hook and eye ends for tensioning wire ropes, cables, and tie rods. Rotating the barrel increases or decreases tension in bracing and rigging systems.",
    image: "/images/products/hooks/2.png"
  },
  {
    slug: "snap-hook",
    title: "Snap Hook",
    category: "Fasteners",
    description: "Spring-loaded snap hook (carabiner) for quick attachment and detachment in rigging, lanyards, and safety lines. Provides fast, secure connection to rings, chains, and anchor points.",
    image: "/images/products/hooks/3.png"
  },
  {
    slug: "wire-rope-clip",
    title: "Wire Rope Clip",
    category: "Fasteners",
    description: "U-bolt wire rope clip for forming eyes and terminating wire rope ends. The U-bolt and saddle clamp the rope permanently, used in guy wires, crane rigging, and marine applications.",
    image: "/images/products/hooks/4.png"
  },
  {
    slug: "u-bolt",
    title: "U Bolt",
    category: "Fasteners",
    description: "U-shaped bolt with threaded ends for clamping pipes, tubes, and round sections to a flat surface. Used in pipe supports, vehicle exhaust clamps, and marine and structural applications.",
    image: "/images/products/hooks/5.png"
  },

  // ==================== NUTS ====================
  {
    slug: "eye-nut",
    title: "Eye Nut",
    category: "Fasteners",
    description: "Forged steel eye nut with an internal thread for accepting a bolt and an integral ring for attaching hooks, chains, or lifting slings. Used in overhead lifting and rigging setups.",
    image: "/images/products/nuts/1.png"
  },
  {
    slug: "hexagon-weld-nut",
    title: "Hexagon Weld Nut",
    category: "Fasteners",
    description: "Hexagon weld nut designed to be permanently welded to a metal surface, providing a fixed threaded anchor point. Used in automotive, fabrication, and sheet metal assembly.",
    image: "/images/products/nuts/2.png"
  },
  {
    slug: "hexagon-nut",
    title: "Hexagon Nut",
    category: "Fasteners",
    description: "Standard hexagon nut used with bolts, screws, and threaded rods across all industries. Available in various grades and coatings for general structural and mechanical fastening.",
    image: "/images/products/nuts/3.png"
  },
  {
    slug: "self-locking-nut",
    title: "Self Locking Nut",
    category: "Fasteners",
    description: "Nylon insert locking nut (Nyloc) with a nylon collar that grips the bolt thread to prevent loosening under vibration. Suitable for one-time or low-cycle reuse applications.",
    image: "/images/products/nuts/4.png"
  },
  {
    slug: "pal-nut",
    title: "Pal Nut",
    category: "Fasteners",
    description: "Thin stamped steel pal (prevailing torque) nut used as a secondary locking nut over a standard hex nut. Provides a cost-effective vibration-resistant locking solution.",
    image: "/images/products/nuts/5.png"
  },
  {
    slug: "cap-nut",
    title: "Cap Nut",
    category: "Fasteners",
    description: "Domed acorn cap nut that covers and protects exposed bolt threads from corrosion and contamination. Provides a safe, finished appearance in furniture, automotive, and decorative applications.",
    image: "/images/products/nuts/6.png"
  },
  {
    slug: "hexagon-coupling-nut",
    title: "Hexagon Coupling Nut",
    category: "Fasteners",
    description: "Long hexagon coupling nut for joining two threaded rods or extending bolt lengths. Used in suspended ceilings, threaded rod assemblies, and structural extensions.",
    image: "/images/products/nuts/7.png"
  },
  {
    slug: "castle-nut",
    title: "Castle Nut (Castls Nut)",
    category: "Fasteners",
    description: "Castellated (castle) nut with slots cut into the top to accept a cotter pin for positive locking. Used on axles, steering components, and critical assemblies requiring tamper-proof retention.",
    image: "/images/products/nuts/8.png"
  },
  {
    slug: "square-nut",
    title: "Square Nut",
    category: "Fasteners",
    description: "Four-sided square nut providing a larger bearing surface and greater resistance to rotation in slots and channels. Commonly used with T-bolts in strut channels and aluminium profiles.",
    image: "/images/products/nuts/9.png"
  },
  {
    slug: "hexagon-thin-nut",
    title: "Hexagon Thin Nut",
    category: "Fasteners",
    description: "Thin (half) hexagon nut with reduced height used as a jam nut to lock a standard nut in position. Also used in low-clearance applications where a full nut will not fit.",
    image: "/images/products/nuts/10.png"
  },
  {
    slug: "flange-nut-serrated",
    title: "Flange Nut Serrated",
    category: "Fasteners",
    description: "Hexagon flange nut with a serrated bearing flange that bites into the mating surface for vibration-resistant locking. Eliminates the need for a separate washer in many applications.",
    image: "/images/products/nuts/11.png"
  },
  {
    slug: "wing-nut",
    title: "Wing Nut",
    category: "Fasteners",
    description: "Wing nut with two large flat wings for hand-tightening without tools. Ideal for applications requiring frequent assembly and disassembly such as covers, guards, and equipment panels.",
    image: "/images/products/nuts/12.png"
  },
  {
    slug: "square-weld-nut",
    title: "Square Weld Nut",
    category: "Fasteners",
    description: "Square nut designed for welding to metal surfaces, providing a permanent threaded anchor with four-sided alignment. Used in automotive bodywork, enclosures, and heavy fabrication.",
    image: "/images/products/nuts/13.png"
  },
  {
    slug: "spring-nut",
    title: "Spring Nut",
    category: "Fasteners",
    description: "Channel (spring) nut that clips into strut channels and other profiles, allowing quick tool-free positioning before tightening. Used extensively in cable management and mechanical installations.",
    image: "/images/products/nuts/14.png"
  },
  {
    slug: "rivet-nut",
    title: "Rivet Nut",
    category: "Fasteners",
    description: "Threaded insert rivet nut (nutsert) installed from one side into a pre-drilled hole by blind riveting. Creates a strong internal thread in thin sheet metal, plastic, or composite panels.",
    image: "/images/products/nuts/15.png"
  },

  // ==================== HEAVY LOAD ATTACHMENT ====================
  {
    slug: "anchor-bolt",
    title: "Anchor Bolt",
    category: "Fasteners",
    description: "Expansion anchor bolt for securing structural elements to concrete and masonry. The sleeve expands when the bolt is tightened, providing high pull-out and shear resistance.",
    image: "/images/products/anchor/1.png"
  },
  {
    slug: "fix-bolt",
    title: "Fix Bolt",
    category: "Fasteners",
    description: "Heavy-duty fix bolt (sleeve anchor) for permanent fixing of steel, timber, and equipment to concrete. The expansion mechanism locks into the substrate for high load-bearing capacity.",
    image: "/images/products/anchor/2.png"
  },
  {
    slug: "l-foundation-bolt",
    title: "L Foundation Bolt",
    category: "Fasteners",
    description: "L-shaped foundation bolt cast or anchored into concrete foundations for securing structural columns, machinery bases, and equipment frames. The L-bend provides mechanical keying into the concrete.",
    image: "/images/products/anchor/3.png"
  },
  {
    slug: "j-shaped-anchor-bolt",
    title: "J Shaped Anchor Bolt",
    category: "Fasteners",
    description: "J-bolt anchor bolt cast into concrete for attaching sill plates, structural columns, and equipment bases. The J-hook provides high pull-out resistance once embedded in cured concrete.",
    image: "/images/products/anchor/4.png"
  },
  {
    slug: "chemical-stud-and-capsule",
    title: "Chemical Stud and Capsule",
    category: "Fasteners",
    description: "Chemical anchor system consisting of a threaded stud and resin capsule for high-strength bonding into concrete, brick, and masonry. Offers superior load capacity and resistance to dynamic loads.",
    image: "/images/products/anchor/5.png"
  },
  // =====================================Packing Materials==========================================
  {
    slug: "self-adhesive-fiberglass-mesh-tape",
    title: "Self-Adhesive Fiberglass Mesh Tape",
    category: "Packing Materials",
    description: "Self-adhesive fiberglass mesh tape with a strong acrylic adhesive backing. Used for joining drywall, reinforcing joints, and patching cracks in walls and ceilings before plastering or painting.",
    image: "/images/products/packing/1.png"
  },
  {
    slug: "bopp-clear-packaging-tape",
    title: "BOPP Clear Packaging Tape",
    category: "Packing Materials",
    description: "Transparent BOPP (biaxially oriented polypropylene) adhesive tape for sealing cartons, parcels, and boxes. Provides strong, reliable adhesion for warehouse packing, shipping, and storage applications.",
    image: "/images/products/packing/2.png"
  },
  {
    slug: "stretch-wrap-film-rolls",
    title: "Stretch Wrap Film Rolls",
    category: "Packing Materials",
    description: "Clear LLDPE stretch wrap film rolls for pallet wrapping, bundling, and protecting goods during transit and storage. High cling and elongation properties ensure secure, tight load containment.",
    image: "/images/products/packing/3.png"
  },
  {
    slug: "bubble-wrap-roll",
    title: "Bubble Wrap Roll",
    category: "Packing Materials",
    description: "Protective bubble wrap roll with air-filled cushioning bubbles for wrapping fragile items during shipping and storage. Absorbs impact and vibration to prevent breakage of glass, electronics, and delicate goods.",
    image: "/images/products/packing/4.png"
  },
  {
    slug: "kraft-paper-roll",
    title: "Kraft Paper Roll",
    category: "Packing Materials",
    description: "Heavy-duty brown kraft paper roll for wrapping, cushioning, and void-filling in packaging. Also used as a surface protector during painting and construction work.",
    image: "/images/products/packing/5.png"
  },
  {
    slug: "masking-tape",
    title: "Masking Tape",
    category: "Packing Materials",
    description: "General purpose crepe paper masking tape for painting, surface protection, and light bundling. Easy to tear by hand, leaves no residue, and adheres well to most surfaces for temporary masking tasks.",
    image: "/images/products/packing/6.png"
  },
  {
    slug: "double-sided-white-tape",
    title: "Double-Sided White Tape",
    category: "Packing Materials",
    description: "Double-coated white cloth or foam tape for bonding, mounting, and splicing applications. Provides a strong, clean hold between two surfaces without visible adhesive, suitable for signage and display mounting.",
    image: "/images/products/packing/7.png"
  },
  {
    slug: "foam-mat-roll-blue",
    title: "PE Foam Mat Roll (Blue)",
    category: "Packing Materials",
    description: "Stacked blue polyethylene foam floor mats offering lightweight cushioning and insulation. Used as underlay for flooring, protective packaging, construction site floor protection, and anti-fatigue matting.",
    image: "/images/products/packing/8.png"
  },
  {
    slug: "pe-foam-roll-white",
    title: "PE Foam Roll (White)",
    category: "Packing Materials",
    description: "White polyethylene foam roll for wrapping fragile items, surface protection, and void-fill packaging. Lightweight, moisture-resistant, and shock-absorbing, ideal for furniture, glass, and appliance protection.",
    image: "/images/products/packing/9.png"
  },
  {
    slug: "tarpaulin-sheet",
    title: "Tarpaulin Sheet (Orange/Yellow)",
    category: "Packing Materials",
    description: "Heavy-duty woven PE tarpaulin sheet with reinforced edges and eyelets for outdoor coverage and protection. Waterproof and UV-resistant, used for covering machinery, construction materials, and vehicles.",
    image: "/images/products/packing/10.png"
  },
  {
    slug: "heavy-duty-black-garbage-bags",
    title: "Heavy Duty Black Garbage Bags",
    category: "Packing Materials",
    description: "Extra-strong black polyethylene garbage bags for industrial and commercial waste disposal. Tear and puncture resistant with high capacity, suitable for construction sites, factories, and large-scale waste management.",
    image: "/images/products/packing/11.png"
  },
  {
    slug: "polystyrene-foam-sheet",
    title: "Polystyrene Foam Sheet (EPS)",
    category: "Packing Materials",
    description: "Expanded polystyrene (EPS) foam sheets providing excellent thermal insulation and protective cushioning. Used in packaging of electronics and appliances, cold-chain logistics, and building insulation panels.",
    image: "/images/products/packing/12.png"
  },

  // ==================== SILICONE & SEALANTS ====================
  {
    slug: "sika-sanitary-silicone-sealant",
    title: "Sika Sanitary Silicone Sealant",
    category: "Silicone & Sealants",
    description: "Sika neutral-cure sanitary silicone sealant with anti-mould properties for bathrooms, kitchens, and wet areas. Forms a durable, flexible, watertight seal around baths, basins, showers, and sanitary fixtures.",
    image: "/images/products/packing/13.png"
  },
  {
    slug: "spectrem1-structural-silicone",
    title: "Spectrem 1 Structural Silicone Sealant",
    category: "Silicone & Sealants",
    description: "Tremco Spectrem 1 high-performance neutral-cure structural silicone sealant for glazing and curtain wall applications. Provides outstanding adhesion to glass, metal, and coated aluminium with excellent UV and weather resistance.",
    image: "/images/products/packing/14.png"
  },
  {
    slug: "two-part-silicone-sealant-kit",
    title: "Two-Part Silicone Sealant Kit",
    category: "Silicone & Sealants",
    description: "Two-component silicone sealant kit with base and catalyst cartridges for structural glazing, insulating glass units, and industrial bonding. Delivers consistent mixing and a high-strength, weather-resistant seal.",
    image: "/images/products/packing/15.png"
  },
  {
    slug: "pattex-sf525-silicone-sealant",
    title: "Pattex SF525 Kitchen & Bath Silicone",
    category: "Silicone & Sealants",
    description: "Pattex SF525 acetoxy-cure silicone sealant for kitchen and bathroom sealing. Mould-resistant formula bonds to ceramic tiles, glass, enamel, and chrome, forming a durable flexible waterproof seal.",
    image: "/images/products/packing/16.png"
  },
  // ==================== ABRASIVES ====================
  {
    slug: "flap-wheel",
    title: "Flap Wheel",
    category: "Abrasives",
    description: "Abrasive flap wheel with overlapping coated abrasive flaps mounted on a spindle. Used for blending, deburring, and finishing curved and irregular metal surfaces on bench grinders and drills.",
    image: "/images/products/bits/1.jpg"
  },
  {
    slug: "flap-disc",
    title: "Flap Disc",
    category: "Abrasives",
    description: "Angle grinder flap disc with overlapping abrasive flaps bonded to a fibreglass backing plate. Ideal for grinding, blending, and finishing welds and metal surfaces in a single operation.",
    image: "/images/products/bits/1alpha.jfif "
  },
  {
    slug: "abrasive-sanding-belt",
    title: "Abrasive Sanding Belt",
    category: "Abrasives",
    description: "Heavy-duty aluminium oxide or zirconia sanding belt for belt sanders and linishing machines. Available in multiple grits for aggressive stock removal through to fine finishing on metal, wood, and composites.",
    image: "/images/products/bits/2.jpg"
  },
  {
    slug: "abrasive-sanding-roll",
    title: "Abrasive Sanding Roll",
    category: "Abrasives",
    description: "Continuous abrasive sanding roll in cloth or paper backing for cutting to custom lengths. Used for hand sanding, wrapping around blocks, and feeding into roll-feed sanding machines.",
    image: "/images/products/bits/3.jpg"
  },
  {
    slug: "grinding-wheel",
    title: "Grinding Wheel",
    category: "Abrasives",
    description: "Bonded abrasive grinding wheel for bench and pedestal grinders. Used for sharpening tools, deburring, and shaping metal workpieces with consistent stock removal and a controlled finish.",
    image: "/images/products/bits/4.webp"
  },
  {
    slug: "cutting-disc",
    title: "Cutting Disc",
    category: "Abrasives",
    description: "Thin reinforced abrasive cutting disc for angle grinders, used to cut steel, stainless steel, and other metals. The slim kerf minimises material loss and heat generation during cutting operations.",
    image: "/images/products/bits/5.jfif"
  },
  {
    slug: "fibre-disc",
    title: "Fibre Disc",
    category: "Abrasives",
    description: "Heavy-duty vulcanised fibre backing disc with aluminium oxide or zirconia abrasive for use with angle grinder backing pads. Delivers aggressive grinding and blending on metal fabrication and weld dressing.",
    image: "/images/products/bits/6.jfif"
  },
  {
    slug: "velcro-sanding-disc",
    title: "Hook & Loop Sanding Disc",
    category: "Abrasives",
    description: "Hook-and-loop (Velcro) backed sanding disc for random orbital and detail sanders. Quick-change system allows fast grit swaps for sanding wood, paint, filler, and metal surfaces.",
    image: "/images/products/bits/7.jpeg"
  },
  {
    slug: "non-woven-abrasive-disc",
    title: "Non-Woven Abrasive Disc",
    category: "Abrasives",
    description: "Non-woven nylon fibre abrasive disc for surface conditioning, cleaning, and light deburring. The open-web construction resists loading and provides a consistent scratch pattern on metal and stainless steel.",
    image: "/images/products/bits/8.jfif"
  },
  {
    slug: "non-woven-abrasive-sheet",
    title: "Non-Woven Abrasive Sheet",
    category: "Abrasives",
    description: "Non-woven abrasive sheet for hand finishing, scuffing, and surface preparation. Flexible and conformable for use on flat and contoured surfaces, ideal for pre-paint preparation and stainless steel finishing.",
    image: "/images/products/bits/9.png"
  },
  {
    slug: "sanding-block",
    title: "Abrasive Sanding Block",
    category: "Abrasives",
    description: "Hand sanding block with bonded abrasive on a foam or rubber backing for flat surface sanding. Provides even pressure distribution for smoothing wood, filler, and painted surfaces by hand.",
    image: "/images/products/bits/10.jpg"
  },
  {
    slug: "abrasive-sanding-sheet",
    title: "Abrasive Sanding Sheet",
    category: "Abrasives",
    description: "Standard aluminium oxide or silicon carbide sanding sheet in paper or cloth backing. Used for hand and machine sanding of wood, metal, and painted surfaces across a full range of grits.",
    image: "/images/products/bits/11.jfif"
  },

  // ==================== DRILL BITS & ROUTER BITS ====================
  {
    slug: "cnc-router-bit-set",
    title: "CNC Router Bit Set",
    category: "Drill Bits & Router Bits",
    description: "Set of solid carbide CNC router bits including straight, spiral, and V-groove profiles. Designed for precise cutting, engraving, and profiling of wood, MDF, acrylic, and soft metals on CNC routers.",
    image: "/images/products/bits/12.png"
  },
  {
    slug: "straight-router-bit",
    title: "Straight Router Bit",
    category: "Drill Bits & Router Bits",
    description: "Solid carbide straight-flute router bit for cutting dadoes, grooves, and rabbets in wood and MDF. The flat-bottom cut produces clean, accurate slots for joinery and cabinetmaking applications.",
    image: "/images/products/bits/13.png"
  },
  {
    slug: "carbide-spiral-upcut-bit",
    title: "Carbide Spiral Upcut End Mill",
    category: "Drill Bits & Router Bits",
    description: "Solid carbide upcut spiral end mill for CNC machining of wood, plastics, and aluminium. The upcut geometry efficiently evacuates chips from the cut, providing clean edges and fast material removal.",
    image: "/images/products/bits/14.png"
  },
  {
    slug: "hss-drill-bit",
    title: "HSS Twist Drill Bit",
    category: "Drill Bits & Router Bits",
    description: "High-speed steel (HSS) twist drill bit for drilling into metal, wood, and plastics. The precision-ground flutes and cutting edges provide accurate hole-making with standard electric and cordless drills.",
    image: "/images/products/bits/15.png"
  },
  {
    slug: "titanium-coated-drill-bit",
    title: "Titanium-Coated Drill Bit",
    category: "Drill Bits & Router Bits",
    description: "HSS drill bit with titanium nitride (TiN) coating for extended tool life and reduced friction when drilling steel, cast iron, and hard metals. The gold-coloured coating indicates heat resistance and hardness.",
    image: "/images/products/bits/16.png"
  },
  {
    slug: "solid-carbide-end-mill",
    title: "Solid Carbide End Mill",
    category: "Drill Bits & Router Bits",
    description: "Solid carbide multi-flute end mill for high-precision milling of steel, stainless steel, and hardened metals. The micro-grain carbide substrate provides excellent wear resistance and edge sharpness.",
    image: "/images/products/bits/17.png"
  },
  {
    slug: "blue-nano-coated-end-mill",
    title: "Blue Nano-Coated End Mill",
    category: "Drill Bits & Router Bits",
    description: "Solid carbide end mill with blue nano-composite coating (AlTiN/TiSiN) for high-speed dry machining of hardened steels and stainless steel. Offers superior heat resistance and extended tool life.",
    image: "/images/products/bits/18.png"
  },
  {
    slug: "masonry-drill-bit",
    title: "Masonry Drill Bit",
    category: "Drill Bits & Router Bits",
    description: "Tungsten carbide-tipped masonry drill bit for drilling into concrete, brick, block, and stone with hammer drills. The carbide tip and spiral flutes efficiently break and evacuate masonry debris.",
    image: "/images/products/bits/19.png"
  },
  // =============================================Hand Tools===================================================
  {
    slug: "claw-hammer",
    title: "Claw Hammer",
    category: "Hand Tools",
    description: "Classic wooden-handle claw hammer for driving and removing nails in carpentry and general construction. The forged steel head provides reliable striking force while the curved claw efficiently pulls nails from timber.",
    image: "/images/products/tools/1.png"
  },
  {
    slug: "water-pump-pliers",
    title: "Water Pump Pliers",
    category: "Hand Tools",
    description: "Multi-jaw adjustable water pump pliers for gripping pipes, fittings, and irregular-shaped objects. The slip-joint design allows quick jaw width adjustment for plumbing, maintenance, and general workshop use.",
    image: "/images/products/tools/2.png"
  },
  {
    slug: "combination-pliers",
    title: "Combination Pliers",
    category: "Hand Tools",
    description: "Heavy-duty combination pliers with gripping jaws, wire cutter, and insulated handles. A versatile everyday workshop tool for cutting, bending, and gripping wire and small components.",
    image: "/images/products/tools/3.png"
  },
  {
    slug: "screwdriver-set",
    title: "Screwdriver Set",
    category: "Hand Tools",
    description: "Mixed set of flathead and Phillips screwdrivers in multiple sizes with colour-coded insulated handles. Essential for electrical, mechanical, and general assembly work across a wide range of screw types and sizes.",
    image: "/images/products/tools/4.png"
  },
  {
    slug: "screwdriver-bit-set",
    title: "Screwdriver Bit Set",
    category: "Hand Tools",
    description: "Assorted magnetic screwdriver bit set including Phillips, flathead, Torx, and hex profiles. Compatible with power drills and manual bit holders for fast, versatile fastening across all common drive types.",
    image: "/images/products/tools/5.png"
  },
  {
    slug: "open-end-spanner",
    title: "Open End Spanner",
    category: "Hand Tools",
    description: "Double-ended open jaw spanner for tightening and loosening nuts and bolts in confined spaces. Forged from chrome vanadium steel for durability and precision fit on metric and imperial fasteners.",
    image: "/images/products/tools/6.png"
  },
  {
    slug: "adjustable-wrench",
    title: "Adjustable Wrench",
    category: "Hand Tools",
    description: "Chrome-plated adjustable open-end wrench with a smooth worm-gear jaw adjustment. Suitable for a wide range of nut and bolt sizes, ideal for plumbing, automotive, and general maintenance tasks.",
    image: "/images/products/tools/7.png"
  },
  {
    slug: "wood-chisel",
    title: "Wood Chisel",
    category: "Hand Tools",
    description: "Hardened steel wood chisel with a comfortable grip handle for mortising, paring, and shaping timber. The precision-ground bevel edge holds a sharp cutting angle for clean, controlled woodworking cuts.",
    image: "/images/products/tools/8.png"
  },
  {
    slug: "stanley-knife-utility-knife",
    title: "Stanley Knife / Utility Knife",
    category: "Hand Tools",
    description: "Heavy-duty retractable utility knife with a locking blade mechanism and ergonomic handle. Used for scoring, cutting cardboard, insulation, strapping, drywall, and a wide range of materials on site.",
    image: "/images/products/tools/9.png"
  },

  // ==================== POWER TOOLS ====================
  {
    slug: "jigsaw-corded",
    title: "Corded Jigsaw",
    category: "Power Tools",
    description: "Variable-speed corded jigsaw for making curved, straight, and bevel cuts in wood, metal, and plastic. Features an orbital action setting and tool-free blade change for versatile cutting on site and in workshops.",
    image: "/images/products/tools/10.png"
  },
  {
    slug: "jigsaw-black",
    title: "Heavy Duty Jigsaw",
    category: "Power Tools",
    description: "Powerful heavy-duty jigsaw with high-stroke speed for cutting through thick timber, sheet metal, and composite materials. Ergonomic body design with dust extraction port for clean, precise cutting operations.",
    image: "/images/products/tools/11.png"
  },
  {
    slug: "belt-sander",
    title: "Belt Sander",
    category: "Power Tools",
    description: "High-speed electric belt sander for rapid material removal and surface levelling on wood and metal. The continuous abrasive belt and central dust bag make it ideal for floor sanding, decking, and furniture refinishing.",
    image: "/images/products/tools/12.png"
  },
  {
    slug: "jigsaw-teal",
    title: "Professional Jigsaw",
    category: "Power Tools",
    description: "Professional-grade corded jigsaw with pendulum action and variable speed control for smooth, accurate cuts in wood, ceramic tiles, and metal sheets. Designed for demanding trade and construction applications.",
    image: "/images/products/tools/13.png"
  },
  {
    slug: "jigsaw-yellow",
    title: "Cordless Jigsaw",
    category: "Power Tools",
    description: "Battery-powered cordless jigsaw delivering freedom of movement for cutting tasks away from power sources. Compatible with standard jigsaw blades for cutting wood, plastics, and thin metal on construction sites.",
    image: "/images/products/tools/14.png"
  },
  {
    slug: "rotary-tool",
    title: "Rotary Tool / Die Grinder",
    category: "Power Tools",
    description: "Compact high-speed rotary tool for grinding, engraving, cutting, polishing, and sanding in tight spaces. Accepts a wide range of accessory attachments for precision detailing and finishing tasks.",
    image: "/images/products/tools/15.png"
  },
  {
    slug: "small-angle-grinder",
    title: "Small Angle Grinder (115mm)",
    category: "Power Tools",
    description: "Compact 115mm corded angle grinder for grinding, cutting, and polishing metal and masonry. Lightweight and manoeuvrable with a side handle for controlled operation in confined work areas.",
    image: "/images/products/tools/16.png"
  },
  {
    slug: "random-orbital-sander-green",
    title: "Random Orbital Sander",
    category: "Power Tools",
    description: "Random orbital sander with hook-and-loop pad for fast, swirl-free sanding of wood, metal, and painted surfaces. The combined rotation and orbital motion removes material quickly while minimising surface scratches.",
    image: "/images/products/tools/17.png"
  },
  {
    slug: "large-angle-grinder-230mm",
    title: "Large Angle Grinder (230mm)",
    category: "Power Tools",
    description: "High-power 230mm large angle grinder for heavy-duty cutting and grinding of thick steel, concrete, and masonry. Features a powerful motor and anti-vibration side handle for sustained high-load operations.",
    image: "/images/products/tools/18.png"
  },
  {
    slug: "angle-grinder-black",
    title: "Heavy Duty Angle Grinder",
    category: "Power Tools",
    description: "Heavy-duty corded angle grinder with overload protection and a reinforced gear housing for professional grinding, cutting, and wire brushing on structural steel and fabrication projects.",
    image: "/images/products/tools/19.png"
  },
  {
    slug: "rotary-hammer-drill",
    title: "Rotary Hammer Drill",
    category: "Power Tools",
    description: "SDS-plus rotary hammer drill combining rotation and hammering action for fast, efficient drilling into concrete, brick, and masonry. Includes chisel mode for light demolition and chasing work.",
    image: "/images/products/tools/20.png"
  },
  {
    slug: "corded-drill-driver",
    title: "Corded Drill Driver",
    category: "Power Tools",
    description: "Variable-speed reversible corded drill driver for drilling into wood, metal, and plastic. Keyless chuck and forward/reverse function make it a reliable everyday tool for drilling and screw-driving tasks.",
    image: "/images/products/tools/21.png"
  },
  {
    slug: "cordless-drill-driver",
    title: "Cordless Drill Driver",
    category: "Power Tools",
    description: "Rechargeable lithium-ion cordless drill driver with two-speed gearbox and adjustable torque clutch. Ideal for driving screws and drilling holes in wood, metal, and masonry without being tethered to a power outlet.",
    image: "/images/products/tools/22.png"
  },
  {
    slug: "circular-saw",
    title: "Circular Saw",
    category: "Power Tools",
    description: "Powerful corded circular saw with adjustable depth and bevel settings for straight and angled cuts in timber, plywood, and sheet materials. A high-speed blade and rip fence guide ensure accurate, repeatable cuts.",
    image: "/images/products/tools/23.png"
  },
  {
    slug: "finishing-sander",
    title: "Finishing Sander / Palm Sander",
    category: "Power Tools",
    description: "Compact finishing palm sander for smooth final sanding of wood, filler, and painted surfaces. The quarter-sheet abrasive pad and low-vibration motor provide a fine, even finish ready for painting or varnishing.",
    image: "/images/products/tools/24.png"
  },
  {
    slug: "hammer-drill-sds",
    title: "Hammer Drill (SDS)",
    category: "Power Tools",
    description: "Heavy-duty SDS hammer drill for drilling and chiselling in reinforced concrete, stone, and hard masonry. High impact energy and 3-mode operation (drill, hammer drill, chisel) make it suitable for demanding site work.",
    image: "/images/products/tools/25.png"
  },
  {
    slug: "chainsaw-petrol",
    title: "Petrol Chainsaw",
    category: "Power Tools",
    description: "Petrol-powered chainsaw for felling trees, pruning, and cutting large timber sections. Features an automatic chain oiler, anti-vibration handle, and easy-start engine for reliable performance in outdoor environments.",
    image: "/images/products/tools/26.png"
  },
  {
    slug: "reciprocating-saw",
    title: "Reciprocating Saw / Sabre Saw",
    category: "Power Tools",
    description: "Cordless reciprocating saw for demolition cutting of timber, metal pipes, and plasterboard. The fast back-and-forth blade action cuts in tight spaces where circular saws cannot reach, ideal for renovation work.",
    image: "/images/products/tools/27.png"
  },
  {
    slug: "impact-drill",
    title: "Impact Drill",
    category: "Power Tools",
    description: "Variable-speed corded impact drill combining rotation with a rapid hammer action for drilling into masonry, concrete, and brick. Dual-mode switch allows use as a standard drill driver for wood and metal.",
    image: "/images/products/tools/28.png"
  },
  {
    slug: "mini-drill-driver",
    title: "Mini Drill Driver",
    category: "Power Tools",
    description: "Compact lightweight mini drill driver for light-duty drilling and screw-driving in wood, plastic, and soft metals. Its small form factor makes it ideal for DIY tasks, electrical work, and confined-space assembly.",
    image: "/images/products/tools/29.png"
  },
  // =====================================Lockings and hinges============================
  {
    slug: "hasp-and-staple",
    title: "Hasp and Staple",
    category: "Lockings & Hinges",
    description: "Stainless steel hasp and staple locking set for securing doors, gates, sheds, and storage boxes with a padlock. The slotted hasp flips over the staple loop to provide a robust, tamper-resistant closure.",
    image: "/images/products/locks/1.png"
  },
  {
    slug: "door-handle-on-backplate-brass",
    title: "Door Handle on Backplate (Brass)",
    category: "Lockings & Hinges",
    description: "Polished brass lever door handle on a rectangular backplate with keyhole. Suitable for interior and exterior doors, providing a classic decorative finish with integrated lock function.",
    image: "/images/products/locks/2.png"
  },
  {
    slug: "door-handle-on-backplate-chrome",
    title: "Door Handle on Backplate (Chrome)",
    category: "Lockings & Hinges",
    description: "Satin chrome lever door handle on a backplate for internal doors. The contemporary brushed finish suits modern interiors, with a smooth action lever and matching keyhole escutcheon.",
    image: "/images/products/locks/3.png"
  },
  {
    slug: "euro-profile-cylinder-lock",
    title: "Euro Profile Double Cylinder Lock",
    category: "Lockings & Hinges",
    description: "Euro profile double cylinder lock barrel with key operation from both sides. Compatible with all standard euro-profile mortice lock cases for external doors in residential and commercial buildings.",
    image: "/images/products/locks/5.png"
  },
  {
    slug: "drawer-slide-ball-bearing",
    title: "Ball Bearing Drawer Slide",
    category: "Lockings & Hinges",
    description: "Heavy-duty full-extension ball bearing drawer slide for smooth, silent drawer operation. The three-section telescopic rail supports high load capacity and is suitable for kitchen cabinets, tool chests, and office furniture.",
    image: "/images/products/locks/7.png"
  },

  // ==================== HINGES ====================
  {
    slug: "brass-butt-hinge",
    title: "Brass Butt Hinge",
    category: "Lockings & Hinges",
    description: "Polished brass butt hinge for light-duty interior cabinet doors, boxes, and furniture lids. The square-corner leaf design sits flush when mortised, providing a neat, traditional appearance.",
    image: "/images/products/locks/8.png"
  },
  {
    slug: "steel-cranked-hinge",
    title: "Steel Cranked Hinge",
    category: "Lockings & Hinges",
    description: "Cranked (offset) steel hinge allowing inset doors to open fully past the frame. The angled leaf compensates for frame rebates in cabinet and box construction where a standard butt hinge cannot be used.",
    image: "/images/products/locks/9.png"
  },
  {
    slug: "medium-duty-butt-hinge",
    title: "Medium Duty Steel Butt Hinge",
    category: "Lockings & Hinges",
    description: "Zinc-plated steel medium-duty butt hinge for interior and light exterior doors. The standard rectangular leaf profile is mortised into the door and frame for a flush, concealed fit.",
    image: "/images/products/locks/10.png"
  },
  {
    slug: "tee-hinge",
    title: "Tee Hinge (T-Hinge)",
    category: "Lockings & Hinges",
    description: "Steel T-shaped hinge combining a short fixed leaf with a long strap for attaching ledged and braced gates and shed doors to a frame or post. Hot-dip galvanised for outdoor corrosion resistance.",
    image: "/images/products/locks/12.png"
  },
  {
    slug: "parliament-hinge",
    title: "Parliament Hinge",
    category: "Lockings & Hinges",
    description: "Wide-throw parliament (H-hinge) allowing doors and shutters to swing fully clear of the frame and architrave. Used in joinery applications where the door must open flat against a wall.",
    image: "/images/products/locks/13.png"
  },
  {
    slug: "spring-hinge",
    title: "Spring Hinge",
    category: "Lockings & Hinges",
    description: "Single-action spring-loaded hinge that automatically returns a door to the closed position after opening. Adjustable spring tension suits fire doors, screen doors, and self-closing gate applications.",
    image: "/images/products/locks/14.png"
  },
  {
    slug: "flush-hinge",
    title: "Flush Hinge",
    category: "Lockings & Hinges",
    description: "Slim flush hinge that requires no mortising — one leaf folds inside the other when closed, sitting completely flat. Ideal for lightweight cabinet doors, hatches, and box lids where surface mounting is preferred.",
    image: "/images/products/locks/15.png"
  },
  {
    slug: "lift-off-hinge",
    title: "Lift-Off Hinge (Weld-On Pin)",
    category: "Lockings & Hinges",
    description: "Two-part lift-off hinge with a removable pin barrel allowing doors and panels to be lifted clear without tools. The weld-on or bolt-on design is used for heavy gates, industrial enclosures, and access panels.",
    image: "/images/products/locks/16.png"
  },
  {
    slug: "piano-hinge-continuous",
    title: "Piano Hinge (Continuous Hinge)",
    category: "Lockings & Hinges",
    description: "Full-length continuous piano hinge providing even load distribution across the entire length of a lid or door. Used on tool chests, instrument cases, access panels, and long cabinet doors.",
    image: "/images/products/locks/17.png"
  },
  {
    slug: "coil-spring-gate-hinge",
    title: "Coil Spring Gate Latch",
    category: "Lockings & Hinges",
    description: "Heavy-duty coil spring bolt latch for securing metal gates and industrial access doors. The spring-loaded barrel bolt slides into a keep plate and holds securely under lateral and vertical load.",
    image: "/images/products/locks/18.png"
  },
  {
    slug: "heavy-duty-butt-hinge",
    title: "Heavy Duty Butt Hinge",
    category: "Lockings & Hinges",
    description: "Thick-leaf heavy-duty steel butt hinge for exterior doors, fire doors, and high-traffic commercial entrances. The robust construction and stainless or galvanised finish ensure long service life under demanding conditions.",
    image: "/images/products/locks/19.png"
  }
]

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(category?: string) {
  if (!category || category === 'All') return products
  return products.filter((p) => p.category === category)
}

export function getAllCategories() {
  return ['All', ...categories]
}
