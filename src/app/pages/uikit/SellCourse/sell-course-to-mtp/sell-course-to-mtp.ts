import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfirmationService, MessageService, ToastMessageOptions } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { Fluid } from 'primeng/fluid';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TextareaModule } from 'primeng/textarea';
import { ToastModule } from 'primeng/toast';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { ToolbarModule } from 'primeng/toolbar';
import { CustomerService } from '../../../service/customer.service';
import { PopoverModule } from 'primeng/popover';
import { ProductService } from '../../../service/product.service';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { CompanydetailsService } from '../../../service/companydetails.service';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-sell-course-to-mtp',
   imports: [
    CommonModule,
    TableModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    ToastModule,
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
    IconFieldModule,
    ConfirmDialogModule,
    MessageModule,
    ToggleSwitchModule,
    ToastModule,
    Fluid
],
  templateUrl: './sell-course-to-mtp.html',
  styleUrl: './sell-course-to-mtp.scss',
   providers: [ConfirmationService, MessageService, CustomerService, ProductService, PopoverModule, ConfirmPopupModule,MessageModule, ProductService, PopoverModule, ConfirmPopupModule,CommonModule]
})
export class SellCourseToMTP {
 constructor(
        private productService: ProductService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
        private Companyservice: CompanydetailsService
    ) {}

    msgs: ToastMessageOptions[] | null = [];

CompanyList: any[] = [];
loading: boolean = true;
selectedCourses: any[] = [];
company: any[] = []; 
CourseList:any[] =[]; 
MasterTallyPartnerList: any[] = [];

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

 this.Companyservice.GetAllMasterTalltPartnerDetails().subscribe({
  next: (res) => this.MasterTallyPartnerList = res,
  error: (err) => console.error('Error loading partners:', err)
});
  // // <-- This  Get Active Partner Details
  // this.companyService.GetAllTallyPartnerDetails().subscribe({
  //   next: (res) => this.tallypartnerList = res,
  //   error: (err) => console.error('Error fetching partners:', err)
  // });

}


 SellCourseToMasterPartnerForm  = {
     Id:0,  
    CourseId :0,
     PartnerId : 0,
     CompanyId :0,
     Quantity:0,
  };  



  submitSellCourseToMasterPartnerForm() {



if (this.SellCourseToMasterPartnerForm.Id === 0) {
    this.Companyservice.SellCourseToMasterPartner(this.SellCourseToMasterPartnerForm).subscribe({
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