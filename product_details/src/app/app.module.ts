 import { NgModule } from '@angular/core';
//import { DialogComponent } from './dialog/dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserModule } from '@angular/platform-browser';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule, } from '@angular/material/dialog';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { PopupformComponent } from './popupform/popupform.component';
 
 

 
@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    PopupformComponent,
    
  ],
  imports: [
  
    BrowserAnimationsModule,
    ModalModule.forRoot(), // Import and configure ModalModule
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
     
  ],
  providers: [{provide:
  MAT_DIALOG_DEFAULT_OPTIONS,useValue:{hasBackdrop:false}} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
