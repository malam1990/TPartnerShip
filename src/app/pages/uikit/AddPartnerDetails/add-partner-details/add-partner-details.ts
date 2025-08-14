import { Component } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CompanydetailsService } from '../../../service/companydetails.service';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { SelectModule } from 'primeng/select';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { Fluid } from 'primeng/fluid';
import { CustomerService } from '../../../service/customer.service';
import { PopoverModule } from 'primeng/popover';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-partner-details',
   imports: [
    CommonModule,
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
    ToggleSwitchModule,
    Fluid
],
  templateUrl: './add-partner-details.html',
  styleUrl: './add-partner-details.scss',
   providers: [ConfirmationService, MessageService, CustomerService, ProductService, PopoverModule, ConfirmPopupModule,]
})
export class AddPartnerDetails {
   
 RoleForm = { roleId: 0 };
  RoleList: any[] = [];

  constructor(
              private Companyservice: CompanydetailsService,
              private router: Router
    ) {}

  ngOnInit(): void {

    
this.Companyservice.GetRole().subscribe(data => {
    // ✅ Only keep MasterTallyPartner and TallyPartner
    this.RoleList = data.filter(role =>
      role.roleName === 'MasterTallyPartner' || role.roleName === 'TallyPartner'
    );
  });

}


       

onRoleChange(event: any) {
    const selectedRole = this.RoleList.find(r => r.roleId === this.RoleForm.roleId);

    if (!selectedRole) return;

    if (selectedRole.roleName === 'MasterTallyPartner') {
      console.log('Selected Role ID:', this.RoleForm.roleId); 
     this.router.navigate(['/partnerdetails-add'], {
      queryParams: { roleId: this.RoleForm.roleId }
    });
      
    } else if (selectedRole.roleName === 'TallyPartner') {
      console.log('Selected Role ID:', this.RoleForm.roleId); 
     this.router.navigate(['/AddTallyPartnerDetails'], {
      queryParams: { roleId: this.RoleForm.roleId }
    }); 
    }
  }

}
