
import { AddproductdetailsComponent } from "./components/addproductdetails/addproductdetails.component";
import { AdminComponent } from "./components/admin/admin.component";
import { AdminloginComponent } from "./components/adminlogin/adminlogin.component";
import { ChangepasswordComponent } from "./components/changepassword/changepassword.component";
import { ForgotpasswordComponent } from "./components/forgotpassword/forgotpassword.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { RegisterComponent } from "./components/register/register.component";
import { RegisterretailerComponent } from "./components/registerretailer/registerretailer.component";
import { RetailerloginComponent } from "./components/retailerlogin/retailerlogin.component";
import { RetailerprofileComponent } from "./components/retailerprofile/retailerprofile.component";

export const appRoutes=[
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'category',
        loadChildren:'./pages/category/category.module#CategoryModule'
    },
    {
        path:'product',
        loadChildren:'./pages/product/product.module#ProductModule'
    },
    {
        path:'cart',
        loadChildren:'./pages/cart/cart-page.module#CartPageModule'
    },
    {
        path:'login',component:LoginComponent
        
    },
    {
        path:'register',component:RegisterComponent
        
    },
    {
        path:'forgotpassword',component:ForgotpasswordComponent
        
    },
    {
        path:'changepassword',component:ChangepasswordComponent
        
    },

    {
        path:'admin',component:AdminComponent
        
    },
    {
        path:'adminlogin',component:AdminloginComponent
        
    },
    
    {
        path:'retailerlogin',component:RetailerloginComponent
        
    },
    {
        path:'registerretailer',component:RegisterretailerComponent
        
    },
    {
        path:'retailerprofile',component:RetailerprofileComponent
        
    },
    {
        path:'addproductdetails',component:AddproductdetailsComponent
        
    },
    {
        path:'product-list',component:ProductListComponent
        
    },
    
    {
        path:'home',component:HomeComponent
        
    },



    {
        path:'**',
        loadChildren:'./pages/category/category.module#CategoryModule'
    }
];