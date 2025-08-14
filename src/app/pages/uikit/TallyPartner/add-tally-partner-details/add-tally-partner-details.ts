import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { PopoverModule } from 'primeng/popover';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { CompanydetailsService } from '../../../service/companydetails.service';
import { ActivatedRoute } from '@angular/router';
import { FileUploadModule } from 'primeng/fileupload';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-tally-partner-details',
  standalone: true,
 imports: [FluidModule, InputTextModule,CommonModule, ButtonModule, SelectModule,FileUploadModule, FormsModule, TextareaModule, ToggleSwitchModule, PopoverModule, ConfirmPopupModule, CalendarModule,FileUploadModule, ToastModule, ButtonModule],
  templateUrl: './add-tally-partner-details.html',
  
  styleUrl: './add-tally-partner-details.scss',
    providers: [MessageService]
})
export class AddTallyPartnerDetails {
  isVisible = true;
   constructor(private companyService: CompanydetailsService, private route: ActivatedRoute,private cdr: ChangeDetectorRef) {}

tallypartnerList: any[] = [];
tallypartners: any[] = [];           // list from API
selectedTallyPartnerId: number | null = null;  // <-- This holds selected value
institutes: any[] = [];           // list from API Institutes
selectedinstituteId: number | null = null;  // <-- This holds selected value Institutes
loading: boolean = true;
isEditMode: boolean = false;
  RoleList: any[] = [];
@ViewChild('filter') filter!: ElementRef;

tallyPartnerFormData = {
  tallypartnerId: 0,
  tpname: '',
  tpEmailId: '',
  tpSerailNo: '',
  tpWebSite: '',
  tpYof: '',
  placeName: '',
  tpNoPc: 0,
  tpStatus: true,
  tpEmpanelmentExpireDate: '',
  tpEmpanelmentCertificate: '',
  tpAddress: '',
  tpCity: '',
  tpState: '',
  tpCountry: '',
  tpPostalCode: '',
  tpLandLine1: '',
  tpLandLine2: '',
  tpMobileNo: '',
  tpFax: '',
  instituteName: '',
   tpBeneficiaryName: '',
    tpBankAccountNo: '',
    tpBankName: '',
    tpBankBranch: '',
    tpCancelledCheque: '',
    tpPanNo: '',
    tpGstin: '',
    tpMsme: '',
    tpTanNo: '',
    tpPassword: '',
    tproleId: 0,
    tppartnershipDeedp: '',
    tpregistrationCertifcatep:  '',
    tpincorporationCertifcatep: '',
    tprentLeaseAgreementp:'',
    tpcancelledChequep:'',
    tppanCardp: '',
    tpgstinCertificatep:'',
    tpfrontViewp: '',
    tpcomputerLabp:'',
    tplectureHallp: '',
    tplibraryp: '',
    tpofficeSpacep: '',
    tpreceptionAreap: '',
    tpotherPhotop: '',
};

ngOnInit(): void {

this.route.queryParams.subscribe(params => {
    const tallypartnerId = params['tallypartnerId'];
    const roleId = params['roleId'];

    if (roleId) {
      this.tallyPartnerFormData.tproleId = +roleId; // Convert string to number
    }

  if (tallypartnerId) {
      this.isEditMode = true;

      this.companyService.GetTallyPartnerById(tallypartnerId).subscribe({
        next: (res: any) => {
          this.tallyPartnerFormData = res;
          console.log('Received partner data:', this.tallyPartnerFormData);
        },
        error: (err: any) => {
          console.error('Error loading partner:', err);
        }
      });
  }
});


// 2️⃣ Step: Load RoleList AFTER queryParams
  this.companyService.GetRole().subscribe(data => {
    this.RoleList = data.filter(role =>
      role.roleName === 'MasterTallyPartner' || role.roleName === 'TallyPartner'
    );

    // Force update after role list arrives (optional)
    if (this.tallyPartnerFormData.tproleId) {
      this.tallyPartnerFormData.tproleId = +this.tallyPartnerFormData.tproleId; // make sure it's a number
      console.log('Set Role ID to:', this.tallyPartnerFormData.tproleId);
    }
  });



    // <-- This  Get Active Place Details
  this.companyService.GetActivePlaceDetails().subscribe({
    next: (res: any) => this.tallypartners = res,
    error: (err: any) => console.error('Error loading partners:', err)
  });

  // <-- This  Get Active Institutes Details
  this.companyService.GetActiveInstitutesDetails().subscribe({
    next: (res) => this.institutes = res,
      error: (err) => console.error('Error loading partners:', err)
  });



  

}
onRoleChange(event: any) {
    console.log('Role changed:', event.value);
  }


submitTallyPartnerForm() {


if (this.tallyPartnerFormData.tallypartnerId === 0) {
    this.companyService.AddTallyPartnerDetails(this.tallyPartnerFormData).subscribe({
      next: (res) => {
        alert('Tally Partner added successfully');
       // this.resetForm();
        //this.getPartners(); // optional: reload list
      },
      error: (err) => console.error(err)
    });
  } else {
    this.companyService.updateTallyPartnerdetails(this.tallyPartnerFormData).subscribe({
      next: (res) => {
            console.log('Received tppartner partner:', res);
        alert('Tally Partner updated successfully');
     
       // this.resetForm();
        //this.getPartners();
      },
      error: (err) => console.error(err)
    });

}
}


onFileSelected(event: any, field: string): void {
  const file: File = event.files?.[0]; // ✅ PrimeNG uses event.files, not event.target.files

  if (!file) return;

  const reader = new FileReader();

  reader.onload = () => {
    const result = reader.result as string;
    const base64 = result.split(',')[1]; // remove data prefix
    (this.tallyPartnerFormData as any)[field] = base64;
    console.log(`✅ Added ${field}:`, base64.substring(0, 30));
  };

  reader.onerror = () => {
    console.error('❌ Error reading file:', reader.error);
  };

  reader.readAsDataURL(file); // ✅ reads as Base64
}
}





