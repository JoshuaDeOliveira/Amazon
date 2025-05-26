import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js'

class Orders{
  Pedidos;
  #Key;

  constructor(LocalKey){
    this.#Key = LocalKey
    this.Pedidos = JSON.parse(localStorage.getItem(this.#Key)) || []
  }

  AddOrder(Total, ListaDeItems){
    let id = (typeof crypto.randomUUID === 'function') 
    ? crypto.randomUUID() 
    : gerarUUID();
    const Today = dayjs()
    const Dia = Today.format('MMMM DD')
    this.Pedidos.push({IdOrder: id, DiaDaCompra: Dia, PreçoFinal: Total, Produtos: ListaDeItems})
  }

  CarrinhoVazio(){
    alert('Insira algo no carrinho')
  }

  SaveOrder(){
    localStorage.setItem(this.#Key, JSON.stringify(this.Pedidos))
  }

  ProcurarOrder(OrderID){
    let Matchim;

    this.Pedidos.forEach(Order => {
      if (Order.IdOrder === OrderID) {
        Matchim = Order
      }
    })
    
    return Matchim
  }
}

function gerarUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}


export const Purchased = new Orders('Cart')