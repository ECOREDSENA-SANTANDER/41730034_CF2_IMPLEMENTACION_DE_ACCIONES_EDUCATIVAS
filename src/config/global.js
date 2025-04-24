export default {
  global: {
    Name: 'Intervención y evaluación en entornos saludables',
    Description:
      'Para incursionar en la promoción de la educación en entornos saludables, Colombia fortalece competencias pedagógicas dentro del plan decenal de salud pública (PDSP) 2012-2021 y la estrategia de entornos saludables (EES). Esta iniciativa busca mejorar la calidad de vida mediante acciones educativas centradas en la sostenibilidad ambiental, la salud pública y la equidad, alineadas con la carta de Ottawa de 1986.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Estrategia de escuelas saludables',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Evaluación de la estrategia de entornos saludables (EES)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Estructura general para la implementación de la estrategia de entornos saludables (EES)',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Plan de acción intersectorial de entornos saludables (PAIES)',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Elementos que debe incluir el PAIES según las directrices de la OMS/OPS',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Directrices para la caracterización y seguimiento de la estrategia de entornos saludables (EES)',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        'Herramientas para la caracterización y seguimiento de las condiciones socioambientales y sanitarias de los entornos.',
      referencia:
        'Ministerio de Salud y Protección Social. (2016). Herramientas para la caracterización y seguimiento de las condiciones socioambientales y sanitarias de los entornos (Documentos 06-07-16). Bogotá, Colombia: Ministerio de Salud y Protección Social.',
      tipo: 'Cartilla',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SA/herramientas-para-caracterizacion-y-seguimiento-de-las-condiciones-socio-ambientales-y-sanitarias-de-los-entornos.pdf',
    },
    {
      tema:
        'Evaluación de la política pública de escuela saludable en Colombia: fase de formulación (1999-2006).',
      referencia:
        'Campos, A. C., Robledo-Martínez, R., Arango-Soler, J. M., & Agudelo-Calderón, C. A. (s. f.). Evaluación de la política pública de escuela saludable en Colombia: fase de formulación (1999-2006). ',
      tipo: 'Revista',
      link:
        'http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0124-00642012000500002',
    },
  ],
  glosario: [
    {
      termino: 'Abogacía',
      significado:
        'acción de sensibilizar y movilizar a actores sociales y gubernamentales para promover políticas públicas que respalden entornos saludables.',
    },
    {
      termino: 'Ambiente',
      significado:
        'espacio físico, social y cultural donde se desarrollan las personas, garantizando seguridad, inclusión y bienestar.',
    },
    {
      termino: 'Caracterización',
      significado:
        'proceso de diagnóstico integral de las condiciones socio - ambientales, educativas y sanitarias de un entorno, vivienda o escuela.',
    },
    {
      termino: 'Comunicación',
      significado:
        'herramienta para promover el diálogo, la participación y la toma de decisiones asertivas dentro de la comunidad escolar.',
    },
    {
      termino: 'Educación',
      significado:
        'componente que integra la promoción de la salud en el currículo escolar, fortaleciendo habilidades para la vida y la convivencia.',
    },
    {
      termino: 'Empoderamiento',
      significado:
        'proceso mediante el cual las comunidades adquieren capacidades para participar activamente en la gestión de su entorno saludable.',
    },
    {
      termino: 'Equidad',
      significado:
        'principio que busca reducir las desigualdades en salud y educación, asegurando igualdad de oportunidades y condiciones.',
    },
    {
      termino: 'Evaluación',
      significado:
        'análisis sistemático de las acciones y resultados de la estrategia de entornos saludables, mediante indicadores y procesos participativos.',
    },
    {
      termino: 'Intersectorialidad',
      significado:
        'coordinación entre diferentes sectores (salud, educación, ambiente, comunidad) para implementar acciones integrales y sostenibles.',
    },
    {
      termino: 'Participación',
      significado:
        'involucramiento activo de la comunidad educativa, familias y organizaciones en la toma de decisiones para mejorar el entorno.',
    },
    {
      termino: 'Planificación',
      significado:
        'proceso organizado de diseño, implementación y seguimiento de estrategias y acciones para promover entornos saludables.',
    },
    {
      termino: 'Políticas',
      significado:
        'normas, leyes y acuerdos que respaldan y garantizan la promoción y protección de la salud en espacios educativos y comunitarios.',
    },
    {
      termino: 'Prevención',
      significado:
        'acciones orientadas a evitar riesgos y problemas de salud mediante la promoción de estilos de vida saludables.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'capacidad de mantener y fortalecer las acciones de entornos saludables a largo plazo, integrando recursos y compromiso social.',
    },
    {
      termino: 'Vigilancia',
      significado:
        'monitoreo constante de las condiciones socio - ambientales y sanitarias, para prevenir y responder a riesgos en los entornos escolares y comunitarios.',
    },
  ],
  referencias: [
    {
      referencia:
        'Organización mundial de la salud, organización panamericana de la salud, ministerio de la protección social, ministerio de educación nacional, ministerio de ambiente, vivienda y desarrollo territorial, & departamento nacional de planeación. (2009). Herramientas para la caracterización y seguimiento de las condiciones socioambientales y sanitarias de los entornos (Documentos 06-07-16). ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SA/herramientas-para-caracterizacion-y-seguimiento-de-las-condiciones-socio-ambientales-y-sanitarias-de-los-entornos.pdf',
    },
    {
      referencia:
        'Ministerio de salud y protección social. (2016). Lineamientos nacionales para la aplicación y el desarrollo de las estrategias de entornos saludables (EES). ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SA/lineamientos-nacionales-para-la-aplicacion-y-el-desarrollo-de-las-ees.pdf',
    },
    {
      referencia:
        'Organización mundial de la salud, organización panamericana de la salud, ministerio de la protección social, ministerio de educación nacional, ministerio de ambiente, vivienda y desarrollo territorial, y departamento nacional de planeación. (2009). manual de gestión territorial: entornos saludables (documento 05). ',
      link:
        'https://www.minsalud.gov.co/Documentos%20y%20Publicaciones/MANUAL%20DE%20GESTI%C3%93N%20TERRITORIAL.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Eliana Milena Buitrago Umaña',
          cargo: 'Experta temática',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Paola Gelvez Monsalva',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'María Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Johann Sebastián Terán Carvajal',
          cargo: 'Animador y productor multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <i>full-stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
