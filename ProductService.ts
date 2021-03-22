import { IProductService } from "./IProductService";
import { Product } from "./Product";

export class ProductService implements IProductService {
    getByID(id: number): Product {
        throw new Error("Method not implemented.");
    }
    getProducts(): Product[] {
        throw new Error("Method not implemented.");
    }
    saveProducts(product: Product): void {
        throw new Error("Method not implemented.");
    }
    deleteProduct(product: Product): void {
        throw new Error("Method not implemented.");
    }
}