// Contenido en español. Estructura: capítulos -> 5 niveles -> bloques con viñetas.
const es = [
  {
    id: 'agri',
    icon: '🌽',
    title: 'Agricultura Tropical y Siembra Hondureña',
    subtitle: 'Maíz, frijol, yuca, ayote, plátano, camote, miltomate y frutales',
    levels: [
      {
        name: 'Emergencia extrema',
        goal: 'Sembrar algo hoy que dé comida en semanas o meses, sin herramientas ni semillas compradas.',
        blocks: [
          {
            h: 'Qué sembrar con cero recursos',
            items: [
              'Camote (batata): corta guías (bejucos) de 30 cm de una mata existente, entiérralas en diagonal dejando 2-3 nudos bajo tierra. Da raíz en 3-5 meses y las hojas tiernas cocidas también se comen.',
              'Yuca: estacas de tallo maduro de 25-30 cm, enterradas en pie o inclinadas con 2-3 yemas bajo tierra. Cosecha a los 8-12 meses, pero puedes dejarla en el suelo como "bodega viva".',
              'Guineo/plátano: separa un hijo (colino) con un palo afilado o con las manos y trasplántalo a un hoyo del ancho de tu brazo.',
              'Semillas de lo que comes: ayote (calabaza), miltomate, chile, papaya y frijol de tu último plato crudo sirven si no estaban cocidos ni son híbridos de bolsa.',
            ],
          },
          {
            h: 'Dónde y cuándo',
            items: [
              'Usa un palo puntiagudo (coa improvisada) para hacer hoyos: no necesitas arar.',
              'Siembra al inicio de lluvias (mayo-junio) o en postrera (agosto-septiembre). En época seca solo siembra junto a una naciente o río.',
              'Evita orillas de río que crecen y laderas muy inclinadas sin cubierta: huracanes y deslaves se llevan todo.',
            ],
          },
        ],
        warn: 'La yuca amarga cruda, los frijoles crudos y el piñón (Jatropha) son tóxicos: cocina siempre bien y nunca comas semillas desconocidas.',
      },
      {
        name: 'Herramientas básicas',
        goal: 'Montar una milpa familiar con machete, azadón y espeque (coa).',
        blocks: [
          {
            h: 'La milpa: maíz + frijol + ayote',
            items: [
              'Maíz: 2-3 granos por postura, 40-50 cm entre posturas y 80-100 cm entre surcos, a 5 cm de profundidad. Cosecha a los 90-120 días.',
              'Frijol: sembrado entre las matas de maíz cuando este tiene unos 30-40 cm; usa el tallo del maíz como tutor y fija nitrógeno al suelo. Ciclo de 70-90 días.',
              'Ayote: en los bordes cada 2 m; sus hojas grandes cubren el suelo, reducen malezas y retienen humedad.',
            ],
          },
          {
            h: 'Calendario básico por época',
            items: [
              'Primera (siembra mayo-junio con las primeras lluvias, cosecha septiembre-octubre): maíz, plátano, yuca, ayote.',
              'Canícula (mediados de julio a mediados de agosto, pausa seca): no siembres nada nuevo, aporca y deshierba para conservar humedad.',
              'Postrera (agosto-septiembre, cosecha diciembre-enero): frijol y maíz; es la época segura del frijol en muchas zonas.',
              'Apante (noviembre-diciembre en zonas húmedas o con humedad residual): frijol en terreno que conserva humedad.',
              'Época seca (diciembre-abril): riego manual de hortalizas pequeñas, miltomate y chile cerca del agua.',
            ],
          },
          {
            h: 'Frijol tapado',
            items: [
              'Método tradicional: esparcir el frijol sobre el rastrojo o monte cortado y cubrirlo con la propia vegetación. Requiere poco trabajo y funciona en postrera/apante.',
            ],
          },
        ],
      },
      {
        name: 'Semi-avanzado',
        goal: 'Aumentar la cosecha y proteger el suelo de las lluvias tropicales.',
        blocks: [
          {
            h: 'Suelo y abono',
            items: [
              'Barreras en contorno: siembra zacate vetiver, piñuela o franjas de tallos a nivel (con un nivel en A hecho de tres palos) para frenar la erosión en ladera.',
              'Abono orgánico fermentado (bocashi): capas de tierra, estiércol, cascarilla/cáscara de café o arroz, ceniza, hojarasca y melaza; voltear una vez al día y estará listo en 15-20 días.',
              'Abonos verdes: frijol terciopelo (Mucuna) y gandul (Cajanus) fijan nitrógeno y cubren el suelo; la mucuna cruda es tóxica y sus vainas pican.',
            ],
          },
          {
            h: 'Asociación y rotación',
            items: [
              'Rota familias: maíz (gramínea) -> frijol (leguminosa) -> raíces (yuca/camote) -> ayote. Nunca repitas la misma planta en el mismo lugar más de 2 ciclos.',
              'Miltomate y chile: almácigo 25-30 días, trasplante en el inicio de la época con sombra parcial; asociarlos con albahaca o zacate limón reduce plagas.',
              'Guarda semilla: elige los mejores 10-20 elotes/frutos, seca bajo sombra aireada y almacena en botellas plásticas selladas con ceniza.',
            ],
          },
        ],
      },
      {
        name: 'Permanencia a largo plazo',
        goal: 'Convertir el terreno en un sistema que se sostenga solo por años.',
        blocks: [
          {
            h: 'Sistemas agroforestales',
            items: [
              'Huerto mixto: aguacate, mango, jocote, nance, marañón, cítricos, papaya y cacao en distintos estratos; plátano como sombra temporal de las plantas jóvenes.',
              'Cercas vivas de madreado (madero negro, Gliricidia): estacas que enraízan, dan poste, forraje y abono verde.',
              'Café y cacao bajo sombra de guama (Inga) en zonas de ladera y altura media.',
            ],
          },
          {
            h: 'Almacenamiento y seguridad de semilla',
            items: [
              'Silo metálico o barril sellado: el grano seco (13-14% de humedad) almacenado sin aire evita el gorgojo hasta por un año o más.',
              'Banco de semillas familiar: 3 reservas de cada cultivo en lugares distintos (casa, escondite, vecino de confianza).',
              'Guarda el 30% de lo que cosechas como reserva contra mala cosecha, huracán o canícula severa.',
            ],
          },
        ],
      },
      {
        name: 'Manual técnico',
        goal: 'Criterios completos: suelo, clima, calendario y capacidad del terreno.',
        blocks: [
          {
            h: 'Diagnóstico del suelo',
            items: [
              'Textura: toma un puñado húmedo; si hace cinta larga es arcilloso, si se desmorona es arenoso, si es suave y se parte es franco. Los valles de Sula y Aguán tienen aluviales fértiles; en ladera predominan suelos ácidos y delgados.',
              'pH: frijol y maíz prefieren 5.8-6.8. En suelos ácidos aplica ceniza y cal agrícola; en alcalinos, materia orgánica.',
              'Prueba de agua: cava un hoyo de 30 cm y llénalo; si el agua tarda más de 4 horas en bajar hay mal drenaje y debes hacer camas elevadas.',
            ],
          },
          {
            h: 'Planificación y capacidad',
            items: [
              'Necesidad calórica: ~2,500 kcal/persona/día = ~912,000 kcal/año. El maíz seco aporta ~3,500 kcal/kg; con 1,000-1,500 kg/ha de rendimiento bajo en insumos, una familia de 5 requiere del orden de 1.5-2 ha entre granos, raíces y hortalizas (estimación orientativa).',
              'Agua: maíz y frijol necesitan 400-600 mm bien distribuidos durante el ciclo; en el Corredor Seco prioriza variedades criollas de ciclo corto y la siembra de postrera.',
              'Huracanes (junio-noviembre, con pico septiembre-octubre): reparte cultivos entre sitios altos y bajos, mantén raíces y guineo como reserva bajo tierra y cosecha anticipada del plátano cuando hay aviso.',
            ],
          },
        ],
        warn: 'Los números son rangos de referencia: cada finca (altura, lluvia, suelo) requiere ajustar con la observación local y el conocimiento de vecinos agricultores.',
      },
    ],
  },
  {
    id: 'bota',
    icon: '🌿',
    title: 'Botánica de Supervivencia en Honduras',
    subtitle: 'Plantas comestibles, venenosas y medicina natural local',
    levels: [
      {
        name: 'Emergencia extrema',
        goal: 'Reconocer unas pocas plantas seguras y evitar las peligrosas.',
        blocks: [
          {
            h: 'Regla de oro',
            items: [
              'Come solo lo que identificas al 100%. No uses la "prueba de comestibilidad" con plantas desconocidas: puede matarte.',
              'Frutos que reconoces: guayaba, mango, jocote, nance, mamón (limoncillo), marañón (pulpa), papaya, guineo, coco, anona, guanábana, aguacate.',
              'Hojas y brotes que se cocinan: bledo, chipilín, quilete/hierba mora (siempre cocida y con agua cambiada), hojas de camote, palmito (cogollo de palma).',
            ],
          },
          {
            h: 'Señales de peligro',
            items: [
              'Savia lechosa o picante en la boca, olor a almendra amarga, frutos muy brillantes y solitarios en la orilla de playa, hojas con espinas que irritan.',
              'Manzanillo de playa (Hippomane mancinella) en la costa caribeña: no comas el fruto ni te refugies bajo el árbol cuando llueve; su savia quema la piel.',
              'Higuerilla (ricino) y piñón (Jatropha): sus semillas son altamente tóxicas.',
            ],
          },
        ],
        warn: 'En caso de ingesta sospechosa: provoca el vómito solo si está consciente y comió hace poco; bebe agua limpia y busca atención médica.',
      },
      {
        name: 'Herramientas básicas',
        goal: 'Recolectar alimento silvestre con técnicas de preparación segura.',
        blocks: [
          {
            h: 'Alimentos nativos',
            items: [
              'Ojushte (ramón, Brosimum alicastrum): las semillas hervidas o tostadas y molidas dan harina nutritiva en época seca.',
              'Palmito y corozo: el cogollo de ciertas palmas es comestible; el corozo se hierve o se tuesta.',
              'Tuna (nopal) y pitahaya: frutos y cladodios sin espinas; flamear para quitar espinas.',
              'Yuca silvestre y quequeisque (malanga) solo cocidos: crudos irritan y dan toxinas (oxalatos/cianuro).',
            ],
          },
          {
            h: 'Medicina natural básica (uso tradicional)',
            items: [
              'Zacate limón (Cymbopogon citratus): infusión para resfríos, náuseas y fiebre; es de las más seguras.',
              'Llantén (Plantago major): hojas machacadas como cataplasma en heridas y picaduras; infusión para inflamación leve.',
              'Hombre grande (Quassia amara): corteza amarga en infusión suave tradicionalmente para fiebres y digestión; dosis altas son tóxicas.',
              'Apazote (Dysphania ambrosioides): hojas en alimentos y té suave como desparasitante tradicional; el aceite concentrado es tóxico y se evita en embarazo.',
              'Mozote (Triumfetta/Bidens): decocción de hojas en uso tradicional para diarrea y heridas.',
            ],
          },
        ],
      },
      {
        name: 'Semi-avanzado',
        goal: 'Sistema de identificación y preparación para una dieta silvestre sostenible.',
        blocks: [
          {
            h: 'Método de identificación',
            items: [
              'Fíjate en 5 rasgos: hoja (borde, disposición), tallo, flor/fruto, savia y olor. Compara con alguien que ya la use en tu comunidad.',
              'Comida de temporada: mango, jocote y marañón (abril-julio); guayaba y mamón (mayo-septiembre); nance y mamón en época de lluvia temprana.',
              'Siempre cocina verduras silvestres con agua y desecha el agua de cocción si son de hoja oscura de savia lechosa.',
            ],
          },
          {
            h: 'Venenosas comunes a evitar',
            items: [
              'Castor/higuerilla (Ricinus), piñón (Jatropha curcas), frutos de codo de fraile/chilca (Cascabela thevetia), flores de adelfa (Nerium), dieffenbachia (cola de gato).',
              'Hongos silvestres: no los consumas sin experto local; pocos son comestibles y muchos mortales.',
              'Frijoles y habas crudos o mal cocidos causan intoxicación: hierve a fuego fuerte al menos 10 minutos.',
            ],
          },
        ],
      },
      {
        name: 'Permanencia a largo plazo',
        goal: 'Huerto de plantas útiles: comida, farmacia y fibra al alcance.',
        blocks: [
          {
            h: 'Botiquín vivo',
            items: [
              'Siembra cerca de la casa: zacate limón, llantén, apazote, hierbabuena, sábila (aloe), moringa, manzanilla, orégano y albahaca.',
              'Prepara tinturas y ungüentos: aceite vegetal + hojas secas de llantén o caléndula, a baño maría 2 horas, filtrar y añadir cera.',
              'Poda y cosecha por la mañana; seca a la sombra para conservar aceites esenciales.',
            ],
          },
          {
            h: 'Comida silvestre cultivada',
            items: [
              'Chaya, chipilín, moringa y quilete como verduras perennes que producen todo el año con cuidado mínimo.',
              'Árboles de ojushte, guanábana, nance y marañón en cercos y bordes para alimento y sombra.',
              'Mantén un registro (cuaderno) de lo que sirve a cada familia y qué dosis usan.',
            ],
          },
        ],
      },
      {
        name: 'Manual técnico',
        goal: 'Criterios farmacológicos y ecológicos para uso responsable.',
        blocks: [
          {
            h: 'Seguridad en fitoterapia',
            items: [
              'Dosis: tés suaves de 1-2 cucharadas de hoja fresca por taza, 1-3 tazas al día por pocos días. Productos amargos o concentrados (hombre grande, apazote) requieren dosis mínimas y descanso.',
              'Contraindicaciones: embarazo, lactancia, niños pequeños, enfermedad hepática o renal.',
              'Interacciones: no mezclar plantas con medicinas de farmacia sin consulta.',
            ],
          },
          {
            h: 'Ecología y aprovechamiento',
            items: [
              'Cosecha menos del 30% de una población silvestre y nunca arranques la raíz si no es necesario.',
              'Respeta especies protegidas y vedas; la caoba, la ceiba y los manglares tienen protección legal.',
              'Mapa estacional: registra dónde y cuándo fructifica cada especie en tu zona para planificar el año.',
            ],
          },
        ],
        warn: 'Esta información no sustituye al médico ni al conocimiento de curanderos y promotores de salud locales: úsala solo como apoyo.',
      },
    ],
  },
  {
    id: 'cons',
    icon: '🏕️',
    title: 'Construcción Rústica',
    subtitle: 'Mobiliario con varas, amarres y refugios para lluvia tropical',
    levels: [
      {
        name: 'Emergencia extrema',
        goal: 'Un refugio en horas, sin herramientas, que te mantenga seco.',
        blocks: [
          {
            h: 'Refugio mínimo contra la lluvia',
            items: [
              'Cama elevada: dos troncos paralelos sobre piedras o troncos cruzados para que no te moje el suelo ni te piquen insectos.',
              'Techo inclinado (45 grados) con hojas grandes: palma de manaca, hojas de guineo, bijagua, traslapadas desde abajo hacia arriba.',
              'Apoya un palo largo sobre una horqueta o tronco a 1 m de altura y recuesta ramas a ambos lados (refugio en A).',
            ],
          },
          {
            h: 'Ubicación',
            items: [
              'Lugar elevado y plano, lejos de ríos que crecen, cauces secos y laderas con deslaves.',
              'Revisa que no haya árboles secos o ramas muertas sobre el refugio (viento y huracán).',
              'Ten agua cerca pero no pegada a la orilla del río (mosquitos y crecidas).',
            ],
          },
        ],
        warn: 'En lluvias fuertes un buen drenaje alrededor (zanja pequeña) importa más que un techo bonito.',
      },
      {
        name: 'Herramientas básicas',
        goal: 'Estructura firme con machete y cuerda: refugio, cama y mesa.',
        blocks: [
          {
            h: 'Amarres esenciales',
            items: [
              'Amarre cuadrado: une dos varas en ángulo recto; empieza y termina con ballestrinque, da 3-4 vueltas y 2 vueltas de cierre.',
              'Amarre diagonal: para varas que se cruzan y trabajan como refuerzo (cruces en X).',
              'Amarre en trípode (shear): trípodes y caballetes. Cordaje: bejuco, majagua (corteza de Hibiscus tiliaceus), pita de cabuya o henequén, tiras de corteza.',
            ],
          },
          {
            h: 'Mobiliario con varas',
            items: [
              'Cama: dos largueros de 2 m en bambú o madera, travesaños cada 30 cm y trama de varas finas; patas de 40 cm.',
              'Mesa y banco: cuatro patas con refuerzos cruzados (en X) para evitar que se mueva.',
              'Estante para comida: colgado con cuerda a viga para evitar hormigas y ratones.',
            ],
          },
        ],
      },
      {
        name: 'Semi-avanzado',
        goal: 'Casa de poste y techo de palma resistente a lluvia y viento.',
        blocks: [
          {
            h: 'Materiales locales',
            items: [
              'Pino (ocote): bueno para vigas y tablas; trátalo contra el comején (quema la base o usa aceite quemado).',
              'Bambú/guadua: ligero, fuerte y de rápido crecimiento; córtalo en luna menguante y época seca, cúralo 3-4 semanas en pie con hojas y trátalo con borax.',
              'Teca: muy durable, resistente a insectos; árbol de plantaciones comunes en el país.',
              'Madreado/madero negro: postes que se enraízan y forman cerca viva.',
              'Mangle: madera muy resistente a la pudrición; solo en emergencia real, es protegido por ley.',
            ],
          },
          {
            h: 'Techo y paredes',
            items: [
              'Techo de palma (manaca, botán o guano): pendiente de 45 grados y alero de 60-80 cm, atado en capas de abajo hacia arriba.',
              'Paredes de bahareque: entramado de varas o bambú relleno con barro, paja y estiércol; encalar o proteger con alero y base de piedra.',
              'Piso elevado 50 cm (barbacoa) para evitar inundación y humedad.',
            ],
          },
        ],
      },
      {
        name: 'Permanencia a largo plazo',
        goal: 'Vivienda resistente a huracanes, humedad y plagas durante años.',
        blocks: [
          {
            h: 'Principios anti-huracán',
            items: [
              'Forma baja y compacta con techo a cuatro aguas; evita grandes voladizos sin refuerzo.',
              'Postes enterrados 80-100 cm, con concreto o piedra y base que no se pudra; amarra poste a viga con pernos, cuerda o clavos cruzados.',
              'Arriostramiento diagonal en todas las paredes y techo; vigas bien atadas a los postes.',
              'Siembra rompevientos (guineo, bambú, madreado) a 10-15 m de la casa, pero no árboles altos que puedan caer sobre ella.',
            ],
          },
          {
            h: 'Durabilidad',
            items: [
              'Base de piedra o concreto, que la madera no toque la tierra; cumbrera protegida con zinc, teja o palma bien tupida.',
              'Cámbiale la palma cada 5-8 años; trata la madera con aceite quemado o ceniza y cal.',
              'Cocina separada de la casa y ventilación cruzada con ventanas altas.',
            ],
          },
        ],
      },
      {
        name: 'Manual técnico',
        goal: 'Dimensionamiento estructural básico y detalles constructivos.',
        blocks: [
          {
            h: 'Cargas y dimensiones',
            items: [
              'Cargas: considera el peso del techo, el viento (en zonas costeras puede superar 150 km/h en huracán) y el sismo (Honduras tiene actividad sísmica moderada).',
              'Vigas de bambú: diámetro mínimo 8-10 cm, luces no mayores a 2.5-3 m sin apoyo intermedio; para pino use sección mínima de 5x10 cm (2x4 pulgadas).',
              'Pendiente del techo: 30-45 grados para lluvia tropical; evita pendientes menores a 25 grados.',
            ],
          },
          {
            h: 'Uniones y protección',
            items: [
              'Uniones de bambú: llena el entrenudo con mortero de cemento o barro en las uniones con perno; corta en la dirección del nudo.',
              'Tratamiento del bambú: inmersión en solución de bórax y ácido bórico (5% total) durante 24-48 h o curado por inmersión en agua.',
              'Cimentación: zapatas de piedra o concreto de 40x40x40 cm bajo cada poste, por encima del nivel de inundación local.',
            ],
          },
        ],
        warn: 'Para edificios de uso permanente consulta con un maestro de obra o ingeniero local, sobre todo en zonas sísmicas o inundables.',
      },
    ],
  },
  {
    id: 'agua',
    icon: '💧',
    title: 'Agua, Saneamiento y Clima',
    subtitle: 'Filtros, duchas por gravedad, captación de lluvia, calor y humedad',
    levels: [
      {
        name: 'Emergencia extrema',
        goal: 'Conseguir y hacer potable agua con casi nada.',
        blocks: [
          {
            h: 'Dónde encontrar agua',
            items: [
              'Nacientes (ojos de agua) y quebradas altas, aguas arriba de comunidades, animales y cultivos, son mejores que ríos grandes.',
              'Lluvia recogida con hojas de guineo, lonas o plásticos limpios.',
              'Coco verde: agua de coco como bebida segura de emergencia (no sustituye el agua en cantidad).',
            ],
          },
          {
            h: 'Desinfección',
            items: [
              'Hervir: 1 minuto a hervor fuerte (3 minutos si estás sobre 2,000 m). Es el método más seguro.',
              'Cloro: 2 gotas de cloro sin aroma (5-6%) por litro de agua clara, esperar 30 minutos.',
              'Sol (SODIS): botella PET transparente llena, 6 horas a pleno sol (hasta 2 días con nubes); agua clara.',
            ],
          },
        ],
        warn: 'Un filtro de tela no mata microbios: filtrar no es lo mismo que desinfectar. Nunca bebas agua de charcos con ganado o aguas negras.',
      },
      {
        name: 'Herramientas básicas',
        goal: 'Filtro casero, ducha por gravedad y recolección básica de lluvia.',
        blocks: [
          {
            h: 'Filtro de arena y carbón',
            items: [
              'Usa un barril, balde o botella cortada con agujero abajo. Capas de abajo hacia arriba: tela, carbón vegetal triturado, arena fina, arena gruesa, grava.',
              'Carbón de madera natural (no tratada). Lava la arena hasta que el agua salga clara.',
              'Después del filtrado hierve o clora el agua: el filtro quita barro y parte de los parásitos, no garantiza la desinfección.',
            ],
          },
          {
            h: 'Ducha por gravedad',
            items: [
              'Un barril o balde elevado a 2 m con una llave o manguera con agujeros; al sol se calienta en 3-4 horas.',
              'Sobre el piso de piedra o tablas con drenaje a un pozo de absorción lejos del agua de beber.',
            ],
          },
          {
            h: 'Captación',
            items: [
              'Canal de bambú partido por la mitad, con pendiente leve, que desemboca en un recipiente tapado.',
              'Desecha los primeros 10-15 minutos de cada lluvia (limpian el techo).',
            ],
          },
        ],
      },
      {
        name: 'Semi-avanzado',
        goal: 'Sistemas de almacenamiento, saneamiento y control de enfermedades.',
        blocks: [
          {
            h: 'Almacenamiento y calidad',
            items: [
              'Tanque cerrado y con tapa; sin luz ni mosquitos. Limpia cada 6 meses con cloro diluido.',
              'Agua de lluvia: 1 mm de lluvia en 1 m2 de techo es 1 litro. Techos de palma o zinc limpios son preferibles a asbesto o techos con residuos.',
              'Dengue y zancudos (Aedes): tapa recipientes, cambia el agua de floreros y elimina llantas con agua estancada.',
            ],
          },
          {
            h: 'Saneamiento',
            items: [
              'Letrina abonera seca: separa orina de heces; cubre con ceniza o cal y compostea 6-12 meses antes de usar en árboles (no en hortalizas).',
              'Letrina de pozo: al menos 30 m de cualquier fuente de agua y con base a 1.5 m sobre el nivel freático.',
              'Lava las manos con jabón o ceniza después de usar la letrina y antes de cocinar.',
            ],
          },
          {
            h: 'Rehidratación oral (diarrea)',
            items: [
              'Suero casero: 1 litro de agua hervida y enfriada, 6 cucharaditas rasas de azúcar y media cucharadita de sal. Dar a sorbos frecuentes.',
            ],
          },
        ],
      },
      {
        name: 'Permanencia a largo plazo',
        goal: 'Agua segura todo el año, incluso en canícula y época seca.',
        blocks: [
          {
            h: 'Captación de nacientes',
            items: [
              'Caja de captación (cajita de agua): protege el nacimiento con una caja de piedra o concreto, tubería de salida y cerca que evite animales.',
              'Por gravedad: conduce el agua con manguera o tubería a un tanque más abajo; el desnivel da la presión.',
              'Protege la cuenca: reforesta alrededor de la naciente y evita cultivos o ganado aguas arriba.',
            ],
          },
          {
            h: 'Clima y confort',
            items: [
              'Calor: casa con techo alto, alero largo, ventanas opuestas y árboles de sombra al oeste; trabaja temprano y descansa de 11:00 a 15:00.',
              'Humedad y moho: eleva todo del suelo, ventila, seca al sol y guarda ropa y granos en recipientes cerrados con ceniza o cal.',
              'Época de lluvias: zanjas de drenaje y reserva leña seca bajo techo.',
            ],
          },
        ],
      },
      {
        name: 'Manual técnico',
        goal: 'Cálculo de captación, filtración lenta y sistemas hidráulicos.',
        blocks: [
          {
            h: 'Cálculo de captación de lluvia',
            items: [
              'Volumen (m3) = área del techo (m2) x lluvia (m) x eficiencia (0.8). Ej.: 40 m2 x 1.2 m x 0.8 = 38 m3 al año.',
              'Reserva para época seca: personas x 20 litros x días secos. Ej.: 5 x 20 x 150 = 15,000 litros.',
              'La lluvia anual varía entre ~800 mm en el Corredor Seco y más de 3,000 mm en la costa norte; usa datos de tu zona.',
            ],
          },
          {
            h: 'Filtro lento de arena',
            items: [
              'Arena de tamaño efectivo 0.15-0.35 mm, profundidad 0.6-1 m, carga hidráulica 0.1-0.2 m/h.',
              'La capa biológica (schmutzdecke) tarda 2-3 semanas en formarse; no la dejes secar y limpia raspando 1-2 cm.',
              'Aún así, desinfecta el agua final con cloro o hervor.',
            ],
          },
          {
            h: 'Bombeo sin motor',
            items: [
              'Bomba de ariete hidráulico: aprovecha caída de agua para subir una parte a un tanque más alto, sin electricidad.',
            ],
          },
        ],
        warn: 'Cualquier sistema de agua para varias familias debe probarse y analizarse (coliformes) antes de depender de él.',
      },
    ],
  },
  {
    id: 'herr',
    icon: '🪢',
    title: 'Herramientas, Fauna y Utilidades',
    subtitle: 'Nudos, trampas, fuego en humedad y conservación de alimentos',
    levels: [
      {
        name: 'Emergencia extrema',
        goal: 'Tres nudos, fuego y comida de origen animal sin equipo.',
        blocks: [
          {
            h: 'Tres nudos que salvan',
            items: [
              'Nudo cuadrado: une dos cuerdas del mismo grosor (derecha sobre izquierda y luego izquierda sobre derecha).',
              'As de guía: lazo que no se corre, para amarrar a un árbol o rescatar.',
              'Ballestrinque: fija una cuerda a un poste y es base de amarres.',
            ],
          },
          {
            h: 'Fuego y comida',
            items: [
              'Ocote (pino resinoso): astillas del centro del tronco o ramas secas arden aun con humedad.',
              'Busca leña seca: ramas muertas aún en el árbol, no las del suelo. Rómpelas: si suenan seco, sirven.',
              'Insectos y fauna fácil: huevos, caracoles, cangrejos de río, pescado en charcos con malla de tela (hervir o asar todo bien).',
            ],
          },
        ],
        warn: 'Evita serpientes: barba amarilla (Bothrops asper) y coral. Camina con luz, usa botas y no metas la mano en huecos.',
      },
      {
        name: 'Herramientas básicas',
        goal: 'Trampas simples, pesca y fuego por fricción.',
        blocks: [
          {
            h: 'Fuego por fricción (alta humedad)',
            items: [
              'Taladro de arco: tabla y huso de madera blanda y seca como balsa, jícaro o majagua; arco con cordón; cuenca de piedra o madera dura.',
              'Yesca: fibra de coco seca, corteza interna de majagua molida, ocote raspado; guárdala en un recipiente seco.',
              'En lluvia: busca troncos secos al interior, hojas bajo roca, usa corteza de pino o bambú seco para empezar.',
            ],
          },
          {
            h: 'Trampas y pesca',
            items: [
              'Lazos: alambre o cordón en senderos de cusuco (armadillo), guatuza, conejo; revísalos al amanecer.',
              'Trampa de caída (figura 4) para animales pequeños: piedra o tronco sostenido por tres palos.',
              'Nasa de bambú para peces en quebradas; atarraya (red de lanzar) para ríos.',
            ],
          },
        ],
      },
      {
        name: 'Semi-avanzado',
        goal: 'Conservación de alimentos sin refrigeración y herramientas mejores.',
        blocks: [
          {
            h: 'Conservación',
            items: [
              'Secado al sol: rodajas finas de plátano, mango, yuca; carne en tiras (cecina/tasajo) con sal, secada 2-3 días con sol o ahumado.',
              'Sal: pescado salado y secado (bacalao casero); usa 1 parte de sal por 4-5 de pescado.',
              'Ahumado: cobertizo con humo frío de leña dura (no resinosa) 1-3 días.',
              'Dulce: miel o rapadura (dulce de caña) conservan frutas en almíbar espeso.',
            ],
          },
          {
            h: 'Herramientas',
            items: [
              'Afila el machete con piedra y mantén un ángulo constante; guárdalo seco y engrasado con aceite o sebo.',
              'Hacha, azuela y cuchillo de hueso o piedra afilada para trabajos finos.',
              'Cordaje trenzado de cabuya, majagua o pita: 3 hebras trenzadas resisten muchas veces más que una.',
            ],
          },
        ],
      },
      {
        name: 'Permanencia a largo plazo',
        goal: 'Cría de animales y producción sostenible.',
        blocks: [
          {
            h: 'Fauna doméstica',
            items: [
              'Gallinas criollas: huevos y carne; gallinero elevado con ventilación y nidales; alimentación con granos y desechos.',
              'Abejas sin aguijón (meliponas) y abejas comunes: miel y polinización.',
              'Peces: tilapia en estanque o pila con agua limpia y sombra.',
              'Cerdos y cabras: según el terreno y el alimento disponible, con corral y manejo de estiércol.',
            ],
          },
          {
            h: 'Caza responsable',
            items: [
              'Respeta vedas y especies protegidas (iguana, venado, tepezcuinte y otras tienen regulación del ICF).',
              'Caza solo lo que necesitas y aprovecha todo el animal.',
              'Mantén un registro de lo que capturas para no agotar la zona.',
            ],
          },
        ],
      },
      {
        name: 'Manual técnico',
        goal: 'Criterios completos de conservación, seguridad e higiene.',
        blocks: [
          {
            h: 'Seguridad alimentaria',
            items: [
              'Zona de peligro: entre 5 y 60 grados Celsius las bacterias se multiplican rápido; no dejes comida cocida más de 2 horas (1 hora si hace mucho calor).',
              'Carne: cocina a temperatura interna de al menos 74 grados (sin termómetro, hasta que no haya partes rosadas).',
              'Secado: la humedad final debe ser menor al 15-20% (la comida quebradiza); guarda en recipientes cerrados con ceniza.',
              'Salazón: 20-25% de sal respecto al peso de la carne para conservación larga.',
            ],
          },
          {
            h: 'Salud y fauna peligrosa',
            items: [
              'Mordedura de serpiente: inmoviliza el miembro, mantén la calma, no cortes ni succiones, ve rápido al centro de salud con suero antiofídico.',
              'Zancudos: dengue, malaria y chikungunya; usa mosquitero, ropa larga y elimina agua estancada.',
              'Garrapatas y chiggers: revisa el cuerpo cada noche y retira con pinzas, con cuidado de no dejar la cabeza.',
            ],
          },
        ],
        warn: 'La seguridad de los alimentos es tan importante como conseguirlos: una intoxicación sin atención médica puede ser mortal.',
      },
    ],
  },
];

export default es;
