import {Car} from "../Info/Car.js";

const HeaderCarrinho = document.querySelector('.Quanto')

export function AtualizarHTMLCar(){
  UpdateCar(HeaderCarrinho)
}

export function UpdateCar(UpdateHtml){ //Atualiza o Numero de Itens no carrinho
  let CarQuantidade = 0
  Car.Carrinho.forEach(item => {
    CarQuantidade += item.Quantidade
  })
  UpdateHtml.innerHTML = CarQuantidade
}