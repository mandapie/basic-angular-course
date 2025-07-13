import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { ProductService } from '../product.service';

import { MatSnackBar } from '@angular/material/snack-bar';

import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  sortOrder: string = "";

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      this.filteredProducts = data;
    });
  }

  addToCart(product: Product) : void {
    this.cartService.addToCard(product).subscribe({
      next: () => {
        this.snackbar.open(product.name + " added to cart", "", {
          duration: 2000,
          horizontalPosition: "right",
          verticalPosition: "top"
        });
      }
    });
  }

  applyFilter(event: Event): void {
    let searchTerm = (event.target as HTMLInputElement).value;
    searchTerm = searchTerm.toLowerCase();

    this.filteredProducts = this.products.filter(product => product.name.toLowerCase().includes(searchTerm));

    this.sortProducts(this.sortOrder);
  }

  sortProducts(sortValue: string): void {
    this.sortOrder = sortValue;

    if (this.sortOrder === 'priceLowHigh') {
      this.filteredProducts.sort((a,b) => a.price - b.price);
    }
    else if (this.sortOrder === 'priceHighLow') {
      this.filteredProducts.sort((a,b) => b.price - a.price);
    }
  }
}
