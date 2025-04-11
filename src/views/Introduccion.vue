<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg-full-width.bg-fondo-1.mb-0
      .px-4.px-md-5.pb-md-3
        p.mb-5 Con el propósito de promover hábitos saludables desde la escuela, el ministerio de salud, en colaboración con la OPS/OMS, implementó la iniciativa de escuelas promotoras de la salud (EPS), esta estrategia involucra a distintos niveles de gobierno y busca crear entornos escolares que favorezcan el bienestar integral de niños y niñas. Con este aprendizaje aprenderás a identificar y aplicar técnicas de evaluación que permiten medir el impacto de estas acciones en la comunidad escolar.
        .row.justify-content-center.align-items-center           
          .col-lg-12
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/vEUYKyV6kwM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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
