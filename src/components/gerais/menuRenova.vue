<template>
    <header class="desk">
        <section class="header">
            <div class="headerDesk">
                <nav class="navbar navbar-expand-lg">
                    <div class="container">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <a href="/produtos" class="nav-link pedidoTop">FAÇA SEU PEDIDO</a>
                            </li>
                            <li class="nav-item">
                                <a href="/pagina/duvidas-frequentes" class="nav-link">TIRE SUAS DÚVIDAS</a>
                            </li>
                        </ul>
                        <a href="/" class="navbar-brand mx-auto">
                            <img src="@/assets/sonoCaps_img/logo.png" alt="">
                        </a>
                        <ul class="navbar-nav ml-auto ulDireita">
                            <li class="nav-item">
                                <a href="/checkout/acesso" class="nav-link">MEUS PEDIDOS</a>
                            </li>
                            <li class="nav-item">
                                <a href="/pagina/atendimento" class="nav-link">ATENDIMENTO</a>
                            </li>
                            <li class="nav-item">
                                <a href="https://www.sonocaps.com.br/checkout/carrinho/" class="nav-link">
                                  <img width="20.5" height="18" src="@/assets/renova/cartsvg.svg" alt="">
                                    <div class="headerContainerTop-carrinho-num"> 0 </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div><!--headerDesk-->
        </section>
    </header>
</template>
<script>
  window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})
</script>

<style lang="scss" scoped>
  header {	
  position: fixed;
  width: 100%;
  z-index: 5;
  height: auto;
  }
header.sticky{
    background-color: rgb(54 43 98 / 96%) !important;  
  transition: 0.6s;
  }
  
    .headerDesk{        
        padding:10px 0px;
        position:relative;
        li.nav-item{
            margin:0px 20px;
        }
        a.nav-link{
            color:#fff;
            font-size:10px;
            font-family: 'Open Sans',sans-serif;
            font-weight: bold;
        }
        a.nav-link.pedidoTop{
            background-color:#04b900;
            border-radius:20px;
            padding:5px 20px;
        }
        .container, ul.navbar-nav{
            align-items: center;
        }
        ul.ulDireita{
            position:relative;
        }
        .headerContainerTop-carrinho-num {
        position: absolute;
        top: -2px;
        right:10px;
        font-size: 10px;
        color: #fff;
        background-color: red;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding:1px 6px;
        }
    }
</style>