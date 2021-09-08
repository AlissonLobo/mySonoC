<template>
    <main>
    <bannerProdutos/>
    <frete/>
    <kitProdutos/>
    <famososRecomendam/>
    <tabelaNutricional/> 
    </main>
</template>


<script>
export default {
    components:{
         bannerProdutos: () => import(`@/components/gerais/bannerProdutos.vue`),
         frete: () => import(`@/components/gerais/frete.vue`),
         kitProdutos: () => import(`@/components/gerais/kitProdutos.vue`),
         famososRecomendam: () => import(`@/components/gerais/famososRecomendam.vue`),
         tabelaNutricional: () => import(`@/components/gerais/tabelaNutricional.vue`),
        
    }
}
</script>


<style lang="scss">
.kitProdutos .titleSection{
    display: none !important;
}
#app > div:nth-child(7) > main > section.famosos > div.container.tiraContainer > div.flickity.flickity-enabled.is-draggable > ol{
    display:none !important;
}
#app > div:nth-child(7) > main > section.famosos > div.container.tiraContainer > div.row.justify-content-center{
        display: none !important;
}
section.famosos{
    margin:30px 0px 60px 0px;
}
</style>