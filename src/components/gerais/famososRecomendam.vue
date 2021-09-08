<template>
    <section class="famosos">
        <div class="modal-overlay" id="modalOverlay"></div>
        <div class="modal-video" id="modalVideo"></div>
        <div class="container tiraContainer">
            <div class="titleSection text-center">
                <h1>Famosos que usam e recomendam</h1>
                <p style="margin-bottom:30px;color:#888;">Nosso time de celebridades que usam e aprovam o Sono Caps</p>
            </div>
            <flickity  class="flickity" ref="flickity" :options="flickityOptions">

                <div class="carousel-cell">
                    <img src="@/assets/sonoCaps_img/juju.jpg" alt="">
                    <div class="titleCell">
                        <p>Juliana Salimeni</p>@jujusalimeni

                    </div>
                    <div class="playVideo" data-video="j75PhWfisPA"><i class="fas fa-play"></i></div>
                </div>


                <div class="carousel-cell">
                    <img src="@/assets/sonoCaps_img/laisOliveira.png" alt="">
                     <div class="titleCell">
                        <p>Lais Oliveira</p>@laisoliveira
                    </div>
                    <div class="playVideo" data-video="EiKG5cHuSJk"><i class="fas fa-play"></i></div>
                </div>


                <div class="carousel-cell">
                    <img src="@/assets/sonoCaps_img/steMatos.png" alt="">
                     <div class="titleCell">
                        <p>Sthefane Matos</p>@sthefanematos
                    </div>
                    <div class="playVideo" data-video="b4B-L7lVfSI"><i class="fas fa-play"></i></div>
                </div>


                <div class="carousel-cell">
                    <img src="@/assets/sonoCaps_img/mayra.jpg" alt="">
                     <div class="titleCell">
                        <p>Mayra Cardi</p>@mayracardi
                    </div>
                    <div class="playVideo" data-video="htT4lQypHJE"><i class="fas fa-play"></i></div>
                </div>


                <div class="carousel-cell">
                    <img src="@/assets/sonoCaps_img/petala.jpg" alt="">
                    <div class="titleCell">
                        <p>Pétala Barreiros</p>@petalagb
                    </div>
                    <div class="playVideo" data-video=""><i class="fas fa-play"></i></div>
                </div>


                <div class="carousel-cell">
                    <img src="@/assets/sonoCaps_img/andressa.jpg" alt="">
                    <div class="titleCell">
                        <p>Andressa Suita</p>@andressasuita
                    </div>
                    <div class="playVideo" data-video=""><i class="fas fa-play"></i></div>
                </div>


                <div class="carousel-cell">
                    <img src="@/assets/sonoCaps_img/zeneto.jpg" alt="">
                    <div class="titleCell">
                        <p>Zé Neto</p>@zenetotoscanooficial
                    </div>
                    <div class="playVideo" data-video=""><i class="fas fa-play"></i></div>
                </div>


                <div class="carousel-cell">
                    <img src="@/assets/sonoCaps_img/nataliaToscano.png" alt="">
                    <div class="titleCell">
                        <p>Natalia Toscano</p>@nataliaftoscano
                    </div>
                    <div class="playVideo" data-video=""><i class="fas fa-play"></i></div>
                </div>


                <div class="carousel-cell">
                    <img src="@/assets/sonoCaps_img/karinaBacchi.png" alt="">
                    <div class="titleCell">
                        <p>Karina Bacchi</p>@karinabacchi
                    </div>
                    <div class="playVideo" data-video=""><i class="fas fa-play"></i></div>
                </div>


                <div class="carousel-cell">
                    <img src="@/assets/sonoCaps_img/andressaMiranda.png" alt="">
                    <div class="titleCell">
                        <p>Andressa Miranda</p>@andressaferreiramiranda
                    </div>
                    <div class="playVideo" data-video=""><i class="fas fa-play"></i></div>
                </div>
            </flickity>
            <div class="row justify-content-center">
                <a href="/produtos" class="facaSeuPedido my-4">FAÇA SEU PEDIDO</a>
            </div>
        </div><!--container-->
    </section>
</template>

<script>
import flickity from 'vue-flickity';
export default {
    components:{
        flickity
    },
    data(){
        return{
            flickityOptions:{
                wrapAround: true,
                freeScroll: true,
                groupCells: true,
            }
        }
    },
    mounted(){
        var play = document.querySelectorAll('.playVideo');
        var modal = document.querySelector('.modal-video');
        var overlay = document.querySelector('.modal-overlay');

        play.forEach(event => {
            event.addEventListener('click', () => {
            var url = event.getAttribute('data-video');
            overlay.classList.toggle('activeOverlay');
            modal.classList.toggle('activeModal');
            modal.innerHTML = `<iframe id="iframeModal" autoplay width="800" height="450" src="https://www.youtube.com/embed/${url}?autoplay=1&enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            console.log(url);
               })
        });

        //Pausa o vídeo e some o modal
        overlay.addEventListener('click', () => {
            play.forEach(event => {
            overlay.addEventListener('click', () => {
                var url = event.getAttribute('data-video');
                var iframe = document.getElementById('iframeModal');
                iframe.setAttribute('src', `${url}`);
                modal.classList.remove('activeModal');
                overlay.classList.remove('activeOverlay');
            });
            })
        });
    }  
}
</script>

<style lang="scss">
#app > div:nth-child(7) > main > section.famosos > div.container.tiraContainer > div.flickity.flickity-enabled.is-draggable > button.flickity-button.flickity-prev-next-button.previous{
    left:-80px;
    color:#864ac6;
}
#app > div:nth-child(7) > main > section.famosos > div.container.tiraContainer > div.flickity.flickity-enabled.is-draggable > button.flickity-button.flickity-prev-next-button.next{
    right:-80px;
    color:#864ac6;
}
.modal-overlay{
    transition: 0.2s ease;
    display:none;
}
.modal-overlay.activeOverlay{
    background-color:rgba(0,0,0,0.4);
    display:block;
    cursor: pointer;
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    z-index:1;
}
.modal-video{
    transition: 0.2s ease;
    width: 800px;
    height:450px;
    box-shadow: 2px 10px 20px rgba(255,255,255,0.4);
    display:none;
    position: fixed;
    top:25%;
    left:29%;
    z-index: 888;
}
.modal-video.activeModal{
    display:block;
}
.famosos{
    position:relative;
    .container{
        .row.justify-content-center{
            margin-top:-12px;
        }
        min-height:300px;
        .flickity{  
            .carousel-cell{
                margin:0px 10px;
            }
            .playVideo{
                i{
                position: relative;
                color:rgba(255,255,255,0.7);
                opacity:0.8;
                font-size: 45px;
                z-index: 33;
                top: -200px;
                left: 43%;
                transition: 0.4s ease;
                }
                i:hover{ 
                    color:#864ac6;
                }
            }
            .titleCell{
                background-color:#864ac6;
                color:#fff;
                text-align: center;
                padding: 10px 0px;
                p{
                    font-weight: bold;
                }
            }    
            min-height:250px !important;
            .carousel-cell img{
                width:260px;
                min-height:300px; 
            }
        }
    }
}
@media screen and (min-width:1500px) and (max-width:1980px){
    .modal-video{
        transition: 0.2s ease;
        width: 800px;
        height:450px;
        box-shadow: 2px 10px 20px rgba(255,255,255,0.4);
        display:none;
        position: fixed;
        top:25%;
        left:29%;
        z-index: 888;
    }
}
@media screen and (min-width: 1300px) and (max-width:1400px){
    .modal-video{
        transition: 0.2s ease;
        width: 800px;
        height:450px;
        box-shadow: 2px 10px 20px rgba(255,255,255,0.4);
        display:none;
        position: fixed;
        top:15%;
        left:20.5%;
        z-index: 888;
    }
}
@media screen and (min-width: 1180px) and (max-width:1299px){
    .modal-video{
        transition: 0.2s ease;
        width: 800px;
        height:450px;
        box-shadow: 2px 10px 20px rgba(255,255,255,0.4);
        display:none;
        position: fixed;
        top:15%;
        left:18.5%;
        z-index: 888;
    }
}
@media screen and (min-width:768px){
    #app > main > section.famosos > div > div.flickity.flickity-enabled.is-draggable > button.flickity-button.flickity-prev-next-button.previous{
        left:-60px !important;
        background-color:transparent;
    }
    #app > main > section.famosos > div > div.flickity.flickity-enabled.is-draggable > button.flickity-button.flickity-prev-next-button.next{
        right:-60px;
        background-color:transparent;
    }
    #app > main > section.famosos > div > div.flickity.flickity-enabled.is-draggable > button.flickity-button.flickity-prev-next-button.previous > svg{
        color:#864ac6;
    }
    #app > main > section.famosos > div > div.flickity.flickity-enabled.is-draggable > button.flickity-button.flickity-prev-next-button.next > svg{
        color:#864ac6;
    }
    #app > main > section.famosos > div > div.flickity.flickity-enabled.is-draggable > ol{
        display:none !important;
    }
}
@media screen and (max-width:768px){
    .flickity-page-dots{
        display:none;
    }
}
</style>