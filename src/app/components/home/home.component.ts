import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../../services/productlist';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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

