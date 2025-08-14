import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { SelectModule } from 'primeng/select';
import { SliderModule } from 'primeng/slider';
import { Table, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { CompanydetailsService } from '../../../service/companydetails.service';

@Component({
  selector: 'app-sell-course-return-mtpto-company-details',
  imports: [TableModule,
          MultiSelectModule,
          SelectModule,
          InputIconModule,
          TagModule,
          InputTextModule,
          SliderModule,
          ProgressBarModule,
          ToggleButtonModule,
          ToastModule,
          CommonModule,
          FormsModule,
          ButtonModule,
          RatingModule,
          RippleModule,
          IconFieldModule,
          ButtonGroupModule,
          ToggleSwitchModule],
  templateUrl: './sell-course-return-mtpto-company-details.html',
  styleUrl: './sell-course-return-mtpto-company-details.scss',
    providers: [ConfirmationService, MessageService,]
})
export class SellCourseReturnMtptoCompanyDetails {

    statuses: any[] = [];
  rowGroupMetadata: any;
  isExpanded: boolean = false;
  loading: boolean = true;
  
    @ViewChild('filter') filter!: ElementRef;

      constructor(
      private companyService: CompanydetailsService,
     
    ) {}


    
     ngOnInit() {
    
          this.loadPartnerList();
         }
    
    
             SellcourseReturnMtptoCompanyList: any[] = [];
    
    
    loadPartnerList(): void {
      this.companyService.GetMasterTallyPartnerReturnCourseToCompany().subscribe({
        next: (res) => {
          this.SellcourseReturnMtptoCompanyList = res;  // ✅ Don’t push — always REPLACE
          this.loading = false;
          console.log('Sell course Return  tp to MtpList List:', this.SellcourseReturnMtptoCompanyList); 
       
        },
        error: (err) => {
          this.loading = false;
          console.error('Error Sell course Return  tp to Mtp List List', err);
          
        }
      });
    }
     
         clear(table: Table) {
                table.clear();
                this.filter.nativeElement.value = '';
            }
        
         onGlobalFilter(table: Table, event: Event) {
          table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
        }

}
