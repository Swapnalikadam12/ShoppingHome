import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";

@Component({
    selector: 'top-bar',
    styleUrls: ['./top-bar.component.css'],
    template: `    
    <div class="main-header navbar-fixed-top">
        <div class="header-menu">
            <div class="header-mobile-nav-wrapper">
                <button type="button" class="navbar-toggle" (click)="collapse = !collapse">
                    <span class="fa fa-bars fa-2x"></span>
                </button>
            </div>
            <div class="header-logo-wrapper">
                <img class="header-logo-image" src="./assets/imgs/lti.jpg" alt="Hero" width="80" height="68">
            </div>
            <div class="header-nav-wrapper">
                <ul class="header-nav">
                <li class="header-nav-item">
                    <div class="dropdown">
                    <button class="dropbtn">LOGIN</button>
                    <div class="dropdown-content">
                    <a href="/adminlogin">ADMIN</a>
                    <a href="/retailerlogin">RETAILER</a>
                    <a href="/login">USER</a>
                    </div>
                  </div>
                </li>
                    <li class="header-nav-item">
                        <a href="home">HOME</a>
                    </li>
                    <li class="header-nav-item">
                    <div class="dropdown">
                    <button class="dropbtn">CATEGORIES</button>
                    <div class="dropdown-content">
                    <a href="/login">Mobile</a>
                    <a href="#">Shoes</a>
                    <a href="#">Clothes</a>
                    </div>
                  </div>
                </li>
                    <li class="header-nav-item">
                        <a routerLink="/">FILTER</a>
                    </li>
                   
                    <li class="header-nav-item">
                        <a routerLink="/">COMPARE</a>
                    </li>
                   
                    <li class="header-nav-item">
                    <div class="searchBox">

            <input class="searchInput"type="text" name="" placeholder="Search">
            <button class="searchButton" href="#">
                <i class="material-icons">
                    search
                </i>
            </button>
        </div>
        </li>
                    
                    
                </ul>
            </div>
            <div class="header-cart-wrapper">
                <div class="header-cart" (click)="toggleCartPopup($event)">
                    <div class="mobil-shopping-cart">
                        <span><i class="fa fa-shopping-cart fa-2x"></i> <span *ngIf="cart_num">( {{cart_num}} )</span></span>
                    </div>
                    <div class="header-cart-item">
                        <a href="">MY CART <span *ngIf="cart_num">( {{cart_num}} )</span><span class="fa fa-caret-down"></span></a>
                    </div>
                </div>
           
            </div>
        </div>
        <ul class="mobile-header-nav" *ngIf="collapse" (click)="collapse = !collapse">
            <li>
                <a routerLink="/">HOME</a>
            </li>
            <li>
                <a routerLink="/">SHOP</a>
            </li>
            <li>
                <a routerLink="/">JOURNAL</a>
            </li>
            <li>
                <a routerLink="/">MORE</a>
            </li>
        </ul>
        <cart-popup></cart-popup>
    </div>
`
})
export class TopbarComponent implements OnInit {
    public collapse: boolean = false;
    public cart_num:number;
    constructor(
        private cartService: CartService
    ) { }

    ngOnInit() {
        this.cartService.cartListSubject
            .subscribe(res => {
                this.cart_num = res.length;
            })
    }
    toggleCartPopup = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.cartService.toggleCart()
    }

    toggleWishlistPopup = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.cartService.toggleCart()
    }

   
}