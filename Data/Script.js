import {car} from './Info/Car.js';
import {Produtos} from './Info/Data.js';

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
          <p>$${produto.Preco.toFixed(2)}</p>
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
  },
  Exibição: {
    ProdutosCarrinho: document.querySelector('.Quanto')
  }
} /*Objeto que armazena Todas as variaveis utilizadas na Homepage*/ 

let Tempo;

Documento.Elemento.BotaoCompra.forEach(button => { /*Este codigo tem um funcionamento simples porem essencial para as features de quantidade de carrinho + funcionamento do botão de compra + Botao Adicionar*/
  button.addEventListener('click', () => {
    clearTimeout(Tempo)
    let ControlerItem;
    let ID = button.dataset.produtoId
    let QuantiSeletor = Number(document.querySelector(`.js-${ID}`).value);
    let AddMSG = document.querySelector(`.css-${ID}`)
    let CarQuantidade = 0
    car.forEach(item => {
      if (ID === item.id) {
        ControlerItem = item;
      }
    });
    if (ControlerItem) {
      ControlerItem.Quantidade += QuantiSeletor
    } else {
      car.push({id: ID, Quantidade: QuantiSeletor})
    }
    car.forEach(item => {
      CarQuantidade += item.Quantidade
    })
    console.log(car)

    AddMSG.style.opacity = 1
    Tempo = setTimeout(() => {
      AddMSG.style.opacity = 0
    }, 2000);

    Documento.Exibição.ProdutosCarrinho.innerHTML = CarQuantidade
  })
})