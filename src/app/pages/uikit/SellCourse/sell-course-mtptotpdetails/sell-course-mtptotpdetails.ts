import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { RippleModule } from 'primeng/ripple';
import { SelectModule } from 'primeng/select';
import { SliderModule } from 'primeng/slider';
import { Table, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { CompanydetailsService } from '../../../service/companydetails.service';
import { PartnerService } from '../../../service/partner.service';
import { IconField } from "primeng/iconfield";

@Component({
  selector: 'app-sell-course-mtptotpdetails',
   imports: [TableModule,
    MultiSelectModule,
    SelectModule,
    InputIconModule,
    TagModule,
    InputTextModule,
    SliderModule,
    ToggleButtonModule,
    ToastModule,
    CommonModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    ButtonGroupModule,
    ToggleSwitchModule, IconField],
  templateUrl: './sell-course-mtptotpdetails.html',
  styleUrl: './sell-course-mtptotpdetails.scss'
})
export class SellCourseMtptotpdetails {
 statuses: any[] = [];
 rowGroupMetadata: any;
 isExpanded: boolean = false;
 loading: boolean = true;
 @ViewChild('filter') filter!: ElementRef;
 constructor(private partnerService: PartnerService,private companyService: CompanydetailsService  
    ) {}

    ngOnInit() {

      this.SellCourseMastertallypartnerToTallyPartnerList();
     }


         SellcourseMtptotpList: any[] = [];


SellCourseMastertallypartnerToTallyPartnerList(): void {
  this.companyService.GetSellCourseMastertallypartnerToTallyPartner().subscribe({
    next: (res) => {
      this.SellcourseMtptotpList = res;  // ✅ Don’t push — always REPLACE
      this.loading = false;
      console.log('Partner List:', this.SellcourseMtptotpList); 
   
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
