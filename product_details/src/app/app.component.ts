import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupformComponent } from './popupform/popupform.component';
import { FormDataServiceService } from './form-data-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private dialog: MatDialog) {}


 
  title = 'product_details';
}
