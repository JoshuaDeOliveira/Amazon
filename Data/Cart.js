import {car, deleteCart} from "./Info/Car.js";
import {UpdateCar} from "./Utils/Mostrar.js";
import {Produtos} from "./Info/Data.js";
import {Fixed} from "./Utils/Fixed.js";


let Lista = document.querySelector('.Produtos-Lista')
let AttItems = document.querySelector('.js-numbers-items')
let HTMLProdutos;

addEventListener('DOMContentLoaded', () => {
  UpdateCar(AttItems)
  MensagemVazia()
})

car.forEach(itemCar => {
  Produtos.forEach(itemProdutos => {
    if (itemCar.id === itemProdutos.id) {
      HTMLProdutos = `
      <div class="Produtos-Comprados" data-car-id='${itemProdutos.id}'>
      <p class="Delivery">Delivery date: Monday, May 12</p>
      <div class="Info-Produtos">
        <div class="Img-Produto">
          <img src="./Style/Imagens/Produtos/${itemProdutos.img}" alt="">
        </div>
        <div class="Qual-Produto">
          <p class="Infos">${itemProdutos.Nome}</p>
          <p class="Infos Preco">$${Fixed(itemProdutos.Preco)}</p>
          <div class="Info-Preco">
            <p class="Quantidade-Itens">Quantity:</p>
            <span class="Quantos-Produtos">${itemCar.Quantidade}</span>
            <input type="number" value="${itemCar.Quantidade}" class="Update-Numeros">
            <span class="Atualizar-js Update-js">Update</span>
            <span class="Atualizar-js Delete-js" data-produto-id="${itemProdutos.id}">Delete</span>
          </div>
        </div>
        <div class="Delivery-Option">
          <p class="Choose">Choose a delivery option</p>
          <div class="Data-Entrega">
            <input class="Check" type="radio" name="option-${itemProdutos.id}" id="Tax">
            <label for="Tax" class="Data">
              <p class="Datas">Tuesday, May 20</p>
              <p class="Taxas">FREE Shipping</p>
            </label>
          </div>
          <div class="Data-Entrega">
            <input class="Check" type="radio" name="option-${itemProdutos.id}" id="Tax-Barato">
            <label for="Tax-Barato" class="Data">
              <p class="Datas">Tuesday, May 20</p>
              <p class="Taxas">$4.99 - Shipping</p>
            </label>
          </div>
          <div class="Data-Entrega">
            <input class="Check" type="radio" name="option-${itemProdutos.id}" id="Tax-Caro">
            <label for="Tax-Caro" class="Data">
              <p class="Datas">Tuesday, May 20</p>
              <p class="Taxas">$9.99 - Shipping</p>
            </label>
          </div>
        </div>
      </div>`
      Lista.innerHTML += HTMLProdutos
    }
  })
})

let BotaoDelete = document.querySelectorAll('.Delete-js')

BotaoDelete.forEach(buttonDelete => {
  buttonDelete.addEventListener("click", () => {
    let ID = buttonDelete.dataset.produtoId
    let Apagar = document.querySelector(`[data-car-id="${ID}"]`)
    deleteCart(ID)
    Apagar.remove()
    UpdateCar(AttItems)
    MensagemVazia()
})
})

let BotaoUpdate = document.querySelectorAll('.Update-js')

BotaoUpdate.forEach(buttonUp => {
  buttonUp.addEventListener('click', () => {
    console.log
  })
})

function MensagemVazia(){
  if (car.length === 0) {
    Lista.innerHTML = `<div class="Mensagem-Vazia">
    <p>Your cart is empty</p>
    <a href="./home.html"><button class="View-Products">View products</button></a>
  </div>`
  }
}