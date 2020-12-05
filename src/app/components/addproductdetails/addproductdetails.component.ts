import { Component, OnInit } from '@angular/core';
import { UploadProductsService } from '../../shared/upload-products.service';

@Component({
  selector: 'app-addproductdetails',
  templateUrl: './addproductdetails.component.html',
  styleUrls: ['./addproductdetails.component.css'],
  providers:[UploadProductsService]
})
export class AddproductdetailsComponent implements OnInit {

  imageUrl: string = "./assets/admin/upload.png";
  
  fileToUpload: File = null;
 
  constructor(private imageService : UploadProductsService) { }

  ngOnInit() {
  }

 
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }
   
  OnSubmit(Productname,Productquantity,Productprice,Productdescription,Productbrand,Image){
    
    debugger
   this.imageService.postFile(Productname.value,Productquantity.value,Productprice.value,Productdescription.value,Productbrand.value,this.fileToUpload).subscribe(
     data =>{
       console.log('done');
       Productname.value = null;
       Productquantity.value=null;
       Productdescription.value = null;
       Productprice.value=null;
       Image.value = null;
      
       this.imageUrl = "./assets/admin/upload.png";
      
     }
   );
  }

}

