import {ProcurarOpcao} from "../Info/Delivery.js";
import {Fixed} from "../Utils/Fixed.js";
import {ProcurarProdutos} from "../Info/Data.js";
import {car} from "../Info/Car.js";

const InserirPayment = document.querySelector('.Order-Summary')
let html;


export function RunPayHTML(){
  let ValorTotal = 0
  let FreteProduto = 0
  let QuantidadeTotal = 0

  car.forEach(Produto => {
    const ProdutoSelecionado = ProcurarProdutos(Produto.id)
    const OpcaoSelecionada = ProcurarOpcao(Produto.DeliveryID)
    FreteProduto += OpcaoSelecionada.Preco
    ValorTotal += parseFloat((ProdutoSelecionado.Preco * Produto.Quantidade))
    QuantidadeTotal += Produto.Quantidade
  });
    const ValorPosFrete = ValorTotal + FreteProduto
    const Taxa = ValorPosFrete * 0.10
    const ValorFinal = ValorPosFrete + Taxa

  html = `<div class="Payment-Sumarry"> <!--Painel de Preços-->
    <div class="Payment-Order">
      <p class="Order">Order Summary</p>
      <div class="Order-Items">
        <div class="Order-Info">
          <p>Items <span class='Total-items'>(${QuantidadeTotal})</span>:</p>
          <p>$${Fixed(ValorTotal)}</p>
        </div>
        <div class="Order-Info">
          <p>Shipping & handling:</p>
          <p>$${Fixed(FreteProduto)}</p>
        </div>
      </div>
      <div class="Order-Items">
        <div class="Order-Info">
          <p>Total before tax:</p>
          <p>$${Fixed(ValorPosFrete)}</p>
        </div>
        <div class="Order-Info">
          <p>Estimated tax (10%):</p>
          <p>$${Fixed(Taxa)}</p>
        </div>
      </div>
      <div class="Order-Total">
        <p>Order total:</p>
        <p>$${Fixed((ValorFinal))}</p>
      </div>
    </div>
    <div class="Button-Payment">
      <button>Place Your Order</button>
    </div>
  </div>`
    InserirPayment.innerHTML = html
}