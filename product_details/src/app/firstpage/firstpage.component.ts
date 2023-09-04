import { Component,Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupformComponent } from '../popupform/popupform.component';
import { FormBuilder   } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
 
 @Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {
 
 public data:any;
 products :any[] =[];
   
 dataSource = new MatTableDataSource<any>(this.products);
 constructor(private fb: FormBuilder,private dialog: MatDialog, ) {}
  
  openDialog() {
    let dialogRef=  this.dialog.open(PopupformComponent, {
      height:'400px',
      width:'500px',
    })
  
     dialogRef.afterClosed().subscribe(result =>{
        if(result)
        {
          this.products.push(result);
          
          console.log('data reciveve from model: ',result);
        }

     
      })
 }

  deleteUser(index: number) 
  {
      this.products.splice(index, 1);
  }
 
 
  editItem(index: number, action: any)
 {
    this.dialog.open(PopupformComponent, 
      {
        width: '30%',
        data: { editData: this.products[index], action: action },
      })
    
      .afterClosed().subscribe((result ) =>{
          if (result&& action === 'edit') {
            this.products[index] = result;
            this.dataSource.data = this.products;
            console.log("editsuccess",result);
          }
       
      });
  }
  viewDialog(index: number, action: any)
  {
    this.dialog.open(PopupformComponent,
      {
        width: '30%',
        data: { editData: this.products[index], action: action },
      })

    .afterClosed().subscribe((result ) => {
    
      if(result && action==='view'){
          
        console.log("view",result);
      }
    
    });
  }
  ngOnInit(): void {
  }
}

 


  

  


