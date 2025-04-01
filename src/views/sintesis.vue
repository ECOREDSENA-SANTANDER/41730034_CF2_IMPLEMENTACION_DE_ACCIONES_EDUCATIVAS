<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-0 El programa de formación intervención y evaluación en entornos saludables busca fortalecer la calidad de vida mediante acciones integrales en escuelas y comunidades, a través de la estrategia de entornos saludables (EES) y los planes de acción intersectorial (PAIES), se promueve la creación de escuelas saludables y el mejoramiento de las condiciones socioambientales y sanitarias, también se utilizan indicadores para evaluar los avances, y herramientas específicas para caracterizar viviendas y escuelas, fomentando así la participación comunitaria y la implementación de soluciones sostenibles en el entorno educativo, familiar y comunitario. 
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Diagrama sobre la intervención y evaluación en entornos saludables, que resume la estrategia de escuelas saludables, la evaluación de la estrategia de entornos saludables (EES), los elementos que debe incluir el PAIES según la OMS/OPS, y las directrices para la caracterización y seguimiento de la estrategia de entornos saludables.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
