 import { Component, EventEmitter, Inject ,Input,OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
 import { FirstpageComponent } from '../firstpage/firstpage.component';

@Component({
  selector: 'app-popupform',
  templateUrl: './popupform.component.html',
  styleUrls: ['./popupform.component.css']
})
export class PopupformComponent implements OnInit {
  
  popupForms: FormGroup;
  actionBtn: string = 'update';
  isViewing: boolean = false;
  products =[
    {pid: '101',pname:'car',edate:'2025-08-17',mdate:'2020-08-17',price:10000},
    {pid: '102',pname:'bike',edate:'2028-04-12',mdate:'2017-04-12',price:12000},
    {pid: '103',pname:'auto',edate:'2026-08-10',mdate:'2021-03-02',price:20000},
    {pid: '104',pname:'bus',edate:'2024-10-08',mdate:'2022-10-08',price:30000},
    {pid: '105',pname:'van',edate:'2027-01-09',mdate:'2019-01-09',price:40000},
  ];

  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,     @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<PopupformComponent>, private fb: FormBuilder)
    {
      this.popupForms = this.fb.group({
        // Define your form controls here
        Product_id: ['', Validators.required],
        Product_Name: ['', Validators.required],
        Quantity: [0, Validators.required],
        Expiry_date: ['', Validators.required],
        Manufacture: ['', Validators.required],
        Price: [0, Validators.required],
        totalPrice:  [ 0,Validators.required ],
     
      });
     

      if (this.editData?.action === 'edit'||this.editData?.action==='view') {
        if (!!this.editData) {
          this.actionBtn = 'update';
         
          this.popupForms.get('Product_id') ?.setValue(this.editData.editData.Product_id);
          this.popupForms .get('Product_Name')?.setValue(this.editData.editData.Product_Name);
          this.popupForms.get('Quantity')?.setValue(this.editData.editData.Quantity);
          this.popupForms.get('Expiry_date')?.setValue(this.editData.editData.Expiry_date);
          this.popupForms.get('Manufacture')?.setValue(this.editData.editData.Manufacture);
          this.popupForms.get('Price')?.setValue(this.editData.editData.Price);
          this.popupForms.get('totalPrice')?.setValue(this.editData.editData.totalPrice);
        }
        if(this.editData.action==='view') {
          this.isViewing = true;
        }
      }
    }
    
  
  onProductIdChange(event: any): void {
    const selectedProductId = event.target.value;
    const selectedProduct = this.products.find(product => product.pid === selectedProductId);
  
    if (selectedProduct) {
      this.popupForms.patchValue({
        Product_Name: selectedProduct.pname,
        Expiry_date: selectedProduct.edate,
        Manufacture: selectedProduct.mdate,
        Price:selectedProduct.price,
        
      });
      
    }
    this.calculateTotalPrice();

  }
 
  
  onQuantityChange(): void {
    this.calculateTotalPrice() ;
     
  }

   
  calculateTotalPrice(): void {
    const quantity = this.popupForms.get('Quantity')?.value;
    const pricePerUnit = this.popupForms.get('Price')?.value;
    console.log('Quantity:', quantity);
    console.log('Price Per Unit:', pricePerUnit);
    const totalPrice1 = quantity * pricePerUnit;
    console.log('total price :',totalPrice1);
    this.popupForms.get("totalPrice")?.setValue(totalPrice1);

    
  }
   
  onCancelClick(): void {
    this.dialogRef.close();
  }

   
  onSubmit(): void {
   
      // Handle form submission
      this.dialogRef.close(this.popupForms.value);
      console.log("success");
    
  }
  
 
  
  ngOnInit(): void {
    
  }
 
 
}