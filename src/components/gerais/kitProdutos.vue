<template>
    <section class="kitProdutos">
        <div class="container">
            <div class="titleSection text-center">
                <h1>Escolha seu tratamento</h1>
                <p>Recomendamos o uso mínimo de 3 frascos para um melhor resultado</p>
            </div>
            <div class="row">
                <div class="col-sm-4 order-2 order-sm-1 bloco1" id="bloco1">
                    <div class="col-sm-12 mainContent"
                    style="
                        border-radius:25px;
                        border:1px solid #dedede;
                        text-align:center;
                        margin-top:-50px;
                        ">

                        <div class="col-sm-12 colTitulo"
                        style="
                            border-top-left-radius:20px;
                            border-top-right-radius:20px;
                            background-color:#362b62;">
                            <p>1 frasco Sono Caps</p>
                            <p>Tratamento para o sono</p>
                        </div><!--col--titulo-->

                        <div class="col-sm-12 colImagem my-4">
                            <img class="imgResponsive" :src="require('@/assets/sonoCaps_img/FRASCO.png')" style="width: 100%;" alt="Renova Be 1 Pote - Vitabe" id="param">
                        </div><!--col-da-imagem-->

                        <div class="col-sm-12">
                            <p style="color:#8f8f8f;font-size:18px;margin-bottom:0px;">Preço tabela: <s><strong> R$ 159,90</strong></s></p>
                            <p style="color:#8f8f8f;font-size:18px;margin-bottom:0px;">Preço promocional: <strong style="color:#000;"> R$ 87,90</strong></p>
                            <img src="@/assets/renova/img-ou.png" class="imgResponsive" alt="">
                            <p style="color:#8f8f8f;font-size:18px;margin-bottom:0px;">12x sem juros de</p>
                            <span style="color:#000;font-weight:700;font-size:45px;font-family: 'Helvetica',sans-serif;">R$ 7,25</span>
                            <input type="submit" value="COMPRE AGORA" class="btnComprar my-4" @click="addCartBoxCompra()">
                            <img class="ico-frete" src="@/assets/renova/ico-frete-gratis.png" alt="">
                        </div><!--col-do-preço-->
                    </div><!--container--geral-->
                </div><!--bloco1-->



                <div class="col-sm-4 bloco2 order-1 order-sm-2" id="bloco2">
                    <div class="col-sm-12 mainContent"
                    style="
                        border-radius:25px;
                        border:1px solid #dedede;
                        text-align:center;
                        ">
                        <div class="col-sm-12 colTitulo"
                        style="
                            border-top-left-radius:20px;
                            border-top-right-radius:20px;
                            background-color:#864ac6;
                        ">
                            <p>Compre 2 e leve 3</p>
                            <p>3 potes Sono Caps</p>
                        </div><!--col--titulo-->
                        <div class="col-sm-12 maisVendido" style="background-color:#fbfbfb;padding:10px 0px;">
                            <p><i class="fas fa-star my-1"></i>KIT MAIS VENDIDO<i class="fas fa-star"></i></p>
                                <p style="font-size:16px;color:#888;;">Cada pote sai por <span style="color:#864ac6;font-weight:bold;">R$58,00</span></p>
                        </div>

                        <div class="col-sm-12 colImagem ">
                            <div class="" style="margin-top:20px;">
                            </div>
                            <img class="imgResponsive" src="@/assets/sonoCaps_img/sonocaps902.png" alt="Renova Be 1 Pote - Vitabe" id="param2">
                        </div><!--col-da-imagem-->
                        <div class="relogio" style="background-color:#864ac6;margin-bottom:15px;">
                            <div class="col-12 d-flex align-items-center" style="padding:7px 0px 2px 0px;">
                                <div class="col-4" style="position:relative;right:-13%;">
                                    <img src="@/assets/renova/relogio.png" alt="" style="top:-3px;position: relative;">
                                </div>
                                <div class="col-8" style="color:#fff;position:relative;left:-10%;">
                                    <p style="margin-bottom:0px;font-weight:bold;font-size:14px;">OFERTA EXPIRA EM:</p>
                                    <p id="crono" style="margin-bottom:0px;font-size:34px;font-weight:bold;"></p>
                                </div>
                            </div>
                        </div><!--div do relógio-->


                        <div class="col-sm-12">
                            <p style="color:#8f8f8f;font-size:18px;margin-bottom:0px;">Preço tabela: <s><strong> R$ 479,70</strong></s></p>
                            <p style="color:#8f8f8f;font-size:18px;margin-bottom:0px;">Preço promocional: <strong style="color:#000;"> R$ 174,00</strong></p>
                            <img src="@/assets/renova/img-ou.png" class="imgResponsive" alt="">
                            <p style="color:#8f8f8f;font-size:18px;margin-bottom:0px;">12x sem juros de</p>
                            <span style="color:#000;font-weight:700;font-size:45px;font-family: 'Helvetica',sans-serif;">R$ 14,50</span>
                            <input type="submit" value="COMPRE AGORA" class="btnComprar my-4" @click="addCartBoxCompra1()">
                            <img class="ico-frete" src="@/assets/renova/ico-frete-gratis.png" alt="">
                        </div><!--col-do-preço-->
                    </div><!--container--geral-->
                </div><!--bloco2-->


                <div class="col-sm-4 bloco3 order-3 order-sm-3" id="bloco3">
                    <div class="col-sm-12 mainContent"
                    style="
                        border-radius:25px;
                        border:1px solid #dedede;
                        text-align:center;
                        ">

                        <div class="col-sm-12 colTitulo"
                        style="
                            border-top-left-radius:20px;
                            border-top-right-radius:20px;
                            background-color:#362b62;
                            margin-top:-50px;
                        ">
                            <p>Compre 4 e leve 6</p>
                            <p>6 potes Sono Caps</p>
                        </div><!--col--titulo-->
                        <div class="col-sm-12 maisVendido" style="background-color:#fbfbfb;padding:10px 0px;">
                            <p style="font-size:16px;color:#888;;">Cada pote sai por <span style="color:#864ac6;font-weight:bold;">R$53,17</span></p>
                        </div>
                        <div class="col-sm-12 colImagem ">
                            <div class="my-5">
                                <img class="imgResponsive" src="@/assets/sonoCaps_img/sonocaps1802.png" alt="Renova Be 1 Pote - Vitabe" id="param3">
                            </div>
                        </div><!--col-da-imagem-->

                        <div class="col-sm-12">
                            <p style="color:#8f8f8f;font-size:18px;margin-bottom:0px;">Preço tabela: <s><strong> R$ 959,40</strong></s></p>
                            <p style="color:#8f8f8f;font-size:18px;margin-bottom:0px;">Preço promocional: <strong style="color:#000;"> R$ 319,00</strong></p>
                            <img src="@/assets/renova/img-ou.png" class="imgResponsive" alt="">
                            <p style="color:#8f8f8f;font-size:18px;margin-bottom:0px;">12x sem juros de</p>
                            <span style="color:#000;font-weight:700;font-size:45px;font-family: 'Helvetica',sans-serif;">R$ 26,58</span>
                            <input type="submit" value="COMPRE AGORA" class="btnComprar my-4" @click="addCartBoxCompra2()">
                            <img class="ico-frete" src="@/assets/renova/ico-frete-gratis.png" alt="">
                        </div>
                    </div>
                </div>
            </div><!--row-->
        </div><!--container-->
    </section>
</template>

<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
<script>
function getCookie(nomeCookie) {
      var name = nomeCookie + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
import Comunicacao from '@/comunicacao.js'
export default {
    mounted(){
        // CRONOMETRO

        // Set the date we're counting down to
        var countDownDate = new Date("jan 29, 2022 23:59:59").getTime();
        // Update the count down every 1 second
        var x = setInterval(function() {
        // Get today's date and time
        var now = new Date().getTime();
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        var daybr = days;
        console.log(daybr);
        const textoHoras = (`00${hours}`).slice(-2);
        const textoMinutos = (`00${minutes}`).slice(-2);
        const textosegundos = (`00${seconds}`).slice(-2);

        // Display the result in the element with id="demo"
        document.getElementById("crono").innerHTML = textoHoras + ":"
        + textoMinutos + ":" + textosegundos;

        // document.getElementById("crono1").innerHTML = textoHoras + ":"
        // + textoMinutos + ":" + textosegundos;

        // document.getElementById("crono2").innerHTML = textoHoras + ":"
        // + textoMinutos + ":" + textosegundos;

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
        }, 1000);
        // CRONOMETRO 

        /*(function () {
        document.getElementById('variation_1').addEventListener('change', function() {
        var selectedOption = this.children[this.selectedIndex];

        var param = selectedOption.getAttribute("data-param");

        // document.getElementById('param').textContent = 'data-param = ' + param;
        document.getElementById('param').setAttribute('src', require(`@/assets/renova/renovabe-${param}.jpg`));
        })
        })();

        (function () {
        document.getElementById('variation_2').addEventListener('change', function() {
        var selectedOption = this.children[this.selectedIndex];

        var param = selectedOption.getAttribute("data-param");

        // document.getElementById('param').textContent = 'data-param = ' + param;
         document.getElementById('param2').setAttribute('src', require(`@/assets/renova/renovabe2-${param}.jpg`));
        })
        })();

        (function () {
        document.getElementById('variation_3').addEventListener('change', function() {
        var selectedOption = this.children[this.selectedIndex];

        var param = selectedOption.getAttribute("data-param");

        // document.getElementById('param').textContent = 'data-param = ' + param;
         document.getElementById('param3').setAttribute('src', require(`@/assets/renova/renovabe3-${param}.jpg`));
        })
        })();*/
    },
    data(){ 
        return {
        boxCompraCarrinho: {
        tipo: "produto",
        itens: [
        {
            idProduto: "57",
            idAtributoSimples: "0",
            idUnidadeVenda: "0",
            idArmazem: "0",
            quantidade: "1",
            adicional: "",
            parametros: ""
        },
        ]
        },
        boxCompraCarrinho1: {
        tipo: "produto",
        itens: [
        {
            idProduto: "58",
            idAtributoSimples: "0",
            idUnidadeVenda: "0",
            idArmazem: "0",
            quantidade: "1",
            adicional: "",
            parametros: ""
        },
        ]
        },
        boxCompraCarrinho2: {
        tipo: "produto",
        itens: [
        {
        idProduto: "59",
        idAtributoSimples: "0",
        idUnidadeVenda: "0",
        idArmazem: "0",
        quantidade: "1",
        adicional: "",
        parametros: ""
        }
        ]
        },
    }
    },
    components:{

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
          if(success){
              if(getCookie("cupomroleta") != ""){
              var cupom = getCookie("cupomroleta");
              $.ajax({
                url: "https://www.sonocaps.com.br/checkout/ajax/ajax-cupom-desconto.php",
                type: "post",
                data: {
                  'cupom': cupom
                }
              })
            }
              return Comunicacao.$emit('toggleCarrinho', {show: true, data: response.data });
          } 
          //PROBLEMAS AO ADICIONAR PRODUTO
          alert('Um problema impediu a adição do produto ao carrinho. Tente novamente mais tarde.');
        });
        return;
      }
    },
    addCartBoxCompra1() {
      Comunicacao.$emit('toggleLoader', true);
      let {tipo, itens} = this.boxCompraCarrinho1;
      let itemAdc       = false
      if (tipo && itens) {
        //ADICIONA O PRODUTO AO CARRINHO
        this.$carrinho.add(tipo,itens,(success, response) => {
          response.data.itens.forEach(prod => {
            itemAdc = itemAdc ? itemAdc : prod.hash.idProduto == this.boxCompraCarrinho1.itens[0].idProduto;
          });
          //PRODUTO ADICIONADO COM SUCESSO
          if(success){
              if(getCookie("cupomroleta") != ""){
              var cupom = getCookie("cupomroleta");
              $.ajax({
                url: "https://www.sonocaps.com.br/checkout/ajax/ajax-cupom-desconto.php",
                type: "post",
                data: {
                  'cupom': cupom
                }
              })
            }
              return Comunicacao.$emit('toggleCarrinho', {show: true, data: response.data });
          }
          //PROBLEMAS AO ADICIONAR PRODUTO
          alert('Um problema impediu a adição do produto ao carrinho. Tente novamente mais tarde.');
        });
        return;
      }
    },
    addCartBoxCompra2() {
      Comunicacao.$emit('toggleLoader', true);
      let {tipo, itens} = this.boxCompraCarrinho2;
      let itemAdc       = false
      if (tipo && itens) {
        //ADICIONA O PRODUTO AO CARRINHO
        this.$carrinho.add(tipo,itens,(success, response) => {
          response.data.itens.forEach(prod => {
            itemAdc = itemAdc ? itemAdc : prod.hash.idProduto == this.boxCompraCarrinho2.itens[0].idProduto;
          });
          //PRODUTO ADICIONADO COM SUCESSO
          if(success){
              if(getCookie("cupomroleta") != ""){
              var cupom = getCookie("cupomroleta");
              $.ajax({
                url: "https://www.sonocaps.com.br/checkout/ajax/ajax-cupom-desconto.php",
                type: "post",
                data: {
                  'cupom': cupom
                }
              })
            }
              return Comunicacao.$emit('toggleCarrinho', {show: true, data: response.data });
          }
          //PROBLEMAS AO ADICIONAR PRODUTO
          alert('Um problema impediu a adição do produto ao carrinho. Tente novamente mais tarde.');
        });
        return;
      }
    },
    }
}
</script>

<style lang="scss" scoped>
    .kitProdutos{
        .optionRenova{
            padding: 10px 26px;
            margin: 10px 0px 20px 0px;
            min-width:230px !important;
            max-width:230px !important;
        }
        .mainContent{
            padding:0px;
        }
        .titleSection{
            margin-bottom:30px;
        }
        .bloco1, .bloco3{
            margin-top:50px;
        }
        padding:30px 0px;
        .colTitulo{
            padding:15px 0;
        }
        .colTitulo p:first-child{
            color:#fff;
            font-size:30px;
            font-weight:bold;
        }
        .colTitulo p:last-child{
            color:#fff;
        }
        .maisVendido{
            font-weight: bold;
            color:#864ac6;
        }
        .maisVendido i{
            color:#864ac6;
            margin:0px 15px
        }
        .imgResponsive{
            max-width: 100%;
        }
        .btnComprar{
            background-color:#04b900;
            color:#fff;
            font-weight: bold;
            width:200px;
            height:60px;
            border-radius:6px;
            font-family: 'Helvetica',sans-serif;
            border:none;
            cursor: pointer;
            transition: 0.4s ease;
        }
        .btnComprar:hover{
            opacity: 0.8;
        }
        .ico-frete{
            margin:20px 0px 30px 0px;
        }
    }
    @media screen and (max-width: 768px){
        
        .bloco1,
        .bloco2,
        .bloco3{
            margin:0px 0px 50px 0px !important;
        }
    }
</style>