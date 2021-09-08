import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// function getComponent(component){
//   return () => import(`@/pages/${component}.vue`);
// }


const routes = [
  {
    path: '*',
    name: 'Not_found',
    component: require(`@/pages/404.vue`).default
  },
  {
    path: '/',
    name: 'home',
    component: require(`@/pages/home.vue`).default
  },
  {
    path: '/pagina/avaliacao-loja',
    name: 'avaliacao-loja',
    component: require(`@/pages/avaliacao-loja.vue`).default
  },
  {
    path: '/quem-somos',
    name: 'quem-somos',
    component: require(`@/pages/quem-somos.vue`).default
  },
  {
    path: '/apresentacao',
    name: 'aprecentacao',
    component: require(`@/pages/apresentacao.vue`).default
  },
  {
    path: '/covid-19',
    name: 'covid-19',
    component: require(`@/pages/covid-19.vue`).default
  },
  {
    path: '/pagina',
    name: 'institucionais',
    component: require(`@/pages/institucionais.vue`).default,
    children: [

      {
        name: 'troca-e-devolucao',
        path: 'troca-e-devolucao',
        component: require(`@/components/institucionais/paginas/troca-e-devolucao.vue`).default
      },
      {
        name: 'politica-de-entrega',
        path: 'politica-de-entrega',
        component: require(`@/components/institucionais/paginas/politica-de-entrega.vue`).default
      },
      {
        name: 'politica-de-pagamento',
        path: 'politica-de-pagamento',
        component: require(`@/components/institucionais/paginas/politica-de-pagamento.vue`).default
      },
      {
        name: 'politica-de-privacidade',
        path: 'politica-de-privacidade',
        component: require(`@/components/institucionais/paginas/politica-de-privacidade.vue`).default
      },
      {
        name: 'garantia',
        path: 'garantia',
        component: require(`@/components/institucionais/paginas/garantia.vue`).default
      },
      {
        name: 'faq',
        path: 'duvidas-frequentes',
        component: require(`@/components/institucionais/paginas/duvidas-frequentes.vue`).default
      },
      {
        name: 'fale-conosco',
        path: 'atendimento',
        component: require(`@/components/institucionais/paginas/fale-conosco.vue`).default
      },
      {
        name: 'termos',
        path: 'termos',
        component: require(`@/components/institucionais/paginas/termos.vue`).default
      },
      {
        name: 'referencias-cientificas',
        path: 'referencias-cientificas',
        component: require(`@/components/institucionais/paginas/referencias-cientificas.vue`).default
      },
      // {
      //   name: 'revendedores-oficiais',
      //   path: 'revendedores-oficiais',
      //   component: require(`@/components/institucionais/paginas/revendedores-oficiais.vue`).default
      // },
      // {
      //   name: 'revendedores-oficiais',
      //   path: 'revendedores-oficiais',
      //   component: require(`@/components/institucionais/paginas/revendedores-oficiais.vue`).default
      // },
      {
        name: 'revendedores-oficiais',
        path: 'revendedores-oficiais',
        component: require(`@/components/institucionais/paginas/revendedores-oficiais.vue`).default
      },
    ]
  },

  // ROTAS PARA PÁGINA DE PRODUTOS SINGLE
  {
  path: '/pagina',
    name: 'produto-single',
    component: require(`@/pages/Produto-Single.vue`).default,
    children: [
       // Páginas de produto-single
       /*{
        name: 'NW1P',
        path: '/new-white-clareador-dental-1-pote-brinde.html',
        component: require(`@/components/single/NW1P.vue`).default
      },
      {
        name: 'NW2P',
        path: '/new-white-clareador-dental-2-potes-brindes.html',
        component: require(`@/components/single/NW2P.vue`).default
      },*/
  ]
  },

  {
    path: '/busca',
    name: 'product/listing/search',
    component: require(`@/pages/listagem.vue`).default
  },
  {
    path: '/c/:landingPage/:categoriaNivel2?/:categoriaNivel3?/:categoriaNivel4?/:categoriaNivel5?',
    name: 'product/listing/landing-page',
    component: require(`@/pages/listagem.vue`).default
  },
  {
    path: '/:categoriaNivel2?/:categoriaNivel3?/:categoriaNivel4?/:categoriaNivel5?',
    name: 'product/listing/category',
    component: require(`@/components/listagem/valida-page.vue`).default
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
