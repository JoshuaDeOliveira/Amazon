export const car = []

export function AddCart(ID){  //Atualiza os itens dentro do carinho
    let ControlerItem;
    let QuantiSeletor = Number(document.querySelector(`.js-${ID}`).value);
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
    console.log(car)
}