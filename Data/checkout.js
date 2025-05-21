import {RunPayHTML} from "./checkout/Payment.js";
import {UpdateCar} from "./Utils/Mostrar.js";
import {RunHTML, MensagemVazia, AttItems} from "./checkout/Cart.js";

addEventListener('DOMContentLoaded', () => {
  UpdateCar(AttItems)
  RunHTML()
  MensagemVazia()
  RunPayHTML()  
})

