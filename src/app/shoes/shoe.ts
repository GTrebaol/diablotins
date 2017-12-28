export class Shoe {
  id: number;
  name: string = '';
  brandId: number;
  colors: Object[];


  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
