import { Shoe } from "./shoe";

describe('Shoe', () => {
  it('should create an instance', () => {
    expect(new Shoe()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let shoe = new Shoe({ name: 'Stan Smith', brandId: 1 });
    //noinspection TypeScriptUnresolvedFunction
    expect(shoe.brandId).toEqual(1);
    expect(shoe.name).toEqual('Stan Smith');
  })
});
