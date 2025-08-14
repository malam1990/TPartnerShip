import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
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
import { ProductService } from '../../../service/product.service';
import { PopoverModule } from 'primeng/popover';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { CompanydetailsService } from '../../../service/companydetails.service';

@Component({
  selector: 'app-sell-course-to-tp',
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
    ToggleSwitchModule,
    Fluid
],
  templateUrl: './sell-course-to-tp.html',
  styleUrl: './sell-course-to-tp.scss',
  providers: [ConfirmationService, MessageService, CustomerService, ProductService, PopoverModule, ConfirmPopupModule,]
})
export class SellCourseToTP {
 constructor(
        private productService: ProductService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
        private Companyservice: CompanydetailsService
    ) {}

    CompanyList: any[] = [];
loading: boolean = true;
selectedCourses: any[] = [];
company: any[] = []; 
CourseList:any[] =[]; 
TallyPartnerLists: any[] = [];


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

 this.Companyservice.GetAllTallyPartnerDetails().subscribe({
  next: (res) => this.TallyPartnerLists = res,
  error: (err) => console.error('Error loading partners:', err)
});
  // // <-- This  Get Active Partner Details
  // this.companyService.GetAllTallyPartnerDetails().subscribe({
  //   next: (res) => this.tallypartnerList = res,
  //   error: (err) => console.error('Error fetching partners:', err)
  // });

}

 SellCourseToTallyPartnerForm  = {
     Id:0,  
    CourseId :0,
     TallypartnerId : 0,
     CompanyId :0,
     Quantity:0,
  };  



  submitSellCourseToTallyPartnerForm() {



if (this.SellCourseToTallyPartnerForm.Id === 0) {
    this.Companyservice.SellCourseToTallyPartner(this.SellCourseToTallyPartnerForm).subscribe({
      next: (res) => {
        alert('Sell Course To Tally Partner Successfully');
       // this.resetForm();
        //this.getPartners(); // optional: reload list
      },
      error: (err) => console.error(err)
    });
  } 

}
}