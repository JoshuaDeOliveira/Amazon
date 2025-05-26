import {Purchased} from "./Info/Pedidos.js";
import {ProcurarProdutos} from "./Info/Data.js";
import {Car} from "./Info/Car.js";
import {ProcurarOpcao} from "./Info/Delivery.js";
import {AtualizarHTMLCar} from "./Utils/Mostrar.js";
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js'

addEventListener('DOMContentLoaded', () => {
  AtualizarHTMLCar()
})

let OrderHTML = document.querySelector('.Orders-Grid')

Purchased.Pedidos.forEach(ListaDeProdutos => {
  let HTML = `
  <div class="Orders-Produtos" data-id-pedido='${ListaDeProdutos.IdOrder}'>
        <nav>
          <div class="left-Order">
            <div class="Pedid">
              <p class="Pedidos-Titulos">Order Placed:</p>
              <p class="Pedidos-Info">${ListaDeProdutos.DiaDaCompra}</p>
            </div>
            <div class="Pedid">
              <p class="Pedidos-Titulos">Total:</p>
              <p class="Pedidos-Info">$${ListaDeProdutos.PreçoFinal}</p>
            </div>
          </div>
          <div class="right-Order">
            <p class="Pedidos-Titulos">Order ID:</p>
            <p class="Pedidos-Info">
              ${ListaDeProdutos.IdOrder}
            </p>
          </div>
        </nav>
        <section class="Produtos-Comprados-Grid">
        ${ProdutosComprados(ListaDeProdutos.Produtos)}
        </section>
  </div>`
  OrderHTML.innerHTML += HTML
})

function ProdutosComprados(Produtos){
  let ListaDeProdutos = ''
  console.log(Produtos)
  Produtos.forEach(Produto => {

    const Today = dayjs()
    const Dia = ProcurarOpcao(Produto.DeliveryID)
    const Atual = Today.add(Dia.DeliveryDays, 'Days')
    const DiaCompra = Atual.format('MMMM D')
    const Qual = ProcurarProdutos(Produto.id)

    let HTML = `<div class="Produtos-Comprados" data-produto-id='${Produto.id}'>
            <div class="Foto-Produtos">
              <img src="./Style/Imagens/Produtos/${Qual.img}" alt="">
            </div>
            <div class="Conjunto-Produtos">
              <p class="Pedidos-Titulos Titulo">${Qual.Nome}</p>
              <p class="Entrega">Arriving on: ${DiaCompra}</p>
              <p class="Quantidade">Quantity: ${Produto.Quantidade}</p>
              <button class="ComprarNovamente-Produtos Infos Botoes-Menores">
                <img src="./Style/Imagens/Icones/buy-again.png" alt="">
                <p>Buy it again</p>
              </button>
            </div>
            <div class="Procurar-Produto">
              <button class="Botao-Tracking Botoes-Menores">Track package</button>
            </div>
          </div>`
    ListaDeProdutos += HTML
  })
  return ListaDeProdutos
}

const BuyAgain = document.querySelectorAll('.ComprarNovamente-Produtos')

BuyAgain.forEach(buttonBuy => {
  buttonBuy.addEventListener('click', () => {
    let Div = event.target.closest('.Produtos-Comprados')
    let Escolhido = Div.dataset.produtoId
    Car.AddCart(Escolhido, 1)
    AtualizarHTMLCar()
  })
});

const TrackItem = document.querySelectorAll('.Botao-Tracking')

TrackItem.forEach(buttonTrack => {
  buttonTrack.addEventListener('click', () => {
    let Div = event.target.closest('.Produtos-Comprados')
    let Order = event.target.closest('.Orders-Produtos')
    let Escolhido = Div.dataset.produtoId
    let IdOrder = Order.dataset.idPedido
    window.location.href = `Track.html?orderid=${IdOrder}&produtoid=${Escolhido}`
  })
})