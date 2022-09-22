import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "src/app/models/product";
import { ProductService } from "src/app/services/product.service";

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  pageTitle: string = 'Product List';
  imageWidth: number = 100;
  imageMargin: number = 2;
  showImage: boolean = true;
  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];
  errorMessage: any;
  sub!: Subscription;

  constructor(
    private productService: ProductService
  ) { }

  // listFilter: string = 'cart';
  private _listFilter: string = '';

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy));
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: products => {
        this.products = products
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
}