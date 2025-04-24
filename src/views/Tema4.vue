<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Directrices para la caracterización y seguimiento de la estrategia de entornos saludables (EES)
    p.mb-4(data-aos="fade-left") La organización mundial de la salud (OMS) y la organización panamericana de la salud (OPS) (2009) establecieron que para una adecuada gestión de las condiciones socio-ambientales y sanitarias en cada uno de los subprogramas de la estrategia de entornos saludables (EES), es fundamental contar con un proceso sistemático de caracterización y seguimiento, por ello, se recomienda que los programas de caracterización y monitoreo incluyan, al menos, los siguientes componentes fundamentales:
    .row.align-items-center.mb-4.titulo-icono(data-aos="fade-left")
      .col-auto.titulo-icono-img
        img(src='@/assets/bg/2.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.p-0 Sistema de caracterización comunitaria para la estrategia de viviendas saludables (EVS)
    .row.justify-content-center.mb-5.bg-color-6(data-aos="fade-left")
      .col-lg-5.col-6.col-md-8.p-0.d-none.d-lg-block
        img(src='@/assets/curso/temas/t4/1.png', alt='')
      .col-lg-7.col-sm-12.col-md-12.align-content-center
        .border-top-cus 
          p.px-4.mt-3 Herramienta orientada a identificar y evaluar las condiciones ambientales, sociales y sanitarias de las viviendas, considerando factores como acceso al agua potable, saneamiento básico, disposición de residuos, condiciones de hacinamiento, infraestructura, seguridad y factores de riesgo presentes en el hogar; este sistema debe permitir también la identificación de factores protectores, redes de apoyo comunitario y prácticas saludables presentes en las comunidades, facilitando la formulación de intervenciones contextualizadas y sostenibles.
    
    
    
    .row.align-items-center.mb-4.titulo-icono(data-aos="fade-left")
      .col-auto.titulo-icono-img
        img(src='@/assets/bg/2.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.p-0 Sistema de caracterización institucional para la estrategia de escuelas saludables (EES)
    .bloque-texto-g.bg-fondo-5.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t4/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4.my-5
        p.mb-0 Mecanismo dirigido a evaluar las condiciones físicas, ambientales y sociales del entorno escolar, incluye el análisis de la infraestructura educativa, acceso a servicios básicos (agua, saneamiento, energía), espacios de recreación, seguridad, condiciones psicosociales, así como las políticas y prácticas de promoción de la salud y participación de la comunidad educativa (estudiantes, docentes, padres de familia). Este sistema también debe considerar aspectos relacionados con la convivencia, salud mental y factores que afectan el rendimiento académico.




    .row.align-items-center.mb-4.titulo-icono(data-aos="fade-left")
      .col-auto.titulo-icono-img
        img(src='@/assets/bg/2.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.p-0 Sistema de caracterización laboral para la estrategia de lugares de trabajo saludables (ELTS)
    .bloque-texto-g.bloque-texto-g--inverso.bg-fondo-4.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img.bg-color-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/3.png')

        .bloque-texto-g__texto.p-4
          p.mb-0 Este componente busca evaluar las condiciones físicas, sociales, ambientales y organizacionales de los espacios laborales, prestando atención a los factores de riesgo ocupacional (físicos, químicos, biológicos, ergonómicos y psicosociales), así como a las oportunidades para la promoción de la salud, seguridad y bienestar de los trabajadores, el sistema debe facilitar el diseño de planes de intervención que promuevan ambientes laborales saludables, inclusivos y productivos, respetando los derechos laborales y fortaleciendo la cultura organizacional.




    .row.align-items-center.mb-4.titulo-icono(data-aos="fade-left")
      .col-auto.titulo-icono-img
        img(src='@/assets/bg/2.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.p-0 Sistema de seguimiento y monitoreo intersectorial
    .cajon.color-primario.p-4.mb-5(data-aos="fade-left")
      p.mb-0 Herramienta clave que garantiza la actualización periódica y sistemática de la información recolectada, permitiendo un análisis continúo de las condiciones de los entornos y la efectividad de las intervenciones implementadas, este sistema debe fomentar la articulación efectiva de los diferentes sectores involucrados (salud, educación, vivienda, ambiente, trabajo, desarrollo social, entre otros), promoviendo acciones coordinadas e integrales. También, debe contemplar mecanismos de retroalimentación y participación comunitaria, asegurando que las decisiones se basen en datos confiables y respondan a las dinámicas locales.





    .row.align-items-center.mb-4.titulo-icono(data-aos="fade-left")
      .col-auto.titulo-icono-img
        img(src='@/assets/bg/2.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.p-0 Incorporación de indicadores de equidad y determinantes sociales de la salud
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-sm-12.col-lg-9
        p.mb-4 Es imprescindible que todos los sistemas mencionados incluyan indicadores de desigualdad y vulnerabilidad, de manera que las acciones se focalicen en los grupos y territorios con mayores carencias y riesgos, esto incluye el análisis de variables como nivel socioeconómico, género, ciclo de vida, pertenencia étnica, discapacidad, acceso a servicios esenciales, entre otros, el enfoque de equidad permite avanzar hacia la justicia social, contribuyendo a cerrar brechas y a garantizar el acceso universal a entornos saludables.
        .row.justify-content-center.mb-5(data-aos="fade-left")
          .col-lg-5.col-6.col-md-8.p-0.d-none.d-lg-block.bg-color-7.d-none.d-lg-block
            img.p-4(src='@/assets/curso/temas/t4/5.svg', alt='')
          .col-lg-7.col-sm-12.col-md-12.bg-color-6.align-content-center
              p.px-4 Posteriormente se debe fortalecer el proceso mediante la participación activa de la comunidad, garantizando que las personas directamente involucradas puedan aportar a la identificación de problemas y soluciones, también se recomienda aprovechar el uso de tecnologías para la recolección y análisis de datos, que faciliten la sistematización de la información y promuevan la transparencia y la vigilancia comunitaria. Igualmente, se destaca la importancia de aplicar una perspectiva intercultural, que respete y valore los saberes y prácticas propias de cada comunidad, y que permita adaptar las intervenciones a la diversidad cultural y territorial.
      .col-sm-12.col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/t4/4.png', alt='')

    .row.justify-content-center.align-items-center.mb-5.bg-color-8(data-aos="fade-left")
      .col-sm-12.col-lg-1.d-none.d-lg-block.justify-content-center
        img.mx-2(src='@/assets/curso/temas/t4/6.svg', alt='')
      .col-sm-12.col-lg-11
        .py-4
          p.mb-0 También es necesario contar con mecanismos claros para evaluar los resultados e impactos de las acciones desarrolladas, mediante indicadores de proceso, resultado e impacto que reflejen los cambios logrados en las condiciones de vida, salud y bienestar de la población, para garantizar la sostenibilidad de la estrategia, también se recomienda implementar procesos de formación y capacitación continua dirigidos a líderes comunitarios, personal técnico y tomador de decisiones, fortaleciendo así las capacidades locales para la gestión autónoma y efectiva de los entornos saludables.


    .row.align-items-center.mb-4.titulo-icono(data-aos="fade-left")
      .col-auto.titulo-icono-img
        img(src='@/assets/bg/2.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.p-0 Herramienta para la caracterización de la vivienda a nivel comunitario

    .bloque-texto-g.bloque-texto-g--inverso.bg-fondo-4.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img.bg-color-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/7.png')

        .bloque-texto-g__texto.p-4
          p.mb-0 Debido a la sencillez de su estructura y al enfoque cualitativo de sus indicadores, esta herramienta resulta accesible y fácil de aplicar por actores comunitarios, técnicos y autoridades locales, sus resultados son fundamentales para orientar la toma de decisiones en políticas públicas y programas destinados a mejorar las condiciones de vida de las comunidades. Además, permite identificar problemáticas específicas de grupos o unidades residenciales, facilitando la implementación de acciones que contribuyan al desarrollo territorial sostenible y a la mejora de la calidad de vida de la población (OMS/OPS, 2009; adaptado).




    .row.align-items-center.mb-4.titulo-icono(data-aos="fade-left")
      .col-auto.titulo-icono-img
        img(src='@/assets/bg/2.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.p-0 Características de la herramienta para la caracterización de la vivienda a nivel comunitario

    .cajon.color-primario.p-4.mb-5(data-aos="fade-left")
      p.mb-0 Concepto: la herramienta para la caracterización de la vivienda a nivel comunitario es un instrumento de autoevaluación utilizado antes (pre) y después (post) de la implementación de un programa o proyecto relacionado con la estrategia de entornos saludables (EES), esta herramienta facilita el diagnóstico participativo de las condiciones habitacionales, promoviendo una mirada integral de los factores que afectan la salud y el bienestar de las familias y comunidades.
    p.mb-4(data-aos="fade-left") Su objetivo principal es diagnosticar las condiciones de la vivienda y su entorno habitacional a nivel comunitario, abarcando diversas dimensiones fundamentales. Entre los temas evaluados se encuentran:
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-sm-12.col-lg-4
        .tarjeta--boton-2.bg-fondo-12.p-4.mb-cus
          .row.justify-content-center.mb-3.d-none.d-lg-block
            .col-3.m-auto
              figure
                img(src='@/assets/curso/temas/t4/8.svg')
          p.text-center.mb-0 Condición de tenencia (propiedad o alquiler, estabilidad en la vivienda).
      .col-sm-12.col-lg-4
        .tarjeta--boton-2.bg-fondo-12.p-4.mb-cus
          .row.justify-content-center.mb-3.d-none.d-lg-block
            .col-3.m-auto
              figure
                img(src='@/assets/curso/temas/t4/9.svg')
          p.text-center.mb-0 Localización y entorno (ubicación geográfica, seguridad del entorno, riesgos ambientales).
      .col-sm-12.col-lg-4
        .tarjeta--boton-2.bg-fondo-12.p-4.mb-cus
          .row.justify-content-center.mb-3.d-none.d-lg-block
            .col-3.m-auto
              figure
                img(src='@/assets/curso/temas/t4/10.svg')
          p.text-center.mb-0 Acceso y disponibilidad de servicios básicos (agua potable, saneamiento, energía, recolección de residuos).

    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-sm-12.col-lg-4
        .tarjeta--boton-2.bg-fondo-12.p-4.mb-cus
          .row.justify-content-center.mb-3.d-none.d-lg-block
            .col-3.m-auto
              figure
                img(src='@/assets/curso/temas/t4/11.svg')
          p.text-center.mb-0 Condiciones de diseño y habitabilidad (infraestructura, ventilación, iluminación, espacio disponible).
      .col-sm-12.col-lg-4
        .tarjeta--boton-2.bg-fondo-12.p-4.mb-cus
          .row.justify-content-center.mb-3.d-none.d-lg-block
            .col-3.m-auto
              figure
                img(src='@/assets/curso/temas/t4/12.svg')
          p.text-center.mb-0 Condición social y humana (dinámicas familiares, cohesión social, factores psicosociales).
      .col-sm-12.col-lg-4
        .tarjeta--boton-2.bg-fondo-12.p-4.mb-cus
          .row.justify-content-center.mb-3.d-none.d-lg-block
            .col-3.m-auto
              figure
                img(src='@/assets/curso/temas/t4/13.svg')
          p.text-center.mb-0 Condición de desarrollo comunitario y gestión ciudadana (organización comunitaria, participación social, acceso a recursos colectivos).

    .row.justify-content-center.mb-5.bg-color-6(data-aos="fade-left")
      .col-lg-5.col-6.col-md-8.p-0.d-none.d-lg-block
        img(src='@/assets/curso/temas/t4/14.png', alt='')
      .col-lg-7.col-sm-12.col-md-12.align-content-center
        .border-top-cus 
          p.px-4.mt-3 Esta herramienta permite identificar de forma integral las fortalezas, necesidades y áreas de mejora de las viviendas y comunidades, siendo una base fundamental para la formulación de intervenciones sostenibles, es una herramienta de autodiagnóstico comunitario, diseñada para ser aplicada de manera conjunta por diversos actores clave, entre ellos se encuentran: autoridades locales, equipos técnicos, tomadores de decisiones, líderes comunitarios y ciudadanía en general, su carácter participativo busca fomentar la corresponsabilidad y el empoderamiento de las comunidades en la identificación, análisis y resolución de los problemas que afectan sus entornos de vida. Además, facilita la gestión, diseño y evaluación de planes, proyectos y programas orientados a mejorar las condiciones de habitabilidad y salud ambiental.


    .row.align-items-center.mb-4.titulo-icono(data-aos="fade-left")
      .col-auto.titulo-icono-img
        img(src='@/assets/bg/2.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.p-0 Herramienta para la caracterización de la vivienda a nivel familiar

    .cajon.color-primario.p-4.mb-5(data-aos="fade-left")
        p.mb-0 La Organización mundial de la salud (OMS) y la Organización panamericana de la salud (OPS) (2009), establecieron que las estrategias de intervención en viviendas a nivel familiar deben enfocarse en su mejoramiento progresivo, con el fin de lograr hogares que garanticen condiciones óptimas de salud, seguridad, calidad de vida y bienestar para las familias. A continuación, se describen los principales elementos y alcances de esta herramienta.






    .row.align-items-center.mb-4.titulo-icono(data-aos="fade-left")
      .col-auto.titulo-icono-img
        img(src='@/assets/bg/2.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.p-0 Características de la herramienta para la caracterización de la vivienda a nivel familiar y comunitario

    .row.justify-content-center.align-items-center.mb-5.bg-color-8(data-aos="fade-left")
      .col-sm-12.col-lg-1.d-none.d-lg-block.justify-content-center
        img.mx-2(src='@/assets/curso/temas/t4/6.svg', alt='')
      .col-sm-12.col-lg-11
        .py-4
          p.mb-0 #[b Concepto:] la herramienta para la caracterización de la vivienda a nivel familiar es un instrumento integral de evaluación que permite identificar las condiciones de habitabilidad de las viviendas, su propósito es detectar las necesidades prioritarias, reconocer los hogares más vulnerables y orientar las estrategias de intervención destinadas a mejorar sus condiciones.

    p.mb-3(data-aos="fade-left") La herramienta está estructurada en dos secciones complementarias:
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-sm-12.col-lg-7
        .bg-color-4.mb-4
          h3.px-3.py-1 Encuesta familiar, compuesta por cuatro módulos:
        ul.lista-ul.lista-ul--separador.mb-5
          li.d-flex
            i.fas.fa-check-circle.bg-color-3
            p.mb-0 Datos generales de la familia y la vivienda.
          li.d-flex
            i.fas.fa-check-circle.bg-color-3
            p.mb-0  Evaluación psicosocial.

          li.d-flex
            i.fas.fa-check-circle.bg-color-3
            p.mb-0 Condiciones físicas y estructurales de la vivienda.
          
          li.d-flex
            i.fas.fa-check-circle.bg-color-3
            p.mb-0 Movilidad y percepción de seguridad.
             
        .bg-color-4.mb-4
          h3.px-3.py-1 Instrumento de observación directa, que incluye tres módulos:
        ul.lista-ul.lista-ul--separador
          li.d-flex
            i.fas.fa-check-circle.bg-color-3
            p.mb-0 Seguridad y entorno inmediato de la vivienda.
          li.d-flex
            i.fas.fa-check-circle.bg-color-3
            p.mb-0 Condiciones internas y estructurales de la vivienda.
          li.d-flex
            i.fas.fa-check-circle.bg-color-3
            p.mb-0 Estado del saneamiento básico y servicios esenciales.
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/t4/15.svg', alt='')

    p.mb-4(data-aos="fade-left") La herramienta debe ser aplicada a todas las familias residentes en las viviendas seleccionadas, mediante personal encuestador capacitado para este fin. Los usuarios y responsables se describen a continuación: 
    ul.lista-ul.lista-ul--separador.mb-5(data-aos="fade-left")
          li.d-flex
            i.fas.fa-check-circle.bg-color-3
            p.mb-0 Coordinadores del proceso a nivel nacional, regional y local.
          li.d-flex
            i.fas.fa-check-circle.bg-color-3
            p.mb-0  Capacitadores y supervisores que acompañan y garantizan la calidad del proceso en campo.
          li.d-flex
            i.fas.fa-check-circle.bg-color-3
            p.mb-0  Personal operativo y encuestadores que realizan las visitas y levantamiento de información.



    .row.align-items-center.mb-4.titulo-icono(data-aos="fade-left")
      .col-auto.titulo-icono-img
        img(src='@/assets/bg/2.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.p-0 Herramienta para la caracterización de la escuela a nivel institucional 
    .cajon.color-primario.p-4.mb-5
        p.mb-0 Identifica las principales necesidades, fortalezas y aspectos prioritarios que debe atender la escuela a corto, mediano y largo plazo, su propósito es promover mejores condiciones de vida, aprendizaje y bienestar para la comunidad escolar, facilitando el camino para que la escuela sea reconocida como un entorno saludable.
    
    
    
    
    
    .row.align-items-center.mb-4.titulo-icono(data-aos="fade-left")
      .col-auto.titulo-icono-img
        img(src='@/assets/bg/2.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.p-0 Caracterización de escuelas saludables a nivel institucional
    
    .row.justify-content-center.align-items-center.mb-5.bg-color-8(data-aos="fade-left")
      .col-sm-12.col-lg-1.d-none.d-lg-block.justify-content-center
        img.mx-2(src='@/assets/curso/temas/t4/6.svg', alt='')
      .col-sm-12.col-lg-11
        .py-4
          p.mb-0 #[b Concepto:] es una herramienta diseñada para realizar un auto-diagnóstico participativo del entorno escolar, según los componentes y líneas de acción definidas en los lineamientos nacionales para la aplicación y desarrollo de las estrategias de entornos saludables (2006). Su objetivo es orientar a las instituciones educativas en la identificación de desafíos y oportunidades de mejora, a fin de avanzar hacia la consolidación de escuelas más seguras, inclusivas y saludables.

    p.mb-3(data-aos="fade-left") La herramienta está estructurada en dos grandes módulos:
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-sm-12.col-lg-7
        .bg-color-4.mb-4
          h3.px-3.py-1 Planeación escolar:
        ul.lista-ul.lista-ul--separador.mb-5
          li.d-flex
            i.fas.fa-check-circle.bg-color-3
            p.mb-0 Evaluación de los procesos de planificación y gestión educativa.
          li.d-flex
            i.fas.fa-check-circle.bg-color-3
            p.mb-0  Fortalecimiento de la estrategia institucional para el desarrollo de entornos saludables.
          li.d-flex
            i.fas.fa-check-circle.bg-color-3
            p.mb-0 Establecimiento de metas claras y medibles para el desarrollo humano integral de la comunidad escolar.
     
             
        .bg-color-4.mb-4
          h3.px-3.py-1 Desarrollo humano:
        ul.lista-ul.lista-ul--separador
          li.d-flex
            i.fas.fa-check-circle.bg-color-3
            p.mb-0 Evaluación de las prácticas de participación democrática en la escuela.
          li.d-flex
            i.fas.fa-check-circle.bg-color-3
            p.mb-0 Diagnóstico de la salud escolar, bienestar emocional y físico del alumnado.
          li.d-flex
            i.fas.fa-check-circle.bg-color-3
            p.mb-0 Condiciones de los ambientes escolares y su relación con el aprendizaje y la convivencia.
          li.d-flex
            i.fas.fa-check-circle.bg-color-3
            p.mb-0 Cada módulo se organiza en componentes y líneas de acción específicas, permitiendo un análisis detallado y propositivo.

          
         
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/t4/16.svg', alt='')


    .row.justify-content-center.align-items-center.mb-5.bg-color-8(data-aos="fade-left")
      .col-sm-12.col-lg-12
        .py-4.px-3
          p.mb-0 Este instrumento puede ser aplicado tanto a nivel local como departamental, según las necesidades del contexto, su uso es de carácter voluntario y participativo, promoviendo que las propias escuelas realicen su autodiagnóstico del entorno escolar y evalúen los avances en la implementación de entornos saludables, la aplicación y seguimiento del proceso debe ser liderada por la dirección de la institución educativa, con la participación activa de docentes, estudiantes, familias y otros actores de la comunidad escolar.
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/t4/17.png', alt='')
      .col-sm-12.col-lg-7
        p.mb-0 Para finalizar, es importante destacar que la implementación de estas herramientas de caracterización, tanto a nivel comunitario, familiar, institucional y laboral, constituye un pilar fundamental para la adecuada gestión de la estrategia de entornos saludables (EES); al contar con diagnósticos integrales, participativos y basados en evidencias, se fortalece la capacidad de los territorios para diseñar e implementar intervenciones contextualizadas, sostenibles y orientadas a mejorar las condiciones de vida, salud y bienestar de las comunidades, también estos procesos de caracterización y seguimiento permiten avanzar hacia la equidad en salud, al identificar y priorizar las necesidades de los grupos más vulnerables, promoviendo así una respuesta intersectorial e inclusiva. Por lo tanto, las herramientas propuestas no solo facilitan la identificación de problemas y oportunidades, sino que también impulsan la participación activa de las comunidades, la articulación de los diferentes sectores y la toma de decisiones basadas en información actualizada y confiable, asegurando así la continuidad, eficacia y sostenibilidad de la estrategia a largo plazo.














</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
