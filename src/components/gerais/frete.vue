<template>
    <div class="frete">
        <div class="container desk">
            <div class="row">
            <img src="@/assets/sonoCaps_img/CREDIBILIDADE.png" alt="">
               
            </div>
        </div>
        <div class="container mob">
            <div class="row">
                <div class="col-6 text-center">
                    <img src="@/assets/renova/badge1.png" alt="">
                    <p>COLÁGENO PREFERIDO</p>
                    <p>das celebridades</p>
                </div>
                <div class="col-6 text-center">
                    <img src="@/assets/renova/credit1png.png" alt="">
                    <p>PAGUE COM CARTÃO</p>
                    <p>em até 12x sem juros</p>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-6 text-center">
                    <img src="@/assets/renova/delivery1.png" alt="">
                    <p>FRETE GRÁTIS</p>
                    <p>para todo Brasil</p>
                </div>
                <div class="col-6 text-center">
                    <img src="@/assets/renova/lock1.png" alt="">
                    <p>SITE 100% SEGURO</p>
                    <p>com segurança SSL</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .frete{
        background-color:#f4ffed;
        padding:20px 0px;
        .container.desk{
            .row{align-items: center; justify-content: center;}
            .col-sm-3.d-flex{
                align-items:center;
                p:first-child{
                    color: #404040;
                    font-size: 12px;
                    margin-bottom: 0;
                    font-weight: 800;
                }
                p:last-child{
                    color: #666666; 
                }
            }
        }
        .container.mob{
            .col-6{
                p:nth-last-of-type(2){
                    font-weight:bold;
                    font-size:13px;
                    margin-top:10px;
                    color:#404040;
                }
                p:nth-of-type(2){
                    color:#666666;
                }
                img{
                    margin:10px 0px;
                }
            }
        }
    }
</style>