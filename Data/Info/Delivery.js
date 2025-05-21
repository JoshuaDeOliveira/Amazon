export function ProcurarOpcao(ProdutoID){
  let OpcaoSelecionada;
  
  DeliveryOption.forEach(Delivery => {
    if (ProdutoID === Delivery.id){
      OpcaoSelecionada = Delivery
    }
  })

  console.log(OpcaoSelecionada)
  return OpcaoSelecionada;
}

export let DeliveryOption = [{
  id: '1',
  DeliveryDays: 7,
  Preco: 0
},
{
  id: '2',
  DeliveryDays: 3,
  Preco: 499
},
{
  id: '3',
  DeliveryDays: 1,
  Preco: 999
}
]