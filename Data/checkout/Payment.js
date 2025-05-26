import {Car} from "../Info/Car.js";
import {Purchased} from "../Info/Pedidos.js"
import {ProcurarOpcao} from "../Info/Delivery.js";
import {ProcurarProdutos} from "../Info/Data.js";

const InserirPayment = document.querySelector('.Order-Summary')
let html;


export function RunPayHTML(){
  let ValorTotal = 0
  let FreteProduto = 0
  let QuantidadeTotal = 0
  
  Car.Carrinho.forEach(Produto => {
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
          <p>$${Car.CorrigirPreço(ValorTotal)}</p>
        </div>
        <div class="Order-Info">
          <p>Shipping & handling:</p>
          <p>$${Car.CorrigirPreço(FreteProduto)}</p>
        </div>
      </div>
      <div class="Order-Items">
        <div class="Order-Info">
          <p>Total before tax:</p>
          <p>$${Car.CorrigirPreço(ValorPosFrete)}</p>
        </div>
        <div class="Order-Info">
          <p>Estimated tax (10%):</p>
          <p>$${Car.CorrigirPreço(Taxa)}</p>
        </div>
      </div>
      <div class="Order-Total">
        <p>Order total:</p>
        <p>$${Car.CorrigirPreço(ValorFinal)}</p>
      </div>
    </div>
    <div class="Button-Payment">
      <button class='Fim-Order'>Place Your Order</button>
    </div>
  </div>` //HTML
    InserirPayment.innerHTML = html

    document.querySelector('.Fim-Order').addEventListener('click', () => {
      if (Car.Carrinho.length === 0) {
        Purchased.CarrinhoVazio()
      } else {
        Purchased.AddOrder(Car.CorrigirPreço(ValorFinal),Car.Carrinho)
        Purchased.SaveOrder('Cart')
        console.log(Purchased.Pedidos)
        Car.RemoveCar()
        window.location.href = 'Orders.html'
      }
    })
}