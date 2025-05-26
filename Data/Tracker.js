import {ProcurarProdutos} from "./Info/Data.js";
import {Purchased} from './Info/Pedidos.js'
import {ProcurarOpcao} from "./Info/Delivery.js";
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js'

addEventListener('DOMContentLoaded', () => {
  RunHTML()
})

let Tracker = document.querySelector('main')
let IdDelivery;
let Quantidade;

function RunHTML(){
  const buscar = new URLSearchParams(window.location.search)
  const OrderId = buscar.get("orderid")
  const ProdutoId = buscar.get("produtoid")

  const ProdutoComprado = ProcurarProdutos(ProdutoId)
  const OrdemSolicitada = Purchased.ProcurarOrder(OrderId)
  OrdemSolicitada.Produtos.forEach(Order => {
    if (Order.id === ProdutoId){
      IdDelivery = Order.DeliveryID
      Quantidade = Order.Quantidade
    }
  });

  const Today = dayjs()
  const Dia = ProcurarOpcao(IdDelivery)
  const Atual = Today.add(Dia.DeliveryDays, 'Days')
  const DiaCompra = Atual.format('MMMM D')

  const HTML = `
  <div class="View-All">
      <a href="./Orders.html" class="View">View all orders</a>
    </div>
    <div class="Info-track">
      <h1 class="Entregue-Produto">Arriving on: ${DiaCompra}</h1>
      <p>${ProdutoComprado.Nome}</p>
      <p>Quantity: ${Quantidade}</p>
    </div>
    <div class="Img-Produto">
      <img src="./Style/Imagens/Produtos/${ProdutoComprado.img}" alt="">
    </div>
    <div class="Foi-Entregue">
      <p class='progress-label'>Preparing</p>
      <p class='progress-label'>Shipped</p>
      <p class='progress-label'>Delivered</p>
    </div>
    <div class="Progress-Bar">
      <div class='Conclusão'></div>
    </div>`
    Tracker.innerHTML = HTML
}

let Comparar = 6

const Progress = setInterval(() => {
  const Bar = document.querySelector('.Conclusão')
  if (Comparar > 0 && Comparar < 50) {
    console.log("Esta funcionando")
  } else if (Comparar >= 50 && Comparar < 75) {
    console.log('Opa, saiu para entrega')
  } else {
    console.log('Entregue')
  }
  if (Comparar === 100) {
    clearInterval(Progress)
  } else {
    Comparar += 1
    Bar.style.width = Comparar + '%'
  }
}, 240000);