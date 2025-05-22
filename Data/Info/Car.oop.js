const CarData = {
  car: JSON.parse(localStorage.getItem('Car-oop')) || [],
  AddCart(ID) {  //Atualiza os itens dentro do carinho
    let ControlerItem;
    let QuantiSeletor = Number(document.querySelector(`.js-${ID}`).value);
    this.car.forEach(item => {
      if (ID === item.id) {
        ControlerItem = item;
      }
    });
    if (ControlerItem) {
      ControlerItem.Quantidade += QuantiSeletor
    } else {
      this.car.push({id: ID, Quantidade: QuantiSeletor, DeliveryID: '1'})
    }
    this.SaveCar()
  },
  SaveCar(){localStorage.setItem('Car-oop', JSON.stringify(this.car))}, //Salva os itens dentro do carrinho
  deleteCart(ID){ //Deleta os itens dentro do carrinho
  let carUpdate = []
  this.car.forEach(Caritem => {  
    if (ID !== Caritem.id)
      carUpdate.push(Caritem)
  })
  this.car = carUpdate
  this.SaveCar()
  }, 
  UpdateDeliveryID(IDProduto, OpcaoDelivery){
  let ProdutoAtual;
  this.car.forEach(Produto => {
    if (IDProduto === Produto.id ) {
      ProdutoAtual = Produto
    }
  })
  ProdutoAtual.DeliveryID = OpcaoDelivery
  this.SaveCar()
  }
}