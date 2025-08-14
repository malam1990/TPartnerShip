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
import { ActivatedRoute } from '@angular/router';
import { PopoverModule } from 'primeng/popover';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { CalendarModule } from 'primeng/calendar';
import { CompanydetailsService } from '../../../service/companydetails.service';
import { FileUploadModule } from 'primeng/fileupload';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';

@Component({
  standalone: true,
  selector: 'app-partnerdetails-add',
  imports: [FluidModule, InputTextModule,CommonModule, ButtonModule, SelectModule,FileUploadModule, FormsModule, TextareaModule, ToggleSwitchModule, PopoverModule, ConfirmPopupModule, CalendarModule,FileUploadModule, ToastModule, ButtonModule],
  templateUrl: './partnerdetails-add.html',
  styleUrl: './partnerdetails-add.scss',
     providers: [MessageService]
})
export class PartnerdetailsAdd {

isVisible = true;

roleId: number | undefined;


  constructor(private companyService: CompanydetailsService, private route: ActivatedRoute, private messageService: MessageService, private cdr: ChangeDetectorRef) { }
  partnerList: any[] = [];
  partners: any[] = [];           // list from API
  selectedPartnerId: number | null = null;  // <-- This holds selected value
  institutes: any[] = [];           // list from API Institutes
  selectedinstituteId: number | null = null;  // <-- This holds selected value Institutes
  loading: boolean = true;
isEditMode: boolean = false;
  @ViewChild('filter') filter!: ElementRef;

  RoleList: any[] = [];

ngOnInit(): void {

 this.route.queryParams.subscribe(params => {
    const partnerId = params['partnerid'];
    const roleId = params['roleId'];

    if (roleId) {
      this.partnerFormData.roleId = +roleId; // Convert string to number
    }

  if (partnerId) {
      this.isEditMode = true;

      this.companyService.GetMasterTallyPartnerById(partnerId).subscribe({
        next: (res: any) => {
          this.partnerFormData = res;
          console.log('Received partner data:', this.partnerFormData);
        },
        error: (err: any) => {
          console.error('Error loading partner:', err);
        }
      });
  }
});



  // 1️⃣ Step: Read queryParams first
    // this.route.queryParams.subscribe(params => {
    //   if (params['partner']) {
    //     try {
    //       const partner = JSON.parse(params['partner']);
    //       this.partnerFormData = { ...partner };
    //       this.partnerFormData.roleId = +partner.roleId; // convert to number
    //       this.isEditMode = true;

    //       console.log('Received partner:', this.partnerFormData);
    //     } catch (e) {
    //       console.error('Invalid JSON:', e);
    //     }
    //   } else {
        
    //    
    // }
        
    //   }
    // });

  // 2️⃣ Step: Load RoleList AFTER queryParams
  this.companyService.GetRole().subscribe(data => {
    this.RoleList = data.filter(role =>
      role.roleName === 'MasterTallyPartner' || role.roleName === 'TallyPartner'
    );

    // Force update after role list arrives (optional)
    if (this.partnerFormData.roleId) {
      this.partnerFormData.roleId = +this.partnerFormData.roleId; // make sure it's a number
      console.log('Set Role ID to:', this.partnerFormData.roleId);
    }
  });

  // 3️⃣ Get places
  this.companyService.GetActivePlaceDetails().subscribe({
    next: (res: any) => this.partners = res,
    error: (err: any) => console.error('Error loading partners:', err)
  });

  // 4️⃣ Get institutes
  this.companyService.GetActiveInstitutesDetails().subscribe({
    next: (res) => this.institutes = res,
    error: (err) => console.error('Error loading institutes:', err)
  });
}



  myBooleanValue: boolean = false;


  partnerFormData = {
    partnerid: 0,
    partnerName: '',
    emailId: '',
    serailNo: '',
    webSite: '',
    yof: '',
    placeName: '',
    noPc: 0,
    status: true,
    empanelmentExpireDate: '',
    empanelmentCertificate: '',
    address: '',
    city: '',
    state: '',
    country: '',
    postalCode: '',
    landLine1: '',
    landLine2: '',
    mobileNo: '',
    fax: '',
    instituteName: '',
    beneficiaryName: '',
    bankAccountNo: '',
    bankName: '',
    bankBranch: '',
    cancelledCheque: '',
    panNo: '',
    gstin: '',
    msme: '',
    tanNo: '',
    password: '',
    roleId: 0,
     partnershipDeedp: '',
    registrationCertifcatep:  '',
    incorporationCertifcatep: '',
    rentLeaseAgreementp:'',
    cancelledChequep:'',
    panCardp: '',
    gstinCertificatep:'',
    frontViewp: '',
    computerLabp:'',
    lectureHallp: '',
    libraryp: '',
    officeSpacep: '',
    receptionAreap: '',
    otherPhotop: '',
  };


  getEmptyPartnerFormData() {
    return {
      PartnerName: '',
      EmailId: '',
      SerailNo: '',
      WebSite: '',
      Yof: '',
      PlaceName: '',
      NoPc: 0,
      Status: true, // boolean
      EmpanelmentExpireDate: '',
      EmpanelmentCertificate: '',
      Address: '',
      City: '',
      State: '',
      Country: '',
      PostalCode: '',
      LandLine1: '',
      LandLine2: '',
      MobileNo: '',
      Fax: '',
      InstituteName: '',
    };
  }

onRoleChange(event: any) {
    console.log('Role changed:', event.value);
  }




  submitPartnerForm() {
    //  console.log('Form Data:', this.partnerFormData);
    //   this.partnerService.addPartner(this.partnerFormData).subscribe({
    //     next: (res: any) => {
    //       alert(res.message);
    //     },
    //     error: (err: HttpErrorResponse) => {
    //       console.error('Error adding partner:', err);
    //       alert('Failed to save partner.');
    //     }
    //   });


// Loop over partnerFormData and append to formData

  

    if (this.partnerFormData.partnerid === 0) {
      this.companyService.AddMastertallypartnerDetails(this.partnerFormData).subscribe({
        next: (res) => {
          alert('Partner added successfully');
           this.resetPartnerForm();
              this.clearAllImages();
          // this.resetForm();
          //this.getPartners(); // optional: reload list
        },
        error: (err) => console.error(err)
      });
    } else {
      this.companyService.UpdateTallyMasterPartnerDetails(this.partnerFormData).subscribe({
        next: (res) => {
          alert('Partner updated successfully');
           this.resetPartnerForm();
           this.clearAllImages();
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
    (this.partnerFormData as any)[field] = base64;
    console.log(`✅ Added ${field}:`, base64.substring(0, 30));
  };

  reader.onerror = () => {
    console.error('❌ Error reading file:', reader.error);
  };

  reader.readAsDataURL(file); // ✅ reads as Base64
}


resetPartnerForm() {
  this.partnerFormData = {
    partnerid: 0,
    partnerName: '',
    emailId: '',
    serailNo: '',
    webSite: '',
    yof: '',
    placeName: '',
    noPc: 0,
    status: true,
    empanelmentExpireDate: '',
    empanelmentCertificate: '',
    address: '',
    city: '',
    state: '',
    country: '',
    postalCode: '',
    landLine1: '',
    landLine2: '',
    mobileNo: '',
    fax: '',
    instituteName: '',
    beneficiaryName: '',
    bankAccountNo: '',
    bankName: '',
    bankBranch: '',
    cancelledCheque: '',
    panNo: '',
    gstin: '',
    msme: '',
    tanNo: '',
    password: '',
    roleId: 0,
    partnershipDeedp: '',
    registrationCertifcatep: '',
    incorporationCertifcatep: '',
    rentLeaseAgreementp: '',
    cancelledChequep: '',
    panCardp: '',
    gstinCertificatep: '',
    frontViewp: '',
    computerLabp: '',
    lectureHallp: '',
    libraryp: '',
    officeSpacep: '',
    receptionAreap: '',
    otherPhotop: '',
  };
}
clearAllImages(): void {
  const imageFields = [
    'empanelmentCertificate', 'partnershipDeedp', 'registrationCertifcatep',
    'incorporationCertifcatep', 'rentLeaseAgreementp', 'cancelledChequep',
    'panCardp', 'gstinCertificatep', 'frontViewp', 'computerLabp',
    'lectureHallp', 'libraryp', 'officeSpacep', 'receptionAreap', 'otherPhotop'
  ];

  imageFields.forEach(field => (this.partnerFormData as any)[field] = '');
  console.log('🗑 Cleared all images');
}


}

