// English content. Same structure as es.js: chapters -> 5 levels -> blocks with bullets.
const en = [
  {
    id: 'agri',
    icon: '🌽',
    title: 'Tropical Agriculture & Honduran Planting',
    subtitle: 'Corn, beans, cassava, squash, plantain, sweet potato, miltomate and fruit trees',
    levels: [
      {
        name: 'Extreme emergency',
        goal: 'Plant something today that yields food in weeks or months, with no tools and no bought seed.',
        blocks: [
          {
            h: 'What to plant with zero resources',
            items: [
              'Sweet potato (camote): cut 30 cm vine cuttings from an existing plant and bury them at a slant with 2-3 nodes underground. Roots in 3-5 months, and the tender cooked leaves are edible too.',
              'Cassava (yuca): stem cuttings 25-30 cm long from mature stalks, buried upright or slanted with 2-3 buds underground. Harvest at 8-12 months, but you can leave it in the ground as a "living pantry".',
              'Banana/plantain: split off a sucker (colino) with a sharpened stick or by hand and transplant it into a hole as wide as your arm.',
              'Seeds from your meals: squash (ayote), miltomate, chili, papaya and beans from your last uncooked supply work if they were not cooked or bagged hybrids.',
            ],
          },
          {
            h: 'Where and when',
            items: [
              'Use a pointed stick (improvised digging stick) to make holes: no plowing needed.',
              'Plant at the start of the rains (May-June) or in the postrera season (August-September). In the dry season only plant next to a spring or river.',
              'Avoid riverbanks that flood and steep bare slopes: hurricanes and landslides carry everything away.',
            ],
          },
        ],
        warn: 'Raw bitter cassava, raw beans and physic nut (Jatropha) are toxic: always cook well and never eat unknown seeds.',
      },
      {
        name: 'Basic tools',
        goal: 'Set up a family milpa with a machete, hoe and digging stick (espeque).',
        blocks: [
          {
            h: 'The milpa: corn + beans + squash',
            items: [
              'Corn: 2-3 kernels per hill, 40-50 cm between hills and 80-100 cm between rows, 5 cm deep. Harvest in 90-120 days.',
              'Beans: sown between the corn plants when the corn is about 30-40 cm tall; the stalk is the trellis and the beans fix nitrogen. Cycle of 70-90 days.',
              'Squash: along the borders every 2 m; its big leaves cover the soil, suppress weeds and hold moisture.',
            ],
          },
          {
            h: 'Basic calendar by season',
            items: [
              'Primera (plant May-June with the first rains, harvest September-October): corn, plantain, cassava, squash.',
              'Canicula (mid-July to mid-August, a dry pause): do not plant anything new; hill up and weed to conserve moisture.',
              'Postrera (August-September, harvest December-January): beans and corn; this is the safe bean season in many areas.',
              'Apante (November-December in humid zones or with residual moisture): beans on soil that keeps moisture.',
              'Dry season (December-April): hand-water small vegetables; keep miltomate and chili near water.',
            ],
          },
          {
            h: 'Frijol tapado (covered beans)',
            items: [
              'Traditional method: scatter bean seed over cut brush or stubble and cover it with the vegetation itself. Very little labor and it works in postrera/apante.',
            ],
          },
        ],
      },
      {
        name: 'Semi-advanced',
        goal: 'Raise yields and protect the soil from tropical downpours.',
        blocks: [
          {
            h: 'Soil and fertilizer',
            items: [
              'Contour barriers: plant vetiver grass, pineapple rows or strips of stalks on the level (use an A-frame level made of three poles) to stop erosion on slopes.',
              'Fermented organic fertilizer (bocashi): layers of soil, manure, coffee or rice husks, ash, leaf litter and molasses; turn once a day and it is ready in 15-20 days.',
              'Green manures: velvet bean (Mucuna) and pigeon pea (gandul) fix nitrogen and cover the soil; raw mucuna is toxic and its pods itch.',
            ],
          },
          {
            h: 'Association and rotation',
            items: [
              'Rotate families: corn (grass) -> beans (legume) -> roots (cassava/sweet potato) -> squash. Never repeat the same crop in the same place more than 2 cycles.',
              'Miltomate and chili: seedbed 25-30 days, then transplant at the start of the season with partial shade; companion plants like basil or lemongrass reduce pests.',
              'Save seed: pick the best 10-20 ears/fruits, dry in airy shade and store in sealed plastic bottles with ash.',
            ],
          },
        ],
      },
      {
        name: 'Long-term permanence',
        goal: 'Turn the land into a system that sustains itself for years.',
        blocks: [
          {
            h: 'Agroforestry systems',
            items: [
              'Mixed orchard: avocado, mango, jocote, nance, cashew, citrus, papaya and cacao in different layers; plantain as temporary shade for young plants.',
              'Living fences of madreado (Gliricidia): stakes that root, giving posts, fodder and green manure.',
              'Coffee and cacao under guama (Inga) shade on slopes and mid altitudes.',
            ],
          },
          {
            h: 'Storage and seed security',
            items: [
              'Metal silo or sealed barrel: dry grain (13-14% moisture) stored without air avoids weevils for a year or more.',
              'Family seed bank: 3 reserves of each crop in different places (home, hideout, trusted neighbor).',
              'Keep 30% of every harvest as reserve against crop failure, hurricane or a severe canicula.',
            ],
          },
        ],
      },
      {
        name: 'Technical manual',
        goal: 'Full criteria: soil, climate, calendar and land capacity.',
        blocks: [
          {
            h: 'Soil diagnosis',
            items: [
              'Texture: take a moist handful; if it makes a long ribbon it is clay, if it crumbles it is sandy, if it is soft and breaks it is loam. The Sula and Aguan valleys have fertile alluvial soils; slopes mostly have acidic, thin soils.',
              'pH: beans and corn prefer 5.8-6.8. In acid soils apply ash and agricultural lime; in alkaline ones, organic matter.',
              'Water test: dig a 30 cm hole and fill it; if the water takes more than 4 hours to drain you have poor drainage and need raised beds.',
            ],
          },
          {
            h: 'Planning and capacity',
            items: [
              'Calorie need: ~2,500 kcal/person/day = ~912,000 kcal/year. Dry corn gives ~3,500 kcal/kg; with low-input yields of 1,000-1,500 kg/ha, a family of 5 needs on the order of 1.5-2 ha across grains, roots and vegetables (rough estimate).',
              'Water: corn and beans need 400-600 mm well distributed over the cycle; in the Dry Corridor prioritize short-cycle native varieties and postrera planting.',
              'Hurricanes (June-November, peaking September-October): spread crops between high and low sites, keep roots and plantain as underground reserve and harvest plantain early when a warning comes.',
            ],
          },
        ],
        warn: 'Numbers are reference ranges: every farm (altitude, rainfall, soil) needs adjustment through local observation and the knowledge of neighboring farmers.',
      },
    ],
  },
  {
    id: 'bota',
    icon: '🌿',
    title: 'Survival Botany in Honduras',
    subtitle: 'Edible and poisonous plants, and local natural medicine',
    levels: [
      {
        name: 'Extreme emergency',
        goal: 'Recognize a few safe plants and avoid the dangerous ones.',
        blocks: [
          {
            h: 'Golden rule',
            items: [
              'Eat only what you identify 100%. Do not use the "universal edibility test" on unknown plants: it can kill you.',
              'Fruits you know: guava, mango, jocote, nance, mamon (limoncillo), cashew (pulp), papaya, banana, coconut, anona, soursop, avocado.',
              'Leaves and shoots that are cooked: bledo (amaranth), chipilin, quilete/nightshade greens (always cooked, with the water changed), sweet potato leaves, palm heart (palmito).',
            ],
          },
          {
            h: 'Danger signs',
            items: [
              'Milky or peppery sap in the mouth, bitter almond smell, very shiny lone fruits on the beach edge, leaves with irritating spines.',
              'Beach apple (manzanillo de playa, Hippomane mancinella) on the Caribbean coast: do not eat the fruit or shelter under the tree in rain; its sap burns skin.',
              'Castor bean (higuerilla) and physic nut (Jatropha): their seeds are highly toxic.',
            ],
          },
        ],
        warn: 'If poisoning is suspected: induce vomiting only if the person is conscious and ate recently; give clean water and seek medical care.',
      },
      {
        name: 'Basic tools',
        goal: 'Gather wild food with safe preparation techniques.',
        blocks: [
          {
            h: 'Native foods',
            items: [
              'Ojushte (breadnut, Brosimum alicastrum): seeds boiled or toasted and ground make nutritious flour in the dry season.',
              'Palm heart and corozo: the growing heart of certain palms is edible; corozo is boiled or toasted.',
              'Prickly pear (tuna/nopal) and pitahaya: fruits and pads without spines; singe off the spines.',
              'Wild cassava and quequisque (malanga) only cooked: raw they irritate and carry toxins (oxalates/cyanide).',
            ],
          },
          {
            h: 'Basic natural medicine (traditional use)',
            items: [
              'Lemongrass (zacate limon, Cymbopogon citratus): infusion for colds, nausea and fever; among the safest.',
              'Plantain weed (llanten, Plantago major): crushed leaves as a poultice for wounds and stings; infusion for mild inflammation.',
              'Hombre grande (Quassia amara): bitter bark in a mild infusion, traditionally for fevers and digestion; high doses are toxic.',
              'Apazote/epazote (Dysphania ambrosioides): leaves in food and mild tea as a traditional dewormer; concentrated oil is toxic and avoided in pregnancy.',
              'Mozote (Triumfetta/Bidens): leaf decoction in traditional use for diarrhea and wounds.',
            ],
          },
        ],
      },
      {
        name: 'Semi-advanced',
        goal: 'An identification and preparation system for a sustainable wild diet.',
        blocks: [
          {
            h: 'Identification method',
            items: [
              'Note 5 features: leaf (edge, arrangement), stem, flower/fruit, sap and smell. Compare with someone in your community who already uses it.',
              'Seasonal food: mango, jocote and cashew (April-July); guava and mamon (May-September); nance in the early rainy season.',
              'Always cook wild greens in water and discard the cooking water if they are dark leaves with milky sap.',
            ],
          },
          {
            h: 'Common poisonous plants to avoid',
            items: [
              'Castor bean (Ricinus), physic nut (Jatropha curcas), yellow oleander fruits (Cascabela thevetia), oleander flowers (Nerium), dieffenbachia.',
              'Wild mushrooms: do not eat them without a local expert; few are edible and many are deadly.',
              'Raw or undercooked beans cause poisoning: boil hard for at least 10 minutes.',
            ],
          },
        ],
      },
      {
        name: 'Long-term permanence',
        goal: 'A garden of useful plants: food, pharmacy and fiber within reach.',
        blocks: [
          {
            h: 'Living medicine cabinet',
            items: [
              'Plant near the house: lemongrass, plantain weed, apazote, spearmint, aloe, moringa, chamomile, oregano and basil.',
              'Make tinctures and salves: vegetable oil + dried plantain or calendula leaves, in a double boiler for 2 hours, strain and add wax.',
              'Prune and harvest in the morning; dry in shade to keep essential oils.',
            ],
          },
          {
            h: 'Cultivated wild food',
            items: [
              'Chaya, chipilin, moringa and quilete as perennial greens that produce all year with minimal care.',
              'Ojushte, soursop, nance and cashew trees on fences and borders for food and shade.',
              'Keep a notebook of what works for each family and what doses they use.',
            ],
          },
        ],
      },
      {
        name: 'Technical manual',
        goal: 'Pharmacological and ecological criteria for responsible use.',
        blocks: [
          {
            h: 'Safety in herbal medicine',
            items: [
              'Dose: mild teas of 1-2 tablespoons of fresh leaf per cup, 1-3 cups a day for a few days. Bitter or concentrated products (hombre grande, apazote) need minimal doses and rest periods.',
              'Contraindications: pregnancy, breastfeeding, small children, liver or kidney disease.',
              'Interactions: do not mix herbs with pharmacy medicines without advice.',
            ],
          },
          {
            h: 'Ecology and harvesting',
            items: [
              'Harvest less than 30% of a wild population and never pull the root unless necessary.',
              'Respect protected species and closed seasons; mahogany, ceiba and mangroves have legal protection.',
              'Seasonal map: record where and when each species fruits in your area to plan the year.',
            ],
          },
        ],
        warn: 'This information does not replace a doctor or the knowledge of local healers and health promoters: use it only as support.',
      },
    ],
  },
  {
    id: 'cons',
    icon: '🏕️',
    title: 'Rustic Construction',
    subtitle: 'Pole furniture, lashings and shelters for tropical rain',
    levels: [
      {
        name: 'Extreme emergency',
        goal: 'A shelter in hours, with no tools, that keeps you dry.',
        blocks: [
          {
            h: 'Minimum rain shelter',
            items: [
              'Raised bed: two parallel logs on stones or crossed logs so the ground does not soak you and insects do not bite.',
              'Sloped roof (45 degrees) with big leaves: manaca palm, banana leaves, bijagua, overlapped from the bottom up.',
              'Rest a long pole on a fork or log at 1 m height and lean branches on both sides (A-frame shelter).',
            ],
          },
          {
            h: 'Location',
            items: [
              'A high, flat spot away from rivers that rise, dry channels and slopes prone to landslides.',
              'Check that no dead trees or dead branches hang over the shelter (wind and hurricane).',
              'Keep water close but not right on the riverbank (mosquitoes and floods).',
            ],
          },
        ],
        warn: 'In heavy rain, good drainage around the shelter (a small ditch) matters more than a pretty roof.',
      },
      {
        name: 'Basic tools',
        goal: 'A firm structure with machete and rope: shelter, bed and table.',
        blocks: [
          {
            h: 'Essential lashings',
            items: [
              'Square lashing: joins two poles at a right angle; start and finish with a clove hitch, make 3-4 wraps and 2 frapping turns.',
              'Diagonal lashing: for poles that cross and work as bracing (X crossings).',
              'Shear/tripod lashing: tripods and trestles. Cordage: vine (bejuco), majagua (bark of Hibiscus tiliaceus), cabuya or henequen fiber, bark strips.',
            ],
          },
          {
            h: 'Pole furniture',
            items: [
              'Bed: two 2 m side rails of bamboo or wood, crosspieces every 30 cm and a weave of thin poles; 40 cm legs.',
              'Table and bench: four legs with crossed (X) braces so it does not wobble.',
              'Food shelf: hung by rope from a beam to avoid ants and rats.',
            ],
          },
        ],
      },
      {
        name: 'Semi-advanced',
        goal: 'A post house with a palm roof that resists rain and wind.',
        blocks: [
          {
            h: 'Local materials',
            items: [
              'Pine (ocote): good for beams and boards; treat it against termites (char the base or use used oil).',
              'Bamboo/guadua: light, strong and fast-growing; cut in the waning moon and dry season, cure 3-4 weeks standing with its leaves and treat with borax.',
              'Teak: very durable, insect-resistant; common plantation tree in the country.',
              'Madreado/black stick: posts that take root and form a living fence.',
              'Mangrove: wood very resistant to rot; only in real emergency, it is legally protected.',
            ],
          },
          {
            h: 'Roof and walls',
            items: [
              'Palm roof (manaca, botan or guano): 45-degree pitch and 60-80 cm eaves, tied in layers from the bottom up.',
              'Bahareque walls: lattice of poles or bamboo filled with mud, straw and manure; lime-wash or protect with eaves and a stone base.',
              'Floor raised 50 cm (barbacoa) to avoid flooding and damp.',
            ],
          },
        ],
      },
      {
        name: 'Long-term permanence',
        goal: 'A dwelling resistant to hurricanes, humidity and pests for years.',
        blocks: [
          {
            h: 'Anti-hurricane principles',
            items: [
              'Low, compact shape with a hip roof (four slopes); avoid big overhangs without reinforcement.',
              'Posts buried 80-100 cm, with concrete or stone and a base that will not rot; tie post to beam with bolts, rope or crossed nails.',
              'Diagonal bracing in all walls and the roof; beams well tied to the posts.',
              'Plant windbreaks (banana, bamboo, madreado) 10-15 m from the house, but not tall trees that could fall on it.',
            ],
          },
          {
            h: 'Durability',
            items: [
              'Stone or concrete base so wood never touches soil; ridge protected with zinc, tile or tightly packed palm.',
              'Replace the palm every 5-8 years; treat wood with used oil or ash and lime.',
              'Kitchen separate from the house and cross ventilation with high windows.',
            ],
          },
        ],
      },
      {
        name: 'Technical manual',
        goal: 'Basic structural sizing and construction details.',
        blocks: [
          {
            h: 'Loads and dimensions',
            items: [
              'Loads: consider roof weight, wind (on the coast it can exceed 150 km/h in a hurricane) and earthquakes (Honduras has moderate seismic activity).',
              'Bamboo beams: minimum diameter 8-10 cm, spans no greater than 2.5-3 m without intermediate support; for pine use a minimum 5x10 cm section (2x4 inch).',
              'Roof pitch: 30-45 degrees for tropical rain; avoid pitches under 25 degrees.',
            ],
          },
          {
            h: 'Joints and protection',
            items: [
              'Bamboo joints: fill the internode with cement or mud mortar at bolted joints; cut at the node.',
              'Bamboo treatment: soak in a borax and boric acid solution (5% total) for 24-48 h, or cure by water immersion.',
              'Foundation: stone or concrete footings of 40x40x40 cm under each post, above the local flood level.',
            ],
          },
        ],
        warn: 'For permanent buildings consult a local master builder or engineer, especially in seismic or flood-prone zones.',
      },
    ],
  },
  {
    id: 'agua',
    icon: '💧',
    title: 'Water, Sanitation & Climate',
    subtitle: 'Filters, gravity showers, rain catchment, heat and humidity',
    levels: [
      {
        name: 'Extreme emergency',
        goal: 'Find and make water safe with almost nothing.',
        blocks: [
          {
            h: 'Where to find water',
            items: [
              'Springs (ojos de agua) and high creeks, upstream of communities, animals and crops, are better than big rivers.',
              'Rain collected with banana leaves, tarps or clean plastic sheets.',
              'Green coconut: coconut water as a safe emergency drink (does not replace water in quantity).',
            ],
          },
          {
            h: 'Disinfection',
            items: [
              'Boiling: 1 minute at a rolling boil (3 minutes above 2,000 m). The safest method.',
              'Chlorine: 2 drops of unscented bleach (5-6%) per liter of clear water, wait 30 minutes.',
              'Sun (SODIS): clear PET bottle full, 6 hours in full sun (up to 2 days if cloudy); water must be clear.',
            ],
          },
        ],
        warn: 'A cloth filter does not kill microbes: filtering is not the same as disinfecting. Never drink from puddles with livestock or from sewage water.',
      },
      {
        name: 'Basic tools',
        goal: 'Homemade filter, gravity shower and basic rain collection.',
        blocks: [
          {
            h: 'Sand and charcoal filter',
            items: [
              'Use a barrel, bucket or cut bottle with a hole at the bottom. Layers from bottom up: cloth, crushed charcoal, fine sand, coarse sand, gravel.',
              'Use charcoal from natural (untreated) wood. Rinse the sand until the water runs clear.',
              'After filtering, boil or chlorinate the water: the filter removes mud and some parasites but does not guarantee disinfection.',
            ],
          },
          {
            h: 'Gravity shower',
            items: [
              'A barrel or bucket raised 2 m with a tap or a hose with holes; in the sun it warms in 3-4 hours.',
              'Over a floor of stones or boards, draining to a soak pit far from drinking water.',
            ],
          },
          {
            h: 'Catchment',
            items: [
              'A bamboo half-pipe gutter with a slight slope, ending in a covered container.',
              'Discard the first 10-15 minutes of each rain (it washes the roof).',
            ],
          },
        ],
      },
      {
        name: 'Semi-advanced',
        goal: 'Storage, sanitation and disease control systems.',
        blocks: [
          {
            h: 'Storage and quality',
            items: [
              'Closed tank with a lid; no light and no mosquitoes. Clean every 6 months with diluted bleach.',
              'Rainwater: 1 mm of rain on 1 m2 of roof is 1 liter. Clean palm or zinc roofs are preferable to asbestos or roofs with residues.',
              'Dengue and mosquitoes (Aedes): cover containers, change vase water and remove tires holding standing water.',
            ],
          },
          {
            h: 'Sanitation',
            items: [
              'Dry composting latrine (letrina abonera): separate urine from feces; cover with ash or lime and compost 6-12 months before using on trees (not on vegetables).',
              'Pit latrine: at least 30 m from any water source and with the bottom 1.5 m above the water table.',
              'Wash hands with soap or ash after using the latrine and before cooking.',
            ],
          },
          {
            h: 'Oral rehydration (diarrhea)',
            items: [
              'Homemade solution: 1 liter of boiled and cooled water, 6 level teaspoons of sugar and half a teaspoon of salt. Give in frequent sips.',
            ],
          },
        ],
      },
      {
        name: 'Long-term permanence',
        goal: 'Safe water all year, even in the canicula and dry season.',
        blocks: [
          {
            h: 'Spring capture',
            items: [
              'Spring box (caja de captacion): protect the source with a stone or concrete box, an outlet pipe and a fence to keep animals out.',
              'By gravity: carry the water by hose or pipe to a lower tank; the drop gives the pressure.',
              'Protect the watershed: reforest around the spring and avoid crops or livestock upstream.',
            ],
          },
          {
            h: 'Climate and comfort',
            items: [
              'Heat: house with a high roof, long eaves, opposite windows and shade trees on the west; work early and rest from 11:00 to 15:00.',
              'Humidity and mold: raise everything off the floor, ventilate, sun-dry and store clothes and grain in closed containers with ash or lime.',
              'Rainy season: drainage ditches and a reserve of dry firewood under cover.',
            ],
          },
        ],
      },
      {
        name: 'Technical manual',
        goal: 'Catchment calculation, slow filtration and hydraulic systems.',
        blocks: [
          {
            h: 'Rain catchment calculation',
            items: [
              'Volume (m3) = roof area (m2) x rainfall (m) x efficiency (0.8). Ex.: 40 m2 x 1.2 m x 0.8 = 38 m3 per year.',
              'Dry-season reserve: people x 20 liters x dry days. Ex.: 5 x 20 x 150 = 15,000 liters.',
              'Annual rainfall varies from ~800 mm in the Dry Corridor to over 3,000 mm on the north coast; use data for your area.',
            ],
          },
          {
            h: 'Slow sand filter',
            items: [
              'Sand with effective size 0.15-0.35 mm, depth 0.6-1 m, hydraulic loading 0.1-0.2 m/h.',
              'The biological layer (schmutzdecke) takes 2-3 weeks to form; do not let it dry out and clean by scraping 1-2 cm.',
              'Even so, disinfect the final water with chlorine or boiling.',
            ],
          },
          {
            h: 'Pumping without a motor',
            items: [
              'Hydraulic ram pump: uses falling water to lift a portion to a higher tank, with no electricity.',
            ],
          },
        ],
        warn: 'Any water system serving several families must be tested and analyzed (coliforms) before you depend on it.',
      },
    ],
  },
  {
    id: 'herr',
    icon: '🪢',
    title: 'Tools, Fauna & Utilities',
    subtitle: 'Knots, traps, fire in humidity and food preservation',
    levels: [
      {
        name: 'Extreme emergency',
        goal: 'Three knots, fire and animal food with no equipment.',
        blocks: [
          {
            h: 'Three knots that save',
            items: [
              'Square knot: joins two ropes of the same thickness (right over left, then left over right).',
              'Bowline: a loop that does not slip, to tie to a tree or for rescue.',
              'Clove hitch: fixes a rope to a post and is the base of lashings.',
            ],
          },
          {
            h: 'Fire and food',
            items: [
              'Ocote (resinous pine): splinters from the center of the trunk or dry branches burn even when damp.',
              'Look for dry wood: dead branches still on the tree, not those on the ground. Snap them: if they crack dry, they work.',
              'Insects and easy fauna: eggs, snails, river crabs, fish in pools using a cloth net (boil or roast everything well).',
            ],
          },
        ],
        warn: 'Avoid snakes: fer-de-lance (barba amarilla, Bothrops asper) and coral snakes. Walk with light, wear boots and never put a hand into holes.',
      },
      {
        name: 'Basic tools',
        goal: 'Simple traps, fishing and friction fire.',
        blocks: [
          {
            h: 'Friction fire (high humidity)',
            items: [
              'Bow drill: board and spindle of soft, dry wood like balsa, jicaro or majagua; bow with cord; socket of stone or hardwood.',
              'Tinder: dry coconut fiber, ground inner majagua bark, scraped ocote; keep it in a dry container.',
              'In rain: look for dry logs inside, leaves under rocks, and use pine bark or dry bamboo to get started.',
            ],
          },
          {
            h: 'Traps and fishing',
            items: [
              'Snares: wire or cord on trails of cusuco (armadillo), guatuza, rabbit; check them at dawn.',
              'Deadfall trap (figure 4) for small animals: a stone or log held up by three sticks.',
              'Bamboo fish trap (nasa) for creeks; cast net (atarraya) for rivers.',
            ],
          },
        ],
      },
      {
        name: 'Semi-advanced',
        goal: 'Food preservation without refrigeration and better tools.',
        blocks: [
          {
            h: 'Preservation',
            items: [
              'Sun drying: thin slices of plantain, mango, cassava; meat in strips (cecina/tasajo) with salt, dried 2-3 days in sun or smoke.',
              'Salt: salted and dried fish; use 1 part salt to 4-5 parts fish.',
              'Smoking: a shed with cold smoke from hardwood (not resinous) for 1-3 days.',
              'Sugar: honey or rapadura (cane sugar) preserve fruit in thick syrup.',
            ],
          },
          {
            h: 'Tools',
            items: [
              'Sharpen the machete with a stone and keep a constant angle; store it dry and oiled with oil or tallow.',
              'Axe, adze and bone or sharpened-stone knife for fine work.',
              'Braided cordage of cabuya, majagua or pita: 3 braided strands resist many times more than one.',
            ],
          },
        ],
      },
      {
        name: 'Long-term permanence',
        goal: 'Animal husbandry and sustainable production.',
        blocks: [
          {
            h: 'Domestic fauna',
            items: [
              'Native chickens: eggs and meat; raised coop with ventilation and nest boxes; feed with grain and scraps.',
              'Stingless bees (meliponas) and common bees: honey and pollination.',
              'Fish: tilapia in a pond or tank with clean water and shade.',
              'Pigs and goats: depending on terrain and available feed, with a pen and manure management.',
            ],
          },
          {
            h: 'Responsible hunting',
            items: [
              'Respect closed seasons and protected species (iguana, deer, paca and others are regulated by ICF).',
              'Take only what you need and use the whole animal.',
              'Keep a record of what you catch so you do not deplete the area.',
            ],
          },
        ],
      },
      {
        name: 'Technical manual',
        goal: 'Full criteria for preservation, safety and hygiene.',
        blocks: [
          {
            h: 'Food safety',
            items: [
              'Danger zone: between 5 and 60 degrees Celsius bacteria multiply fast; do not leave cooked food out more than 2 hours (1 hour in great heat).',
              'Meat: cook to an internal temperature of at least 74 degrees (without a thermometer, until no pink remains).',
              'Drying: final moisture must be below 15-20% (food is brittle); store in closed containers with ash.',
              'Salting: 20-25% salt relative to meat weight for long preservation.',
            ],
          },
          {
            h: 'Health and dangerous fauna',
            items: [
              'Snakebite: immobilize the limb, stay calm, do not cut or suck, get quickly to a health center with antivenom.',
              'Mosquitoes: dengue, malaria and chikungunya; use a mosquito net, long clothes and remove standing water.',
              'Ticks and chiggers: check the body every night and remove with tweezers, taking care not to leave the head.',
            ],
          },
        ],
        warn: 'Food safety is as important as getting the food: food poisoning without medical care can be fatal.',
      },
    ],
  },
];

export default en;
