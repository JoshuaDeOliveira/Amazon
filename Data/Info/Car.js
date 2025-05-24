import {Fixed} from '../Utils/Fixed.js';

class CarData {
  car;
  #Key;

  constructor(LocalKey){
    this.#Key = LocalKey
    this.Carrinho = JSON.parse(localStorage.getItem(this.#Key)) || [];
  }
  AddCart(ID) {  //Atualiza os itens dentro do carinho
    let ControlerItem;
    let QuantiSeletor = Number(document.querySelector(`.js-${ID}`).value);
    this.Carrinho.forEach(item => {
      if (ID === item.id) {
        ControlerItem = item;
      }
    });
    if (ControlerItem) {
      ControlerItem.Quantidade += QuantiSeletor
    } else {
      this.Carrinho.push({id: ID, Quantidade: QuantiSeletor, DeliveryID: '1'})
    }
    this.SaveCar()}
  SaveCar(){localStorage.setItem(this.#Key, JSON.stringify(this.Carrinho))}
  deleteCart(ID){ //Deleta os itens dentro do carrinho
    let carUpdate = []
    this.Carrinho.forEach(Caritem => {  
    if (ID !== Caritem.id)
      carUpdate.push(Caritem)
    })
    this.Carrinho = carUpdate
    this.SaveCar()}
  UpdateDeliveryID(IDProduto, OpcaoDelivery){
    let ProdutoAtual;
    this.Carrinho.forEach(Produto => {
    if (IDProduto === Produto.id ) {
      ProdutoAtual = Produto
    }
    })
    ProdutoAtual.DeliveryID = OpcaoDelivery
    this.SaveCar()}
  CorrigirPreço(Preço){
    return Fixed(Preço)
  }
}

export const Car = new CarData('Car')



