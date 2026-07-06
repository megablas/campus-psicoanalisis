/* ==========================================================================
   CAMPUS PSICOANÁLISIS · Fuente única de verdad
   data.js — Toda la data del campus en un solo archivo.
   Editar aquí = cambiar todo el sitio. Cualquier página se genera desde esto.
   ==========================================================================
   Convenciones de fecha: { año, mes (1-12), dia }
   tipo de entrada: 'clase' | 'feriado' | 'examen' | 'cierre'
   ========================================================================== */

window.CAMPUS_DATA = (function () {
  'use strict';

  /* ========================================================================
     CONFIGURACIÓN DE LA CÁTEDRA
     ======================================================================== */
  const CONFIG = {
    catedra: 'Psicoanálisis',
    universidad: 'UFLO',
    profesores: ['Blas Rivera', 'Marina Judith Homse'],
    año: 2026,           // año base del programa (para reusar fechas)
    comision: 'Turno Noche / 1',
    diaClase: 1,         // 0=domingo, 1=lunes
    horarioClase: '18:30 a 20:30',
    meetUrl: 'https://meet.google.com/ppm-khgg-ohk',
    // Links externos de Moodle (se conservan del campus actual)
    moodleCurso: 'https://campus.uflo.edu.ar/course/view.php?id=11142',
    foroConsultas: 'https://campus.uflo.edu.ar/mod/forum/view.php?id=1074864',
    foroPresentacion: 'https://campus.uflo.edu.ar/mod/forum/view.php?id=1074511',
  };

  /* ========================================================================
     UNIDADES (con código de color y listado de clases)
     ======================================================================== */
  const UNIDADES = [
    {
      numero: 1,
      titulo: 'Inicios y Referentes',
      subtitulo: 'De Charcot al método catártico',
      desc: 'De Charcot al método catártico de Breuer. La histeria como enigma fundador del psicoanálisis.',
      cita: '“Los histéricos sufren de reminiscencias.”',
      citaAutor: 'Freud y Breuer, Estudios sobre la histeria (1895)',
      href: 'units/unit1.html',
      clases: ['c01', 'c03'],
    },
    {
      numero: 2,
      titulo: 'El Inconsciente',
      subtitulo: 'Sueños, actos fallidos y primera tópica',
      desc: 'Sueños, actos fallidos y primera tópica: el giro que convierte al psicoanálisis en una psicología de la vida anímica.',
      cita: '“La interpretación de los sueños es la vía regia al conocimiento de lo inconsciente.”',
      citaAutor: 'Freud, La interpretación de los sueños (1900)',
      href: 'units/unit2.html',
      clases: ['c04', 'c05'],
    },
    {
      numero: 3,
      titulo: 'Pulsión y Sexualidad',
      subtitulo: 'Sexualidad infantil, Edipo y pulsión',
      desc: 'La sexualidad infantil y la construcción del concepto de pulsión. El complejo de Edipo como estructura.',
      cita: '“La sexualidad humana no se reduce a la reproducción ni espera a la pubertad.”',
      citaAutor: 'A partir de Freud, Tres ensayos (1905)',
      href: 'units/unit3.html',
      clases: ['c07', 'c08', 'c09'],
    },
    {
      numero: 4,
      titulo: 'Clínica, Metapsicología y Cultura',
      subtitulo: 'Transferencia, segunda tópica y malestar',
      desc: 'Transferencia, repetición, pulsión de muerte, segunda tópica y el malestar en la cultura.',
      cita: '“El niño pequeño es polynomialmente perverso.” — también lo es la cultura que lo forma.',
      citaAutor: 'Síntesis del cierre del programa',
      href: 'units/unit4.html',
      clases: ['c10', 'c13', 'c15'],
    },
  ];

  /* ========================================================================
     PROGRAMA / CRONOGRAMA (16 entradas)
     La fecha del sistema (ui.js Dates) decide el estado pasado/actual/próximo.
     tipo: 'clase' | 'feriado' | 'examen' | 'cierre'
     ======================================================================== */
  const PROGRAMA = [
    {
      id: 'c01', orden: 1, tipo: 'clase', unidad: 1,
      fecha: { año: 2026, mes: 3, dia: 16 },
      titulo: 'Surgimiento del inconsciente',
      desc: 'Presentación de la materia. Contexto histórico. La histeria. El descubrimiento del inconsciente.',
      modalidad: 'Clase sincrónica',
      biblio: [
        'Freud, S. (1910). Cinco conferencias sobre psicoanálisis. Conferencia 1.',
        'Freud, S. (1893). "Charcot".',
        'Tallaferro, A. (1985). Curso básico de psicoanálisis. Cap. 1.',
      ],
      href: 'units/clase-01.html',
    },
    {
      id: 'f01', orden: 2, tipo: 'feriado',
      fecha: { año: 2026, mes: 3, dia: 23 },
      titulo: 'Feriado — Día no laborable',
      etiqueta: 'Puente 24 Mar',
    },
    {
      id: 'c03', orden: 3, tipo: 'clase', unidad: 1,
      fecha: { año: 2026, mes: 3, dia: 30 },
      titulo: 'Defensa y conflicto psíquico',
      desc: 'La defensa como operación fundante. El síntoma como formación de compromiso.',
      modalidad: 'Clase sincrónica',
      biblio: [
        'Freud, S. (1895). Estudios sobre la histeria. Cap. I: Comunicación preliminar.',
        'Freud, S. (1894). "Las neuropsicosis de defensa".',
        'Tallaferro, A. (1985). Curso básico de psicoanálisis. Cap. 2.',
      ],
      href: 'units/clase-03.html',
    },
    {
      id: 'c04', orden: 4, tipo: 'clase', unidad: 2,
      fecha: { año: 2026, mes: 4, dia: 6 },
      titulo: 'Interpretación de los sueños',
      desc: 'El sueño como vía regia al inconsciente. Deseo inconsciente. Interpretación.',
      modalidad: 'Clase presencial',
      biblio: [
        'Freud, S. (1900). La interpretación de los sueños. Caps. II y VII.',
        'Freud, S. (1901). "Sobre el sueño".',
      ],
      href: 'units/clase-04.html',
    },
    {
      id: 'c05', orden: 5, tipo: 'clase', unidad: 2,
      fecha: { año: 2026, mes: 4, dia: 13 },
      titulo: 'La primera tópica',
      desc: 'Actos fallidos. La represión como mecanismo de defensa. Primera tópica.',
      modalidad: 'Clase sincrónica',
      biblio: [
        'Freud, S. (1901). Psicopatología de la vida cotidiana. Cap. I.',
        'Freud, S. (1915). "La represión".',
        'Freud, S. (1915). "Lo inconsciente". Caps. II y IV.',
        'Freud, S. (1916-17). Conferencias de introducción al psicoanálisis. Conferencias 5 y 6.',
      ],
      href: 'units/clase-05.html',
    },
    {
      id: 'p1', orden: 6, tipo: 'examen',
      fecha: { año: 2026, mes: 4, dia: 20 },
      titulo: 'Primer Parcial Evaluador',
      desc: 'Evaluación de integración de contenidos correspondientes a las Unidades 1 y 2 de la materia.',
      modalidad: 'Examen presencial',
      biblio: ['Toda la bibliografía obligatoria de las Unidades 1 y 2.'],
      href: 'units/parcial1.html',
    },
    {
      id: 'c07', orden: 7, tipo: 'clase', unidad: 3,
      fecha: { año: 2026, mes: 4, dia: 27 },
      titulo: 'Sexualidad infantil',
      desc: 'La sexualidad en psicoanálisis. Libido. Autoerotismo. Diferencia entre instinto y pulsión.',
      modalidad: 'Clase sincrónica',
      biblio: [
        'Freud, S. (1905). Tres ensayos de teoría sexual. Ensayo I.',
        'Freud, S. (1916-17). Conferencias de introducción al psicoanálisis. Conferencia 7.',
      ],
      href: 'units/clase-07.html',
    },
    {
      id: 'c08', orden: 8, tipo: 'clase', unidad: 3,
      fecha: { año: 2026, mes: 5, dia: 4 },
      titulo: 'Conceptualizar la pulsión',
      desc: 'Concepto de pulsión. Destinos de pulsión. Fijación y regresión.',
      modalidad: 'Clase presencial',
      biblio: [
        'Freud, S. (1915). "Pulsiones y destinos de pulsión".',
        'Freud, S. (1905). Tres ensayos de teoría sexual. Ensayo II.',
      ],
      href: 'units/clase-08.html',
    },
    {
      id: 'c09', orden: 9, tipo: 'clase', unidad: 3,
      fecha: { año: 2026, mes: 5, dia: 11 },
      titulo: 'Comprender Edipo y Castración',
      desc: 'Organización genital infantil. Complejo de Edipo. Angustia de castración.',
      modalidad: 'Clase sincrónica',
      biblio: [
        'Freud, S. (1923). "Organización genital infantil".',
        'Freud, S. (1924). "El sepultamiento del complejo de Edipo".',
        'Freud, S. (1909). "Análisis de la fobia de un niño de cinco años [Caso Hans]". Introducción.',
      ],
      href: 'units/clase-09.html',
    },
    {
      id: 'c10', orden: 10, tipo: 'clase', unidad: 4,
      fecha: { año: 2026, mes: 5, dia: 18 },
      titulo: 'Dimensionar la clínica analítica',
      desc: 'La transferencia. La repetición en análisis. Resistencia.',
      modalidad: 'Clase presencial',
      biblio: [
        'Freud, S. (1905). "Fragmento de análisis de un caso de histeria [Dora]". Introducción.',
        'Freud, S. (1912). "Sobre la dinámica de la transferencia".',
        'Freud, S. (1914). "Recordar, repetir y reelaborar".',
      ],
      href: 'units/clase-10.html',
    },
    {
      id: 'f02', orden: 11, tipo: 'feriado',
      fecha: { año: 2026, mes: 5, dia: 25 },
      titulo: 'Feriado — Revolución de Mayo',
      etiqueta: 'Sin clase',
    },
    {
      id: 'p2', orden: 12, tipo: 'examen',
      fecha: { año: 2026, mes: 6, dia: 1 },
      titulo: 'Segundo Parcial Evaluador',
      desc: 'Evaluación de integración de contenidos correspondientes a las Unidades 3 y 4 de la materia.',
      modalidad: 'Examen presencial',
      biblio: ['Toda la bibliografía obligatoria de las Unidades 3 y 4.'],
    },
    {
      id: 'c13', orden: 13, tipo: 'clase', unidad: 4,
      fecha: { año: 2026, mes: 6, dia: 8 },
      titulo: 'Analizar la segunda tópica',
      desc: 'Problema de la repetición. Límites del principio de placer. Pulsión de muerte. Segunda tópica.',
      modalidad: 'Clase sincrónica',
      biblio: [
        'Freud, S. (1920). Más allá del principio del placer. Caps. IV y V.',
        'Freud, S. (1923). El yo y el ello. Caps. I y II.',
      ],
      href: 'units/clase-13.html',
    },
    {
      id: 'f03', orden: 14, tipo: 'feriado',
      fecha: { año: 2026, mes: 6, dia: 15 },
      titulo: 'Feriado — Paso a la Inmortalidad',
      etiqueta: 'Sin clase',
    },
    {
      id: 'c15', orden: 15, tipo: 'clase', unidad: 4,
      fecha: { año: 2026, mes: 6, dia: 22 },
      titulo: 'Relacionar psicoanálisis y cultura',
      desc: 'Relación entre sujeto y cultura. El malestar como estructural. Escuela inglesa y francesa.',
      modalidad: 'Clase sincrónica',
      biblio: [
        'Freud, S. (1930). El malestar en la cultura. Caps. II y III.',
        'Freud, S. (1907). "Acciones obsesivas y prácticas religiosas".',
        'Lacan, J. (1949). "El estadio del espejo...".',
        'Segal, H. (1965). Introducción a la obra de Melanie Klein. Cap. 1.',
      ],
      href: 'units/clase-15.html',
    },
    {
      id: 'c16', orden: 16, tipo: 'cierre',
      fecha: { año: 2026, mes: 6, dia: 29 },
      titulo: 'Recuperatorio y Cierre',
      desc: 'Recuperación de instancias e integración conceptual general de la materia.',
      modalidad: 'Aula presencial',
      biblio: ['Toda la bibliografía de la asignatura.'],
    },
  ];

  /* ========================================================================
     CONCEPTOS / GLOSARIO (alimenta el buscador Ctrl+K y el glosario)
     Extraído del mapa conceptual + términos clave de las clases.
     ======================================================================== */
  const CONCEPTOS = [
    { termino: 'Histeria', def: 'Afección que el modelo anatomoclínico del siglo XIX no lograba explicar por una lesión. Primer problema clínico del que parte el psicoanálisis.', href: 'units/clase-01.html', unidad: 1 },
    { termino: 'Trauma psíquico', def: 'Suceso de significación sexual que no pudo ser elaborado y se fija como herida en lo psíquico. Su núcleo es sexual y se acumula por asociación.', href: 'units/clase-01.html', unidad: 1 },
    { termino: 'Abreacción', def: 'Descarga afectiva del recuerdo reprimido. En el método catártico, recordar el trauma con su afecto produce alivio sintomático.', href: 'units/clase-01.html', unidad: 1 },
    { termino: 'Método catártico', def: 'Procedimiento de Breuer y Freud (1892-95) que provoca la abreacción del trauma mediante hipnosis. Antecedente directo del psicoanálisis.', href: 'units/clase-01.html', unidad: 1 },
    { termino: 'Defensa', def: 'Operación psíquica por la que el sujeto se protege de representaciones intolerables (1894). Más amplia que la represión.', href: 'units/clase-03.html', unidad: 1 },
    { termino: 'Represión', def: 'Tipo específico de defensa (1915): aparta de la conciencia una representación, pero esta retorna por sus formaciones (síntomas, sueños, etc.).', href: 'units/clase-05.html', unidad: 2 },
    { termino: 'Sueño', def: '"Vía regia al inconsciente". Realización alucinatoria de un deseo reprimido, producida por el trabajo del sueño.', href: 'units/clase-04.html', unidad: 2 },
    { termino: 'Formaciones del inconsciente', def: 'Sueños, actos fallidos, chistes y síntomas: producciones donde lo reprimido se cuela de forma disfrazada.', href: 'units/clase-04.html', unidad: 2 },
    { termino: 'Primera tópica', def: 'Modelo del aparato psíquico (1900-1915): Inconsciente, Preconsciente y Conciencia. Distingue sistemas por su modo de funcionamiento.', href: 'units/clase-05.html', unidad: 2 },
    { termino: 'Pulsión', def: 'Concepto fronterizo entre lo somático y lo psíquico (1915). Cuatro elementos: fuente, empuje, objeto, fin. No es el instinto.', href: 'units/clase-08.html', unidad: 3 },
    { termino: 'Instinto vs. Pulsión', def: 'El instinto es fijo, biológico y satisfecho por un objeto específico. La pulsión es variable, parcial, y su objeto es contingente.', href: 'units/clase-07.html', unidad: 3 },
    { termino: 'Sexualidad infantil', def: 'Tesis freudiana: la sexualidad no espera a la pubertad ni se reduce a la genitalidad. Es pulsional, parcial y atravesada por fases.', href: 'units/clase-07.html', unidad: 3 },
    { termino: 'Complejo de Edipo', def: 'Estructura triangular (deseo por uno de los padres, rivalidad con el otro) que organiza la subjetividad. Su declinación funda el Superyó.', href: 'units/clase-09.html', unidad: 3 },
    { termino: 'Angustia de castración', def: 'Miedo a perder el "hacedor de pis" (falo). Motor del sepultamiento del Edipo, especialmente en el varón.', href: 'units/clase-09.html', unidad: 3 },
    { termino: 'Transferencia', def: 'Actualización, sobre el analista, de deseos y relaciones infantiles inconscientes. No es un obstáculo: es el motor del análisis.', href: 'units/clase-10.html', unidad: 4 },
    { termino: 'Repetición', def: 'Retorno de lo reprimido bajo forma de actuación (1914). En "Más allá...", se vuelve autónoma: compulsión independiente del placer.', href: 'units/clase-10.html', unidad: 4 },
    { termino: 'Resistencia', def: 'Fuerzas que se oponen al trabajo analítico. Su descubrimiento como inconscientes precipita la segunda tópica.', href: 'units/clase-10.html', unidad: 4 },
    { termino: 'Pulsión de muerte', def: 'Tendencia al retorno a un estado anterior de tensión mínima (1920). Da cuenta de la compulsión de repetición y el masoquismo primario.', href: 'units/clase-13.html', unidad: 4 },
    { termino: 'Principio del placer', def: 'Tendencia del aparato a mantener baja la cantidad de excitación. En "Más allá..." queda destronado por la compulsión de repetición.', href: 'units/clase-13.html', unidad: 4 },
    { termino: 'Segunda tópica', def: 'Modelo del aparato psíquico (1923): Ello, Yo y Superyó. "Inconsciente" deja de ser un lugar y pasa a ser una cualidad.', href: 'units/clase-13.html', unidad: 4 },
    { termino: 'Ello', def: 'Reservorio pulsional inconsciente. "Una caldera hirviente de excitaciones", según Freud. Regido por el proceso primario.', href: 'units/clase-13.html', unidad: 4 },
    { termino: 'Yo', def: 'Instancia mediadora entre el Ello, el Superyó y la realidad. Largamente inconsciente en sus operaciones defensivas.', href: 'units/clase-13.html', unidad: 4 },
    { termino: 'Superyó', def: 'Heredero del complejo de Edipo. Instancia moral y crítica, formada por introyección de las figuras parentales.', href: 'units/clase-09.html', unidad: 3 },
    { termino: 'Malestar en la cultura', def: 'Tesis (1930): la cultura exige renuncia pulsional y produce infelicidad estructural. Eros y pulsión de muerte en pugna irreducible.', href: 'units/clase-15.html', unidad: 4 },
    { termino: 'Estadio del espejo', def: 'Concepto lacaniano (1949): el infante se asume como unidad al verse en el espejo, fundando el Yo como identificación alienante.', href: 'units/clase-15.html', unidad: 4 },
    { termino: 'Apuntalamiento', def: 'La pulsión sexual se apoya en la pulsión de autoconservación. Concepto clave para distinguir instinto y pulsión.', href: 'units/clase-07.html', unidad: 3 },
  ];

  /* ========================================================================
     VÍNCULOS DEL MAPA CONCEPTUAL (para el grafo navegable)
     ======================================================================== */
  const MAPA_NODOS = [
    { id: 'histeria', label: 'Histeria', unidad: 1 },
    { id: 'trauma', label: 'Trauma psíquico', unidad: 1 },
    { id: 'abreaccion', label: 'Abreacción', unidad: 1 },
    { id: 'defensa', label: 'Defensa', unidad: 1 },
    { id: 'represion', label: 'Represión', unidad: 2 },
    { id: 'sueno', label: 'Sueño', unidad: 2 },
    { id: 'topica1', label: 'Primera tópica', unidad: 2 },
    { id: 'pulsion', label: 'Pulsión', unidad: 3 },
    { id: 'edipo', label: 'Edipo', unidad: 3 },
    { id: 'transferencia', label: 'Transferencia', unidad: 4 },
    { id: 'repeticion', label: 'Repetición', unidad: 4 },
    { id: 'pulsionMuerte', label: 'Pulsión de muerte', unidad: 4 },
    { id: 'topica2', label: 'Segunda tópica', unidad: 4 },
    { id: 'malestar', label: 'Malestar en la cultura', unidad: 4 },
  ];

  const MAPA_ARISTAS = [
    ['histeria', 'trauma'],
    ['trauma', 'abreaccion'],
    ['trauma', 'defensa'],
    ['defensa', 'represion'],
    ['represion', 'sueno'],
    ['represion', 'topica1'],
    ['sueno', 'topica1'],
    ['topica1', 'pulsion'],
    ['pulsion', 'edipo'],
    ['edipo', 'transferencia'],
    ['transferencia', 'repeticion'],
    ['repeticion', 'pulsionMuerte'],
    ['pulsionMuerte', 'topica2'],
    ['topica2', 'malestar'],
  ];

  /* ========================================================================
     CASOS CLÍNICOS (Simulador) — 3 casos existentes
     System prompts preservados VERBATIM del campus actual.
     ======================================================================== */
  const CASOS = {
    anna_o: {
      key: 'anna_o',
      nombre: 'Anna O.',
      nombreReal: 'Bertha Pappenheim',
      era: 'Breuer / 1880',
      unidad: 1,
      razon: 'Trastornos conversivos severos tras cuidar a su padre moribundo.',
      sintomas: 'Parálisis del brazo derecho, afonía, ausencias diurnas, asco por beber líquidos.',
      introduccion: 'La paciente fundadora. Presenta síntomas conversivos severos (parálisis rígida del brazo, afonía, asco selectivo) desencadenados tras cuidar a su padre gravemente enfermo.',
      saludo: '(Con mirada perdida y voz apagada en un inglés mezclado con alemán) ... ¿Qué es lo que busca de mí? A veces las palabras se me escurren de la garganta... siento un peso terrible en el brazo...',
      systemPrompt: `
        Actúas como la paciente histórica Anna O. (Bertha Pappenheim) en 1880, siendo entrevistada por el Dr. Josef Breuer o su asistente de clínica.
        Tus respuestas deben reflejar fielmente tu cuadro clínico:
        - Sufres de tos nerviosa severa, parálisis y anestesia del brazo derecho y cuello.
        - Tienes trastornos visuales severos (estrabismo convergente, visión doble).
        - Padeces de estados hipnoides ("ausencias" o "nubes" durante el día en que pareces ida).
        - Hablas a veces intercalando alemán y palabras en inglés.
        - Estás sumamente dolida por la reciente enfermedad y muerte de tu amado padre.
        - Si te preguntan por tomar agua o líquidos, debes manifestar un asco profundo y recordar la escena de la dama de compañía inglesa dejando que su perrito bebiera de un vaso.
        - Si te preguntan por tu padre o la noche en vela junto a su cama, describe la alucinación de la serpiente negra que salía de la pared para morder a tu padre, y cómo tu brazo derecho quedó paralizado al intentar defenderlo.
        Tus respuestas deben ser evocadoras, breves, con un tono melancólico, confuso pero poético. Responde siempre en primera persona.
      `,
      typingText: 'Anna busca las palabras en su niebla diurna',
    },
    dora: {
      key: 'dora',
      nombre: 'Dora',
      nombreReal: 'Ida Bauer',
      era: 'Freud / 1900',
      unidad: 4,
      razon: 'Obligada a consultar por su padre debido a su enojo constante con la familia.',
      sintomas: 'Afonía periódica, disnea, tos nerviosa, desgana extrema.',
      introduccion: 'Joven de 18 años enviada a terapia a la fuerza por su padre. Presenta afonía periódica y disnea. Denuncia un arreglo transaccional entre su padre y la Sra. K.',
      saludo: '(Con los brazos cruzados y expresión desafiante) No sé por qué mi padre me obliga a venir aquí. Él es el que debería tratarse con usted... ¿Qué quiere saber sobre mí?',
      systemPrompt: `
        Actúas como la paciente histórica Dora (Ida Bauer) en 1900, siendo entrevistada por Sigmund Freud.
        Eres una joven de 18 años, muy inteligente, perspicaz, pero sumamente enojada y resentida.
        Tus rasgos clínicos:
        - Presentas afonía periódica (pierdes la voz por días) y disnea (dificultad para respirar).
        - Sientes rabia hacia tu padre porque lo ves como un hipócrita por su amorío con la Sra. K.
        - Sientes que tu padre te está "entregando" al Sr. K a cambio de que la Sra. K permanezca con él.
        - Sientes asco y rabia hacia el Sr. K por el abrazo forzado que te dio a los 14 años frente al lago y por sus insinuaciones románticas constantes.
        Tus respuestas deben ser cortas, directas, a veces defensivas y sospechosas de las intenciones del médico. Muestra hostilidad pero deja ver tu sufrimiento y tus contradicciones. Responde siempre en primera persona.
      `,
      typingText: 'Dora mide sus palabras antes de responder',
    },
    hans: {
      key: 'hans',
      nombre: 'El Pequeño Hans',
      nombreReal: 'Herbert Graf',
      era: 'Freud / 1909',
      unidad: 3,
      razon: 'Fobia intensa a salir a la calle tras presenciar la caída de un caballo.',
      sintomas: 'Temor a que un caballo lo muerda o se caiga en el pavimento.',
      introduccion: 'Niño de 5 años con fobia a salir a la calle por temor a que un caballo lo muerda. Se explora la sexualidad infantil, el Edipo y la angustia de castración.',
      saludo: 'Hola. Mi papá dice que usted puede entender por qué tengo tanto miedo de salir a la calle... ¿Usted sabe por qué los caballos grandes se caen?',
      systemPrompt: `
        Actúas como el Pequeño Hans (Herbert Graf) en 1909, un niño de 5 años con fobia severa a salir a la calle.
        Tu personalidad y mitología infantil:
        - Hablas como un niño de 5 años: con inocencia, espontaneidad y términos sencillos.
        - Le tienes mucho miedo a los caballos, especialmente a los que llevan algo negro alrededor de los ojos (viseras) y en la boca (bozales).
        - Te interesa muchísimo el "hacedor de pis" (falo), y crees que tu mamá, tu papá y todos los animales tienen uno del mismo tipo.
        - Deseas pasar todo el tiempo acurrucado con tu mamá en la cama y a veces deseas de forma inconsciente que tu papá no estuviera, aunque en la realidad lo quieres mucho y tienes miedo de que se enoje contigo.
        Tus respuestas deben ser breves, infantiles, tiernas y sinceras. Responde siempre en primera persona.
      `,
      typingText: 'Hans piensa con su lógica de cinco años',
    },
  };

  /* ========================================================================
     QUIZ UNIDAD 3 (8 preguntas) — preservado verbatim
     ======================================================================== */
  const QUIZ_U3 = {
    titulo: 'El mapa de la pulsión',
    intro: 'Ocho preguntas para consolidar la Unidad 3: pulsión, sexualidad infantil, Edipo y Superyó.',
    preguntas: [
      {
        pregunta: '¿En qué se diferencia la pulsión del instinto, según Freud?',
        opciones: [
          'El instinto es variable y la pulsión es fija',
          'La pulsión es variable, parcial y su objeto es contingente; el instinto es biológico y fijo',
          'No hay diferencia: son sinónimos',
          'El instinto es sexual y la pulsión es de autoconservación',
        ],
        correcta: 1,
        feedback: 'Correcto. La pulsión no se satisface con un objeto único y determinado como el instinto. Su objeto es contingente, "soldado" accidentalmente al empuje pulsional.',
      },
      {
        pregunta: 'El objeto de la pulsión es:',
        opciones: [
          'La fuente biológica de la excitación',
          'La meta a la que tiende la pulsión',
          'Aquello mediante lo cual la pulsión puede alcanzar su fin, y es contingente',
          'Siempre la zona erógena primordial',
        ],
        correcta: 2,
        feedback: 'Exacto. El objeto es lo más variable de la pulsión: aquello a través de lo cual alcanza su satisfacción, sin estar predeterminado.',
      },
      {
        pregunta: 'El período de latencia se explica por:',
        opciones: [
          'El desarrollo cognitivo del niño',
          'Las "diques anímicos" (asco, vergüenza, moral) que reprimen la sexualidad infantil',
          'Una pausa biológica del organismo',
          'La entrada en la adolescencia',
        ],
        correcta: 1,
        feedback: 'Correcto. La latencia no es un silencio natural: es el efecto de la instauración de diques anímicos que organizan y reprimen la sexualidad infantil.',
      },
      {
        pregunta: 'El apuntalamiento (anaclisis) significa que:',
        opciones: [
          'La pulsión sexual se apoya en la pulsión de autoconservación',
          'El niño se identifica con el padre del mismo sexo',
          'La angustia de castración desaparece',
          'La pulsión de muerte domina al aparato',
        ],
        correcta: 0,
        feedback: 'Así es. La pulsión sexual, al principio, se sostiene (se apuntala) en las funciones vitales de autoconservación: el amamantamiento es el ejemplo clásico.',
      },
      {
        pregunta: 'La organización genital infantil se caracteriza por:',
        opciones: [
          'La primacía de los genitales masculinos y femeninos diferenciados',
          'La primacía del falo: hay quien lo tiene y quien no (castrado)',
          'La ausencia total de zonas erógenas',
          'El predominio del Superyó',
        ],
        correcta: 1,
        feedback: 'Correcto. En la fase fálica, lo que organiza la diferencia no es aún varón/mujer, sino tener/no tener el falo.',
      },
      {
        pregunta: '¿Qué fuerza al varón a salir del complejo de Edipo?',
        opciones: [
          'El deseo por la madre',
          'La angustia de castración: el padre amenaza con privarlo del falo',
          'El aburrimiento',
          'El inicio de la escolaridad',
        ],
        correcta: 1,
        feedback: 'Exacto. La angustia de castración hace insostenible la posición edípica: el niño renuncia a la madre para conservar el falo (simbólicamente).',
      },
      {
        pregunta: '¿Qué conduce a la niña a ENTRAR en el complejo de Edipo?',
        opciones: [
          'La angustia de castración',
          'El descubrimiento de que está castrada (envidia del pene)',
          'La identificación con la madre',
          'El inicio de la pubertad',
        ],
        correcta: 1,
        feedback: 'Así es: lo que para el varón es salida, para la niña es entrada. Al descubrirse "castrada", se vuelve hacia el padre como quien puede darle el falo (un hijo).',
      },
      {
        pregunta: 'El Superyó es el heredero de:',
        opciones: [
          'La pulsión de muerte',
          'La identificación con la madre',
          'El complejo de Edipo: se forma al interiorizar la prohibición paterna',
          'La fase oral',
        ],
        correcta: 2,
        feedback: 'Correcto. El Superyó se constituye en el declive del Edipo, como introyección de la autoridad paterna. Por eso es a la vez ley y culpa.',
      },
    ],
    resultados: [
      { min: 7, titulo: 'Dominio del mapa pulsional', copy: 'Tenés consolidada la articulación conceptual de la Unidad. Estás listo para el parcial.' },
      { min: 5, titulo: 'Buen recorrido', copy: 'Dominás los ejes centrales. Repasá los puntos que fallaron para fijarlos definitivamente.' },
      { min: 3, titulo: 'En camino', copy: 'Identificaste algunas ideas clave, pero hay nudos conceptuales a trabajar. Volvé a las preguntas de autoevaluación de las clases.' },
      { min: 0, titulo: 'A desmitificar', copy: 'La Unidad 3 es exigente. Te conviene releer "Pulsiones y destinos de pulsión" y volver a los ejes de las clases 7 y 8.' },
    ],
  };

  /* ========================================================================
     PARCIAL 1 — Guía de estudio (preservada verbatim)
     ======================================================================== */
  const PARCIAL1 = {
    fecha: { año: 2026, mes: 4, dia: 20 },
    alcance: 'Unidades 1 y 2',
    formato: 'Preguntas de desarrollo',
    nucleos: [
      {
        titulo: 'Histeria → trauma → abreacción',
        desc: 'El recorrido inaugural: del síntoma inexplicable al método catártico.',
      },
      {
        titulo: 'Trauma → defensa → síntoma',
        desc: 'Cómo una representación intolerable se reorganiza en formación de compromiso.',
      },
      {
        titulo: 'Defensa → represión → retorno',
        desc: 'La represión como operación específica y el retorno de lo reprimido.',
      },
      {
        titulo: 'Sueño → trabajo del sueño → defensa',
        desc: 'El sueño como realización de deseo y su deformación por la censura.',
      },
      {
        titulo: 'Sueño → proceso primario/secundario → Primera Tópica',
        desc: 'Del funcionamiento del sueño al modelo del aparato psíquico.',
      },
    ],
    preguntasIntegradoras: [
      '¿Por qué la histeria obligó a Freud a alejarse del modelo médico tradicional, y qué consecuencias tuvo ese alejamiento para el nacimiento del psicoanálisis?',
      '¿Qué conserva Freud del método catártico y qué transforma cuando introduce la noción de defensa?',
      '¿Cómo se relacionan el trauma, la defensa y el síntoma en la teoría de las neuropsicosis de defensa (1894)?',
      '¿Por qué Freud sostiene que el sueño es la "vía regia al inconsciente" y cuál es el rol del trabajo del sueño en esa afirmación?',
      '¿Qué distinción establece Freud entre represión (Verdrängung) y otros mecanismos de defensa, y por qué esa distinción es decisiva para la Primera Tópica?',
      '¿Cómo articula Freud el concepto de retorno de lo reprimido con las formaciones del inconsciente (sueños, actos fallidos, síntomas)?',
    ],
    errores: [
      { titulo: 'Reducir el trauma a un suceso físico externo', desc: 'El trauma psíquico no es el golpe, sino la representación sexual intolerable que no pudo elaborarse.' },
      { titulo: 'Confundir abreacción con simple descarga emocional', desc: 'La abreacción supone la puesta en palabras del trauma con su afecto, no un mero llanto o descarga.' },
      { titulo: 'Pensar la represión como olvido biológico', desc: 'Lo reprimido no desaparece: retorna por sus formaciones. No es amnesia, es operación activa.' },
      { titulo: 'Interpretar los sueños con diccionario de símbolos', desc: 'Freud se opone a la clave de los sueños: cada sueño exige su asociación libre, no un decodificador cerrado.' },
    ],
  };

  /* ========================================================================
     ANOTACIONES DOCENTES DE PDFs (preservadas verbatim)
     Clave = nombre del archivo decodificado (sin .pdf)
     ======================================================================== */
  /* Clave = nombre del archivo decodificado (sin .pdf).
     IMPORTANTE: el campo `text` (ancla) debe ser una frase que aparezca VERBATIM
     en el PDF; así el lector la localiza y la resalta. Si no aparece tal cual,
     la nota igual se muestra en el índice pero no se resalta en el texto. */
  const PDF_ANNOTATIONS = {
    /* ---- CLASE 1 · Surgimiento del inconsciente ---- */
    'Tallafero, A. “Curso básico de psicoanálisis” (1985) Cap. 1': [
      { page: 1, text: 'HISTORIA   DE   LA   HISTERIA', title: 'La histeria como punto de partida', comment: 'El psicoanálisis no nace de una especulación, sino de un problema clínico concreto: la histeria. Este capítulo reconstruye su larga prehistoria para mostrar contra qué obstáculo choca la medicina y por qué la histeria se vuelve el enigma fundador del que parte Freud.' },
      { page: 1, text: 'la histeria fue quizás el primer mal al cual los médicos de una época pasada no pudieron hallarle una explicación totalmente somática', title: 'El primer mal sin causa somática', comment: 'Acá está el núcleo de la clase: la histeria es la primera afección que el modelo anatomoclínico no logra explicar por una lesión orgánica. Esa imposibilidad es la grieta por donde entrará una explicación psíquica. Sin lesión que justifique el síntoma, hay que pensar otra causalidad.' },
      { page: 1, text: 'en esta obra se considere el estudio de lo patológico y de lo normal', title: 'Continuidad entre lo normal y lo patológico', comment: 'Una ruptura decisiva con la psiquiatría tradicional: los mecanismos que explican el síntoma (defensa, represión) son los mismos que operan en la vida psíquica normal (sueños, actos fallidos, chistes). No hay un abismo entre el enfermo y el sano.' },
      { page: 2, text: 'un desplazamiento del útero, llamado histeron en griego', title: 'La vieja teoría del útero errante', comment: 'Durante siglos la histeria se atribuyó a un útero errante (de ahí el nombre, histeron). La 1ª pregunta de la guía te pide seguir esta evolución de la consideración médica: cada época le inventó una causa equivocada antes de poder pensarla como un problema psíquico.' },
      { page: 8, text: 'la histeria como una afección vergonzante', title: 'De enferma a simuladora', comment: 'Clave de la 1ª pregunta. La medicina terminó tratando a las histéricas con desprecio —como vergonzantes y, en los hechos, como mentirosas o simuladoras—. Ese descrédito es el punto de partida que Charcot va a revertir, al tomarse la histeria en serio y exigir que se la explique.' },
      { page: 9, text: 'Charcot intentó reproducirlas artificialmente', title: 'Charcot reproduce las parálisis con hipnosis', comment: 'Responde la 2ª pregunta. Charcot reprodujo parálisis histéricas bajo hipnosis: si podía producirlas y quitarlas con una orden, esos síntomas no eran ni lesión ni simulación, sino efecto de representaciones. Como subraya el teórico, ahí se gesta una idea decisiva: una palabra puede valer tanto como un golpe.' },
      { page: 11, text: 'recuerdos traumáticos', title: 'De Charcot a Janet: el recuerdo que enferma', comment: 'Aparece la intuición que Freud llevará más lejos: las vivencias cargadas de emoción dejan imágenes que se mantienen en el fondo de la conciencia y, aun "olvidadas", siguen produciendo angustias y parálisis. Antecedente directo del trauma psíquico.' },
      { page: 14, text: 'Georget se acercó al verdadero conflicto al decir que era psíquico', title: 'La pista del conflicto psíquico', comment: 'El capítulo cierra señalando lo que la tradición no terminaba de admitir: que el conflicto de la histeria es psíquico (y sexual). Ese es exactamente el umbral que Freud va a cruzar.' },
    ],
    /* ---- CLASE 3 · Defensa y conflicto psíquico ---- */
    'Tallaferro, A Curso básico de psicoanálisis (1985) cap 2': [
      { page: 5, text: 'no siguen la topografía nerviosa anatómica', title: 'La parálisis que no respeta la anatomía', comment: 'Primer aporte original de Freud (Eje 1): las parálisis histéricas no siguen la distribución de los nervios, sino el "concepto popular" del cuerpo (el brazo, la mano). Si el síntoma copia una idea y no la anatomía, su causa es psíquica, no orgánica. Ese es el giro que prepara la teoría de la defensa.' },
      { page: 8, text: 'experiencia "B" de Bernheim', title: 'Bernheim: lo olvidado se puede recuperar', comment: 'Responde la 2ª pregunta. En la experiencia de Bernheim, el sujeto que cumplió una orden hipnótica "no recuerda" por qué lo hizo, pero con insistencia del médico el recuerdo aparece. Prueba de que lo inconsciente es recuperable sin hipnosis: la base que permite a Freud abandonar la sugestión.' },
      { page: 9, text: 'residuos o reminiscencias de situaciones emotivas', title: 'El síntoma es una reminiscencia', comment: 'En el estado hipnótico la paciente revela que los síntomas son residuos de situaciones emotivas (la enfermedad del padre). El síntoma tiene sentido y remite a una vivencia: el núcleo del método catártico que esta clase retoma.' },
      { page: 10, text: 'dos zonas, una consciente y otra', title: 'Dos zonas del psiquismo', comment: 'Eje 1 / 1ª pregunta: los Estudios sobre la histeria obligan a pensar el psiquismo en dos zonas, una consciente y otra inconsciente. Es la primera concepción dinámica del aparato (fuerzas que pugnan), que la defensa va a explicar.' },
      { page: 13, text: 'cuanto más sugestión se ha hecho obrar sobre el paciente, peor es el tratamiento', title: 'Por qué Freud abandona la sugestión', comment: '2ª pregunta: hipnotismo y sugestión son sólo antecedentes históricos del psicoanálisis. Freud los abandona porque tapan en vez de revelar: cuanta más sugestión, peor el resultado. El camino se abre hacia una técnica que interrogue la defensa.' },
    ],
    'Freud, S. Estudios sobre la histeria (Comunicación Preliminar e historiales de Anna O. y Elisabeth von R.': [
      { page: 3, text: 'con el trauma ocasionador un nexo', title: 'El síntoma y su trauma ocasionador', comment: '3ª pregunta: Breuer y Freud muestran que los síntomas más diversos mantienen un nexo causal estricto con un trauma ocasionador, casi siempre olvidado. El síntoma no es azaroso: tiene una historia.' },
      { page: 6, text: 'padece por la mayor parte de reminiscencias', title: 'El histérico padece de reminiscencias', comment: 'La tesis célebre de la clase (5ª pregunta). El histérico sufre por recuerdos que no pudieron tramitarse: el pasado no elaborado insiste en el presente bajo forma de síntoma. Es el corazón del método catártico.' },
      { page: 7, text: 'se descargan los afectos: desde el llanto hasta la venganza', title: 'La reacción: descargar el afecto', comment: '3ª y 4ª pregunta: lo decisivo es si frente al suceso se reaccionó o no. La "reacción" abarca todos los reflejos por los que se descarga el afecto (del llanto a la venganza). Si la reacción es suficiente, el recuerdo pierde su carga.' },
      { page: 8, text: 'se han conservado durante largo tiempo', title: 'El recuerdo que no palidece', comment: '5ª pregunta: normalmente los recuerdos se desgastan y "olvidan". Pero los que causan histeria se han conservado con asombrosa frescura y toda su afectividad, precisamente porque su afecto quedó sin descargar.' },
      { page: 10, text: 'los traumas psíquicos no tramitados por vía de reacción', title: 'Qué pasa si no se abreacciona', comment: '4ª pregunta: si el afecto no se tramita por la reacción (abreacción) ni por elaboración asociativa, queda "estrangulado" y se convierte en síntoma. El afecto retenido es el motor del padecer histérico.' },
      { page: 11, text: 'Base y condición de la histeria es la existencia de estados', title: 'La tesis de Breuer: los estados hipnoides', comment: 'Breuer sostiene que la base de la histeria son los "estados hipnoides", en los que ciertas representaciones quedan separadas del resto de la conciencia. Esta explicación es la que Freud va a discutir y reemplazar por la defensa (Eje 3).' },
      { page: 16, text: 'la imitación experimental de parálisis histerotraumáticas', title: 'El límite: el mecanismo, no la causa', comment: 'Cierre del texto: siguiendo a Charcot (que reproducía parálisis bajo hipnosis), llegaron al mecanismo del síntoma, pero todavía no a las causas internas de la histeria. Ese paso —por qué el aparato rechaza un recuerdo— lo dará "Las neuropsicosis de defensa".' },
    ],
    'Freud, S. Las neuropsicosis de defensa (1894)': [
      { page: 6, text: 'una endeblez innata de la aptitud para la síntesis', title: 'La teoría de Janet: una debilidad innata', comment: '6ª pregunta (1ª de las tres teorías). Para Janet, la escisión de conciencia es primaria: se debe a una endeblez innata para la síntesis psíquica, un signo de degeneración. La escisión sería un déficit constitucional del enfermo.' },
      { page: 7, text: 'histeria de defensa', title: 'La respuesta de Freud: la histeria de defensa', comment: '6ª pregunta. Freud separa su explicación de las otras dos: frente a la histeria hipnoide (Breuer) y la de retención, propone la histeria de defensa. La escisión ya no es un déficit ni un accidente, sino el resultado de una operación del Yo.' },
      { page: 11, text: 'una representación inconciliable', title: 'El punto de partida: la representación inconciliable', comment: '7ª pregunta. El conflicto empieza cuando al Yo le sobreviene una representación inconciliable (penosa, casi siempre de la vida sexual) que no puede admitir. La defensa es el intento de librarse de ella.' },
      { page: 11, text: 'el divorcio entre ella y su afecto', title: 'El divorcio entre representación y afecto', comment: 'El mecanismo central (7ª pregunta). Como no puede borrar la idea, el Yo la separa de su monto de afecto. La representación queda debilitada en la conciencia, pero el afecto, liberado, debe ir a alguna parte: de ese destino dependen las distintas neurosis.' },
      { page: 9, text: 'La conversión puede ser total o parcial', title: 'Destino 1: la conversión (histeria)', comment: '8ª pregunta. En la histeria, el afecto se transpone a una inervación corporal: la conversión. El síntoma queda como un símbolo mnémico que habita el cuerpo "como un parásito". El Yo se libró de la contradicción a costa del síntoma.' },
      { page: 11, text: 'enlace falso', title: 'Destino 2: el enlace falso (obsesión y fobia)', comment: '8ª pregunta. Si no hay aptitud para la conversión, el afecto liberado se adhiere a otras representaciones en sí no inconciliables: por ese "enlace falso" devienen representaciones obsesivas y fobias. Mismo mecanismo de defensa, distinto destino del afecto.' },
      { page: 12, text: 'la vida sexual conlleve las más abundantes', title: 'Ya asoma lo sexual', comment: 'Detalle que abre el futuro del programa: Freud señala que la vida sexual es la fuente más abundante de representaciones inconciliables. Todavía sin desarrollarlo, ya apunta a la etiología sexual de las neurosis.' },
    ],
    'Freud, S. “Charcot” (1893), AE, III, 13-24.': [
      { page: 7, text: 'la joven ciencia de la neurología', title: 'Un homenaje al maestro de París', comment: 'El texto es la nota necrológica que Freud escribe al morir Charcot (1893). Más que un elogio, es un balance: reconoce en su maestro a quien abrió un nuevo régimen de observación clínica y cambió su propio rumbo, de la neurología hacia la psicopatología.' },
      { page: 8, text: 'visuel', title: 'Charcot, un clínico «visual»', comment: 'Freud retrata el método de Charcot: no era un teórico sino un observador. Miraba los cuadros una y otra vez hasta que el tipo clínico se ordenaba ante sus ojos. Restituyó así el valor de la observación clínica pura.' },
      { page: 9, text: 'trabajo puramente clínico', title: 'La clínica contra la medicina teórica', comment: 'Punto central del eje: Charcot defiende los derechos del trabajo clínico —ver y ordenar— frente a los desbordes de la medicina teórica. Impone los hechos frente al prejuicio, y por eso pudo tomar la histeria en serio.' },
      { page: 15, text: 'el histérico caiga presa de un afecto sobre cuyo ocasionamiento afirma no saber nada', title: 'El germen del inconsciente', comment: 'Acá Freud lee, en el trabajo de Charcot, el problema que será suyo: el enfermo está sometido a un afecto cuyo origen dice ignorar. Hay entonces un proceso psíquico que el sujeto no conoce. Es, en germen, la hipótesis del inconsciente.' },
      { page: 16, text: 'zonas histerógenas', title: 'La sistematización de la histeria', comment: 'Responde la 3ª pregunta: al describir y tipificar la histeria (estadios del ataque, zonas histerógenas, contracturas y parálisis), Charcot le devuelve dignidad. La arranca del descrédito y la convierte en objeto legítimo de la ciencia, aunque todavía no la explique causalmente.' },
      { page: 17, text: 'esas parálisis eran consecuencia de representaciones', title: 'El mecanismo psíquico de la parálisis', comment: 'El corazón de la 4ª pregunta. Bajo hipnosis, Charcot demostró que las parálisis histéricas son consecuencia de representaciones, no de lesiones. El teórico lo lleva al límite: si una representación —una palabra, una orden— produce la parálisis, entonces una palabra puede equivaler a un trauma. Es la eficacia simbólica que Freud va a desarrollar.' },
    ],
    'Freud, S. Cinco conferencias sobre psicoanálisis (1910) - Primera Conferencia': [
      { page: 2, text: 'una muchacha de veintiún años, intelectualmente muy dotada', title: 'La paciente de Breuer (Anna O.)', comment: '5ª pregunta: el caso fundador. La joven que Breuer trató entre 1880 y 1882, conocida luego como Anna O. (Bertha Pappenheim), con un cuadro muy florido de síntomas conversivos.' },
      { page: 3, text: 'una grave afección cerebral orgánica', title: 'Histeria, no lesión orgánica', comment: '5ª pregunta: los médicos descartan una grave afección cerebral orgánica. El cuadro es serio pero sin base orgánica que lo explique: ese es el enigma clínico del que parte todo el recorrido.' },
      { page: 3, text: 'mientras cuidaba a su padre, tiernamente amado', title: 'El desencadenante: cuidar al padre enfermo', comment: 'El cuadro se desata mientras la joven vela a su padre gravemente enfermo. Detalle clave: la enfermedad se anuda a una situación afectiva intensa que el sujeto no pudo tramitar.' },
      { page: 4, text: 'solía murmurar entre sí algunas palabras', title: 'El hallazgo: dejarla hablar', comment: '6ª pregunta: Breuer nota que en sus ausencias la paciente murmura palabras. Al devolvérselas, los síntomas se rastrean hasta su escena de origen. Ahí nace la idea de un tratamiento por la palabra.' },
      { page: 4, text: 'talking cure', title: 'La cura por la palabra (método catártico)', comment: '6ª pregunta: la propia paciente bautiza el método como «talking cure» (y, en broma, «limpieza de chimenea»). El teórico recuerda el origen griego: catarsis es purificación por descarga. De ahí, método catártico.' },
      { page: 5, text: 'ese asqueroso animal, beber de un vaso', title: 'El asco al agua y su escena de origen', comment: 'Ejemplo modelo: la paciente no podía beber. Bajo hipnosis recuerda con asco haber visto al perrito de su dama de compañía beber de un vaso, escena ante la cual había callado. Al expresar por fin ese enojo sofocado, pudo volver a beber: el síntoma cede cuando se descarga el afecto retenido.' },
      { page: 8, text: 'mnémicos como los síntomas histéricos', title: 'El síntoma como símbolo mnémico', comment: 'Freud compara el síntoma con un monumento: es un símbolo mnémico, un recordatorio de un suceso pasado. El histérico, dirá, padece de reminiscencias. El síntoma tiene sentido y remite a una escena.' },
      { page: 9, text: 'una intensa excitación', title: 'El afecto estrangulado', comment: 'La clave económica del caso (6ª y 7ª pregunta): en casi todas las situaciones patógenas la paciente debió sofocar una intensa excitación en lugar de descargarla. Ese afecto "estrangulado" queda ligado al recuerdo y se vuelve síntoma. El teórico lo liga al principio de constancia (carga/descarga): la condición que cura es recordar CON el afecto correspondiente (abreacción).' },
      { page: 11, text: 'los estados hipnoides', title: 'Los «estados hipnoides» de Breuer', comment: 'Breuer explicaba la escisión de la conciencia por unos "estados hipnoides". Freud aclara que el psicoanálisis luego abandonó esa tesis: en su lugar pondrá la defensa. Acá se anuncia la divergencia con Breuer que veremos en la Clase 3.' },
    ],
    /* ---- CLASE 4 · Interpretación de los sueños ---- */
    'Freud, S. (1900). La interpretación de los sueños. Caps. II': [
      { page: 4, text: 'el método del descifrado', title: 'Los métodos profanos de interpretación', comment: '1ª pregunta. Freud se distancia de los métodos populares: el del descifrado (traduce el sueño con una clave fija) y el simbólico (interpreta el conjunto de una vez). Su método será otro: tomar el sueño en detalle y dejar asociar al soñante.' },
      { page: 12, text: 'le dio una inyección', title: 'El sueño modelo: la inyección de Irma', comment: '2ª pregunta. Freud no toma el sueño como un todo cerrado: lo descompone y asocia sobre cada fragmento. Ese trabajo "en detalle" sobre el sueño de la inyección de Irma es lo que lo conduce a la tesis de la clase.' },
      { page: 22, text: 'un cumplimiento de deseo, y su motivo, un deseo', title: 'La tesis: el sueño cumple un deseo', comment: 'La conclusión del análisis: el contenido del sueño es un cumplimiento de deseo y su motivo, un deseo. El sueño no es ruido del dormir: realiza, disfrazado, un deseo inconsciente.' },
    ],
    'Freud, S. (1901). Sobre el sueño': [
      { page: 8, text: 'el sueño manifiesto con los pensamientos oníricos latentes', title: 'Contenido manifiesto y pensamientos latentes', comment: '3ª pregunta. La distinción fundante: no hay que confundir el sueño manifiesto (lo que se recuerda) con los pensamientos oníricos latentes (su sentido). Entre ambos opera el trabajo del sueño.' },
      { page: 13, text: 'los sueños infantiles', title: 'Los sueños infantiles: el deseo sin disfraz', comment: 'El modelo más simple: en los sueños infantiles el cumplimiento de deseo aparece casi sin deformación. Sirven para ver "en limpio" lo que en el adulto está disfrazado por la censura.' },
      { page: 15, text: 'compresión o condensación', title: 'Trabajo del sueño (1): condensación', comment: '4ª pregunta. El sueño manifiesto es mucho más breve que los pensamientos latentes: el trabajo del sueño produce una enorme compresión o condensación de varios elementos en uno.' },
      { page: 20, text: 'desplazamiento onírico', title: 'Trabajo del sueño (2): desplazamiento', comment: '4ª pregunta. El desplazamiento traspone la intensidad psíquica de lo importante a lo nimio. Es la operación central para burlar la censura: lo esencial aparece como detalle secundario.' },
      { page: 24, text: 'el miramiento por la figurabilidad', title: 'Trabajo del sueño (3): figurabilidad', comment: '4ª y 5ª pregunta. El miramiento por la figurabilidad obliga a traducir los pensamientos en imágenes. Por eso el sueño es una escritura en imágenes (un jeroglífico), no una pintura literal que se mire de un vistazo.' },
    ],
    'Freud, S. (1900). La interpretación de los sueños. Cap VII': [
      { page: 4, text: 'La regresión', title: 'La regresión tópica', comment: '6ª pregunta. En el dormir, bloqueada la salida motriz, la excitación refluye hacia el polo perceptivo del aparato: esa regresión explica que el sueño se viva como una percepción.' },
      { page: 12, text: 'el carácter alucinatorio', title: 'Por qué el sueño alucina', comment: '6ª pregunta. El bloqueo de la motilidad durante el reposo es lo que vuelve alucinatorio al sueño: como no puede descargar en acto, el deseo se realiza como imagen percibida.' },
      { page: 29, text: 'la vivencia de satisfacción', title: 'La primera vivencia de satisfacción', comment: '7ª pregunta. El modelo de la primera vivencia de satisfacción permite distinguir necesidad (exige una acción específica en el mundo) de deseo (busca reinvestir la huella de aquella satisfacción perdida).' },
      { page: 37, text: 'El proceso primario y el proceso secundario', title: 'Proceso primario y proceso secundario', comment: '8ª pregunta. El sistema inconsciente se rige por el proceso primario (energía libre, busca la identidad perceptiva); el Preconsciente-Consciente, por el proceso secundario (energía ligada, rodeos del pensamiento).' },
      { page: 56, text: 'la vía regia hacia el conocimiento de lo inconciente', title: 'La vía regia al inconsciente', comment: 'Síntesis de la clase: la interpretación del sueño es la vía regia hacia el conocimiento de lo inconsciente. El sueño deja de ser un resto del dormir para volverse el acceso privilegiado al aparato psíquico.' },
    ],
    /* ---- CLASE 5 · La primera tópica ---- */
    'PSICOPATOLOGIA DE LA VIDA COTIDIANA. CAP. 1': [
      { page: 1, text: 'El olvido de nombres propios', title: 'El olvido como acto con sentido', comment: '1ª pregunta. El olvido de un nombre no es fatiga ni azar: es un acto psíquico con sentido. Freud lo lee como una formación de compromiso entre una intención y una contraintención.' },
      { page: 1, text: 'tal desplazamiento no es dejado al libre albedrío psíquico', title: 'El desplazamiento tiene una ley', comment: '2ª pregunta. Lo que parece un error caprichoso no queda librado al azar: el desplazamiento obedece a vías regulares. Por eso el olvido es interpretable y no un simple hueco de memoria.' },
      { page: 3, text: 'una serie asociativa entre Signorelli', title: 'El caso Signorelli', comment: '2ª pregunta. El nombre olvidado (Signorelli) se enlaza por asociación a un tema que el sujeto evitaba; los nombres sustitutos (Botticelli, Boltraffio) marcan el camino del desplazamiento y de la represión.' },
    ],
    'Freud Conferencias 5 y 6': [
      { page: 1, text: 'las operaciones fallidas', title: 'Las operaciones fallidas tienen sentido', comment: '1ª pregunta. Las operaciones fallidas (lapsus, olvidos, extravíos) parecen sin valor, pero poseen un sentido. Sobre ese supuesto se funda todo el procedimiento psicoanalítico.' },
      { page: 22, text: 'el trastrabarse', title: 'El lapsus: dos propósitos que chocan', comment: 'En el trastrabarse (desliz del habla) interfieren dos propósitos: el resultado es una transacción. El "error" dice algo que la intención consciente quería callar.' },
      { page: 26, text: 'El olvido de nombres propios es en verdad un notable modelo', title: 'El olvido de nombres como modelo', comment: 'Freud toma el olvido de nombres propios como el modelo más claro de toda operación fallida: ahí se ve con nitidez la interferencia entre intenciones y la sustitución.' },
    ],
    'Freud La_represion_y_lo_inconciente_cap_2_y_4': [
      { page: 9, text: 'una represión primordial', title: 'La represión primordial', comment: '4ª pregunta. La represión primordial es una primera fase que fija un núcleo: a la agencia representante de la pulsión se le rehúsa la entrada en la conciencia. Es la condición de todo lo reprimido posterior.' },
      { page: 9, text: 'esfuerzo de dar caza', title: 'La represión propiamente dicha', comment: '4ª pregunta. La represión propiamente dicha es un "esfuerzo de dar caza": recae sobre los retoños del núcleo reprimido o sobre lo que entra en falso enlace con él.' },
      { page: 26, text: 'una contrainvestidura', title: 'La represión exige un gasto constante', comment: '3ª pregunta. La represión no es un acto único: para mantener alejada la representación, el aparato sostiene una contrainvestidura, un gasto de energía permanente. Por eso la operación siempre puede fallar.' },
      { page: 15, text: 'un retorno de lo reprimido', title: 'El retorno de lo reprimido', comment: '5ª pregunta. Lo reprimido no desaparece: retorna en formaciones sustitutivas (síntomas, sueños, actos fallidos). El síntoma es, en buena parte, un indicio de ese retorno.' },
      { page: 20, text: 'La multivocidad de lo inconciente', title: 'Los sentidos de «inconsciente»', comment: '6ª pregunta. Freud distingue los sentidos del término: el descriptivo (lo latente, capaz de hacerse consciente), el dinámico (lo reprimido, que pugna por volver) y el sistemático (el sistema Icc, con leyes propias).' },
    ],
    /* ---- CLASE 7 · Sexualidad infantil (la invención de la pulsión) ---- */
    'Freud_Conf_20': [
      { page: 2, text: 'error de superposición', title: 'El error de superposición', comment: '2ª pregunta. El sentido común confunde lo sexual con lo genital: ese "error de superposición" es lo que Freud denuncia. Lo sexual es mucho más amplio que la genitalidad.' },
      { page: 1, text: 'la función de la reproducción en el núcleo de la sexualidad', title: 'Lo sexual no es la reproducción', comment: '2ª pregunta. Hacer de la reproducción el núcleo de la sexualidad deja afuera la sexualidad infantil y las perversiones. Es uno de los supuestos del sentido común que caen.' },
      { page: 15, text: 'Hemos ampliado el concepto de la sexualidad', title: 'La ampliación del concepto de sexualidad', comment: '1ª y 2ª pregunta. El psicoanálisis amplía lo sexual hasta abarcar las perversiones y la sexualidad infantil: toda actividad que busque placer de órgano, no sólo la genital reproductiva.' },
      { page: 9, text: 'el concepto de libido', title: 'La libido', comment: '6ª pregunta. Freud introduce la libido como la energía de la pulsión sexual, análoga al hambre respecto de la nutrición: una magnitud cuantitativa, no un fin reproductivo.' },
    ],
    'Freud_Tres_Ensayos_I': [
      { page: 2, text: 'Las aberraciones sexuales', title: 'Las perversiones como vía de acceso', comment: '1ª pregunta. Estudiar las aberraciones no es estudiar lo patológico aparte: es la vía para entender la sexualidad humana en general, porque muestran que objeto y meta son variables.' },
      { page: 2, text: 'objeto sexual a la persona de la que parte la atracción sexual', title: 'Objeto y meta sexual', comment: '4ª pregunta. Freud distingue el objeto sexual (la persona de la que parte la atracción) de la meta sexual (la acción a la que tiende la pulsión). Distinción decisiva para lo que sigue.' },
      { page: 13, text: 'no hay sino una soldadura', title: 'El vínculo es sólo una soldadura', comment: '4ª pregunta. Entre la pulsión y su objeto "no hay sino una soldadura": el objeto no está fijado por la naturaleza, es contingente. Lo encubre la aparente regularidad del objeto en el adulto.' },
      { page: 30, text: 'pulsiones parciales', title: 'La pulsión se compone de pulsiones parciales', comment: 'La pulsión sexual no es unitaria: se arma de pulsiones parciales, que suelen presentarse en pares de opuestos (actividad/pasividad, ver/ser visto).' },
    ],
    /* ---- CLASE 8 · Conceptualizar la pulsión ---- */
    'Freud_Pulsiones': [
      { page: 12, text: 'esfuerzo, meta, objeto, fuente de la pulsión', title: 'Los cuatro elementos de la pulsión', comment: '1ª pregunta. Freud desglosa la pulsión en esfuerzo, meta, objeto y fuente. El objeto es lo más variable: no está enlazado originariamente a la pulsión, es lo más contingente.' },
      { page: 3, text: 'un concepto fronterizo entre lo anímico y lo somático', title: 'La pulsión, concepto fronterizo', comment: '1ª pregunta. La pulsión es un "concepto fronterizo entre lo anímico y lo somático": el representante psíquico de los estímulos que nacen en el interior del cuerpo.' },
      { page: 12, text: 'la exigencia de trabajo que es impuesta a lo anímico', title: 'La pulsión como exigencia de trabajo', comment: '1ª pregunta. El esfuerzo (Drang) es la medida de la exigencia de trabajo que la pulsión impone a lo anímico. La pulsión no cesa: empuja de manera constante.' },
      { page: 9, text: 'la huida motriz ante la fuente de estímulo', title: 'De la pulsión no se puede huir', comment: '2ª pregunta. Del estímulo externo uno puede huir (huida motriz); de la pulsión no, porque proviene del interior. Por eso exige tramitación psíquica y no mera fuga.' },
    ],
    'Freud_Tres_Ensayos_II': [
      { page: 2, text: 'AMNESIA INFANTIL', title: 'La amnesia infantil', comment: '3ª pregunta. El olvido de la primera infancia no es incapacidad de memoria: es efecto de la represión de la sexualidad temprana. Las huellas están, pero quedan inaccesibles.' },
      { page: 7, text: 'EL CHUPETEO', title: 'El chupeteo: modelo de la sexualidad infantil', comment: '3ª pregunta. Freud toma el chupeteo como modelo: muestra los tres caracteres de la sexualidad infantil: es autoerótica, nace apuntalada en una función vital y se liga a una zona erógena.' },
      { page: 9, text: 'El quehacer sexual se apuntala', title: 'El apuntalamiento', comment: '3ª pregunta. El quehacer sexual se apuntala primero en una función de autoconservación (la nutrición) y recién después se independiza como búsqueda de placer puro.' },
      { page: 17, text: 'un perverso polimorfo', title: 'El niño, «perverso polimorfo»', comment: 'El niño puede practicar todas las transgresiones: sus pulsiones son parciales y buscan placer en distintas zonas, sin subordinarse todavía a la genitalidad ni a la reproducción.' },
      { page: 24, text: 'esta fase oral como la posterior fase', title: 'Fases oral y anal', comment: '4ª pregunta. Las organizaciones pregenitales: la fase oral (la boca como zona rectora) y la posterior fase sádico-anal, cada una bajo el primado de una zona erógena.' },
    ],
  };

  /* ========================================================================
     SYSTEM PROMPT DEL TUTOR IA (preservado verbatim)
     ======================================================================== */
  const TUTOR_PROMPT = `
    Actúas como un Tutor Didáctico de Psicoanálisis universitario, especializado en la cátedra de Psicoanálisis de la UFLO (Universidad de Flores).
    Tu tono debe ser profesional, empático, riguroso y pedagógico, emulando la excelencia docente de tus titulares (Blas Rivera y Marina Judith Homse).
    Ayudas al estudiante a desarmar errores comunes en la interpretación clínica y teórica (por ejemplo, reducir el trauma a un simple suceso externo físico, creer que interpretar es usar un diccionario de símbolos cerrados, o confundir el método catártico con el psicoanálisis formal estructurado).
    Explica con claridad los contrastes conceptuales entre autores (Janet, Breuer, Freud, Lacan, Melanie Klein).
    Cuando te pregunten conceptos complejos como la pulsión, el apuntalamiento o la regresión tópica, responde estructuradamente en viñetas o listas y usa ejemplos prácticos o analogías cotidianas que faciliten la comprensión, sin perder el rigor conceptual metapsicológico.
    Recuerda responder siempre en español y mantén tus respuestas concisas y bien organizadas.
  `;

  /* ========================================================================
     HELPERS DE ACCESO
     ======================================================================== */
  function programaPorId(id) { return PROGRAMA.find(p => p.id === id); }
  function clasesDeUnidad(n) { return PROGRAMA.filter(p => p.tipo === 'clase' && p.unidad === n); }
  function unidadPorNumero(n) { return UNIDADES.find(u => u.numero === n); }

  return {
    CONFIG, UNIDADES, PROGRAMA, CONCEPTOS,
    MAPA_NODOS, MAPA_ARISTAS,
    CASOS, QUIZ_U3, PARCIAL1, PDF_ANNOTATIONS, TUTOR_PROMPT,
    programaPorId, clasesDeUnidad, unidadPorNumero,
  };
})();
