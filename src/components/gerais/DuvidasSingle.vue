<template>
<section class="duvidasSingle">
  <h4 style="font-family: Oswald, sans-serif !important;color: rgb(0, 0, 0) !important;">Perguntas Frequentes</h4>
<br>
<div class="perguntasSingle">
    <div class="element">
        <div class="question">
            <h3>Como devo usar?</h3>
            <button>
            <i class="fa fa-caret-right"></i>
            </button>
        </div><!--question-->
        <div class="answer hideText">
        <p>
        A dose diária a ser tomada é de uma cápsula ao dia. Como durante o período da manhã a absorção dos nutrientes é facilitada e os resultados otimizados, sugerimos que tome New Hair após sua primeira refeição.
        </p>
        </div>
    </div><!--element-->
    <div class="element">
    <div class="question">
    <h3>NewHair engorda?</h3>
    <button>
    <i class="fa fa-caret-right"></i>
    </button>
    </div>
    <div class="answer hideText">
    <p>
        Não, as cápsulas têm componentes 100% naturais e de rápida absorção, sem nenhum tipo de lipídio ou agente que cause efeitos colaterais no corpo.
    </p>
    </div>
    </div>
    <div class="element">
    <div class="question">
    <h3>Qual a idade mínima?</h3>
    <button>
    <i class="fa fa-caret-right"></i>
    </button>
    </div>
    <div class="answer hideText">
    <p>
        Sugerimos que crianças menores de 12 anos façam a utilização do produto apenas sob orientação profissional.
    </p>
    </div>
    </div>
    <div class="element">
    <div class="question">
    <h3>Grávidas podem utilizar?</h3>
    <button>
    <i class="fa fa-caret-right"></i>
    </button>
    </div>
    <div class="answer hideText">
    <p>
        O New Hair pode ser tomado mesmo amamentando, pois é um complexo vitamínico e mineral 100% natural e não possui contraindicações. Nosso produto possui componentes que irão auxiliar no fortalecimento dos fios e combater a queda causada nesse período de amamentação. No caso de gravidez, leve a fórmula ao médico para melhor orientação.
    </p>
    </div>
    </div>
    <div class="element">
    <div class="question">
    <h3>Interfere no anticoncepcional?</h3>
    <button>
    <i class="fa fa-caret-right"></i>
    </button>
    </div>
    <div class="answer hideText">
    <p>
    Como nossos produtos são compostos apenas de nutrientes naturais, não há contraindicações e nem interações medicamentosas reconhecidas.
    </p>
    </div>
    </div>

    <div class="element">
    <div class="question">
    <h3>Em quanto tempo sentirei o efeito das vitaminas?</h3>
    <button>
    <i class="fa fa-caret-right"></i>
    </button>
    </div>
    <div class="answer hideText">
    <p>
    Os resultados de New Hair variam de pessoa para pessoa. Porém, desde a primeira semana de tratamento você perceberá uma redução significativa da queda de cabelo, além de fios mais fortes, saudáveis e brilhantes. Para melhores resultados quanto ao crescimento dos fios, indicamos um tratamento mínimo de 3 meses com New Hair, além do uso contínuo para que seus cabelos se mantenham lindos e saudáveis.
    </p>
    </div>
    </div>
</div>  
</section>
</template>
<script>
export default {
    name: 'DuvidasSingle',
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
<style scoped>
.question{
display:flex;
justify-content:space-between;
cursor:pointer;
}
.element{
padding:7px 0px;
}
.element h3{
font-size:18px;
font-weight: 500;
font-family: 'Oswald';
color:#ff0863;
}
.answer{
    margin: 10px 0px;
}
.answer p{
    font-size:13px;
}
.hideText{
display:none;
}
</style>