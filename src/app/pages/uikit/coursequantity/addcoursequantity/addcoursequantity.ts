import { Component, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService, ToastMessageOptions } from 'primeng/api';
import { Table, TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { SelectModule } from 'primeng/select';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { Product, ProductService } from '../../../service/product.service';
import { CompanydetailsService } from '../../../service/companydetails.service';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { Fluid } from "primeng/fluid";
import { CustomerService } from '../../../service/customer.service';
import { PopoverModule } from 'primeng/popover';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { MessageModule } from 'primeng/message';





@Component({
  selector: 'app-addcoursequantity',
  imports: [
    CommonModule,
    TableModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    ToolbarModule,
    RatingModule,
    InputTextModule,
    TextareaModule,
    SelectModule,
    RadioButtonModule,
    InputNumberModule,
    DialogModule,
    TagModule,
    InputIconModule,
    MessageModule,
    IconFieldModule,
    ConfirmDialogModule,
    ToggleSwitchModule,
    ToastModule,
    Fluid
  
],
  templateUrl: './addcoursequantity.html',
  styleUrl: './addcoursequantity.scss',
    providers: [MessageService,ConfirmationService, CustomerService,MessageModule, ProductService, PopoverModule, ConfirmPopupModule,CommonModule]
})
export class Addcoursequantity {

  isVisible = true;
@ViewChild('dt') dt!: Table;
msgs: ToastMessageOptions[] | null = [];
CompanyList: any[] = [];
loading: boolean = true;
selectedCourses: any[] = [];
company: any[] = []; 
CourseList:any[] =[]; 

    constructor(
      
        private messageService: MessageService,
        private Companyservice: CompanydetailsService
    ) {}

 
  ngOnInit(): void {

    // <-- This  Get Active Place Details
this.Companyservice.getCompanyList().subscribe({
  next: (res: any) => this.CompanyList = res,
  error: (err: any) => console.error('Error loading partners:', err)
});
  // This  Get Active Institutes Details
 this.Companyservice.GetActiveCourseDetails().subscribe({
  next: (res) => this.CourseList = res,
  error: (err) => console.error('Error loading partners:', err)
});
  // // <-- This  Get Active Partner Details
  // this.companyService.GetAllTallyPartnerDetails().subscribe({
  //   next: (res) => this.tallypartnerList = res,
  //   error: (err) => console.error('Error fetching partners:', err)
  // });

}

    CourseQuantityForm = {
     CourseQtyId:0,
     courseId: 0,
     CompanyId:0,
     CourseQuantity:0,
  };  

submitTallyPartnerForm() {
  if (this.CourseQuantityForm.CourseQtyId === 0) {
    this.Companyservice.AddCourseQuantity(this.CourseQuantityForm).subscribe({
      next: (res) => {
        this.showSuccessViaToast(res.message); // ✅ use backend response
      },
      error: (err) => {
        const message = err.error?.message || 'Something went wrong.';
        this.showErrorViaToast(message); // ✅ pass error to toast
      }
    });
  }
}
      showSuccessViaToast(message: string) {
  this.messageService.add({
    severity: 'success',
    summary: 'Success',
    detail: message,
    life: 3000
  });
}

showErrorViaToast(message: string) {
  this.messageService.add({
    severity: 'error',
    summary: 'Error',
    detail: message,
    life: 4000
  });
}
}


