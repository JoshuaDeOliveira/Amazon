import {Fixed} from '../Utils/Fixed.js';

export function ProcurarProdutos(ProdutoID){
  let ProdutoSelecionado;
  
  Produtos.forEach(Selecionado => {
    if (Selecionado.id === ProdutoID) {
      ProdutoSelecionado = Selecionado
    }
  })

  return ProdutoSelecionado
}

class Catalogo{
  id;
  Nome;
  img;
  Avaliacao;
  Nota;
  Preco;

  constructor(DetalhesProduto){
    this.id = DetalhesProduto.id
    this.Nome = DetalhesProduto.Nome 
    this.img = DetalhesProduto.img
    this.Avaliacao = DetalhesProduto.Avaliacao
    this.Nota = DetalhesProduto.Nota
    this.Preco = DetalhesProduto.Preco
  }

  FormatarPreço(){
    return `$${Fixed(this.Preco)}`
  }
}

export const Produtos = [{
  id:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  Nome: 'Intermediate Size Basketball',
  img: 'intermediate-composite-basketball.jpg',
  Avaliacao: 40,
  Nota: 127,
  Preco: 2095
}, {
  id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
  Nome: 'Adults Plain Cotton T-Shirt - 2 Pack',
  img: 'adults-plain-cotton-tshirt-2-pack-teal.jpg',
  Avaliacao: 45,
  Nota: 56,
  Preco: 799
}, {
  id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
  Nome: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
  img: 'athletic-cotton-socks-6-pairs.jpg',
  Avaliacao: 45,
  Nota: 87,
  Preco: 1099
}, {
  id: '8323fa15-0j35-90f5-76a3-1eabksu34f2e',
  Nome: '2 Slot Toaster - Black',
  img: 'black-2-slot-toaster.jpg',
  Avaliacao: 50,
  Nota: 2197,
  Preco: 1899
}, {
  id: "54e0eccd-8f36-462b-b68a-8182611d9add",
  Nome: "6 Piece White Dinner Plate Set",
  img: '6-piece-white-dinner-plate-set.jpg',
  Avaliacao: 40,
  Nota: 37,
  Preco: 2067
}, {
  id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
  Nome: '6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set',
  img: '6-piece-non-stick-baking-set.webp',
  Avaliacao: 45,
  Nota: 175,
  Preco: 3499
},{
  id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
  Nome: 'Plain Hooded Fleece Sweatshirt', 
  img: 'plain-hooded-fleece-sweatshirt-yellow.jpg',
  Avaliacao: 50,
  Nota: 317,
  Preco: 2400
}, {
  id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
  Nome:'Luxury Towel Set - Graphite Gray',
  img: 'luxury-tower-set-6-piece.jpg',
  Avaliacao: 45,
  Nota: 144,
  Preco: 3599
}, {
  id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
  Nome: 'Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz',
  img: 'liquid-laundry-detergent-plain.jpg',
  Avaliacao: 45,
  Nota: 305,
  Preco: 2899
}, {
  id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
  Nome: 'Waterproof Knit Athletic Sneakers - Gray',
  img: 'knit-athletic-sneakers-gray.jpg',
  Avaliacao: 40,
  Nota: 89,
  Preco: 3399
}, {
  id: "5968897c-4d27-4872-89f6-5bcb052746d7",
  Nome: "'Women's Chiffon Beachwear Cover Up - Black'",
  img: 'women-chiffon-beachwear-coverup-black.jpg',
  Avaliacao: 45,
  Nota: 235,
  Preco: 2070
},{
  id: "aad29d11-ea98-41ee-9285-b916638cac4a",
  Nome: "Round Sunglasses",
  img: 'round-sunglasses-black.jpg',
  Avaliacao: 45,
  Nota: 30,
  Preco: 1560
}, {
  id: "04701903-bc79-49c6-bc11-1af7e3651358",
  Nome: "'Women's Two Strap Buckle Sandals - Tan",
  img: 'women-beach-sandals.jpg',
  Avaliacao: 45,
  Nota: 562,
  Preco: 2499
}, {
  id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
  Nome: "Blackout Curtains Set 4-Pack - Beige",
  img: 'blackout-curtain-set-beige.webp',
  Avaliacao: 45,
  Nota: 232,
  Preco: 4599
}, {
  id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
  Nome: "'Men's Slim-Fit Summer Shorts'",
  img: 'men-slim-fit-summer-shorts-gray.jpg',
  Avaliacao: 40,
  Nota: 160,
  Preco: 1699
}, {
  id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
  Nome: 'Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter',
  img: 'electric-glass-and-steel-hot-water-kettle.webp',
  Avaliacao: 50,
  Nota: 846,
  Preco: 3074
},{
  id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
  Nome: 'Ultra Soft Tissue 2-Ply - 18 Box',
  img: 'facial-tissue-2-ply-18-boxes.jpg',
  Avaliacao: 40,
  Nota: 99,
  Preco: 2374
}, {
  id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
  Nome: 'Straw Lifeguard Sun Hat',
  img: 'straw-sunhat.webp',
  Avaliacao: 40,
  Nota: 215, 
  Preco: 2200
}].map(DetalhesProduto => {
  return new Catalogo(DetalhesProduto)
})
