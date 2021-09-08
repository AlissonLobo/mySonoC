<template lang="html">
  <section>
    <div class="duvidasContainer-topo">
      <h1 class="vitabe-t1">Política de Privacidade</h1>
      <p class="vitabe-t2">
     Sempre visando o nosso compromisso de zelar pela excelência dos nossos serviços e o bem estar dos nossos clientes, damos especial atenção à segurança das informações que circulam pelo nosso site.
      </p>
      <p class="vitabe-t2"> 
        Utilizamos as mais avançadas ferramentas de segurança em nosso site e o armazenamento das informações do nosso público. Todos os dados que você fornece em nosso site são usados para lhe proporcionar a melhor experiência de compra possível e lhe oferecer acesso a vantagens e ofertas exclusivas.
      </p>
      <p class="vitabe-t2">
       Ao navegar no site www.sonocaps.com.br você estará automaticamente concordando com todos os termos da presente Política de Privacidade.
      </p>
    </div>
    <div class="duvidasContainer">
      <div class="duvidasContainer-item" v-for=" (item, i) in itens " :key=" i ">
        <p class="institucional-t1" @click=" $slideToggle($refs[`faq${i}`][0]); $event.target.classList.toggle('ativo') ">
          {{ item.pergunta }}
          <i class="fa fa-caret-right"></i>
        </p>
        <div :ref="`faq${i}`" class="duvidasContainer-item-text">
          <p v-html="item.resposta"></p>
        </div>
      </div>
    </div>
  </section>

  
</template>

<script>
export default {
  data() {
    return {
      itens: [
        {
          pergunta: "Segurança e Confidencialidade ",
          resposta:
            "Todas as informações inseridas em nosso site são armazenadas de modo seguro e utilizadas somente para estabelecer uma comunicação personalizada, formulada de acordo com os seus interesses. Portanto, a viabilidade de alguns serviços só é possível por meio do compartilhamento de algumas destas informações, o que é feito de maneira responsável e com garantia de sigilo e privacidade.<p>  Todas as transações de pagamento são realizadas por meio da tecnologia SSL (Secure Socket Layer), o que garante que os dados referentes às transações realizadas pelo site jamais serão acessados por terceiros,por meio de um complexo sistema de segurança e criptografia. Todos os dados fornecidos somente serão utilizados pela nossa empresa e jamais serão entregues a terceiros.</p>",
        },
        {
          pergunta: "Dicas de segurança",
          resposta:
            "Recomendamos nunca fornecer os seus dados de acesso (login e senha) a terceiros. Em caso de suspeita ou confirmação de acesso indevido, entre imediatamente na sua área de cliente e altere a senha.  ",
        },
        {
          pergunta: "Política de Privacidade ",
          resposta: `Aqui na Sono Caps, temos uma equipe de segurança dedicada 24hs a proteger nosso site de ataques e invasões, bem como os dados de privados de cada um de nossos clientes.  
            <br><br> 
            Todos os nossos bancos de dados são protegidos e temos como compromisso com nossos clientes, não deixar vazar qualquer tipo de informações pessoais como: endereço, CPF, senhas etc. Os e-mails e dados cadastrados serão utilizados apenas pela Sono Caps para informar a você sobre as nossas promoções e novidades. E o mais importante: somente com a sua autorização.
            <br><br>
            O compartilhamento de informações pessoais dos nossos clientes só pode acontecer, única e exclusivamente sob ordens judiciais a título de investigações, bem como a pedido do próprio cliente.
            <br><br> 
            Ah! É sempre bom lembrar que, para preservar seus dados de invasões de terceiros, aconselhamos que nossos clientes alterem suas senhas com relativa freqüência e evitem utilizar combinações óbvias! Portanto, esqueça a sua data de aniversário, use a criatividade e invista numa senha segura.
            <br><br> 
            A Sono Caps utiliza Cookies durante sua navegação de forma que toda vez que você fizer seu login, suas informações de navegações anteriores fiquem gravadas e tornem sua usabilidade cada vez melhor. Os cookies são pequenos arquivos, não maliciosos, que são guardados no seu computador e nos ajudam a tornar sua navegação mais legal! Aconselhamos que, para ter melhores experiências com nosso eCommerce, ative a opção de armazenamento de Cookies no seu navegador. `,
        },
        {
          pergunta: "Cookies ",
          resposta:
            "Os cookies são arquivos de dados gravados em seu computador a partir do nosso site, mas que não armazenam dados pessoais ou afetam o sistema do seu computador. Estes arquivos são utilizados apenas para identificar se você é um visitante constante ou não, visando melhorar a sua experiência de navegação. Você pode excluir ou desabilitar os cookies no seu navegador a qualquer momento. ",
        },
        {
          pergunta: "E-mails ",
          resposta:
            "Nós jamais enviamos e-mails solicitando o preenchimento de dados cadastrais ou com arquivos executáveis (arquivos com extensão - finalizados - com .exe, .bat, .scr, .com) em anexo. Os nossos e-mails promocionais e de acompanhamento de pedidos são enviados somente com o remetente atendimento@vitabe.com.br. <br><br> Caso não queira mais receber os nossos e-mails promocionais, basta se descadastrar através do link que existe no rodapé de todas as mensagens enviadas por nós ou através de solicitação por email, que deverá ser remetido para atendimento@vitabe.com.br. Ao optar pelo descadastro, imediatamente você deixará de receber nossos emails promocionais, informações sobre produtos e lançamentos. ",
        },
        {
          pergunta: "Política de Segurança",
          resposta: `Toda a tecnologia do nosso eCommerce é focada, além da boa funcionalidade, na segurança dos dados dos usuários, incluindo informações pessoais e de pagamento. 
            <br><br> 
            Aqui, você pode inserir seus dados de cartão com a segurança de que eles não vão ser utilizados de forma indevida. 
            <br><br> 
            Todas as informações de pagamento e cartões de crédito utilizam o formato SSL (Navegação Segura) onde seus dados são criptografados de uma forma única, fazendo assim com que só o sistema possa interpretar seus dados e protegendo-os da invasão de invasores mal intencionados.  `,
        },
      ],
    };
  },
};
</script>

<style lang="css" scoped>
section {
  margin-bottom: 90px;
}
.duvidasT1 {
  display: block;
  color: #444;
  font-size: 14px;
  margin-bottom: 1rem;
}
.duvidasContainer-topo {
  margin: 40px 0 0;
}
.duvidasContainer-topo p {
  margin-bottom: 1rem;
}
.institucional-t1 {
  margin-bottom: 10px;
}
.duvidasContainer {
  overflow: hidden;
  border-radius: 4px;
}
.duvidasContainer-item-text {
  overflow: hidden;
  display: none;
}
.duvidasContainer-item-text p {
  font-size: 14px;
  display: block;
  color: #828282;
  text-align: justify;
  padding: 10px 20px;
}
.institucional-t1 {
  font-weight: normal;
}
.institucional-t1:hover {
  color: #362b62;
  font-weight: bold;
}
.institucional-t1:hover i,
.institucional-t1 i {
  transition: 200ms;
  color: #828282;
}
.institucional-t1.ativo i {
  transform: rotate(90deg);
}
</style>