export let car = JSON.parse(localStorage.getItem('Car')) || []

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
    SaveCar()
}

function SaveCar(){
  localStorage.setItem('Car', JSON.stringify(car))
}

export function deleteCart(ID){
  let carUpdate = []
  car.forEach(Caritem => {  
    if (ID !== Caritem.id)
      carUpdate.push(Caritem)
  })
  car = carUpdate
  SaveCar()
}