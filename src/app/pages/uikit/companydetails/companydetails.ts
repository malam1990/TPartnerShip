import { Component, OnInit } from '@angular/core';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { CompanydetailsService } from '../../service/companydetails.service';

@Component({
  selector: 'app-companydetails',
      standalone: true,
  imports: [InputTextModule, FluidModule, ButtonModule, SelectModule, FormsModule, TextareaModule],
  templateUrl: './companydetails.html',
  styleUrl: './companydetails.scss'
})


export class Companydetails implements OnInit {
  companyName	: string = '';
  ownerName		: string = '';
  email: string='';
  phone	:string='';
  gstNumber	:string='';
  panNumber	:string='';
  cinNumber	:string='';
  website	:string='';
  address	:string='';
  city	:string='';
  state:string='';
  country	:string='';
  pincode	:string='';
  registrationDate:string='';
  isActive:Boolean=false;


  constructor(private Companyservice: CompanydetailsService) {}

   ngOnInit(): void {
    this.Companyservice.getCompanyList().subscribe(companies => {
      if (companies && companies.length > 0) {
        this.companyName = companies[0].companyName;
        this.ownerName = companies[0].ownerName;
        this.email =companies[0].email;
        this.phone =companies[0].phone;
        this.gstNumber=companies[0].gstNumber;
        this.panNumber = companies[0].panNumber;
        this.cinNumber = companies[0].cinNumber;
        this.website  = companies[0].website;
        this.address =companies[0].address;
        this.city = companies[0].city;
        this.state = companies[0].state;
        this.country = companies[0].country;
        this.pincode =companies[0].pincode;
        this.registrationDate = companies[0].registrationDate;
       console.log(companies); // assuming company object has 'name' property
      }
    });
  }
} 