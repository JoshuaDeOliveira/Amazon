import {Produtos} from "./Info/Data.js";
import {RunHomePageHTML} from "./Homepage.js";

document.querySelector('.button-Pesquisar').addEventListener('click', () => {
  let Qual = document.querySelector('.Pesquisar').value
  if (Qual === '') {
    window.location.href = 'home.html'
  } else {
    let semEspacos = Qual.toLowerCase()
    window.location.href = `home.html?search=${semEspacos}`
  }
})

export function SearchHTML(){
  let Catalogo = document.querySelector('.Catalogo-Produtos-js')
  const Busca = new URLSearchParams(window.location.search)
  const Key = Busca.get('search')
  let Achou = false

  Catalogo.innerHTML = ''

  if (Key !== null) {
    Produtos.forEach(produto => {
      if (produto.Nome.includes(Key) || produto.keyword.includes(Key)) {
        RunHomePageHTML(produto)
        Achou = true
      }
    })
    if (!Achou) {
      Catalogo.innerHTML = '<div class="Not-found">Não encontramos Produtos</div>'
    }
  } else {
    Produtos.forEach(produto => {
      RunHomePageHTML(produto)
    });
  }
}