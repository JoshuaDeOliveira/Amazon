import {AddCart, car} from "../../Data/Info/Car.js";

describe('test suite: Add Cart', () => {
  it('Adds a new product to te cart', () => {
    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([]);
    });
    console.log(localStorage.getItem('car'))
    expect(car.length).toEqual(17)
  })
})