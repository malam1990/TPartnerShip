import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { PartnerService } from '../../../service/partner.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverModule } from 'primeng/popover';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { CalendarModule } from 'primeng/calendar';
import { CompanydetailsService } from '../../../service/companydetails.service';
import { Table, TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { IconFieldModule } from 'primeng/iconfield';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { SliderModule } from 'primeng/slider';
import { TagModule } from 'primeng/tag';
import { InputIconModule } from 'primeng/inputicon';
import { MultiSelectModule } from 'primeng/multiselect';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Customer, CustomerService, Representative } from '../../../service/customer.service';
import { Product, ProductService } from '../../../service/product.service';

@Component({
  selector: 'app-tally-partnerdetails',
 imports: [
        TableModule,
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
        ToggleSwitchModule
    ],
  templateUrl: './tally-partnerdetails.html',
  styleUrl: './tally-partnerdetails.scss',
   providers: [ConfirmationService, MessageService, CustomerService, ProductService, PopoverModule, ConfirmPopupModule,]
})
export class TallyPartnerdetails {


selectedCustomer: Customer = {};

    representatives: Representative[] = [];

    statuses: any[] = [];

    products: Product[] = [];

    rowGroupMetadata: any;

    //expandedRows: expandedRows = {};

    activityValues: number[] = [0, 100];

    isExpanded: boolean = false;

    balanceFrozen: boolean = false;

    loading: boolean = true;
 

    @ViewChild('filter') filter!: ElementRef;



    constructor(
        private customerService: CustomerService,
        private productService: ProductService,
        private partnerService: PartnerService,
        private companyService: CompanydetailsService,
       private router: Router
    ) {}

// Partner List
     tppartnerList: any[] = [];

    ngOnInit() {

      this.loadTallyPartnerList();
     }



loadTallyPartnerList(): void {
  this.companyService.GetAllTallyPartnerDetails().subscribe({
    next: (res) => {
      this.tppartnerList = res;  // ✅ Don’t push — always REPLACE
      this.loading = false;
      console.log('Partner List:', this.tppartnerList); 
   
    },
    error: (err) => {
      this.loading = false;
      console.error('Error loading partner list', err);
      
    }
  });
}



trackByPartnerId(index: number, partner: any): number {
  return partner.partnerid;
}








edittallyPartner(tppartner: any) {
  this.router.navigate(['/AddTallyPartnerDetails'], {
 queryParams: { tallypartnerId: tppartner.tallypartnerId }
  
  
});
}

  






 onGlobalFilter(table: Table, event: Event) {
  table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
}
    clear(table: Table) {
        table.clear();
        this.filter.nativeElement.value = '';
    }


openFileInNewTab(base64Data: string) {
  if (!base64Data) {
    console.error('No file data available');
    return;
  }

  try {
    // Detect content type from base64 prefix
    let mimeType = '';
    if (base64Data.startsWith('/9j/')) {
      mimeType = 'image/jpeg'; // JPEG
    } else if (base64Data.startsWith('iVBOR')) {
      mimeType = 'image/png'; // PNG
    } else if (base64Data.startsWith('JVBER')) {
      mimeType = 'application/pdf'; // PDF
    } else {
      // Default to generic binary if unknown
      mimeType = 'application/octet-stream';
    }

    // Convert base64 to byte array
    const byteCharacters = atob(base64Data);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: mimeType });
    const blobUrl = URL.createObjectURL(blob);

    // Open file in new browser tab
    window.open(blobUrl, '_blank');
  } catch (error) {
    console.error('Error opening file:', error);
  }
}
isFileAvailable(file: string | null | undefined): boolean {
  return !!file && file.trim() !== '';
}

}
