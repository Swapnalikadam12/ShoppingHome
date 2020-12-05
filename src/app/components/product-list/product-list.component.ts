import { Component, OnInit } from '@angular/core'; 
import { ProductListService } from '../../services/productlist';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productdetails: any=[];
  constructor(private productservice:ProductListService) { }

  ngOnInit(): void {

    this.fetchProduct();
  }

  fetchProduct(){
    this. productdetails=this.productservice.getProduct().subscribe((data)=>
    {this. productdetails=data;console.log(data)})
    console.log(this. productdetails);
  }

}
