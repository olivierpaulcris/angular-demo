import { Component, OnInit } from "@angular/core";
import { IProduct } from "../models/product";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 100;
    imageMargin: number = 2;
    showImage: boolean = true;

    // listFilter: string = 'cart';
    private _listFilter: string = '';
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        console.log('In setter:', this._listFilter)
        this.filteredProducts = this.performFilter(value);
    }

    filteredProducts: IProduct[] = [];
    products: IProduct[] = [
        {
            "productId": 2,
            "productName": "Combo  Marsh Mallows",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2021",
            "description": "Acme Products",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "https://m.media-amazon.com/images/I/41rBSsxxIwL.jpg"
        },
        {
            "productId": 3,
            "productName": "Strawberry Marsh Mallows",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2021",
            "description": "Acme Products",
            "price": 50.23,
            "starRating": 2.1,
            "imageUrl": "https://5.imimg.com/data5/SELLER/Default/2020/11/NU/WU/DA/8735450/81qqdq8ksgl-sl1500--250x250.jpg"
        },
    ];

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().includes(filterBy));
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.filteredProducts = this.products;
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}