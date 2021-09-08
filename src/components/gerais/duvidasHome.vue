<template>
    <section class="questions" style="    margin-top: 100px;">
    <div class="container">
        <div class="titleSection" style="margin:0px;">
            <h1 style="color:#fff !important; text-align:center;">Tem mais alguma <br class="mob"> dúvida?</h1>
            <p style="color:#fff; text-align: center;">Dá uma olhada na nossa lista de perguntas frequentes </p>
        </div>
        <div class="row justify-content-center my-3">
            <div class="col-sm-6">
                <div class="element">
                    <div class="question">
                        <h3>Como Sono Caps deve ser usado?</h3>
                        <button><i class="fa fa-caret-right"></i></button>
                    </div>
                    <div class="answer hideText">
                        <p>
                           O Sono Caps deve ser tomado diariamente, 2 cápsulas por dia, preferencialmente à noite. Recomendamos o uso por, no mínimo, 3 meses, para resultados mais eficazes e contínuos. 
                        </p>
                    </div>
                </div>

                <div class="element">
                    <div class="question">
                        <h3>Em quanto tempo meu sono será regularizado?</h3>
                        <button><i class="fa fa-caret-right"></i></button>
                    </div>
                    <div class="answer hideText">
                        <p>
                          O tempo para que o Sono Caps comece a agir pode variar de acordo com a resposta individual de cada organismo. No entanto, ingerindo de 30min a 1h antes de dormir todos os dias, espera-se que o sono seja regularizado em cerca de 3 meses.
                        </p>
                    </div>
                </div>

                <div class="element">
                    <div class="question">
                        <h3>Sono Caps é um remédio?</h3>
                        <button><i class="fa fa-caret-right"></i></button>
                    </div>
                    <div class="answer hideText">
                        <p>
                           Não. Sono Caps é um Suplemento Alimentar e não precisa de prescrição médica para iniciar o tratamento.
                        </p>
                    </div>
                </div>

                <div class="element">
                    <div class="question">
                        <h3>É necessário ingerir todos os dias para que o sono fique regular?</h3>
                        <button><i class="fa fa-caret-right"></i></button>
                    </div>
                    <div class="answer hideText">
                        <p>
                          Sim. Para que haja uma melhora na regularidade e qualidade do sono, recomenda-se o uso diário e contínuo do Sono Caps.
                        </p>
                    </div>
                </div>
            </div><!--col-sm-6-->


            <div class="col-sm-6">
                <div class="element">
                    <div class="question">
                        <h3>Quais são os ingredientes do Sono Caps?</h3>
                        <button><i class="fa fa-caret-right"></i></button>
                    </div>
                    <div class="answer hideText">
                        <p>
                          Sono Caps é composto por l-triptofano, vitamina B3 (Niacina), vitamina B5 (Ácido Pantotênico), vitamina B6 (Piridoxina) e óleo de semente de abóbora.
                        </p>
                    </div>
                </div>

                <div class="element">
                    <div class="question">
                        <h3>Pode ingerir com bebida alcoólica?</h3>
                        <button><i class="fa fa-caret-right"></i></button>
                    </div>
                    <div class="answer hideText">
                        <p>
                            O consumo de bebidas alcoólicas não combina com um estilo de vida saudável. No entanto, a ingestão esporádica e moderada de álcool não anula os efeitos do Sono Caps. Apesar disso, o consumo exagerado de bebidas alcoólicas pode prejudicar a performance do produto no organismo.
                        </p>
                    </div>
                </div>

                <div class="element">
                    <div class="question">
                        <h3>O Sono Caps pode viciar?</h3>
                        <button><i class="fa fa-caret-right"></i></button>
                    </div>
                    <div class="answer hideText">
                        <p>
                            Não. Por se tratar de um suplemento alimentar, o consumo do Sono Caps não é capaz de causar dependência ou vício, desde que ingerido de acordo com as recomendações de uso.
                        </p>
                    </div>
                </div>

                <div class="element">
                    <div class="question">
                        <h3>Qual prazo de entrega?</h3>
                        <button><i class="fa fa-caret-right"></i></button>
                    </div>
                    <div class="answer hideText">
                        <p>
                           O Sono Caps é despachado em média de 24h úteis após aprovação do pagamento, mas dependemos da agilidade dos Correios para que as entregas sejam feitas até o seu endereço. <br> 
                            </p><p>Abaixo os prazos médios:</p>
                            <ul class="entrega">
                            <li>Região Sudeste - de 3 a 5 dias  </li>
                            <li>Região Sul - de 4 a 6 dias  </li>
                             <li> Região Centro-Oeste - de 4 a 6 dias   </li>
                            <li>Região Nordeste - de 5 a 10 dias   </li>
                            <li>Região Norte - de 7 a 17 dias </li>
                            </ul>
                        <p></p>
                    </div>
                </div> 
            </div><!--col-sm-6-->
        <div class="some acertaMob" style="text-align: center; margin-top:10px;">
   <div class="some acertaMob" style="text-align: center; margin-top:10px;">
					<a href="/produtos" class="facaSeuPedido my-4">FAÇA SEU PEDIDO</a>
				</div>
  </div>
        </div><!--row-->
    </div><!--container-->
</section>
</template>

<script>
export default {
    mounted(){  
    const elements = document.querySelectorAll('.element');
        elements.forEach(element =>{
        let question = element.querySelector('.question');
        // let btn = element.querySelector('.question button');
        let icon = element.querySelector('.question button i');
        var answer = element.lastElementChild;
        var answers = document.querySelectorAll('.element .answer');
        // var elBorder = document.querySelectorAll('.element');
        question.addEventListener('click', ()=>{
        answers.forEach(ans =>{
        let ansIcon = ans.parentElement.querySelector('button i');
        if(answer !== ans){
        ans.classList.add('hideText');
        ansIcon.className = 'fa fa-caret-right';
        }
        });
        answer.classList.toggle('hideText');
        icon.className === 'fa fa-caret-right' ? icon.className = 'fa fa-caret-down' 
        : icon.className ='fa fa-caret-right';
        });
    });
    }
}
</script>
<style lang="scss" scoped>

    .element{
        color: #fff;
        margin: 10px 0;
    }
    .element .question{
        display: flex;
        justify-content: space-between;
        padding: 10px;
        border: 1px solid #fff;
        border-radius: 20px;
    }

    .question h3{
        font-family: 'Open Sans', sans-serif;
        font-size: 14px;
        text-align: left;
        margin: 0 !important;
        display:flex;
        align-content:center;
        align-self:center;
        font-weight:600;
    }
    .question button{
        border: none;
        outline: none;
        background: none;
        cursor: pointer;
    }
    .question i{
        color: #fff;
        font-size: 20px;
    }
    .element .answer{
        padding: 10px 20px;
    }
    .answer p{
        font-family: 'Open Sans', sans-serif;
        color:#fff;
        text-align:justify;
        font-size:14px;
    }
    .hideText{
        display: none;
    }
    .perguntasHome{
        text-align:center;
    }
    .titulosPerguntas p{
        color: #fff;

    }
    .titulosPerguntas h4{
        margin-bottom: 5px;
        margin-top:10px;
        font-size:32px;
    }
    .questions{
        background-color:#864ac6;
        padding:5px 0px 30px 0px;
    }
    .entrega{
        font-size:14px;
    }
    .entrega ul{
        padding-left:0;
    }
    .entrega li{
        list-style-type:none;
    }
    @keyframes animate{
        from{
            opacity: 0;
            transform: scale(0.6);
        }
        to{
            opacity: 1;
            transform: scale(1);
        }
    }

</style>