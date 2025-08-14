import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import { SliderModule } from 'primeng/slider';
import { Table, TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { TagModule } from 'primeng/tag';
import { Customer, CustomerService, Representative } from '../../../service/customer.service';
import { Product, ProductService } from '../../../service/product.service';
import { PartnerService } from '../../../service/partner.service';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverModule } from 'primeng/popover';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { CompanydetailsService } from '../../../service/companydetails.service';


interface expandedRows {
    [key: string]: boolean;
}
@Component({
  selector: 'app-partnerdetails',
 imports: [CommonModule,
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
        
        FormsModule,
        ButtonModule,
        RatingModule,
        RippleModule,
        IconFieldModule,
        ButtonGroupModule,
        ToggleSwitchModule
    ],
  templateUrl: './partnerdetails.html',
  styleUrl: './partnerdetails.scss',
  providers: [ConfirmationService, MessageService, CustomerService, ProductService, PopoverModule, ConfirmPopupModule,]
})

export class Partnerdetails implements OnInit {
   isVisible = true;

    selectedCustomer: Customer = {};

    representatives: Representative[] = [];

    statuses: any[] = [];

    products: Product[] = [];

    rowGroupMetadata: any;

    expandedRows: expandedRows = {};

    activityValues: number[] = [0, 100];

    isExpanded: boolean = false;

    balanceFrozen: boolean = false;

    loading: boolean = true;
 

    @ViewChild('filter') filter!: ElementRef;



    constructor(
       private companyService: CompanydetailsService,
       private router: Router,
       private route: ActivatedRoute
    ) {}

// Partner List
     partnerList: any[] = [];

     roleId: number | undefined;

    ngOnInit() {

      this.loadPartnerList();

      
     }



loadPartnerList(): void {
  this.companyService.GetAllMasterTalltPartnerDetails().subscribe({
    next: (res) => {


      
      this.partnerList = res;  // ✅ Don’t push — always REPLACE
      this.loading = false;
      console.log('Partner List:', this.partnerList); 
   
    },
    error: (err) => {
      this.loading = false;
      console.error('Error loading partner list', err);
      
    }
  });
}


isPdf(base64: string): boolean {
  // Optional: check base64 PDF header
  return base64.startsWith('JVBER'); // PDF files start with "%PDF" which is base64 "JVBER"
}
trackByPartnerId(index: number, partner: any): number {
  return partner.partnerid;
}





editPartner(partner: any) {
  this.router.navigate(['/partnerdetails-add'], {
 queryParams: { partnerid: partner.partnerid }
  
  
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


