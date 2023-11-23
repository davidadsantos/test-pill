export class ProductDto {

  constructor(
    public name: string,
    public image: string,
    public description: string,
    public price: number,
    public barcode: string,
  ) {

  }
}