<template>
  <div class="roleta_box" id="roleta_box">
    <div class="content-pop roleta">
      <div class="bg-modal" id="trocaBgModal">
        <div class="roletatotal">
        <div class="border roleta">
          <img class="marcador" src="@/assets/img/roleta/marcador.png" alt="" />
          <img class="estruturaRoleta" id="imagemEstatica" src="@/assets/img/roleta/estrutura-roleta.png" alt="" style="transition: background-image 0.5s ease-in-out;"/>
          <!-- <img class="estruturaRoleta" id="imagemGif" src="@/assets/img/roleta/estrutura-roleta-troca.png" alt="" style="transition: background-image 0.5s ease-in-out;"/> -->
          <div id="wrapper">
            <div id="wheel">
              <div id="inner-wheel">
                <div class="sec">
                  <div class="discountPercent">
                    <div class="percentOff">
                      <p>9</p>
                      <span><b>%</b> <br />OFF</span>
                    </div>
                  </div>
                </div>
                <div class="sec">
                  <div class="discountPercent">
                    <div class="percentOff">
                      <p>6</p>
                      <span><b>%</b> <br />OFF</span>
                    </div>
                  </div>
                </div>
                <div class="sec">
                  <div class="discountPercent">
                    <div class="percentOff">
                      <p>8</p>
                      <span><b>%</b> <br />OFF</span>
                    </div>
                  </div>
                </div>
                <div class="sec">
                  <div class="discountPercent">
                    <div class="percentOff">
                      <p>5</p>
                      <span><b>%</b> <br />OFF</span>
                    </div>
                  </div>
                </div>
                <div class="sec">
                  <div class="discountPercent">
                    <div class="percentOff">
                      <p>7</p>
                      <span><b>%</b> <br />OFF</span>
                    </div>
                  </div>
                </div>
                <div class="sec">
                  <div class="discountPercent a">
                    <div class="percentOff">
                      <p>10</p>
                      <span><b>%</b> <br />OFF</span>
                    </div>
                  </div>
                </div>
              </div>

              <div id="shine"></div>
            </div>
          </div>

          <div id="spin">
            <button id="inner-spin"> </button>
          </div>

          <div class="resultado" id="txt"></div>
          
        </div>
        <div class="inforoleta">
          <div class="roleta_fechar">
            <img src="@/assets/img/roleta/fechar.png" id="roleta_fechar" alt="">
            <img src="@/assets/img/roleta/fecharAter.png" id="roleta_fecharAfter" alt="">
          </div>
          <img src="@/assets/img/roleta/textogira.png" class="imgGire" style="transition: background-image 0.5s ease-in-out;">
          <img src="@/assets/img/roleta/voceganhou.png" class="imgGanhou" style="transition: background-image 0.5s ease-in-out">
          <div id="txtshow"></div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RoletaPop",
  mounted() {
    function addEvent(obj, evt, fn) {
      if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
      } else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
      }
    }
    addEvent(document, "mouseout", function (evt) {
      if (getCookie("cookieRoleta") === "true") {
        return;
      }
      if (evt.toElement == null && evt.relatedTarget == null) {
        setCookie("cookiePopupexit", true, 3);
        //document.getElementById("roleta_box").style.display = "block";
        alert('teste');
      }
    });

    function setCookie(nomeCookie, valorGravado, diasExpira) {
      var d = new Date();
      d.setTime(d.getTime() + diasExpira * 24 * 60 * 60 * 1000);
      var expires = "expires=" + d.toUTCString();
      document.cookie =
        nomeCookie + "=" + valorGravado + ";" + expires + ";path=/";
    }

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
  },
};
</script>

<!-- SCRIPT ROLETA -->
<script>
var degree = 14400;
var clicks = 0;

const tempo_de_delay = 6500; // Tempo para exibição do resultado e troca das imagens após clicar

//Limpa o cronômetro de intervalo se o ID for salvo nos atributos
function clear_interval(t) {
  var interval = parseInt(t.data("interval"));
  if (interval > 0) {
    clearInterval(interval);
    t.data("interval", "");
  }
}

  // Fecha o PopUp
  $(document).ready(function () {
    $('.roleta_box').css('display', 'flex');
    $("#roleta_fechar, #roleta_fecharAfter").click(function () {
      document.getElementById("roleta_box").style.display = "none";
    });

  // Faz girar a roleta e troca a imagem após o termino
  $("#spin").click(function () {
    setTimeout(function () {
              document.getElementById("inner-spin").disabled = true;
            }, 100);
    setTimeout(function () {
      // $("#imagemEstatica").hide();
      // $("#imagemGif").show();
      $("#inner-spin").attr("disabled", "disabled");
      $(".imgGire").hide();
      $(".imgGanhou").show();
      $("#roleta_fechar").hide();
      $("#roleta_fecharAfter").show();
      $("#txt").css('display', 'block')
    }, tempo_de_delay);
    clicks++;
    var newDegree = degree * clicks;
    var extraDegree = Math.floor(Math.random() * (360 - 1 + 1)) + 1;
    totalDegree = newDegree + extraDegree;

    //Calcule o índice do resultado:
    var win_num = 6 - Math.floor(((totalDegree % 360) + 30) / 60);

    $("#wheel .sec").each(function () {
      var t = $(this);

      clear_interval(t);

      //Salva o ID do temporizador no atributo de intervalo de dados:
      t.data(
        "interval",
        setInterval(function () {
          var aoY = t.offset().top;
          $("#txt").html(t.html());

          if (aoY < 23.89) {
            $("#spin").addClass("spin");
            setTimeout(function () {
              $("#spin").removeClass("spin");
            }, 100);
          }
        }, 10)
      );

      $("#inner-wheel").css({
        transform: "rotate(" + totalDegree + "deg)",
      });
    });

    //Para as atualizações e mostre o resultado quando a transição já tiver terminado
    setTimeout(function () {
      //Declara variaveis de acordo com posicao
      var resultadoexibe = '';
      switch(win_num) {
        case 1:
          resultadoexibe = 9;
          break;
        case 2:
          resultadoexibe = 6;
          break;
        case 3:
          resultadoexibe = 8;
          break;
        case 4:
          resultadoexibe = 5;
          break;
        case 5:
          resultadoexibe = 7;
          break;
        case 6:
          resultadoexibe = 10;
          break;
        default:
          resultadoexibe = 10;
      }

      if(resultadoexibe == ""){
        resultadoexibe = 10;
      }

      $("#wheel .sec").each(function () {
        clear_interval($(this));
      });
      $("#txt").html(
        $("#wheel div.sec:nth-child(" + win_num + ")").html()
      );
      $("#txtshow").html(resultadoexibe + "% OFF");
      $("#txtshow").show();

      //Conta 10 segundos e fecha a roleta
      setTimeout(function () {
        document.getElementById("roleta_box").style.display = "none";
      }, 10000);

       //Grava nos cookies o cupom
      document.cookie = "cupomroleta=ROLETA"+resultadoexibe;
      $.ajax({
        url: "https://www.sonocaps.com.br/checkout/ajax/ajax-cupom-desconto.php",
        type: "post",
        data: {
          'cupom': 'ROLETA'+ resultadoexibe
        }
      })

    }, tempo_de_delay);
  });

  // Desabilitar botão após 1 clique
  function desabilitaBotao(){
     document.getElementById("BtnCurtir").disabled = true;
  }

  $("#BtnCurtir2").on("click", function(){
    $(this).prop("disabled", true);
  });

});
</script>

<style scoped>
@import '../../app.scss';
</style>

<style scoped>

.imgGanhou {
  display: none;
}

.inforoleta {
    width: 500px;
    max-height: 180px;
    margin: 0 auto;
    position: relative;
}

.inforoleta img {
    width: 80%;
    margin-top: 100px;
}

div#trocaBgModal {
    display: flex;
    align-items: center;
    justify-content: center;
}

.roletatotal {
    width: 890px;
    max-height: 600px;
    margin: 0 auto;
    display: flex;
    align-items: center;
}

.roleta_fechar {
    position: absolute;
    left: 200px;
    top: -150px;
}
#txtshow{
    font-family: neotechbold, sans-serif;
    font-size: 90px;
    font-weight: 900;
    width: 370px;
    display: none;
    margin-top: -125px;
    font-size: 65px !important;
    width: auto !important;
    margin-left: -2px;
    color: #fe0086;
}

  #txt{
    display: none!important;
  }
.roleta_box {
  display: none;
  position: fixed;
  z-index: 99999999;
  text-align: center;
  border: none;
  box-shadow: none !important;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #67546c80;
  /*display: flex;*/
  justify-content: center;
  align-items: center;
}

img#roleta_fechar {
    width: auto;
    position: relative;
    top: -153px;
    right: -35px !important;
    cursor: pointer;
}

img#roleta_fecharAfter {
  display: none;
  width: 140px;
    position: relative;
    top: -150px;
    right: -70px !important;
    cursor: pointer;
    transition: 0.2s;
}

/* CSS ROLETA */

.border {
  position: relative;
  text-align: center;
}
.border.roleta {
  border: none !important;
  width: 64%;
  position: relative;
  z-index: 9999;
  top: 10%;
}
img.marcador {
  position: absolute;
  right: 0;
  left: 0;
  top: 10px;
  margin: auto;
  z-index: 999;
}
#wrapper {
  width: auto;
  position: absolute;
  transform: scale(1.3);
  left: -6px;
  right: 0;
  top: 130px;
  z-index: -1;
}
#txt {
  color: #eaeaea;
}
#wheel {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  transform: rotate(0deg);
  margin: auto;
}
#inner-wheel {
  width: 100%;
  height: 100%;
  transition: all 6s cubic-bezier(0, 0.99, 0.44, 0.99);
}
#wheel .sec {
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 130px 75px 0;
  border-color: #19c transparent;
  transform-origin: 75px 129px;
  left: 50px;
  top: -4px;
  opacity: 1;
}
.percentOff {
  display: flex;
  align-items: center;
}
.percentOff span {
  font-size: 12px;
}
.percentOff span b {
  font-size: 20px;
  line-height: 1;
}
#wheel .sec:nth-child(1) {
  transform: rotate(60deg);
  border-color: #eb007b transparent;
}
#wheel .sec:nth-child(2) {
  transform: rotate(120deg);
  border-color: #633990 transparent;
}
#wheel .sec:nth-child(3) {
  transform: rotate(180deg);
  border-color: #eb007b transparent;
}
#wheel .sec:nth-child(4) {
  transform: rotate(240deg);
  border-color: #633990 transparent;
}
#wheel .sec:nth-child(5) {
  transform: rotate(300deg);
  border-color: #eb007b transparent;
}
#wheel .sec:nth-child(6) {
  transform: rotate(360deg);
  border-color: #633990 transparent;
}
.discountPercent {
  margin-top: -100px;
  color: rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1000000;
  display: block;
  text-align: center;
  font-size: 38px;
  margin-left: -24px;
  text-shadow: rgb(255 255 255 / 10%) 0px -1px 0px, rgb(0 0 0 / 20%) 0px 1px 0px;
}
.discountPercent.a {
  margin-left: -36px;
}
.percentOff p,
span {
  color: #fff;
  font-family: neotechbold, sans-serif;
  font-weight: bold;
}

#spin {
  width: 95px;
  height: 95px;
  position: absolute;
  top: 42%;
  left: 48%;
  margin: -34px 0 0 -34px;
  border-radius: 50%;
  z-index: 1000;
  font-family: neotechbold, sans-serif;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: url(../../assets/img/roleta/centro.gif);
  /* background-image: url(/img/centro.b8b524df.gif); */
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  /* cursor: pointer; */
}
button#inner-spin {
    background: rgba(255, 255, 255, 0);
    height: 100%;
    width: 100%;
    border-radius: 50%;
    border: none;
    outline: none;
}
#spin:active #inner-spin {
  box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 5px inset;
}
#spin:active:after {
  font-size: 15px;
}
.resultado {
  position: absolute;
  top: 78%;
  left: 100%;
  z-index: 9999;
}
#shine {
  width: 250px;
  height: 250px;
  position: absolute;
  top: 0;
  left: 0;
  background: radial-gradient(
    ellipse at center,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.99) 1%,
    rgba(255, 255, 255, 0.91) 9%,
    rgba(255, 255, 255, 0) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr = '#ffffff', endColorstr='#00ffffff', GradientType=1);
  opacity: 0.1;
}
@keyframes hh {
  0%,
  100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(7deg);
  }
}
.spin {
  animation: hh 0.1s;
  height: 75px;
  width: 75px;
  border-radius: 50%;
  border: none;
  background: #fff0;
  cursor: pointer;
  position: absolute;
  z-index: 9999999999;
  left: 0px;
  right: 9px;
  margin: auto;
  top: 37.3%;
}

.bg-modal {
  /*background-image: url(../../assets/img/roleta/bg-modal-troca_uplips.png);*/
  background-image: url(../../assets/img/roleta/bg-modal.png);
  width: 1200px;
  height: 700px;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  position: relative;
  transition: background-image 0.2s ease-in-out;
  transform: scale(0.9);
}

.bg-modalTroca {
  /*background-image: url(../../assets/img/roleta/bg-modal-troca_uplips.png);*/
  width: 1200px;
  height: 700px;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  position: relative;
  transition: background-image 0.2s ease-in-out;
  transform: scale(0.9);
}

#imagemGif {
  display: none;
}

.resultado .percentOff p {
  font-size: 80px;
  color: #000;
}

.resultado .percentOff {
  background: none;
  width: 200px;
  border-radius: 10px;
  justify-content: center;
}

.resultado .percentOff span {
  color: #000;
  font-size: 30px;
  display:flex;
  align-items: flex-end;
}

.resultado .percentOff span b {
  font-size: 35px;
  padding: 0 10px 0 0;
}

#txt {
  display: none;
  transition: 0.2s ease-in;
}

@media screen and (min-width: 1920px) {
  .roleta_fechar {
    left: 270px !important;
    top: -190px !important;
  }
}

@media screen and (max-width: 1536px) {
  .bg-modal, .bg-modalTroca {
    height: 600px !important;
  }

  .border.roleta {
      transform: scale(0.8);
      width: 70% !important;
      top: 3% !important;
  }
}
@media screen and (min-width: 1920px) {
  .div#txtshow {
  position: absolute;
  top: 62%;
  left: 87.5%;
  z-index: 9999;
  }
  
}
@media screen and (max-width: 1366px) {
  .resultado {
  position: absolute;
  top: 82%;
  left: 100%;
  z-index: 9999;
}
  .bg-modal, .bg-modalTroca {
    height: 650px !important;
  }

  .border.roleta {
    transform: scale(0.9);
    width: 68% !important;
  }
  
}
@media screen and (max-width: 1080px) {
   .resultado {
  position: absolute;
  top: 95%;
  left: 90%;
  z-index: 9999;
}
  .bg-modal, .bg-modalTroca {
    height: 550px !important;
  }
  .estruturaRoleta {
    width: 380px !important;
  }
  div#wrapper {
    transform: scale(1) !important;
    top: 70px !important;
  }
  .border.roleta {
    width: 72% !important;
  }
  .marcador {
    width: 110px;
  }
}
@media screen and (max-width: 768px) {
  .bg-modal {
    background-image: url(../../assets/img/roleta/bg-modal-mobile.png);
    transition: background-image 0.2s ease-in-out;
  }
  /* .bg-modalTroca {
    background-image: url(../../assets/img/roleta/bg-modal-mobile-troca.png);
    transition: background-image 0.2s ease-in-out;
  } */
  .estruturaRoleta {
    width: 280px !important;
  }

  .border.roleta {
    margin: 17px auto 0;
  }
  div#wrapper {
    transform: scale(0.75) !important;
    top: 19px !important;
  }
  #spin {
    width: 50px !important;
    height: 50px !important;
    top: 48% !important;
    left: 50.8% !important;
  }
  .marcador {
    width: 75px !important;
  }

  img#roleta_fechar {
    width: 60%;
    top: 40px !important;
    left: 99px !important;
}
img#roleta_fecharAfter {
    width: 120px;
    top: 38px !important;
    left: 118px !important;
}
  .resultado {
    left: 41.5% !important;
    top: 3% !important;
  }

  .resultado .percentOff p {
      font-size: 42px !important;
  }

  .resultado .percentOff span b {
      font-size: 18px !important;
  }

  .resultado .percentOff span {
      font-size: 17px !important;
  }

  div#txtshow {
    top: -103px !important;
    left: 255px !important;
    font-size: 44px !important;
  }
  .roletatotal {
    flex-wrap: wrap-reverse;
  }
  img.imgGire {
    width: 40% !important;
  }
  img.imgGanhou {
    width: 40% !important;
    margin: 43px 0;
  }

  .inforoleta {
      margin-top: 0 !important;
  }
  .inforoleta img {
      margin-top: 100px !important;
  }

}

/* Fim roleta */
</style>