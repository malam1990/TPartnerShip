import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { CompanydetailsService } from '../../../service/companydetails.service';
import { ActivatedRoute } from '@angular/router';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { TextareaModule } from 'primeng/textarea';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FluidModule } from 'primeng/fluid';
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
  selector: 'app-add-place-details',
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
  templateUrl: './add-place-details.html',
  styleUrl: './add-place-details.scss',
   providers: [MessageService, ConfirmationService]
})
export class AddPlaceDetails {
  isVisible = true;
  CourseQtyDialog: boolean = false;
  submitted: boolean = false;
   statuses!: any[];
   @ViewChild('dt') dt!: Table;

PlaceList: any[] = [];
loading: boolean = true;
selectedCourses: any[] = [];

constructor(
         private messageService: MessageService,
        private confirmationService: ConfirmationService,
        private Companyservice: CompanydetailsService
    ) {}

 
    ngOnInit() {
        this.loadPlaceList();
    }

loadPlaceList(): void {
  this.Companyservice.GetActivePlaceDetails().subscribe({
    next: (res) => {
      this.PlaceList = res;  // ✅ Don’t push — always REPLACE
      this.loading = false;
   
      console.log('Course List List:', this.PlaceList); 
   
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



  editPlace(place: any) {
  this.PlaceFormData = { ...place }; // ✅ Copy data into form model
  this.CourseQtyDialog = true;         // ✅ Open the popup
}


resetPlaceForm() {
  this.PlaceFormData = {
     placeId: 0,
  placeName: '',
  isActive: true,
  };
  this.submitted = false;
}

   hideDialog() {
        this.CourseQtyDialog = false;
        this.resetPlaceForm(); 
        this.submitted = false;
    }

PlaceFormData = {
  placeId: 0,
  placeName: '',
  isActive: true,
  };







savePlace() {
  this.submitted = true;

  if (!this.PlaceFormData.placeName) return;

  if (this.PlaceFormData.placeId === 0) {

  this.confirmAddPlace();
   
  } else {

    this.confirmUpdatePlace();
   
  }
}

addCourse() {
  this.Companyservice.AddPlace(this.PlaceFormData).subscribe({
    next: () => {
      this.messageService.add({
        severity: 'success',
        summary: 'Added',
        detail: 'Place added successfully',
        life: 3000
      });
      this.CourseQtyDialog = false;
      this.resetPlaceForm();
      this.loadPlaceList();
    },
    error: (err) => {
      console.error(err);
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Add failed', life: 3000 });
    }
  });
}

updateCourse() {
  this.Companyservice.updatePlace(this.PlaceFormData).subscribe({
    next: () => {
      this.messageService.add({
        severity: 'success',
        summary: 'Updated',
        detail: 'Course updated successfully',
        life: 3000
      });
      this.CourseQtyDialog = false;
      this.resetPlaceForm();
      this.loadPlaceList();
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
      this.addCourse(); // Calls the actual method
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

  

}

