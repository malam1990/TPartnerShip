import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from '../app.menuitem/app.menuitem';
import { AuthService } from '../../../pages/service/auth.service';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    templateUrl: './app.menu.html',
    styleUrl: './app.menu.scss'
})
export class AppMenu {
    model: MenuItem[] = [];
    role: string | null = null;

    constructor(private authService: AuthService) { }

    ngOnInit() {
        // ✅ Get role from JWT
        this.role = this.authService.getUserRole();
        console.log('Role in AppMenu:', this.role);

        // ✅ Define all menu items with allowed roles
        const allMenu: (MenuItem & { roles?: string[] })[] = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'], roles: ['Company', 'MasterTallyPartner', 'TallyPartner'] }
                ]
            },
            {
                label: 'UI Components',
                roles: ['Company', 'MasterTallyPartner', 'TallyPartner'],
                items: [
                    { label: 'Company', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/Companydetails'], roles: ['Company'] },

                    {
                        label: 'Add Partner',
                        icon: 'pi pi-fw pi-id-card',
                        roles: ['Company'],
                        items: [
                            { label: 'Add Partner Details', icon: 'pi pi-fw pi-building', routerLink: ['/uikit/AddPartnerDetails'] }
                        ]
                    },

                    {
                        label: 'Institute',
                        icon: 'pi pi-fw pi-building',
                        roles: ['Company'],
                        items: [
                            { label: 'Add Institute Details', icon: 'pi pi-fw pi-building', routerLink: ['/uikit/AddinstituteDetails'] }
                        ]
                    },

                    {
                        label: 'Place',
                        icon: 'pi pi-fw pi-home',
                        roles: ['Company'],
                        items: [
                            { label: 'Add Place Details', icon: 'pi pi-fw pi-home', routerLink: ['/uikit/AddPlaceDetails'] }
                        ]
                    },

                    {
                        label: 'Course',
                        icon: 'pi pi-fw pi-book',
                        roles: ['Company'],
                        items: [
                            { label: 'Add Course Details', icon: 'pi pi-fw pi-book', routerLink: ['/uikit/AddCoursesDetails'] },
                            { label: 'Add Course Quantity Details', icon: 'pi pi-fw pi-book', routerLink: ['/uikit/Addcoursequantity'] },
                            { label: 'Company Total Quantity', icon: 'pi pi-fw pi-book', routerLink: ['/uikit/CoursequantityDetails'] }
                        ]
                    },

                    {
                        label: 'Partner Details',
                        icon: 'pi pi-fw pi-user',
                        roles: ['Company'],
                        items: [
                            { label: 'Tally Master Partner Details', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/Partnerdetails'] },
                            { label: 'Tally Partner Details', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/TallyPartnerdetails'] }
                        ]
                    },

                    {
                        label: 'Sell Course Company',
                        icon: 'pi pi-fw pi-book',
                        roles: ['Company'],
                        items: [
                            { label: 'Sell Course To Master Tally Partner', icon: 'pi pi-fw pi-book', routerLink: ['/uikit/SellCourseToMTP'] },
                            { label: 'Sell Course To Master Tally Partner Details', icon: 'pi pi-fw pi-book', routerLink: ['/uikit/SellCourseToMTPDetails'] },
                            { label: 'Total Sell Course Return From Details', icon: 'pi pi-fw pi-book', routerLink: ['/uikit/SellCourseReturntotalQtymtptoCompanyDetails'] },
                            { label: 'Sell Course Return From Details', icon: 'pi pi-fw pi-book', routerLink: ['/uikit/SellCourseReturnMtptoCompanyDetails'] }]
                    },

                    {
                        label: 'Master Tally Partner Sale',
                        icon: 'pi pi-fw pi-book',
                        roles: ['MasterTallyPartner', 'Company'],
                        items: [
                            { label: 'MTP Sale', icon: 'pi pi-fw pi-book', routerLink: ['/uikit/SellCourseMTPToTP'] },
                            { label: 'Sales Return to Company', icon: 'pi pi-fw pi-book', routerLink: ['/uikit/SellCourseReturnMtptoCompany'] },
                            { label: 'Sell Course To Master Tally Inventory Report', icon: 'pi pi-fw pi-book', routerLink: ['/uikit/SellCourseMtptotpdetails'] },
                            { label: 'Sell Course Return MTP to Company Total', icon: 'pi pi-fw pi-book', routerLink: ['/uikit/SellCourseReturntotalQtymtptoCompanyDetails'] },
                            { label: 'Sell Course TP Return MTP Total Qty', icon: 'pi pi-fw pi-book', routerLink: ['/uikit/SellCourseReturntotalQtytptoMtpDetails'] },
                            //   { label: 'Sell Course TP Return MTP', icon: 'pi pi-fw pi-book', routerLink: ['/uikit/SellCourseReturntptoMtp'] },
                            { label: 'Used Course Tally Partner', icon: 'pi pi-fw pi-book', routerLink: ['/uikit/UsedCourseSummaryByTallyPartnerId'] }
                        ]
                    },

                    {
                        label: 'Tally Partner Sale',
                        icon: 'pi pi-fw pi-book',
                        roles: ['TallyPartner', 'Company'],
                        items: [
                            { label: 'Sell Course TP Return MTP', icon: 'pi pi-fw pi-book', routerLink: ['/uikit/SellCourseReturntptoMtp'] },
                            { label: 'Sell Course Return to Master Tally Partner', icon: 'pi pi-fw pi-book', routerLink: ['/uikit/SellCourseReturntptoMtpDetails'] },
                            { label: 'Sell Course Return TP to MTP Total', icon: 'pi pi-fw pi-book', routerLink: ['/uikit/SellCourseReturntotalQtytptoMtpDetails'] }
                        ]
                    },

                    { label: 'Add Student Admission', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/AddStudentAdmission'], roles: ['Company', 'TallyPartner'] }
                ]
            }
        ];

        // ✅ Recursive filter by role
        const filterByRole = (items: (MenuItem & { roles?: string[] })[]): MenuItem[] => {
            return items
                .filter(item => !item.roles || item.roles.includes(this.role!))
                .map(item => ({
                    ...item,
                    items: item.items ? filterByRole(item.items as (MenuItem & { roles?: string[] })[]) : undefined
                }));
        };

        // ✅ Set filtered menu to model
        this.model = filterByRole(allMenu);
    }
}
