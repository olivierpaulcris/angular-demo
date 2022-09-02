import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IProduct } from "../models/product";

@Injectable({
    providedIn: 'root',
})
export class ProductService {

    private productUrl = 'www.myWebService.com/api/products';

    constructor(
        private http: HttpClient
    ) { }

    getProducts(): IProduct[] {
        return [
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
    }

    // getProducts(): Observable<IProduct[]> {
    //     return this.http.get<IProduct[]>(this.productUrl);
    // }
}