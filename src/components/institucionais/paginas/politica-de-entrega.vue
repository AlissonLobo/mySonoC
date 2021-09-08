<template lang="html">
  <section>
    <h1 class="varejao-t1">Política de entrega</h1>
    <div class="containerText">
      <p>
        As entregas da VAREJÃOdasMÁQUINAS.COM são realizadas por frota própria, por transportadoras terceirizadas e há também a opção de retirada em nosso centro de distribuição.
      <br>
      <p>
        É indispensável a presença de alguém no local de entrega responsável pelo recebimento do produto.
      </p>
      <br>
      <p>
        Todas as entregas são acompanhadas da nota fiscal dos produtos comprados.
      </p>
      <p>
        Em caso de ausência de responsável pelo recebimento da compra: é realizada ainda mais 1 (uma) tentativa de entrega no mesmo endereço.
      </p>
      <p>
        Se não houver sucesso na entrega, o produto retornará para nosso Centro de Distribuição.
      </p>
      <br>
      <p>
        O cliente tem ainda a opção de retirar o pedido em um dos centros de distribuição da VAREJÃOdasMÁQUINAS.COM, que ficam em Belo Horizonte, na região da Pampulha. Neste caso, não há custo com o frete. Para retirar a mercadoria no centro de distribuição o cliente deve marcar esta opção no ato da compra e aguardar a confirmação do pedido e liberação para entrega. A liberação para entrega será comunicada por e-mail, juntamente com informações de endereço e horário de funcionamento para a retirada da mercadoria.
      </p>
      <br>
      <p>
        No ato da entrega, o cliente pode solicitar a abertura da mercadoria para que seja feita uma vistoria. Neste momento ele poderá conferir o produto e também, quando houver, os acessórios que o acompanham. Caso o cliente não solicite a vistoria, não serão aceitos pedidos de trocas ou devoluções por avaria no produto, pois, neste caso, o transporte é de responsabilidade do cliente. A VAREJÃOdasMÁQUINAS.COM não se responsabiliza por possíveis problemas que podem ocorrer com o produto durante o transporte realizado pelo cliente.
      </p>
    </div>

    <div class="containerText">
      <h2 class="institucional-t1">Atrasos na entrega</h2>
      <p>
        Quando a compra é finalizada, é informado o prazo de entrega do produto, no entanto, alguns fatores podem levar ao atraso, tais como:
      </p>
      <br>
      <p>
        Ausência no local de entrega: quando não há, no endereço de entrega, algum responsável para recebimento dos produtos;
      </p>
      <p>
        Recusa da entrega por terceiros, quando não reconhece a compra ou os produtos solicitados;
      </p>
      <p>
        Fenômenos naturais que impedem a transportadora de chegar ao local de entrega.
      </p>
    </div>

    <div class="containerText">
      <h2 class="institucional-t1">Acompanhamento da entrega</h2>
      <p>
        A forma de acompanhamento da entrega do pedido dependerá da forma como ele foi enviado. Quando o pedido for despachado, você receberá uma notificação com as informações completas de entrega. Em caso de dúvidas em como acompanhar o seu pedido, entre em contato com a nossa equipe de atendimento através do e-mail <a href="mailto:atendimento@varejaodasmaquinas.com">atendimento@varejaodasmaquinas.com</a>.
      </p>
    </div>

    <div class="containerText">
      <h2 class="institucional-t1">Prazo de entrega</h2>
      <p>
        O prazo de entrega é informado quando a compra é finalizada. A contagem começa a valer a partir do momento em que o pedido é aprovado. O prazo para receber essa confirmação é de até 48 horas após a finalização da compra. No caso de pedidos pagos através do boleto bancário, deve-se aguardar o prazo de compensação do boleto, que é de até 3 (três) dias úteis.
      </p>
      <br>
      <p>
        Em ambos os casos, você poderá acompanhar o status do pedido através da tela “Minha Conta” e também por notificações enviadas por e-mail.
      </p>
    </div>

    <div class="containerText">
      <h2 class="institucional-t1">Importante</h2>
      <p>
        Antes de finalizar o pedido, confira se as dimensões dos produtos estão coerentes com o espaço que ele ocupará e se há espaço para que ele chegue ao seu destino. Se não for possível passar o produto por uma porta, por exemplo, não nos responsabilizamos por desmontagens, transporte por guincho, içamento ou outra forma. Todos os produtos já vêm com proteção do fabricante e são transportados com embalagem original, a fim de garantir a sua qualidade e evitar avarias.
      </p>
    </div>

    <div class="containerText">
      <h2 class="institucional-t1">Frete e condições</h2>
      <p>
        Os valores do frete são estipulados de acordo com os produtos inseridos no carrinho. A condição de frete grátis só é aplicada de acordo com os valores da compra e região de entrega. As condições de frete são informadas no momento de finalizar a compra.
      </p>
    </div>
  </section>
</template>

<script>
import Comunicacao from '@/comunicacao';

export default {
  data() {
    return {
      breadcrumb: [
        {
          label: 'Home',
          atual: false,
          rota: {
            name: 'home',
            params: [],
            query: []
          },
          url: 'https://www.varejaodasmaquinas.com'
        },
        {
          label: 'Política de entrega',
          atual: true,
          rota: {
            name: 'politica-de-entrega',
            route: '/pagina/politica-de-entrega',
            params: [],
            query: []
          },
          url: 'https://www.varejaodasmaquinas.com/pagina/politica-de-entrega'
        }
      ]
    }
  },
  created() {
    document.querySelector('title').innerText = 'Política de entrega';
    Comunicacao.$emit('getBreadcrumb', this.breadcrumb)
  }
}
</script>

<style lang="css" scoped>
p {
  margin-bottom: 0;
}
p a {
  color: #005DFF;
  text-decoration: underline;
}
</style>
