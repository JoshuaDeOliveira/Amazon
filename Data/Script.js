Produtos.forEach(produto => {
  let HTML = `<div class="Painel-Produtos">
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
          <select class="Quantidades-Produtos">
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
          <p class="Adicionado">✔ Added</p>
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
    QuantiProdu: document.querySelectorAll('.Quantidades-Produtos')
  }
}

Documento.Elemento.BotaoCompra.forEach(button => {
  button.addEventListener('click', () => {
    let ControlerItem;
    let ID = button.dataset.produtoId
    car.forEach(item => {
      if (ID === item.id) {
        ControlerItem = item;
      }
    });
    if (ControlerItem) {
      ControlerItem.Quantidade += 1
    } else {
      car.push({
        id: ID,
        Quantidade: 1
      })
    }
    console.log(car)
  })
})