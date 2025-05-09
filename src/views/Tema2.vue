<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Evaluación de la estrategia de entornos saludables (EES)
    .bloque-texto-g.bg-fondo-5.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t2/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La estrategia de entornos saludables (EES) tiene como propósito promover y garantizar ambientes que favorezcan el bienestar, la salud integral y la calidad de vida de la población en diferentes espacios como la escuela, la vivienda, la comunidad y los lugares de trabajo, para asegurar su adecuada implementación y cumplimiento de los objetivos, es fundamental que las entidades territoriales (departamentos, municipios y distritos) en Colombia, desarrollen un trabajo planeado, articulado y evaluado.
   
    
    .row.align-items-center.mb-5.titulo-icono(data-aos="fade-left")
      .col-auto.titulo-icono-img
        img(src='@/assets/bg/2.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.p-0 Responsabilidades clave de las entidades territoriales
    
    .tarjeta--container.row.mb-4(data-aos="fade-left")
      .col-md.tarjeta.bg-fondo-6.p-4.p-md-4.p-lg-5
        .row.justify-content-center.mb-1
          .col-12
            .row.align-items-end.justify-content-start
              .col-lg-3.mb-4.d-none.d-lg-block
                img.img-a.img-t(src='@/assets/curso/temas/t2/2.svg')
            p.mb-5.text-white Diseñar planes de acción intersectoriales adaptados a las realidades y necesidades locales.
      .col-md.tarjeta.bg-fondo-7.p-4.p-md-4.p-lg-5
        .row.justify-content-center.mb-1
          .col-12
            .row.align-items-end.justify-content-start
              .col-lg-3.mb-4.d-none.d-lg-block
                img.img-a.img-t(src='@/assets/curso/temas/t2/3.svg')
            p.mb-5 Implementar estrategias y acciones concretas que promuevan la salud y mejoren las condiciones socioambientales de los entornos.
    
    .tarjeta--container.row.mb-4(data-aos="fade-left")
      .col-md.tarjeta.bg-fondo-6.p-4.p-md-4.p-lg-5
        .row.justify-content-center.mb-1
          .col-12
            .row.align-items-end.justify-content-start
              .col-lg-3.mb-4.d-none.d-lg-block
                img.img-a.img-t(src='@/assets/curso/temas/t2/6.svg')
            p.mb-5.text-white Supervisar y acompañar la ejecución de estas acciones, asegurando su cumplimiento y calidad.
      .col-md.tarjeta.bg-fondo-7.p-4.p-md-4.p-lg-5
        .row.justify-content-center.mb-1
          .col-12
            .row.align-items-end.justify-content-start
              .col-lg-3.mb-4.d-none.d-lg-block
                img.img-a.img-t(src='@/assets/curso/temas/t2/7.svg')
            p.mb-5 Evaluar de manera continua los resultados, el impacto y la sostenibilidad de las acciones, mediante indicadores claros y procesos participativos.


    .row.align-items-center.mb-5.titulo-icono(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/bg/2.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.p-0 Objetivos de la evaluación de la EES
   
    .bg-full-width.bg-fondo-8.mb-5(data-aos="fade-left")
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/8.png', alt='')
          .col-sm-12.col-lg-8
            SlyderF.mb-5(columnas="col-lg-6 col-xl-6")
              .tarjeta.bg-fondo-9.p-3.p-md-3.p-lg-5
                .row.align-items-center.my-4.justify-content-center.hide-icon-sm
                    .col-sm-12.col-md-3.col-lg-5
                        img(src='@/assets/curso/temas/t2/9.svg', alt='')
                p.mb-0.text-center Medir el impacto de las acciones en la mejora de los entornos escolares, comunitarios y laborales.
          
              .tarjeta.bg-fondo-9.p-3.p-md-3.p-lg-5
                .row.align-items-center.my-4.justify-content-center.hide-icon-sm
                    .col-sm-12.col-md-3.col-lg-5
                        img(src='@/assets/curso/temas/t2/10.svg', alt='')
                p.mb-0.text-center Identificar logros, retos y oportunidades de mejora en la implementación de la estrategia.

              .tarjeta.bg-fondo-9.p-3.p-md-3.p-lg-5
                .row.align-items-center.my-4.justify-content-center.hide-icon-sm
                    .col-sm-12.col-md-3.col-lg-5
                        img(src='@/assets/curso/temas/t2/11.svg', alt='')
                p.mb-0.text-center Garantizar la transparencia y efectividad en el uso de los recursos destinados a la promoción de la salud.

              .tarjeta.bg-fondo-9.p-3.p-md-3.p-lg-5
                .row.align-items-center.my-4.justify-content-center.hide-icon-sm
                    .col-sm-12.col-md-3.col-lg-5
                        img(src='@/assets/curso/temas/t2/12.svg', alt='')
                p.mb-0.text-center Orientar la toma de decisiones informadas para fortalecer y ajustar las acciones según las particularidades de cada territorio.

              
   
    .row.align-items-center.mb-5.titulo-icono(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/bg/2.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.p-0 Importancia del enfoque intersectorial en la evaluación
    
    .row.justify-content-center.align-items-end.mb-4(data-aos="fade-left")
      .col-lg-7.col-md-12.col-sm-12
        .cajon.color-primario.p-4
          p.mb-0 La evaluación de la EES debe realizarse desde una perspectiva intersectorial, que integre a los sectores de salud, educación, ambiente, desarrollo social, vivienda, agua y saneamiento, y otros actores comunitarios. Solo mediante el trabajo conjunto se pueden lograr cambios sostenibles en los entornos y responder de manera efectiva a los determinantes sociales de la salud.
          img.d-none.d-lg-block(src='@/assets/curso/temas/t2/14.svg', alt='')

      .col-lg-5.col-md-8.col-8.d-none.d-lg-block
        img.mt-2(src='@/assets/curso/temas/t2/13.png', alt='')
    
    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-left")
      h5 Figura 1. 
      span Diagrama general implementación EES
    .row.justify-content-center.mb-0(data-aos="fade-left")
       .col-sm-12.col-lg-10
         figure(data-aos='fade-up').mb-5
            img(src='@/assets/curso/temas/t2/15.svg', alt='Diagrama general de la implementación de la estrategia de entornos saludables (EES) en Colombia, que describe la estructura del comité técnico nacional, la planeación interinstitucional (PAIES), y las fases de diagnóstico, elaboración, implementación, evaluación y supervisión, con participación comunitaria y redes de vivienda, escuela y lugares de trabajo saludables.').mb-0
    p.mb-5(data-aos="fade-left") Fuente: Elaboración propia tomado de OMS/OPS (2009)
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 Estructura general para la implementación de la estrategia de entornos saludables (EES)
    .row.align-items-center.mb-5.titulo-icono(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/bg/2.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.p-0 Comité técnico nacional de entornos saludables
    p.mb-4(data-aos="fade-left") Este comité lidera y orienta la implementación de la estrategia a nivel nacional y está conformado por entidades clave como:
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-sm-12.col-lg-7
        ul.lista-ul.lista-ul--separador
          li.d-flex
            i.fas.fa-check-circle.bg-color-3
            p.mb-0 Departamento nacional de planeación (DNP).
          li.d-flex
            i.fas.fa-check-circle.bg-color-3
            p.mb-0  Ministerio de salud y protección social (MPS).
          li.d-flex
            i.fas.fa-check-circle.bg-color-3
            p.mb-0  Ministerio de ambiente y desarrollo sostenible (MADS).
          li.d-flex
            i.fas.fa-check-circle.bg-color-3
            p.mb-0  Ministerio de educación nacional (MEN).
          li.d-flex
            i.fas.fa-check-circle.bg-color-3
            p.mb-0  Instituto colombiano de bienestar familiar (ICBF).
          li.d-flex
            i.fas.fa-check-circle.bg-color-3
            p.mb-0  Servicio nacional de aprendizaje (SENA).
          li.d-flex
            i.fas.fa-check-circle.bg-color-3
            p.mb-0  Agencia de acción social.
          li.d-flex
            i.fas.fa-check-circle.bg-color-3
            p.mb-0   Organización panamericana de la salud / Organización mundial de la salud (OPS/OMS).
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/t2/16.svg', alt='')

    .bg-color-4.mb-4(data-aos="fade-left")
        h3.px-3.py-1 Funciones principales:
    
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t2/27.png', alt='')
      .col-sm-12.col-lg-4
        .bg-color-12.px-4.py-3
          ul.lista-ul--color.mb-0
            li.d-flex
              i.fas.fa-check-circle.bg-color-3
              p.mb-0 Definir y actualizar los lineamientos nacionales de la estrategia de entornos saludables.
            li.d-flex.mb-0
                i.fas.fa-check-circle.bg-color-3
                p.mb-0 Elaborar y orientar el plan de acción intersectorial de entornos saludables.
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t2/26.png', alt='')

    .row.align-items-center.mb-5.titulo-icono
        .col-auto.titulo-icono-img
          img(src='@/assets/bg/2.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.p-0 Gestión territorial de la estrategia de entornos saludables


    .row.justify-content-center.align-items-center.mb-
      .col-sm-12.col-lg-10
        .bg-fondo-10
          .row.justify-content-center.align-items-center.mb-5
            .col-sm-12.col-lg-4.d-none.d-lg-block
              img.hcard-1(src='@/assets/curso/temas/t2/17.png', alt='')
            .col-sm-12.col-lg-4.bg-color-5.px-4.py-4.text-center.hcard-1.align-items-center
              i.fas.fa-check-circle.bg-color-3.m-auto.fa-2x.mb-4
              p.mb-0 Responsable de adaptar y ejecutar la estrategia a nivel departamental, municipal y local, asegurando que las acciones se alineen con las necesidades de cada territorio.

    .row.align-items-center.mb-5.titulo-icono(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/bg/2.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.p-0 Planeación interinstitucional de entornos saludables (PAIES)
    p.mb-4(data-aos="fade-left") Proceso que garantiza la coordinación entre sectores y niveles de gobierno para una implementación efectiva, incluye las siguientes acciones:
    ul.lista-ul.lista-ul--separador.mb-5(data-aos="fade-left")
      li.d-flex
        i.fas.fa-check-circle.bg-color-3
        p.mb-0 Mesas de trabajo de entornos saludables (COTSA).
      li.d-flex
        i.fas.fa-check-circle.bg-color-3
        p.mb-0 Espacios de concertación y articulación interinstitucional.

    .bg-color-4.mb-4(data-aos="fade-left")
        h3.px-3.py-1 Redes de trabajo específicas:

    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-sm-12.col-lg-4
        .tarjeta--boton-2.bg-fondo-3.p-4.mb-cus
          .row.justify-content-center.mb-3.hide-icon-sm
            .col-sm-12.col-md-2.col-lg-3
                img(src='@/assets/curso/temas/t2/19.svg')
          p.text-center.mb-0 Red de vivienda saludable.
      .col-sm-12.col-lg-4
        .tarjeta--boton-2.bg-fondo-3.p-4.mb-cus
          .row.justify-content-center.mb-3.hide-icon-sm
            .col-sm-12.col-md-2.col-lg-3
                img(src='@/assets/curso/temas/t2/18.svg')
          p.text-center.mb-0 Red de escuelas saludables.
      .col-sm-12.col-lg-4
        .tarjeta--boton-2.bg-fondo-3.p-4.mb-cus
          .row.justify-content-center.mb-3.hide-icon-sm
            .col-sm-12.col-md-2.col-lg-3
                img(src='@/assets/curso/temas/t2/20.svg')
          p.text-center.mb-0 Red de lugares de trabajo saludables.


    .row.align-items-center.mb-5.titulo-icono(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/bg/2.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.p-0 Fases del proceso PAIES
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-sm-12.col-lg-10
        .tabla-a.color-acento-botones 
          table(alt="Tabla que muestra las fases del proceso PAIES: diagnóstico, elaboración, implementación, supervisión, evaluación, diagnóstico repetido y nueva elaboración. Cada fase incluye actividades como identificación de necesidades, diseño participativo, ejecución de estrategias, seguimiento, análisis de resultados y ajustes.")
            thead
              tr
                th Fase
                th Descripción breve
            tbody
              tr
                td Diagnóstico PAIES
                td Identificación de las condiciones, necesidades y oportunidades del entorno.
              tr
                td Elaboración PAIES
                td Diseño participativo del plan de acción interinstitucional.
              tr
                td Implementación PAIES
                td Ejecución de las estrategias y actividades diseñadas.
              tr
                td Supervisión y seguimiento
                td Evaluación de la correcta ejecución del plan y ajuste de acciones.
              tr
                td Evaluación PAIES
                td Análisis de resultados e impacto de las intervenciones.
              tr
                td Diagnóstico PAIES
                td Identificación de las condiciones, necesidades y oportunidades del entorno.
              tr
                td Elaboración PAIES
                td Diseño participativo del plan de acción interinstitucional.


    .row.align-items-center.mb-5.titulo-icono(data-aos="fade-left")
      .col-auto.titulo-icono-img
        img(src='@/assets/bg/2.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.p-0 Participación comunitaria

    .bloque-texto-g.bg-fondo-5.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t2/21.png')})`}"
      )
      .bloque-texto-g__texto.p-4.my-5
        p.mb-0 Elemento transversal que garantiza la inclusión de las comunidades (estudiantes, familias, docentes, organizaciones sociales) en todas las fases del proceso, la comunidad participa en el diagnóstico, diseño, ejecución y evaluación de las acciones, asegurando que respondan a sus necesidades reales.
    .row.align-items-center.mb-5.titulo-icono(data-aos="fade-left")
      .col-auto.titulo-icono-img
        img(src='@/assets/bg/2.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.p-0 Resultados esperados
    p.mb-4(data-aos="fade-left") Proyectos y programas concretos en los diferentes entornos:
    ul.lista-ul.lista-ul--separador.mb-5(data-aos="fade-left")
      li.d-flex
        i.fas.fa-check-circle.bg-color-3
        p.mb-0 Vivienda.
      li.d-flex
        i.fas.fa-check-circle.bg-color-3
        p.mb-0 Escuela.
      li.d-flex
        i.fas.fa-check-circle.bg-color-3
        p.mb-0 Lugar de trabajo.
      li.d-flex
        i.fas.fa-check-circle.bg-color-3
        p.mb-0 Población beneficiaria: personas y comunidades impactadas positivamente por la mejora de las condiciones sociales, ambientales y sanitarias de sus entornos.




    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2 Plan de acción intersectorial de entornos saludables (PAIES)
    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-7.col-md-12.col-sm-12
        p.mb-5 El Plan de acción intersectorial de entornos saludables (PAIES) es un instrumento de gestión intersectorial que tiene como propósito fundamental orientar, articular y fortalecer los programas y acciones destinadas a mejorar las condiciones socioambientales y sanitarias de los diferentes entornos en los que las personas desarrollan su vida cotidiana, tales como la vivienda, la escuela y los lugares de trabajo. 
        .cajon.color-primario.p-4
          p.mb-0 El plan de acción también busca no solo intervenir sobre los factores que afectan la salud y el bienestar de la población, sino también prevenir el deterioro de dichos entornos mediante un enfoque de promoción de la salud y prevención de riesgos, asimismo, el PAIES debe concebirse como un documento flexible y dinámico, que se ajuste a las realidades y particularidades de cada territorio, por lo cual requiere una evaluación y actualización periódica, de acuerdo con las necesidades emergentes y las transformaciones del contexto social, económico, ambiental y sanitario, de esta manera, se garantiza su pertinencia y efectividad en la implementación de políticas públicas integrales, centradas en la equidad, la participación social y la sostenibilidad.

      .col-lg-5.col-md-8.col-8.d-none.d-lg-block
        img.mt-2(src='@/assets/curso/temas/t2/22.png', alt='')

    .row.align-items-center.mb-5.titulo-icono(data-aos="fade-left")
      .col-auto.titulo-icono-img
        img(src='@/assets/bg/2.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.p-0 Formulación del PAIES

    .bloque-texto-g.bloque-texto-g--inverso.bg-fondo-4.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img.bg-color-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/23.png')

        .bloque-texto-g__texto.p-4
          p.mb-0 Para su adecuada formulación, el consejo territorial de salud ambiental (COTSA), en conjunto con otras entidades y sectores involucrados, debe desarrollar un proceso estructurado que contemple dos fases fundamentales: la fase de diagnóstico y la fase de elaboración, estas fases permiten contar con una visión clara y completa del estado actual de los entornos y, con base en ello, diseñar acciones concretas, pertinentes y sostenibles que respondan a las problemáticas identificadas.

    .row.align-items-center.mb-5.titulo-icono(data-aos="fade-left")
      .col-auto.titulo-icono-img
        img(src='@/assets/bg/2.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.p-0 Fase de diagnóstico
    p.mb-4(data-aos="fade-left") La fase de diagnóstico corresponde al proceso inicial en el que se realiza una revisión exhaustiva de las condiciones sociales, ambientales y sanitarias del territorio, con el fin de contar con una línea base sólida para la toma de decisiones, en esta fase se deben definir las zonas y grupos poblacionales de interés, poniendo especial atención a aquellos sectores que presentan mayores niveles de vulnerabilidad o exposición a riesgos socioambientales. 
    .bloque-texto-g.bg-fondo-5.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t2/24.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 También se debe realizar una caracterización detallada de la situación social, ambiental y laboral, identificando los determinantes sociales que influyen en la salud de la población, dentro de este proceso, es fundamental también llevar a cabo una evaluación de las condiciones sanitarias y socioambientales de los diferentes entornos, incluyendo la vivienda, las instituciones educativas y los espacios laborales, para identificar los principales problemas y potencialidades, además, se requiere la identificación de vacíos en la información existente, así como de las limitaciones en la capacidad operativa y técnica de las instituciones encargadas de implementar las acciones, lo que permitirá orientar los esfuerzos hacia el fortalecimiento institucional y la adecuada gestión de los recursos disponibles.
    .row.align-items-center.mb-5.titulo-icono(data-aos="fade-left")
      .col-auto.titulo-icono-img
        img(src='@/assets/bg/2.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.p-0 Fase de elaboración

    p.mb-4(data-aos="fade-left") Con base en los hallazgos del diagnóstico, se procede a la fase de elaboración, en la cual se definen los objetivos, metas y acciones concretas que darán forma al PAIES, en esta etapa, es necesario establecer de manera clara los objetivos y metas específicas del plan, garantizando que estén alineados con las prioridades territoriales y las políticas públicas vigentes en materia de salud ambiental y desarrollo social, también se deben identificar y priorizar las opciones de intervención para la caracterización, seguimiento y mejora de los entornos, asegurando que sean pertinentes, factibles y acordes con las necesidades identificadas. 
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-5.col-6.col-md-8.p-0.d-none.d-lg-block
        img(src='@/assets/curso/temas/t2/25.png', alt='')
      .col-lg-7.col-sm-12.col-md-12.bg-color-6.align-content-center
        .border-top-cus 
          p.px-4.mt-3 Un componente clave de esta fase es la selección de acciones económica y socialmente viables, mediante la aplicación de análisis de costo-beneficio que permitan maximizar el impacto de las intervenciones con un uso eficiente de los recursos, asimismo, es fundamental definir un orden de prioridad para la ejecución de las acciones, considerando criterios como la urgencia de las problemáticas, el impacto esperado y la disponibilidad de recursos. Finalmente, para garantizar la legitimidad y la sostenibilidad del PAIES, se debe realizar un proceso de consulta pública y concertación con la comunidad y los actores territoriales, promoviendo la participación activa de la ciudadanía en la identificación de soluciones y el seguimiento a la implementación del plan.
        

    p.mb-4(data-aos="fade-left") Este proceso de formulación no solo permite diseñar un plan coherente y articulado, sino también fortalecer la gobernanza territorial en salud ambiental, promoviendo la cooperación intersectorial y la corresponsabilidad entre las instituciones y la sociedad civil. En suma, el PAIES se proyecta como una herramienta estratégica para promover entornos saludables, sostenibles e inclusivos, que contribuyan a mejorar la calidad de vida de la población y a reducir las inequidades sociales y ambientales.




</template>

<script>
export default {
  name: 'Tema2',
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
