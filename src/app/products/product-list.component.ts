import { Component } from "@angular/core";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent {
    pageTitle: string = 'Product List';
    imageWidth: number = 100;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = 'cart';
    products: any[] = [
        {
            "productId": 2,
            "productName": "Combo  Marsh Mallows",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2021",
            "description": "Acme Products",
            "price": 32.99,
            "startRating": 4.2,
            "imageUrl": "https://m.media-amazon.com/images/I/41rBSsxxIwL.jpg"
        },
        {
            "productId": 3,
            "productName": "Strawberry Marsh Mallows",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2021",
            "description": "Acme Products",
            "price": 50.23,
            "startRating": 3.8,
            "imageUrl": "https://5.imimg.com/data5/SELLER/Default/2020/11/NU/WU/DA/8735450/81qqdq8ksgl-sl1500--250x250.jpg"
        },
    ]

    toggleImage() {
        this.showImage = !this.showImage;
    }
}