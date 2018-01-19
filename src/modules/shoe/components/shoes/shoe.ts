export class Shoe {
  id: number;
  name: string = '';
  brandId: number;
  colors: Object[];
  price: number;
  reference: string = '';


  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
