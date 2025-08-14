import { Component } from '@angular/core';
import { NotificationsWidget } from './components/notificationswidget/notificationswidget';
import { StatsWidget } from './components/statswidget/statswidget';
import { RecentSalesWidget } from './components/recentsaleswidget/recentsaleswidget';
import { BestSellingWidget } from './components/bestsellingwidget/bestsellingwidget';
import { RevenueStreamWidget } from './components/revenuestreamwidget/revenuestreamwidget';

@Component({
    selector: 'app-dashboard',
     standalone: true, 
    imports: [StatsWidget, RecentSalesWidget, BestSellingWidget, RevenueStreamWidget, NotificationsWidget],
  templateUrl: './dashborad.html',
  styleUrl: './dashborad.scss'
})
export class Dashboard {}