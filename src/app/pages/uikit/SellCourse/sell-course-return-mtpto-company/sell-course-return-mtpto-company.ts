import { Component } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CompanydetailsService } from '../../../service/companydetails.service';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
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
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { Fluid } from 'primeng/fluid';

@Component({
  selector: 'app-sell-course-return-mtpto-company',
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
    Fluid,
    
],
  templateUrl: './sell-course-return-mtpto-company.html',
  styleUrl: './sell-course-return-mtpto-company.scss',
  providers: [ConfirmationService, MessageService, ProductService]
  })
export class SellCourseReturnMtptoCompany {

   constructor(
         
          private Companyservice: CompanydetailsService
      ) {}
  
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


 MasterTallyPartnerReturnCourseToCompanyFrom  = {
     Id:0,  
      CompanyId :0,
       PartnerId : 0,
      CourseId :0,
     Quantity:0,
  };  



  submitSellCourseToMasterPartnerForm() {



if (this.MasterTallyPartnerReturnCourseToCompanyFrom.Id === 0) {
    this.Companyservice.MasterTallyPartnerReturnCourseToCompany(this.MasterTallyPartnerReturnCourseToCompanyFrom).subscribe({
      next: (res) => {
        alert('Master Tally Partner Return Course To Company successfully');
       // this.resetForm();
        //this.getPartners(); // optional: reload list
      },
      error: (err) => console.error(err)
    });
  } 

}

}
