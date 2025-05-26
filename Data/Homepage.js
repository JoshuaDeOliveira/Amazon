import {Car} from "./Info/Car.js";
import {Produtos} from './Info/Data.js';
import {AtualizarHTMLCar} from "./Utils/Mostrar.js";

addEventListener('DOMContentLoaded', () => {
  AtualizarHTMLCar()
})


Produtos.forEach(produto => {
  let HTML = `<div class="Painel-Produtos" data-produto-id="${produto.id}">
        <div class="Imagem-Produto">
          <img src="./Style/Imagens/Produtos/${produto.img}" alt="">
        </div>
        <div class="Nome-Produto Configs-Paineis two-lines">
          <p>${produto.Nome}</p>
        </div>
        <div class="Avaliação-Produto Configs-Paineis">
          <img src="./Style/Imagens/Estrelas/rating-${produto.Avaliacao}.png" alt="">
          <p>${produto.Nota}</p>
        </div>
        <div class="Preço-Produto Configs-Paineis">
          <p>${produto.FormatarPreço()}</p>
        </div>
        <div class="Quantidade-Produto Configs-Paineis">
          <select class="Quantidades-Produtos js-${produto.id}">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div class="Adicionado-Produto Configs-Paineis">
          <p class="Adicionado css-${produto.id}">✔ Added</p>
        </div>
        <div class="Compra-Produtos">
          <button class="Botão-Compra Botão-Compra-Js" data-produto-id="${produto.id}" >Add to cart</button>
        </div>
      </div>`
  let Catalogo = document.querySelector('.Catalogo-Produtos-js')
  Catalogo.innerHTML += HTML
}); /*Geração de HTML da Homepage central*/

const Documento = {
  Elemento: {
    BotaoCompra: document.querySelectorAll('.Botão-Compra-Js'),
    QuantiProdu: document.querySelectorAll('.Quantidades-Produtos'),
  }
} /*Objeto que armazena as variaveis utilizadas na Homepage*/ 

let Tempo;

function AddMsg(ID){ //Funcionalidade de mostrar a mensagem ADD
  clearTimeout(Tempo)
  let AddMSG = document.querySelector(`.css-${ID}`)
  AddMSG.style.opacity = 1
  Tempo = setTimeout(() => {
    AddMSG.style.opacity = 0
  }, 2000);
}

Documento.Elemento.BotaoCompra.forEach(button => {
  button.addEventListener('click', () => {
    let ID = button.dataset.produtoId
    let QuantidadeComprada = Number(document.querySelector(`.js-${ID}`).value);
    Car.AddCart(ID, QuantidadeComprada)
    AtualizarHTMLCar()
    AddMsg(ID)
  })
})