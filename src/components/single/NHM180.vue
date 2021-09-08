<template>
    <section id="trintaDias" class="trintaDias">
        <div class="container-fluid">
            <div class="product_form">
                <div class="row" style="max-width:100%;">
                    <div class="col-sm-8">
                        <div class="imgMob mob" style="width:100%;">
                            <img src="@/assets/img/singles/newhair_masculino_180dias.jpg" alt="">
                        </div>
                    </div>
                    <div class="col-sm-4" style="margin-top:30px;">
                        <div class="col-sm-12" style="margin-top:20px;">
                            <h1 style="font-size:60px;margin-bottom:20px;line-height:34px;">New Hair <br/> <span style="font-size:30px;margin-left:3px;">Tratamento de 180 Dias</span></h1>
                            <p style="padding:0px 10px;">New Hair pode fazer com que o
                            seu cabelo cresça até 6x mais rápido, de forma saudável, podendo chegar em até 4cm ao mês.</p>
                            <br>
                            <div class="precos_alt">
                                <p style="color:#6b6b6b;font-size:20px;display:inline;margin:0px 20px"><s>De: R$ 719,40</s></p>
                                <p style="font-weight:bold;color:#000;font-size:20px;display:inline;margin:0px 20px;">Por: R$ 327,70</p>
                                <img class="my-3" src="@/assets/img/img-ou.png" alt="" style="display:block;margin:0 auto;">
                                <p style="color:#000;font-size:30px;text-align:center;">12x de <strong>R$ 27,31</strong> sem juros</p>
                            </div>
                          
                            <input type="submit" class="btnSingleProduct" @click="addCartBoxCompra()" value="COMPRE AGORA">
                        </div>
                    </div><!--col-sm-4-->
                </div><!--row-->
                <div class="row p-4" style="max-width:100%;">
                        <div class="col-sm-4">
                            <div class="descProd">
                                <h4 style="font-family:'Oswald', sans-serif !important; color:#000 !important;">Descrição</h4>
                                    <br>
                                    <p style="color: rgb(0, 0, 0); font-family: Open Sans; font-size: 14px; font-weight: normal;text-align:justify;">Com 1 pote do New Hair Caps Feminino, você já notará resultados de crescimento e diminuição da queda de fios. Nossas cápsulas contêm vitaminas e minerais 100% natural agindo diretamente no bulbo capilar de dentro para fora, combatendo a queda do fio em até 86%, acelerando o crescimento dos fios 6x mais rápido e até 4 cm ao mês. Nosso produto foi criado para todos os tipos de cabelos. Específico para reduzir ou mesmo acabar com a queda de cabelo e pronto para fazer crescer cabelo de forma natural, com muito volume e brilho. Vitaminas em capsulas servem como suplemento fundamental para cabelos saudáveis e fortes.</p>
                            </div>
                        </div><!--col-sm-4-->
                        
                        <!--PERGUNTAS FREQUENTES-->
                        <div class="col-sm-4 marginPerguntas">
                           <DuvidasSingle/>
                        </div><!--col-sm-4-->

                        <!--SELOS-->
                        <div class="col-sm-4 colSeguranca">
                            <div class="row justify-content-center align-items-baseline">
                                <div class="col-6 text-center">
                                    <img src="@/assets/img/home/seguranca/01.png" alt="">
                                    <p>Dados Pessoais</p>
                                    <p style="font-size:12px;">São totalmente sigilosos e não são compartilhados.</p>
                                </div>
                                <div class="col-6 text-center">
                                     <img src="@/assets/img/home/seguranca/02.png" alt="">
                                     <p>Site confiável</p>
                                     <p style="font-size:12px;">Monitorado por empresas de segurança digital.</p>
                                </div>
                            </div>
                            <div class="row justify-content-center align-items-baseline">
                                <div class="col-6 text-center">
                                    <img src="@/assets/img/home/seguranca/03.png" alt="">
                                    <p>Dados Finaceiros</p>
                                    <p style="font-size:12px;">Gravados em ambiente 100% seguro.</p>
                                </div>
                                <div class="col-6 text-center">
                                     <img src="@/assets/img/home/seguranca/04.png" alt="">
                                     <p>Entrega grátis</p>
                                     <p style="font-size:12px;">
                                         Logistica eficaz entregas
                                        feitas no prazo combinado.
                                     </p>
                                </div>
                            </div>
                        </div>

                </div><!--row-->
            </div><!--product-form-->
        </div>  
    </section>
</template>

<script>
import DuvidasSingle from '@/components/gerais/DuvidasSingle.vue';
import Comunicacao from '@/comunicacao.js';
export default {
    name: ' NHM180',
    components:{
        DuvidasSingle
    },
    data(){
        return {
        banner: null,
        bannerMeio: null,
        vitrines: [],
        loading: {
        geral: true
        },
        answer: [],
        listagemData: null,
        menu: null,
        infos: 1,
        boxCompraCarrinho: {
        tipo: "produto",
        itens: [
            {
            idProduto: "36",
            idAtributoSimples: "0",
            idUnidadeVenda: "0",
            idArmazem: "0",
            quantidade: "1",
            adicional: "",
            parametros: ""
            }
        ]
        }
        }
    },
    methods: {
        addCartBoxCompra() {
        Comunicacao.$emit('toggleLoader', true);
        let {tipo, itens} = this.boxCompraCarrinho;
        let itemAdc       = false
        if (tipo && itens) {
            //ADICIONA O PRODUTO AO CARRINHO
            this.$carrinho.add(tipo,itens,(success, response) => {

            response.data.itens.forEach(prod => {
                itemAdc = itemAdc ? itemAdc : prod.hash.idProduto == this.boxCompraCarrinho.itens[0].idProduto;
            });
            //PRODUTO ADICIONADO COM SUCESSO
            if(success) return Comunicacao.$emit('toggleCarrinho', {show: true, data: response.data });
            //PROBLEMAS AO ADICIONAR PRODUTO
            alert('Um problema impediu a adição do produto ao carrinho. Tente novamente mais tarde.');
            });
            return;
        }
        },
        openAnswer(index) {
        this.$set(this.answer, index, !this.answer[index])
        },
        genPath(path, onlyQuery){
        if (onlyQuery) {
            path = path.replace(/\/.*(\?.*)/g, '$1');
            return path;
        }
        path = path.replace('?', '&');
        return path;
        },
    },
    created(){
    this.$requestSend('get', `/v2/front/url/product/listing/category?url=${this.genPath(this.$route.fullPath)}&offset=0&limit=1`, {}, (success, response) => {
      if (success) {
        this.$aplicaSEO(response.data.estrutura);
        this.listagemData = response.data.conteudo;

        this.loading.geral = false;

        //VARIÁVEIS PÚBLICAS
        Comunicacao.$emit('paginaCarregada', response.data);
      }
    });
    this.$requestSend('get', '/v2/front/struct/menus/categorias', {}, (success, response) => {
      this.menu = success ? response.data.menu : false;
    });

    this.$requestSend('get', '/v2/front/showcase/products/escolha-tratamento', {}, (success, response) => {
      this.vitrines[0] = success ? response.data : false;
    });
    this.$requestSend('get', '/v2/front/showcase/products/mulher', {}, (success, response) => {
      this.vitrines[1] = success ? response.data : false;
    });
    this.$requestSend('get', '/v2/front/showcase/banners/meio-home', {}, (success, response) => {
      this.bannerMeio = success ? response.data.banners : false;
    });
  },
    }
</script>

<style lang="scss" scoped>
    .mob{
        display:none;
    }
   .colSeguranca img{
       margin-bottom: 10px;
       max-width: 50px;
       
   }
   .colSeguranca .col-6 p:nth-last-child(2){
       color:#ff0863;
        font-size:18px;
        font-weight:bold;
   }
   .colSeguranca .col-6{
       margin:10px 0px;
   }
    .trintaDias{
        font-family: 'Open Sans', sans-serif;
        .product_form{
            .col-sm-8{
                background-image:url('../../assets/img/singles/newhair_masculino_180dias.jpg');
                background-size:cover;
                height: 470px;
                background-repeat: no-repeat;
                background-position: center;
            }
        }
        .container-fluid{
            padding-left:0px;
        }
        .selos img{
            width:120px;
        }
        .btnSingleProduct{
            width:100%;
            height:60px;
            background-color:#ff478a;
            border-radius:6px;
            border:none;
            color: #fff;
            font-weight: bold;
            font-size:1.25rem;
            font-family:'Helvetica';
            margin-top:20px;
            cursor: pointer;
            transition: 0.4s ease;
        }
        .btnSingleProduct:hover{
            transform:scale(0.95);
        }
       
    }
    @media screen and (max-width:768px){
        .trintaDias{
            .container-fluid{
                padding:0px !important;
            }
            .marginPerguntas{
                margin:20px 0px;
            }
            .mob{
                display:block;
            }
            .product_form{
                .col-sm-8{
                    background-image:none !important;
                    height:auto;
                    padding:0px;
                }
                .col-sm-4{
                    margin-top:0px !important;
                    .col-sm-12{
                        text-align: center;
                    }
                }
            }
             .col-sm-4.marginPerguntas{
                margin-top:20px !important;
            }
        }
    }
</style>