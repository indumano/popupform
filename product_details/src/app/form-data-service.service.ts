import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormDataServiceService {
  private products: any = [
    
      {pid: '101',pname:'car',edate:'2025-08-17',mdate:'2020-08-17',price:10000},
      {pid: '102',pname:'bike',edate:'2028-04-12',mdate:'2017-04-12',price:12000},
      {pid: '103',pname:'auto',edate:'2026-08-102',mdate:'2021-03-02',price:20000},
      {pid: '104',pname:'bus',edate:'2024-10-08',mdate:'2022-10-08',price:30000},
      {pid: '105',pname:'van',edate:'2027-01-09',mdate:'2019-01-09',price:40000},
    ];
    
  
  
  constructor(private fb: FormBuilder) {}

  getFormGroup(): FormGroup {
    return this.fb.group(this.products);
  }

  setData(data: any) {
    this.products = data;
  }

}
