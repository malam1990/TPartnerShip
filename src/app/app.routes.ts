import { Routes } from '@angular/router';
import { AppLayout } from '../app/layout/component/app.layout/app.layout';
import { Dashboard } from '../app/pages/dashborad/dashborad';
import { Documentation } from '../app/pages/documentation/documentation';
import { Landing } from '../app/pages/landing/landing';
import { Notfound } from '../app/pages/notfound/notfound';
import { PartnerdetailsAdd } from './pages/uikit/partner/partnerdetails-add/partnerdetails-add';
import { AddTallyPartnerDetails } from './pages/uikit/TallyPartner/add-tally-partner-details/add-tally-partner-details';
import { authGuard } from './pages/service/auth.guard-guard';
import { Login } from './pages/auth/login/login';

export const appRoutes: Routes = [

     {
    path: '',
     component: Landing, // ✅ login layout (no sidebar)
    children: [
     { path: '', component: Landing },      // homepage
      { path: 'login', component: Login }  
    ]
  },

  
    {
        path: '',
        component: AppLayout,
        canActivate: [authGuard],
        children: [
            { path: 'login', component: Login },
            { path: 'dashboard', component: Dashboard },
            { path: 'uikit', loadChildren: () => import('../app/pages/uikit/uikit.routes/uikit.routes') },
            { path: 'partnerdetails-add', component: PartnerdetailsAdd },
            { path: 'AddTallyPartnerDetails', component: AddTallyPartnerDetails },
            { path: 'documentation', component: Documentation },
            { path: 'pages', loadChildren: () => import('../app/pages/pages.routes') }
        ] 
    },  
   
    { path: 'notfound', component: Notfound },
    { path: 'auth', loadChildren: () => import('../app/pages/auth/auth.routes/auth.routes') },
    { path: '**', redirectTo: '/notfound' }
];
