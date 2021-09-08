<template>
<section class="desc">
    <div class="container">
        <div class="row diz semPadding" style="text-align: center; padding: 0px 0px 0px 15px;">
            <div class="col-12 col-sm-4 btn1" style="background: rgb(255, 255, 255); color: rgb(0, 0, 0);"><span class="setaDesc glyphicon glyphicon-chevron-right" style="color:#fff; margin-top:0px; font-size:11px;"></span><b>DESCRIÇÃO</b></div>
            <div class="col-12 col-sm-4 btn2" style="background: rgb(0, 0, 0); color: rgb(255, 255, 255);"><span class="setaDesc glyphicon glyphicon-chevron-right" style="color:#fff; margin-top:0px; font-size:11px;"></span><b>FORMAS DE ENTREGA</b></div>
            <div class="col-12 col-sm-4 btn3" style="background: rgb(255, 255, 255); color: rgb(0, 0, 0);"><span class="setaDesc glyphicon glyphicon-chevron-right" style="color:#fff; margin-top:0px; font-size:11px;"></span><b>INFORMAÇÕES NUTRICIONAIS</b></div>
        </div>
    </div>

    <section class="sec1" style="display: none;">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 tirarPadding" style="padding: 0px 30px 0px 30px; text-align: justify;">
                    À medida que envelhecemos, o corpo passa a produzir menos colágeno. As consequências disso, bem como a falta das vitaminas A, C e E, 
                    ficam evidenciadas na pele, cabelos e unhas. Composto por nutrientes de tecnologia avançada, o Renova Be traz de volta a juventude e beleza 
                    da sua pele, com resultados já no primeiro mês de uso:
                    <br><br>
                    – Aumento da elasticidade e firmeza da pele;<br>
                    – Redução significativa das rugas e linhas de expressão;<br> 
                    – Cabelos e unhas mais fortes e saudáveis;<br>
                    – Redução das estrias e celulites.
                </div>
            </div>
        </div>   
    </section>

    <section class="sec2" style="display: block;">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 tirarPadding" style="padding: 0px 30px 0px 30px; text-align: justify;">
                    Os pedidos são despachados no prazo de 24h úteis após a confirmação do pagamento e aprovação da compra.<br>
                    Os envios são feitos através do Correios, empresa parceira RENOVA BE.<br><br>
                    O prazo é calculado no momento da compra e é contado após a postagem do pedido, que varia de acordo com o local de entrega.<br>
                    O prazo médio de entrega é de 03 a 05 dias úteis.
                </div>
            </div>
        </div>   
    </section>

    <section class="sec3">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 tirarPadding" style="padding: 0px 30px 0px 30px; text-align: justify;">
                    
                    <img class="imgResponsive" src="@/assets/renova/TABELA2.jpg"><br><br>
                </div>
            </div>
        </div>   
    </section>
</section>
</template>

<style lang="scss" scoped>
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
@media screen and (max-width:768px) {.tabelaNutriImg {display:inline-block;width:100%!important;}}
</style>