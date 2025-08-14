import { Routes } from '@angular/router';
import { ButtonDemo } from '../buttondemo/buttondemo';
import { ChartDemo } from '../chartdemo/chartdemo';
import { FileDemo } from '../filedemo/filedemo';
import { FormLayoutDemo } from '../formlayoutdemo/formlayoutdemo';
import { InputDemo } from '../inputdemo/inputdemo';
import { ListDemo } from '../listdemo/listdemo';
import { MediaDemo } from '../mediademo/mediademo';
import { MessagesDemo } from '../messagesdemo/messagesdemo';
import { MiscDemo } from '../miscdemo/miscdemo';
import { PanelsDemo } from '../panelsdemo/panelsdemo';
import { TimelineDemo } from '../timelinedemo/timelinedemo';
import { TableDemo } from '../tabledemo/tabledemo';
import { OverlayDemo } from '../overlaydemo/overlaydemo';
import { TreeDemo } from '../treedemo/treedemo';
import { MenuDemo } from '../menudemo/menudemo';
import { Companydetails } from '../companydetails/companydetails';
import { Partnerdetails } from '../partner/partnerdetails/partnerdetails';
import { PartnerdetailsAdd } from '../partner/partnerdetails-add/partnerdetails-add';
import { AddCoursesDetails } from '../courses/add-courses-details/add-courses-details';
import { AddinstituteDetails } from '../institute/addinstitute-details/addinstitute-details';
import { AddPlaceDetails } from '../place/add-place-details/add-place-details';
import { TallyPartnerdetails } from '../TallyPartner/tally-partnerdetails/tally-partnerdetails';
import { AddTallyPartnerDetails } from '../TallyPartner/add-tally-partner-details/add-tally-partner-details';
import { Addcoursequantity } from '../coursequantity/addcoursequantity/addcoursequantity';
import { SellCourseToMTP } from '../SellCourse/sell-course-to-mtp/sell-course-to-mtp';
import { SellCourseToTP } from '../SellCourse/sell-course-to-tp/sell-course-to-tp';
import { SellCourseToMTPDetails } from '../SellCourse/sell-course-to-mtpdetails/sell-course-to-mtpdetails';
import { SellCourseToTPDetails } from '../SellCourse/sell-course-to-tpdetails/sell-course-to-tpdetails';
import { SellCourseMTPToTP } from '../MTPsellCourse/sell-course-mtpto-tp/sell-course-mtpto-tp';
import { AddPartnerDetails } from '../AddPartnerDetails/add-partner-details/add-partner-details';
import { SellCourseReturnMtptoCompany } from '../SellCourse/sell-course-return-mtpto-company/sell-course-return-mtpto-company';
import { SellCourseReturntptoMtp } from '../SellCourse/sell-course-returntpto-mtp/sell-course-returntpto-mtp';
import { SellCourseReturntptoMtpDetails } from '../SellCourse/sell-course-returntpto-mtp-details/sell-course-returntpto-mtp-details';
import { SellCourseReturntotalQtytptoMtpDetails } from '../SellCourse/sell-course-returntotal-qtytpto-mtp-details/sell-course-returntotal-qtytpto-mtp-details';
import { SellCourseReturnMtptoCompanyDetails } from '../SellCourse/sell-course-return-mtpto-company-details/sell-course-return-mtpto-company-details';
import { SellCourseReturntotalQtymtptoCompanyDetails } from '../SellCourse/sell-course-returntotal-qtymtpto-company-details/sell-course-returntotal-qtymtpto-company-details';
import { CoursequantityDetails } from '../coursequantity/coursequantity-details/coursequantity-details';
import { AddStudentAdmission } from '../StudentAdmission/add-student-admission/add-student-admission';
import { UsedCourseSummaryByTallyPartnerId } from '../CourseSummary/used-course-summary-by-tally-partner-id/used-course-summary-by-tally-partner-id';
import { SellCourseMtptotpdetails } from '../SellCourse/sell-course-mtptotpdetails/sell-course-mtptotpdetails';

export default [
    { path: 'Companydetails', data: { breadcrumb: 'company' }, component: Companydetails },
    { path: 'Partnerdetails', data: { breadcrumb: 'Partnerdetails' }, component: Partnerdetails },
    { path: 'PartnerdetailsAdd', data: { breadcrumb: 'Partnerdetails' }, component: PartnerdetailsAdd },
    { path: 'AddCoursesDetails', data: { breadcrumb: 'AddCoursesDetails' }, component: AddCoursesDetails },
    { path: 'AddinstituteDetails', data: { breadcrumb: 'AddinstituteDetails' }, component: AddinstituteDetails },
    { path: 'AddPlaceDetails', data: { breadcrumb: 'AddPlaceDetails' }, component: AddPlaceDetails },
    { path: 'TallyPartnerdetails', data: { breadcrumb: 'TallyPartnerdetails' }, component: TallyPartnerdetails },
    { path: 'AddTallyPartnerDetails', data: { breadcrumb: 'AddTallyPartnerDetails' }, component: AddTallyPartnerDetails },
    { path: 'Addcoursequantity', data: { breadcrumb: 'Addcoursequantity' }, component: Addcoursequantity },
    { path: 'SellCourseToMTP', data: { breadcrumb: 'SellCourseToMTP' }, component: SellCourseToMTP },
    { path: 'SellCourseToMTPDetails', data: { breadcrumb: 'SellCourseToMTPDetails' }, component: SellCourseToMTPDetails },
    { path: 'SellCourseToTP', data: { breadcrumb: 'SellCourseToTP' }, component: SellCourseToTP },
    { path: 'SellCourseToTPDetails', data: { breadcrumb: 'SellCourseToTPDetails' }, component: SellCourseToTPDetails },
    { path: 'SellCourseMTPToTP', data: { breadcrumb: 'SellCourseMTPToTP' }, component: SellCourseMTPToTP },
    { path: 'SellCourseReturnMtptoCompany', data: { breadcrumb: 'SellCourseReturnMtptoCompany' }, component: SellCourseReturnMtptoCompany },
    { path: 'SellCourseReturntptoMtp', data: { breadcrumb: 'SellCourseReturntptoMtp' }, component: SellCourseReturntptoMtp },
    { path: 'SellCourseReturntptoMtpDetails', data: { breadcrumb: 'SellCourseReturntptoMtpDetails' }, component: SellCourseReturntptoMtpDetails },
    { path: 'SellCourseReturntotalQtytptoMtpDetails', data: { breadcrumb: 'SellCourseReturntotalQtytptoMtpDetails' }, component: SellCourseReturntotalQtytptoMtpDetails },
    { path: 'SellCourseReturnMtptoCompanyDetails', data: { breadcrumb: 'SellCourseReturnMtptoCompanyDetails' }, component: SellCourseReturnMtptoCompanyDetails },
    { path: 'AddPartnerDetails', data: { breadcrumb: 'AddPartnerDetails' }, component: AddPartnerDetails },
    { path: 'SellCourseReturntotalQtymtptoCompanyDetails', data: { breadcrumb: 'SellCourseReturntotalQtymtptoCompanyDetails' }, component: SellCourseReturntotalQtymtptoCompanyDetails },
    { path: 'CoursequantityDetails', data: { breadcrumb: 'CoursequantityDetails' }, component: CoursequantityDetails },
    { path: 'AddStudentAdmission', data: { breadcrumb: 'AddStudentAdmission' }, component: AddStudentAdmission },
    { path: 'SellCourseMtptotpdetails', data: { breadcrumb: 'SellCourseMtptotpdetails' }, component: SellCourseMtptotpdetails },
    { path: 'UsedCourseSummaryByTallyPartnerId', data: { breadcrumb: 'UsedCourseSummaryByTallyPartnerId' }, component: UsedCourseSummaryByTallyPartnerId },
    { path: 'button', data: { breadcrumb: 'Button' }, component: ButtonDemo },
    { path: 'charts', data: { breadcrumb: 'Charts' }, component: ChartDemo },
    { path: 'file', data: { breadcrumb: 'File' }, component: FileDemo },
    { path: 'formlayout', data: { breadcrumb: 'Form Layout' }, component: FormLayoutDemo },
    { path: 'input', data: { breadcrumb: 'Input' }, component: InputDemo },
    { path: 'list', data: { breadcrumb: 'List' }, component: ListDemo },
    { path: 'media', data: { breadcrumb: 'Media' }, component: MediaDemo },
    { path: 'message', data: { breadcrumb: 'Message' }, component: MessagesDemo },
    { path: 'misc', data: { breadcrumb: 'Misc' }, component: MiscDemo },
    { path: 'panel', data: { breadcrumb: 'Panel' }, component: PanelsDemo },
    { path: 'timeline', data: { breadcrumb: 'Timeline' }, component: TimelineDemo },
    { path: 'table', data: { breadcrumb: 'Table' }, component: TableDemo },
    { path: 'overlay', data: { breadcrumb: 'Overlay' }, component: OverlayDemo },
    { path: 'tree', data: { breadcrumb: 'Tree' }, component: TreeDemo },
    { path: 'menu', data: { breadcrumb: 'Menu' }, component: MenuDemo },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
