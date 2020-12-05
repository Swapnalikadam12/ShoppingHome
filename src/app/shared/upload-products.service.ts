import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UploadProductsService {

  constructor(private http : HttpClient) { }

 
    postFile(productname: string,productquantity:string,productprice: string,productdescription: string,productbrand: string,fileToUpload: File) {
      debugger
      const endpoint = 'https://localhost:44369/api/UploadImage';
      const formData: FormData = new FormData();
      formData.append('Image', fileToUpload, fileToUpload.name);
      formData.append('ProductName', productname);
      formData.append('ProductQuantity', productquantity);
      formData.append('ProductPrice', productprice);
      formData.append('ProductDescription', productdescription);
      formData.append('ProductBrand', productbrand);
      
      return this.http
        .post(endpoint, formData);
  }

}
