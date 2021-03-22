import { Product } from "./Product";

interface IProductService {
    getByID(id:number): Product;
    getProducts():Array<Product>;
    saveProducts(product:Product): void;
    deleteProduct(product: Product): void;
}