<template>
    <section class="produtoMudou" id="new" style="padding: 45px 0px 60px 0px;">
    <div class="container">
        <div class="row" style="justify-content: space-between;">
            <div class="col-sm-1"></div>
            <div class="col-sm-3">
                <h2 style="font-family:'Open Sans'; font-weight: bold; color: #000; font-size: 35px;">O que mudou?</h2>
                <p style="font-family:'Open Sans'; color: #000; font-size: 13px; text-align:justify;">O que já era bom, está ainda melhor. Up Lips na 
                cor <strong>Black Piano</strong> trás um design premium que junto,
                mantém sua poderosa tecnologia do Ácido Hialurônico
                associada ao colágeno. Com um novo conceito que
                vai além de volumes nos lábios, este é o novo
                modelo Up Lips.</p>
                <br>
                <input type="submit" style="border:0;" class="btn btn-primary btnVerde desk" value="FAÇA SEU PEDIDO">
            </div>       
            <div class="col-sm-5">
                <img style="right:0;" src="//d2az8otjr0j19j.cloudfront.net/templates/001/291/086/twig/static/images/Home---UpLips_03.png?1487136959" class="imgResponsive">
            </div>
            <div class="col-sm-1" style="text-align:center;">
            <div align="center">
                <br class="mob">
                <br class="mob">
            <input type="submit" style="border:0; inline-block;" class="btn btn-primary btnVerde mob" value="FAÇA SEU PEDIDO"></div>
            </div>
        </div>
    </div>
    </section>
</template>

<style>
.imgResponsive{
    width: 98%;
}
    @media screen and (max-width: 768px){
       .produtoMudou .col-sm-3{
           padding: 0 15px;
           text-align: center !important;
       }
       .produtoMudou .col-sm-3 p{
           text-align: center !important;
       }
      
       .col-sm-4 h2{
           text-align:center;
       } 
       .col-sm-4 input{
           margin: 0 auto;
           display:block;
       }
       section.user-content.pb-5{
           display:none !important;
       }
       #KITFAMOSOS{
           margin-top: -30px;
       }
       .imgResponsive{
           width: 100% !important;
       }
       
    }
</style>