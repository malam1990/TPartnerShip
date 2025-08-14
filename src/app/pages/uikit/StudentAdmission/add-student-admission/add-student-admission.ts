
import { Component, Injectable, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';

import { TextareaModule } from 'primeng/textarea';

import { Product, ProductService } from '../../../service/product.service';

import { FluidModule } from "primeng/fluid";
import { CalendarModule } from 'primeng/calendar';
import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import { TabsModule } from 'primeng/tabs';
import { FieldsetModule } from 'primeng/fieldset';
import { DialogModule } from 'primeng/dialog';
import { ToolbarModule } from 'primeng/toolbar';
import { CommonModule } from '@angular/common';
import { Table, TableModule } from 'primeng/table';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { RatingModule } from 'primeng/rating';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { TagModule } from 'primeng/tag';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DatePickerModule } from 'primeng/datepicker';
import { FileUploadModule } from 'primeng/fileupload';
import { CompanydetailsService } from '../../../service/companydetails.service';
import { jwtDecode } from 'jwt-decode';


export interface StudentDocument {
  documentName?: string;
  documentType?: string;
  file?: File | null;
  documentDataBase64?: string; // ✅ Add this
}
export interface Qualification {
  qualificationName?: string;
  boardUniversity?: string;
  year?: number | null;
  percentage?: number | null; // ✅ can be empty
  grade?: string;
}


@Component({
  selector: 'app-add-student-admission',
  standalone: true,
  imports: [CommonModule,
     FormsModule,
     TableModule,
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
    FileUploadModule,
    InputIconModule,
    IconFieldModule,
    ConfirmDialogModule,
    DatePickerModule
  ],
  templateUrl: './add-student-admission.html',
  styleUrl: './add-student-admission.scss',
  providers: [MessageService, ProductService, ConfirmationService]
})
export class AddStudentAdmission {
  dropdownItem = null;
  dropdownItems = [
    { name: 'MALE', code: 'MALE' },
    { name: 'FEMALE', code: 'FEMALE' }
  ];
student: any;

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private Companyservice: CompanydetailsService
  ) { }

  CourseList: any[] = [];

  date2: any;

  submitted: boolean = false;

  AddStudentAdmissionDialog: boolean = false;
  QualificatinDialog: boolean = false;
  studentdocumentDialog = false;

  products = signal<Product[]>([]);
  loading: boolean = true;
  product!: Product;

  uploadedFiles: any[] = [];
  selectedProducts!: Product[] | null;

  tatusess: any[] | undefined;
  ngOnInit() {

    const token = localStorage.getItem('token');

    if (token) {
      const decoded: any = jwtDecode(token);

      const tallyPartnerId = decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
      const role = decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

      console.log("Role from token:", role);
      console.log("Tally Partner ID from token:", tallyPartnerId);
      this.studentFormData.tallyPartnerId = tallyPartnerId;

      if (role === "TallyPartner" && tallyPartnerId) {
        this.Companyservice.GetTallyPartnerCourses(tallyPartnerId).subscribe({
          next: (data: any[]) => {
            console.log("API Response:", data);

            if (Array.isArray(data)) {
              this.CourseList = data.map(course => ({
                label: `${course.label ?? ''} `,
                value: course.value ?? null,
                disabled: course.quantity === 0, // disable if no quantity,


              }));

              const firstAvailable = this.CourseList.find(c => !c.disabled);
              if (firstAvailable) {
                this.studentFormData.courseId = firstAvailable.value;
              }
            } else {
              this.CourseList = [];
            }
          },
          error: (err) => console.error(err)
        });
      }

    }
    this.loadStudentsAdmissionByTallyPartnerId();


  }


  openNew() {
    this.product = {};
    this.submitted = false;
    this.AddStudentAdmissionDialog = true;
  }

  hideDialog() {
    this.AddStudentAdmissionDialog = false;
    this.submitted = false;
  }

  // hideQualificationDialog() {
  //    this.QualificatinDialog = false;
  //     this.submitted = false;
  // }

  hidestudentdocumentDialog() {
    this.studentdocumentDialog = false;
    this.submitted = false;
  }

  //     QualificationopenNew() {
  //     this.product = {};
  //     this.submitted = false;
  //     this.QualificatinDialog = true;
  // }


  studentdocumentDialogNOpenew() {
    this.product = {};
    this.submitted = false;
    this.studentdocumentDialog = true;
  }


  onUpload(event: any) {
    for (const file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
  }


  //     documents: StudentDocument[] = [
  //   { documentName: '', documentType: '', file: null }
  // ];

  statuses = [
    { label: 'Aadhaar Card', value: 'Aadhaar Card' },
    { label: 'Marksheet', value: 'Marksheet' },
    { label: 'Photo', value: 'Photo' }
  ];


  genders = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' }

  ];




  //------------------------Add Qualification Student -------

  qualificationDialog = false; // must match the [(visible)] variable

  QualificationopenNew() {
    this.qualificationDialog = true;
  }

  hideQualificationDialog() {
    this.qualificationDialog = false;
    // this.selectedQualification = null; // example extra reset logic
  }

  // qualifications: Qualification[] = [
  //   { qualificationName: '', boardUniversity: '', year: null, percentage: null, grade: '' }
  // ];

  statusses = [
    { label: 'High School', value: 'High School' },
    { label: 'Intermediate', value: 'Intermediate' },
    { label: 'Graduate', value: 'Graduate' },
    { label: 'Post Graduate', value: 'Post Graduate' }
  ];

  addQualification() {
    this.qualifications.push({ qualificationName: '', boardUniversity: '', year: null, percentage: null, grade: '' });
  }

  removeQualification(index: number) {
    this.qualifications.splice(index, 1);
  }

  saveQualifications() {
    console.log(this.qualifications);
    // send to backend
  }
  //  Student Model
  saveDocuments() {
    console.log(this.studentFormData.documents);
    // send to backend
  }

  studentFormData = {
    firstName: '',
    lastName: '',
    fathername: '',
    mothername: '',
    email: '',
    phone: '',
    mobileNo: '',
    dateOfBirth: '',
    gender: '',
    courseId: 0,
    address: '',
    city: '',
    state: '',
    country: '',
    tallyPartnerId: 0,
    qualifications: [] as Qualification[],
    documents: [
      { documentName: '', documentType: '', file: null, documentDataBase64: '' }
    ] as StudentDocument[]
  };

  qualifications: Qualification[] = [
    { qualificationName: '', boardUniversity: '', year: null, percentage: null, grade: '' }
  ];

  // documents: StudentDocument[]=[
  //   { documentName: '', documentType: '', file: null, documentDataBase64: '' }
  // ];




  saveStudent() {
    // Attach dynamic arrays to student
    this.studentFormData.qualifications = this.qualifications;
    this.studentFormData.documents = this.studentFormData.documents.map(doc => ({
      documentName: doc.documentName,
      documentType: doc.documentType,
      documentDataBase64: (doc as any).documentDataBase64 || ''
    }));

    this.Companyservice.AdmitStudent(this.studentFormData).subscribe({
      next: (res) => {
        alert('Tally Partner added successfully');
        // this.resetForm();
        //this.getPartners(); // optional: reload list
      },
      error: (err) => console.error(err)
    });


  }


  onFileSelect(event: any, index: number) {
    const file = event.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Data = (reader.result as string).split(',')[1];
        this.studentFormData.documents[index].file = file;
        this.studentFormData.documents[index].documentDataBase64 = base64Data;
      };
      reader.readAsDataURL(file);
    }
  }

  addDocumentRow() {
    this.studentFormData.documents.push({
      documentName: '',
      documentType: '',
      file: null,
      documentDataBase64: ''
    });
  }

  removeDocumentRow(index: number) {
    this.studentFormData.documents.splice(index, 1);
  }


  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  StudentsAdmissionByTallyPartnerIdList: any[] = [];
  loadStudentsAdmissionByTallyPartnerId(): void {
    this.Companyservice.GetStudentsAdmissionByTallyPartnerId(this.studentFormData.tallyPartnerId).subscribe({
      next: (res) => {
        this.StudentsAdmissionByTallyPartnerIdList = res;  // ✅ Don’t push — always REPLACE
        this.loading = false;

        console.log('Institute List :', this.StudentsAdmissionByTallyPartnerIdList);

      },
      error: (err) => {
        this.loading = false;
        console.error('Error loading InstituteList ', err);

      }
    });

  }
}