import {car} from "../Info/Car.js";

export function UpdateCar(UpdateHtml){ //Atualiza o Numero de Itens no carrinho
  let CarQuantidade = 0
  car.forEach(item => {
    CarQuantidade += item.Quantidade
  })
  UpdateHtml.innerHTML = CarQuantidade
}