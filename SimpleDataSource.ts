import { Product } from "./product";

export class SimpleDataSource {
    private products: Array<Product>
    
    constructor (){
        this.products = new Array<Product>(
            new Product(1, "MacBook Pro 13 inch","Bilgisayar", 28000),
            new Product(2, "Iphone 12","Telefon", 12000),
            new Product(3, "Fotokopi Kağıdı","Kırtasiye", 60),
            new Product(4, "Acer Tablet Bilgisayar","Bilgisayar", 12300),
            new Product(5, "Samsung Note 11","Telefon", 18400),
            new Product(6, "Masaüstü Panik Butonu","Oyuncak", 24),
            new Product(7, "Dezenfektan for Covid","Temizlik", 12),
            new Product(8, "Masa Lambası","Aksesuar", 85),
            new Product(9, "Ofis Çöp Kovası","Aksesuar", 45)
        );
    }

    getProducts(): Product[] {
        return this.products;
    }

}

//let p = new SimpleDataSource();