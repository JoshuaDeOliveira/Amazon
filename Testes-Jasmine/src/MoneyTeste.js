import {Fixed} from "../../Data/Utils/Fixed.js";

describe('teste suite: FormatCurrency', () => {
  it('Converter Centavos em Reais', () => {
    expect(Fixed(2095)).toEqual('20.95')
  });
  it('Arredondar Numero', () => {
    expect(Fixed(2000.5)).toEqual('20.01')
  })
  it('Comportamento com o 0', () => {
    expect(Fixed(0)).toEqual('0.00')
  })
})
