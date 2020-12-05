import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import {TopbarComponent} from "./components/topbar/topbar.component";
import {CartService} from "./services/cart.service";
import {CartPopupComponent} from "./pages/cart/cart-popup/cart-popup.component";
import {ProductService} from "./services/products.service";
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminComponent } from './components/admin/admin.component';
import { RetailerloginComponent } from './components/retailerlogin/retailerlogin.component';
import { RegisterretailerComponent } from './components/registerretailer/registerretailer.component';
import { RetailerprofileComponent } from './components/retailerprofile/retailerprofile.component';
import { HttpClientModule,HttpClient } from '@angular/common/http';

import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';

import { AddproductdetailsComponent } from './components/addproductdetails/addproductdetails.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductListService } from './services/productlist';
import { HomeComponent } from './components/home/home.component';







@NgModule({
    declarations: [
        AppComponent,
        TopbarComponent,
        CartPopupComponent,
        LoginComponent,
        ForgotpasswordComponent,
        RegisterComponent,
        AdminComponent,
        RetailerloginComponent,
        RegisterretailerComponent,
        RetailerprofileComponent,
     
       
        AdminloginComponent,
       
        ChangepasswordComponent,
       
        AddproductdetailsComponent,
       
        ProductListComponent,
       
        HomeComponent,
       
     
       
       
       
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule ,
        HttpClientModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [CartService,ProductService,ProductListService],
    bootstrap: [AppComponent]
})
export class AppModule { }
