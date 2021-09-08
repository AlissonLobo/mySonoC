<template>
    
<section class="tabelaNutricional">
    <div class="container">
        <div class="row diz semPadding" style="text-align: center; padding: 0px 0px 0px 15px;">
            <div class="col-12 col-sm-4 btn1"><span class="setaDesc glyphicon glyphicon-chevron-right" style="color:#fff; margin-top:0px; font-size:11px;"></span>&nbsp;&nbsp;<b>DESCRIÇÃO</b></div>
            <div class="col-12 col-sm-4 btn2"><span class="setaDesc glyphicon glyphicon-chevron-right" style="color:#fff; margin-top:0px; font-size:11px;"></span>&nbsp;&nbsp;<b>FORMAS DE ENTREGA</b></div>
            <div class="col-12 col-sm-4 btn3"><span class="setaDesc glyphicon glyphicon-chevron-right" style="color:#fff; margin-top:0px; font-size:11px;"></span>&nbsp;&nbsp;<b>INFORMAÇÕES NUTRICIONAIS</b></div>
        </div>
    </div>

    <section class="sec1">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 tirarPadding" style="padding: 0px 30px 0px 30px; text-align: justify;">
                    Dormir bem é sinônimo de relaxamento corporal, descanso mental e renovação celular.<br>
                    Faz bem para o corpo e para a pele, principalmente quando essa ação, considerada uma função fisiológica, acontece de 8h a 9h por dia.<br>
                    Mas infelizmente essa não é uma realidade de muitas pessoas. 
                    Segundo a Associação Brasileira do Sono (ABS), 73 milhões de brasileiros sofrem de insônia.<br>
                    Rico em l-triptofano, vitaminas B3, B5, B6 e óleo de semente de abóbora, o Sono Caps é um suplemento 100% natural, capaz de auxiliar o organismo na produção da serotonina e melatonina, reguladores do sono e bem-estar, contribuindo para o relaxamento muscular e regulação do humor.
                </div>
            </div>
        </div>   
    </section>

    <section class="sec2">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 tirarPadding" style="padding: 0px 30px 0px 30px; text-align: justify;">
                    Os pedidos são despachados no prazo de 24h úteis após a confirmação do pagamento e aprovação da compra.<br>
                    Os envios são feitos através do Correios, empresa parceira SonoCaps.<br><br>
                    O prazo é calculado no momento da compra e é contado após a postagem do pedido, que varia de acordo com o local de entrega.<br>
                </div>
            </div>
        </div>   
    </section>

    <section class="sec3">
        <div class="container">
            <div class="row">
                <div class="col-12 tirarPadding" style="padding: 0px 40px 0px 30px; text-align: center;">
                    <img class="imgResponsive" src="@/assets/sonoCaps_img/tabela.png" style="background: #864AC6;"><br><br>
                </div>
            </div>
        </div>   
    </section>
</section>
</template>

<script>
import $ from 'jquery';
export default{
   mounted(){
        $('.btn1').on('click', function(){
        $('.sec1').fadeIn(300);
        $('.sec2').fadeOut(0);
        $('.sec3').fadeOut(0);
        $('.btn1').css({"background":"#372764","color":"#fff"});
        $('.btn2').css({"background":"#FFF","color":"#864AC6"});
        $('.btn3').css({"background":"#FFF","color":"#864AC6"});           
        });
        $('.btn2').on('click', function(){
        $('.sec1').fadeOut(0);
        $('.sec2').fadeIn(300);
        $('.sec3').fadeOut(0);
        $('.btn1').css({"background":"#FFF","color":"#864AC6"});
        $('.btn2').css({"background":"#372764","color":"#fff"});
        $('.btn3').css({"background":"#FFF","color":"#864AC6"});             
        });
        $('.btn3').on('click', function(){
        $('.sec1').fadeOut(0);
        $('.sec2').fadeOut(0);
        $('.sec3').fadeIn(300);
        $('.btn1').css({"background":"#FFF","color":"#864AC6"});
        $('.btn2').css({"background":"#FFF","color":"#864AC6"});
        $('.btn3').css({"background":"#372764","color":"#fff"});         
        });
   } 
}
</script>


<style>
.btn1, .btn2, .btn3 {cursor:pointer; margin-right: 15px; border-radius:10px; color:#000; border:1px solid #eee; padding:15px; font-size:15px; text-align:center;}
.btn1 {background:#000; color:#fff;}

.sec1, .sec2, .sec3{background:#FFF; color:#656565; padding:40px; font-size:14px;}
.sec2, .sec3 {display:none;}

.diz .col-sm-4 {width:32%;}

@media screen and (min-width:768px) {
.BorderImg {border-right:1px dotted #ddd; border-left:0px dotted #ddd;}
.setaDesc {display:none;}

.btn1, .btn2, .btn3 .col-sm-4 {
max-width: 31.333333% !important;
}
}
@media screen and (max-width:768px) {
.diz .col-sm-4 {width:93%; }
.tabelaNutriImg {display:inline-block;width:100%!important;}
}
@media screen and (max-width:580px) {
.semPadding{
padding: 0px 12px 0px 12px !important;
}  

.diz{
padding: 0px 20px 0px 20px !important;
}

.tirarPadding{
padding: 0px 0px 0px 0px !important;
}

.imgResponsive{
width: 100%;
}

.sumir{
display: none !important;
}

}
</style>

