export class Shoe {
  id: number;
  name: string = '';
  brandId: number;


  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
