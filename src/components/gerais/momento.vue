<template>
<section class="insonia" style="overflow: hidden;">
  <div class="row composicao justify-content-center" style="margin:0 auto;">
    <div class="col-sm-6" style="padding-left:0;">
      <div class="col-sm-12 triptofano">
        <div class="col-6 offset-6 align-items-center" >
          <div class="my-3">
			<h4>L-Triptofano</h4>
          </div>
			<p>
            O l-triptofano é um aminoácido
            essencial que aumenta a produção
            de dois neurotransmissores:
            serotonina e melatonina. Enquanto
            a serotonina regula o sono, humor
            e apetite, a melatonina interage
            com outros hormônios, preparando
            o organismo para a hora de dormir.
          </p>
        </div>  
      </div><!--col-sm-12-->
    </div>
    <div class="col-sm-6" style="padding-right: 0;">
      <div class="col-sm-12 b3">
        <div class="col-6 offset-6">
			<h4>Vitamina B3</h4>
			<p style="color:#fff;font-size:12px;">(Niacina)</p>
          <p>
            A niacina, também conhecida como Vitamina B3, melhora a circulação sanguínea, produz energia para as células e protege o corpo de cansaços frequentes.Associado ao uso do l-triptofano, a niacina ajuda o corpo a produzir a serotonina, um neurotransmissor relacionado ao humor e bem-estar, popularmente conhecido como hormônio da felicidade.
          </p>
        </div><!--offset-->
      </div><!--sm-12-->
    </div>
    <div class="col-sm-6" style="padding-left: 0;">
      <div class="col-sm-12 b5">
        <div class="col-6 offset-6">
			<h4>Vitamina B5</h4>
			<p style="color:#fff;font-size:12px;">(Ácido Pantotênico)</p>
<p>
				Importante para o funcionamento do organismo, a Vitamina B5, também chamada de Ácido Pantotênico, produz energia, acelera o metabolismo e diminui o cansaço no corpo. A falta dessa substância no organismo provoca insônia e fadiga com maior facilidade.
          </p>
        </div><!--offset-->
      </div><!--sm-12-->
    </div>
    <div class="col-sm-6" style="padding-right: 0;">
      <div class="col-sm-12 b6">
        <div class="col-6 offset-6">
          <h4>Vitamina B6</h4>
          <p style="color:#fff;font-size:12px;">(Piridoxina)</p>
          <p>
            Com funções essenciais para o corpo humano, a Piridoxina, ou Vitamina B6, é um micronutriente que melhora o sono e contribui para o bom humor. Em quantidade ideal, ela auxilia na produção de serotonina, entre outros neurotransmissores importantes relacionados ao bem-estar e relaxamento corporal.
          </p>
        </div><!--offset-->
      </div><!--sm-12-->
    </div><!--sm-6-->
    <div class="some acertaMob" style="text-align: center; margin-top:10px;">
					<a href="/produtos" class="facaSeuPedido my-4">FAÇA SEU PEDIDO</a>
				</div>
  </div><!--row-->
</section>
</template>


<style>
.insonia{
  background-color:#fbf7ff;
}

.insonia .row{
	max-width:100%;
	position:relative;
	overflow: hidden !important;
}
  .insonia ul li{
    list-style-type:none;
    color:#362b62;
    font-size: 16px;
  }
  .insonia ul{
    margin-bottom:0px;
    margin-left:-35px;
    margin-top:-15px;
  }
  .insonia h1{
    margin:0px 0px 10px 0px;
    line-height:30px;
     
  }
  .insonia .col-sm-5{
    position:relative;
    top:-60px;
  }
  .insonia .col-sm-7 p{
    font-size:16px;
    color:#362b62 !important;
    padding: 8px;
  }
  .insonia .triptofano{
    background-image:url("../../assets/sonoCaps_img/TRIPTOFANO.jpg");
    background-size:cover;
    background-position:center;
    height:394px;
    display:flex;
    align-items:center;
  }
  .triptofano h4{
    color:#fff;
    font-weight:bold;
    font-size:23px;
  }
  .triptofano p{
    color:#fff;
    font-size:14px;
    text-align:justify;
  }
  .insonia .b3{
    background-image:url("../../assets/sonoCaps_img/VITAMINAB3.jpg");
    background-size:cover;
    background-position:center;
    height:394px;
    display:flex;
    align-items:center;
  }
  .b3 h4{
    color:#fff;
    font-weight:bold;
    font-size:23px;
  }
  .b3 p{
    color:#fff;
    font-size:14px;
    text-align:justify;
  }
  .insonia .b5{
    background-image:url("../../assets/sonoCaps_img/VITAMINAB5.jpg");
    background-size:cover;
    background-position:center;
    height:394px;
    display:flex;
    align-items:center;
  }
  .b5 h4{
    color:#fff;
    font-weight:bold;
    font-size:23px;
  }
  .b5 p{
    color:#fff;
    font-size:14px;
    text-align:justify;
  }

  .insonia .b6{
    background-image:url("../../assets/sonoCaps_img/VITAMINAB6.jpg");
    background-size:cover;
    background-position:center;
    height:394px;
    display:flex;
    align-items:center;
  }
  .b6 h4{
    color:#fff;
    font-weight:bold;
    font-size:23px;
  }
  .b6 p{
    color:#fff;
    font-size:14px;
    text-align:justify;
  }
  .composicao{
    display:flex;
  }
  .composicao .col-sm-6{
    margin:15px auto;
  }
  @media screen and (max-width: 768px){
    .insonia .composicao p{
      font-size:12px;
    }
    .insonia h1{
      width:100%;
      text-align:center;
      font-weight:800;
      line-height:30px;
      font-size:30px;
    }
    .insonia .col-sm-5{
      position:static;
    }
    .insonia .col-sm-5 img:first-child{
      position: relative;
      left: -20px;
    }
    .composicao{
      display:none;
    }
    .col-sm-5.text-right{
      position:relative;top:10%;
    }
    
  }
</style>