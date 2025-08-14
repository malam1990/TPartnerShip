import { Component } from '@angular/core';
import { PartnerService } from '../../../service/partner.service';
import { CompanydetailsService } from '../../../service/companydetails.service';
import { Table, TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import { InputIconModule } from 'primeng/inputicon';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { SliderModule } from 'primeng/slider';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { IconFieldModule } from 'primeng/iconfield';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-sell-course-to-tpdetails',
  imports:  [TableModule,
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
  templateUrl: './sell-course-to-tpdetails.html',
  styleUrl: './sell-course-to-tpdetails.scss',
    providers: [ConfirmationService, MessageService,]
})
export class SellCourseToTPDetails {

   statuses: any[] = [];
   rowGroupMetadata: any;
   isExpanded: boolean = false;
   loading: boolean = true;
   filter: any;
     constructor(
          private companyService: CompanydetailsService,
  
    ) {}

   ngOnInit() {

      this.loadSellcoursetotpList();
     }


         SellcoursetotpList: any[] = [];

  loadSellcoursetotpList(): void {
    this.companyService.GetAllCompanySellCourseToTallyPartner().subscribe({
      next: (res) => {
        this.SellcoursetotpList = res;  // ✅ Don’t push — always REPLACE
        this.loading = false;
        console.log('Partner List:', this.SellcoursetotpList); 
     
      },
      error: (err) => {
        this.loading = false;
        console.error('Error loading partner list', err);
        
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
