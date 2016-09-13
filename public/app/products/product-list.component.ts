import { Component, OnInit } from '@angular/core';

import { Product } from './product';
import { ProductService } from './product.service';

import { Observable } from 'rxjs/observable';

@Component({
    templateUrl: 'app/products/product-list.html'
})
export class ProductListComponent implements OnInit {

    products: Product[];
    errorMessage: string;

    constructor(private productService: ProductService) {}

    ngOnInit() { this.getProducts(); }

    private getProducts() {
        this.productService.getProducts()
                            .subscribe(
                                products => this.products = products,
                                error => this.errorMessage = <any>error
                            );
    }
}