import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class CompanydetailsService {

  //private apiUrls = `${environment.apiUrl}/Company/GetCompanyList`;

  constructor(private http: HttpClient, private router: Router) { }
// Get Company List Form
  // getCompanyList(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrls);
  // }
  private apiUrls = environment.apiUrl;
   getCompanyList() {
   return this.http.get<any[]>(`${this.apiUrls}/Company/GetCompanyList`);
  }


  // Add Course Details Details 
   AddCourse(data: any) : Observable<any> {
    return this.http.post(`${this.apiUrls}/Company/AddCourseDetails`, data);
  }


  // Update Course Details 
   updateCoursedetails(data: any) : Observable<any> {
    return this.http.put(`${this.apiUrls}/Company/UpdateCourseDetails`, data);
  }

    // Fetch Active Course Details
   GetActiveCourseDetails() {
   return this.http.get<any[]>(`${this.apiUrls}/Company/GetActiveCourseDetails`);
  }


  // Add Course Details Details 
   AddInstitute(data: any) : Observable<any> {
    return this.http.post(`${this.apiUrls}/Company/AddInstituteDetails`, data);
  }


  // Update Course Details 
   updateInstitute(data: any) : Observable<any> {
    return this.http.put(`${this.apiUrls}/Company/UpdateInstituteDetails`, data);
  }

    // Fetch Active Course Details
   GetActiveInstituteDetails() {
   return this.http.get<any[]>(`${this.apiUrls}/Company/GetActiveInstitutesDetails`);
  }


// Add Course Details Details 
   AddPlace(data: any) : Observable<any> {
    return this.http.post(`${this.apiUrls}/Company/AddPlaceDetails`, data);
  }


  // Update Course Details 
   updatePlace(data: any) : Observable<any> {
    return this.http.put(`${this.apiUrls}/Company/UpdatePlaceDetails`, data);
  }

    // Fetch Active Course Details
   GetActivePlaceDetails() {
   return this.http.get<any[]>(`${this.apiUrls}/Company/GetActivePlaceDetails`);
  }


  // Add Partner Details 
   AddMastertallypartnerDetails(data: any) : Observable<any> {
    return this.http.post(`${this.apiUrls}/Company/AddMastertallypartnerDetails`, data);
  }
// Update Partner Details 
   UpdateTallyMasterPartnerDetails(data: any) : Observable<any> {
    return this.http.put(`${this.apiUrls}/Company/UpdateTallyMasterPartnerDetails`, data);
  }

  // Fetch  Partner  Details  
  GetAllMasterTalltPartnerDetails(){
    return this.http.get<any[]>(`${this.apiUrls}/Company/GetAllMasterTalltPartnerDetails`)
  }
  // Fetch Active Institutes Detail
   GetActiveInstitutesDetails() {
   return this.http.get<any[]>(`${this.apiUrls}/Company/GetActiveInstitutesDetails`);
  }


  

  // Add Tally  Partner Details 
   AddTallyPartnerDetails(data: any) : Observable<any> {
    return this.http.post(`${this.apiUrls}/Company/AddTallyPartnerDetails`, data);
  }

  // Fetch  Get All Tally PartnerDetails 
  GetAllTallyPartnerDetails(){
    return this.http.get<any[]>(`${this.apiUrls}/Company/GetAllTallyPartnerDetails`)
  }

  // Update Partner Details 
   updateTallyPartnerdetails(data: any) : Observable<any> {
    return this.http.put(`${this.apiUrls}/Company/UpdateTallyPartnerDetails`, data);
  }

// Add Partner Details 
   AddCourseQuantity(data: any) : Observable<any> {
    return this.http.post(`${this.apiUrls}/Company/AddCourseQuantity`, data);
  }


  // Sell Course To Master Tally Partner
   SellCourseToMasterPartner(data: any) : Observable<any> {
    return this.http.post(`${this.apiUrls}/Company/SellCourseToMasterPartner`, data);
  }



  // Master Tally Partner Return Course To Company
   MasterTallyPartnerReturnCourseToCompany(data: any) : Observable<any> {
    return this.http.post(`${this.apiUrls}/Partner/MasterTallyPartnerReturnCourseToCompany`, data);
  }


   // Sell Course Company to tally partner
   SellCourseToTallyPartner(data: any) : Observable<any> {
    return this.http.post(`${this.apiUrls}/Company/SellCourseToTallyPartner`, data);
  }



   // Sell Course Master Tally to tally partner
   MasterTallyPartnerSellCourseToTallyPartner(data: any) : Observable<any> {
    return this.http.post(`${this.apiUrls}/Partner/MasterTallyPartnerSellCourseToTallyPartner`, data);
  }



  
  //Tally Partner Return Course To Master Tally Partner
   TallyPartnerReturnCourseToMasterPartner(data: any) : Observable<any> {
    return this.http.post(`${this.apiUrls}/TallyPartner/TallyPartnerReturnCourseToMasterPartner`, data);
  }


  //Get All details sales course Master tally partner to tal
 GetSellCourseMastertallypartnerToTallyPartner(){
    return this.http.get<any[]>(`${this.apiUrls}/Partner/GetSellCourseMastertallypartnerToTallyPartner`)
  }


  //Get Tally Partner Return Course To MasterPartner
 GetTallyPartnerReturnCourseToMasterPartner(){
    return this.http.get<any[]>(`${this.apiUrls}/TallyPartner/GetTallyPartnerReturnCourseToMasterPartner`)
  }


    //Get TallyPartner Total Returned Quantity Course To MasterPartner
 GetTallyPartnerTotalReturnedQuantityCourseToMasterPartner(){
    return this.http.get<any[]>(`${this.apiUrls}/TallyPartner/GetTallyPartnerTotalReturnedQuantityCourseToMasterPartner`)
  }



  
    //Get Master TallyPartner Total Returned Quantity Course To Company
 GetMasterTallyPartnerTotalReturnedQuantityCourseToCompany(){
    return this.http.get<any[]>(`${this.apiUrls}/Partner/GetMasterTallyPartnerTotalReturnedQuantityCourseToCompany`)
  }

      //Get TallyPartner Total Returned Quantity Course To MasterPartner
 GetMasterTallyPartnerReturnCourseToCompany(){
    return this.http.get<any[]>(`${this.apiUrls}/Partner/GetMasterTallyPartnerReturnCourseToCompany`)
  }


 //Get Comapny  Have total Course
   GetCompanyTotalCourseQuantity(){
    return this.http.get<any[]>(`${this.apiUrls}/Company/GetCompanyTotalCourseQuantity`)
  }


  // Get All Company Sell Course To Master Tally Partner
   GetAllCompanySellCourseToMaster() {
   return this.http.get<any[]>(`${this.apiUrls}/Company/GetAllCompanySellCourseToMaster`);
  }


   // Get AllC ompany Sell Course To TallyPartner
   GetAllCompanySellCourseToTallyPartner() {
   return this.http.get<any[]>(`${this.apiUrls}/Company/GetAllCompanySellCourseToTallyPartner`);
  }


   // Get AllC ompany Sell Course To TallyPartner
   GetRole() {
   return this.http.get<any[]>(`${this.apiUrls}/Company/GetRole`);
  }


GetMasterTallyPartnerById(partnerId: number) {
  return this.http.get<any>(`${this.apiUrls}/Company/GetMasterTallyPartnerById/${partnerId}`);
}


GetTallyPartnerById(tallypartnerId: number) {
  return this.http.get<any>(`${this.apiUrls}/Company/GetTallyPartnerById/${tallypartnerId}`);
}

// Tally course sell after that  student admission   course avaliable ya not 
GetTallyPartnerCourses(tallypartnerId: number) {
  return this.http.get<any>(`${this.apiUrls}/StudentsAdmission/GetTallyPartnerCourses/${tallypartnerId}`);
}

// Student admission
   AdmitStudent(data: any) : Observable<any> {
    return this.http.post(`${this.apiUrls}/StudentsAdmission/AdmitStudent`, data);
  }


  // Tally course sell after that  student admission   course avaliable ya not 
GetStudentsAdmissionByTallyPartnerId(tallypartnerId: number) {
  return this.http.get<any>(`${this.apiUrls}/StudentsAdmission/GetStudentsAdmissionByTallyPartnerId/${tallypartnerId}`);
}


GetTallyPartnerCourseSummary(tallypartnerId: number) {
  return this.http.get<any>(`${this.apiUrls}/Partner/GetTallyPartnerCourseSummary/${tallypartnerId}`);
}

}
