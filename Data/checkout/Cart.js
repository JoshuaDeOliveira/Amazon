import {Car} from "../Info/Car.js";
import {UpdateCar} from "../Utils/Mostrar.js";
import {Produtos} from "../Info/Data.js";
import {ProcurarOpcao, DeliveryOption} from "../Info/Delivery.js";
import {RunPayHTML} from "../checkout/Payment.js";
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js"

let Lista = document.querySelector('.Produtos-Lista')
export let AttItems = document.querySelector('.js-numbers-items')
let HTMLProdutos;

export function MensagemVazia(){
  if (Car.Carrinho.length === 0) {
    Lista.innerHTML = `<div class="Mensagem-Vazia">
    <p>Your cart is empty</p>
    <a href="./home.html"><button class="View-Products">View products</button></a>
  </div>`
  }
}

export function RunHTML(){
   UpdateCar(AttItems) //Mostra o Header da Pagina
   MensagemVazia() //Caso não tenha itens no interior do carrinho mostra uma mensagem.

  Car.Carrinho.forEach(itemCar => {
    Produtos.forEach(itemProdutos => {
      if (itemCar.id === itemProdutos.id) {
        let DiaDoPedido = itemCar.DeliveryID
        let OpçãoDelivery = ProcurarOpcao(DiaDoPedido)
        const Today = dayjs()
        const Atual = Today.add(OpçãoDelivery.DeliveryDays, 'Days')
        let DiaTax = Atual.format('dddd, MMMM D')
        

        HTMLProdutos = `
        <div class="Produtos-Comprados" data-car-id='${itemProdutos.id}'>
        <p class="Delivery">Delivery date:<span class='Data-entrega'> ${DiaTax}</span></p>
        <div class="Info-Produtos">
          <div class="Img-Produto">
            <img src="./Style/Imagens/Produtos/${itemProdutos.img}" alt="">
          </div>
          <div class="Qual-Produto">
            <p class="Infos">${itemProdutos.Nome}</p>
            <p class="Infos Preco">$${Car.CorrigirPreço(itemProdutos.Preco)}</p>
            <div class="Info-Preco" data->
              <p class="Quantidade-Itens">Quantity:</p>
              <span class="Quantos-Produtos-js Suma-js">${itemCar.Quantidade}</span>
              <input type="number" value="${itemCar.Quantidade}" class="Update-Numeros Apareca-js">
              <span class="Update-js Atualizar-js Suma-js">Update</span>
              <span class="Salvar-js Atualizar-js Apareca-js" data-update-id="${itemProdutos.id}">Salve</span>
              <span class="Atualizar-js Delete-js" data-produto-id="${itemProdutos.id}">Delete</span>
            </div>
          </div>
          <div class="Delivery-Option">
            <p class="Choose">Choose a delivery option</p>
            ${DeliveryHTML(itemCar)}
          </div>
        </div>`
        Lista.innerHTML += HTMLProdutos
      }
    })
  })


  function DeliveryHTML(cartItem){
    let DeliHTML = ''
    DeliveryOption.forEach(Delivery => {
      const Today = dayjs()
      const DeliveryDay = Today.add(
        Delivery.DeliveryDays,
        'days'
      )
      const dateString = DeliveryDay.format('dddd, MMMM D')
      const priceString = Delivery.Preco === 0 ? 'FREE' : `$${Car.CorrigirPreço(Delivery.Preco)}` 
      const isChecked = Delivery.id === cartItem.DeliveryID

      DeliHTML += `
      <div class="Data-Entrega Data-Entrega-js" data-Entrega='${cartItem.id}' data-produto-id='${Delivery.id}'>
        <input ${isChecked ? 'checked' : ''} class="Check" type="radio" name='Tax-${cartItem.id}' id="Tax">
          <div class='Data'>
            <p class="Datas">${dateString}</p>
            <p class="Taxas">${priceString} - Shipping</p>
          </div>
      </div>`

    })
    return DeliHTML
  }

  let BotaoDelete = document.querySelectorAll('.Delete-js')

  BotaoDelete.forEach(buttonDelete => {
    buttonDelete.addEventListener("click", () => {
      let ID = buttonDelete.dataset.produtoId
      let Apagar = document.querySelector(`[data-car-id="${ID}"]`)
      Car.deleteCart(ID)
      Apagar.remove()
      UpdateCar(AttItems)
      MensagemVazia()
      RunPayHTML()
  })
  })

  let BotaoUpdate = document.querySelectorAll('.Update-js')

  BotaoUpdate.forEach(buttonUp => {
    buttonUp.addEventListener('click', () => {
      TrocarQuantidade()
    })
  })

  let BotaoSave = document.querySelectorAll('.Salvar-js')

  BotaoSave.forEach(buttonSave => {
    buttonSave.addEventListener('click', () => {
      let UpdateID = buttonSave.dataset.updateId
      TrocarQuantidade()
      SalvarUpdate(event, UpdateID)
      RunPayHTML()
    })
  })

  function TrocarQuantidade(){
    let QuantityDiv = event.target.closest('.Info-Preco') /*Div de Quantidade*/
    if (QuantityDiv.classList.contains('Qualidade-js')) {
      QuantityDiv.classList.remove('Qualidade-js')
    } else {
      QuantityDiv.classList.add('Qualidade-js')
    }
  }


  function SalvarUpdate(event, ID){
    let QuantityDiv = event.target.closest('.Info-Preco')
    let Atualizou = QuantityDiv.querySelector('.Quantos-Produtos-js')
    let ValorAtualizado = Number(QuantityDiv.querySelector('input').value);
    let ProdutoCorreto;
    Car.Carrinho.forEach(produto => {
      if (ID === produto.id){
        ProdutoCorreto = produto
      }
    })
    if (ValorAtualizado >= 1 && ValorAtualizado <= 1000 ) {
      if (ProdutoCorreto) {
        ProdutoCorreto.Quantidade = ValorAtualizado
      }
      Car.SaveCar()
      UpdateCar(AttItems)
      Atualizou.innerHTML = ValorAtualizado
    } else {
      ValorAtualizado = ProdutoCorreto.Quantidade
      alert('Insira um numero valido')
    }
  }

  let DeliverySelects = document.querySelectorAll('.Data-Entrega-js')

  DeliverySelects.forEach(OpcaoEscolhida => {
    OpcaoEscolhida.addEventListener('click', () => {
      let IDProduto = OpcaoEscolhida.dataset.entrega
      let OpcaoDelivery = OpcaoEscolhida.dataset.produtoId
      Car.UpdateDeliveryID(IDProduto, OpcaoDelivery)
      Car.SaveCar()
      Lista.innerHTML = '' /*Não deveria estar aqui, mais esta. Lide com isso :D*/
      RunHTML()
      RunPayHTML()
    })
  })
}