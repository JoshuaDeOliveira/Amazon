console.log('Olha so quem esta aqui.')

const Produtos = [{
  Nome: 'Intermediate Size Basketball',
  img: 'intermediate-composite-basketball.jpg',
  Avaliacao: 40,
  Nota: 127,
  Preco: 20.95
}, {
  Nome: 'Adults Plain Cotton T-Shirt - 2 Pack',
  img: 'adults-plain-cotton-tshirt-2-pack-teal.jpg',
  Avaliacao: 45,
  Nota: 56,
  Preco: 7.99
}, {
  Nome: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
  img: 'athletic-cotton-socks-6-pairs.jpg',
  Avaliacao: 45,
  Nota: 87,
  Preco: 10.99
}, {
  Nome: '2 Slot Toaster - Black',
  img: 'black-2-slot-toaster.jpg',
  Avaliacao: 50,
  Nota: 2197,
  Preco: 18.99
}, {
  Nome: "6 Piece White Dinner Plate Set",
  img: '6-piece-white-dinner-plate-set.jpg',
  Avaliacao: 40,
  Nota: 37,
  Preco: 20.67
}, {
  Nome: '6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set',
  img: '6-piece-non-stick-baking-set.webp',
  Avaliacao: 45,
  Nota: 175,
  Preco: 34.99
},]

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
          <p>$${produto.Preco}</p>
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
          <button class="Botão-Compra">Add to cart</button>
        </div>
      </div>`
  let Catalogo = document.querySelector('.Catalogo-Produtos-js')
  Catalogo.innerHTML += HTML
});

const Documento = {
  InfoCompra: {
    QuantidadeCar: 0
  },
  Exibição: {
    ProdutosComprados: document.querySelector('.Quanto'),
    BotaoComprar: document.querySelector('.Botão-Compra'),
    AddMsg: document.querySelector('.Adicionado') 
  },
}

Documento.Exibição.BotaoComprar.addEventListener('click', () => {
  Documento.Exibição.AddMsg.style.display = 'inline-block'
  setInterval(() => {
    Documento.Exibição.AddMsg.style.display = 'none'
  }, 4000);

  Documento.InfoCompra.QuantidadeCar += 1
  Documento.Exibição.ProdutosComprados.innerHTML = Documento.InfoCompra.QuantidadeCar
})