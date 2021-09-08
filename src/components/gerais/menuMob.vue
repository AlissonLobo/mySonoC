<template>
    <header class="mobf justify-content-around" style="position:fixed; top:0; width:100%; height:14%; z-index:99999;">
        <li class="">
            <i class="fas fa-bars"></i>
        </li>

        <a href="/">
            <img class="logoMob" src="@/assets/sonoCaps_img/logo.png" alt="">
        </a>

        <a href="https://www.sonocaps.com.br//checkout/carrinho/">
            <img class="svgCart" width="28.5" height="27" src="@/assets/renova/cartsvg.svg" alt="">
            <div class="headerContainerTop-carrinho-num"> 0 </div>
        </a>

            <div class="overlayMenu"></div>
            <ul class="itensMenu">
                <div class="menuicon">
                    <div class="col-12 d-flex">
                        <div class="col-6">
                            <i class="fas fa-times"></i>
                        </div>
                        <div class="col-6">
                            <span>MENU</span>
                        </div>
                    </div>
                </div>
                <li><a href="/">Home</a></li>
                <li><a href="/produtos">Produtos</a></li>
                <li><a href="/pagina/atendimento">Atendimento</a></li>
                <li><a href="/pagina/duvidas-frequentes">Perguntas Frequentes</a></li>
                <li><a href="/pagina/politica-de-privacidade">Políticas de Privacidade</a></li>
                <li><a href="/pagina/termos">Termos e Condições</a></li>
                <li><a href="/https://www.marketplacevitabe.com.br/minha-conta/pedido">Meus Pedidos</a></li>
                <li><a href="https://www.sonocaps.com.br//checkout/acesso">Minha conta</a></li>
            </ul>
    </header>
</template>

<script>

export default {
    mounted(){
        var icon = document.querySelectorAll('.fas');
        var overlay = document.querySelector('.overlayMenu');
        var menu = document.querySelector('.itensMenu');
        icon.forEach(element => {
            element.addEventListener('click', () => {
            overlay.classList.toggle('activeOverlay');
            menu.classList.toggle('activeMenu');
            });
        });
        overlay.addEventListener('click', () => {
            overlay.classList.toggle('activeOverlay');
            menu.classList.toggle('activeMenu');
        })
    }
}
</script>

<style lang="scss" scoped>
    .itensMenu{
        transition: 0.5s ease;
        position:fixed;
        width:0;
        height:0;
        left:-200%;
        background-color:#fff;
        li{
            list-style-type: none;
            padding: 13px 0px 13px 30px;
            border-top: 1px solid #eee;

        }
        a{
            text-decoration: none;
            font-size:14px;
        }
    }
    .itensMenu{
        left:-200%;
        top:0;
    }
    .itensMenu.activeMenu{
        width:70vw;
        height:100vh;
        left:0;
        top:0;
        z-index:2;
        
    }
    .overlayMenu{
        transition:0.5s ease;
        width:100vw;
        height:100%;
        position:fixed;
        top:0;
        left:-200%;
        background-color:#33215f;
    }
    .overlayMenu.activeOverlay{
        left:0;
        top:0;
        z-index:1;
    }
    .mobf{
        display: none;
    }
    .logoMob{
        position:relative;
        right:-10px;
        bottom:-4px;
    }
    .headerContainerTop-carrinho-num {
        position: absolute;
        top: 4%;
        right:20px;
        font-size: 10px;
        color: #fff;
        background-color: red;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding:1px 5px;
    }
    header.mobf{
        padding:20px 0px;
        background-color:#250f3dd6;
        align-items:center;
        .menuicon{
            .col-12.d-flex{
                padding:20px;
            }
            span{
                color:#000;
                font-size:25px;
                font-weight:bold;
            }
            i{
                color:#000;
                font-size:35px;
            }
        }
        i{
            color:#fff;
            font-size:25px;
        }
        li{
            list-style-type: none;
        }
        .svgCart{
            position:relative;
            left:-5px;
        }
    }
    @media screen and (max-width: 800px){
    .mobf{
        display: flex;
    }
    }
</style>