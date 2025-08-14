import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { CompanydetailsService } from '../../../service/companydetails.service';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table, TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@Component({
  selector: 'app-addinstitute-details',
  standalone: true,
  imports: [CommonModule,
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
    ToggleSwitchModule],
  templateUrl: './addinstitute-details.html',
  styleUrl: './addinstitute-details.scss',
  providers: [MessageService, ConfirmationService]
})
export class AddinstituteDetails {
  isVisible = true;
  CourseQtyDialog: boolean = false;
  submitted: boolean = false;
  statuses!: any[];
  @ViewChild('dt') dt!: Table;

  InstituteList: any[] = [];
  loading: boolean = true;
  selectedCourses: any[] = [];

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private Companyservice: CompanydetailsService
  ) { }
  ngOnInit(): void {
    this.loadInstituteList()
  }
  loadInstituteList(): void {
    this.Companyservice.GetActiveInstituteDetails().subscribe({
      next: (res) => {
        this.InstituteList = res;  // ✅ Don’t push — always REPLACE
        this.loading = false;

        console.log('Institute List :', this.InstituteList);

      },
      error: (err) => {
        this.loading = false;
        console.error('Error loading InstituteList ', err);

      }
    });
  }

  instituteFormData = {
    instituteId: 0,
    instituteName: '',
    isactive: true,
  };

  saveInstitutes() {
    this.submitted = true;
    if (!this.instituteFormData.instituteName) return;

    if (this.instituteFormData.instituteId === 0) {
      this.confirmAddPlace();
    } else {
      this.confirmUpdatePlace();
    }
  }

  AddInstitute() {
    this.Companyservice.AddInstitute(this.instituteFormData).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Added',
          detail: 'Place added successfully',
          life: 3000
        });
        this.CourseQtyDialog = false;
        this.resetInstitutesForm();
        this.loadInstituteList();
      },
      error: (err) => {
        console.error(err);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Add failed', life: 3000 });
      }
    });
  }

  updateCourse() {
    this.Companyservice.updateInstitute(this.instituteFormData).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Updated',
          detail: 'Course updated successfully',
          life: 3000
        });
        this.CourseQtyDialog = false;
        this.resetInstitutesForm();
        this.loadInstituteList();
      },
      error: (err) => {
        console.error(err);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Update failed', life: 3000 });
      }
    });
  }

  confirmAddPlace() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to add this Place?',
      header: 'Confirm Add',
      icon: 'pi pi-plus-circle',
      accept: () => {
        this.AddInstitute(); // Calls the actual method
      }
    });
  }

  confirmUpdatePlace() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to update this Place?',
      header: 'Confirm Update',
      icon: 'pi pi-pencil',
      accept: () => {
        this.updateCourse(); // Calls the actual method
      }
    });
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  openNew() {
    this.submitted = false;
    this.CourseQtyDialog = true;
  }



  editInstitutes(Institutes: any) {
    this.instituteFormData = { ...Institutes }; // ✅ Copy data into form model
    this.CourseQtyDialog = true;         // ✅ Open the popup
  }


  resetInstitutesForm() {
    this.instituteFormData = {
      instituteId: 0,
      instituteName: '',
      isactive: true,
    };
    this.submitted = false;
  }

  hideDialog() {
    this.CourseQtyDialog = false;
    this.resetInstitutesForm();
    this.submitted = false;
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
