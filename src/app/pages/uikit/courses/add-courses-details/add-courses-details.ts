import { CompanydetailsService } from '../../../service/companydetails.service';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { Table, TableModule } from 'primeng/table';
import { ProductService } from '../../../service/product.service';
import { ConfirmationService, MessageService } from 'primeng/api';
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
  selector: 'app-add-courses-details',
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
  templateUrl: './add-courses-details.html',
  styleUrl: './add-courses-details.scss',
       providers: [MessageService, ProductService, ConfirmationService]
})
export class AddCoursesDetails {
  isVisible = true;
  CourseQtyDialog: boolean = false;
  submitted: boolean = false;
   statuses!: any[];
   @ViewChild('dt') dt!: Table;

CourseList: any[] = [];
loading: boolean = true;
selectedCourses: any[] = [];

constructor(
         private messageService: MessageService,
        private confirmationService: ConfirmationService,
        private Companyservice: CompanydetailsService
    ) {}

 
    ngOnInit() {
        this.loadCourseList();
    }

loadCourseList(): void {
  this.Companyservice.GetActiveCourseDetails().subscribe({
    next: (res) => {
      this.CourseList = res;  // ✅ Don’t push — always REPLACE
      this.loading = false;
   
      console.log('Course List List:', this.CourseList); 
   
    },
    error: (err) => {
        this.loading = false;
      console.error('Error loading partner list', err);
      
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



  editCourse(course: any) {
  this.CourseFormData = { ...course }; // ✅ Copy data into form model
  this.CourseQtyDialog = true;         // ✅ Open the popup
}


resetCourseForm() {
  this.CourseFormData = {
    courseId: 0,
    courseName: '',
    isActive: true
  };
  this.submitted = false;
}

   hideDialog() {
        this.CourseQtyDialog = false;
        this.resetCourseForm(); 
        this.submitted = false;
    }

   CourseFormData = {
  courseId: 0,
  courseName: '',
  isActive: true,
  };







saveProduct() {
  this.submitted = true;

  if (!this.CourseFormData.courseName) return;

  if (this.CourseFormData.courseId === 0) {

  this.confirmAddCourse();
   
  } else {

    this.confirmUpdateCourse();
   
  }
}

addCourse() {
  this.Companyservice.AddCourse(this.CourseFormData).subscribe({
    next: () => {
      this.messageService.add({
        severity: 'success',
        summary: 'Added',
        detail: 'Course added successfully',
        life: 3000
      });
      this.CourseQtyDialog = false;
      this.resetCourseForm();
      this.loadCourseList();
    },
    error: (err) => {
      console.error(err);
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Add failed', life: 3000 });
    }
  });
}

updateCourse() {
  this.Companyservice.updateCoursedetails(this.CourseFormData).subscribe({
    next: () => {
      this.messageService.add({
        severity: 'success',
        summary: 'Updated',
        detail: 'Course updated successfully',
        life: 3000
      });
      this.CourseQtyDialog = false;
      this.resetCourseForm();
      this.loadCourseList();
    },
    error: (err) => {
      console.error(err);
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Update failed', life: 3000 });
    }
  });
}



confirmAddCourse() {
  this.confirmationService.confirm({
    message: 'Are you sure you want to add this course?',
    header: 'Confirm Add',
    icon: 'pi pi-plus-circle',
    accept: () => {
      this.addCourse(); // Calls the actual method
    }
  });
}

confirmUpdateCourse() {
  this.confirmationService.confirm({
    message: 'Are you sure you want to update this course?',
    header: 'Confirm Update',
    icon: 'pi pi-pencil',
    accept: () => {
      this.updateCourse(); // Calls the actual method
    }
  });
}



//  saveProduct() {
//   this.submitted = true;

//   if (!this.CourseFormData.courseName) return;

//   if (this.CourseFormData.courseId === 0) {

//   this.confirmAddCourse();
//     // ADD new course
    
//     this.Companyservice.AddCourse(this.CourseFormData).subscribe({
//       next: (res: any) => {
//         this.messageService.add({
//           severity: 'success',
//           summary: 'Successful',
//           detail: 'Course Added Successfully',
//           life: 3000
//         });

//       // open popup
//         this.CourseQtyDialog = false;
//          this.resetCourseForm();
//         this.submitted = false;

//         // ✅ Reload the course list
//         this.loadCourseList();
//       },
//       error: (err: any) => {
//         console.error(err);
//         this.messageService.add({
//           severity: 'error',
//           summary: 'Error',
//           detail: 'Failed to Add Course',
//           life: 3000
//         });
//       }
//     });
//   } else {

//     this.confirmUpdateCourse();
//     //UPDATE existing course
//     this.Companyservice.updateCoursedetails(this.CourseFormData).subscribe({
//       next: (res: any) => {
//         this.messageService.add({
//           severity: 'success',
//           summary: 'Successful',
//           detail: 'Course Updated Successfully',
//           life: 3000
//         });

//         this.CourseQtyDialog = false;
//         this.submitted = false;
//         this.resetCourseForm();
//         // ✅ Reload the list after update
//         this.loadCourseList();
//       },
//       error: (err: any) => {
//         console.error(err);
//         this.messageService.add({
//           severity: 'error',
//           summary: 'Error',
//           detail: 'Failed to Update Course',
//           life: 3000
//         });
//       }
//     });
//   }
// }



}
