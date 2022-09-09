import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../models/product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public pageTitle: string = 'Product Detail';
  public product = {
    "productId": 2,
    "productName": "Combo  Marsh Mallows",
    "productCode": "GDN-0023",
    "releaseDate": "March 18, 2021",
    "description": "Acme Products",
    "price": 32.99,
    "starRating": 4.2,
    "imageUrl": "https://m.media-amazon.com/images/I/41rBSsxxIwL.jpg"
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`;
    console.log("product", this.product)
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
