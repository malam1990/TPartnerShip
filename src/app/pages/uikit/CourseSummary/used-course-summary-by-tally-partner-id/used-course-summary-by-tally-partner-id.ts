import { Component, ChangeDetectorRef } from '@angular/core';
import { CompanydetailsService } from '../../../service/companydetails.service';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';

export interface TallyPartner {
  tallypartnerId: number;
  name: string;
  courseSummary?: TallyPartnerCourseSummary[];
}

export interface TallyPartnerCourseSummary {
  courseName: string;
  courseId: number;
  totalQuantity: number;
  usedQuantity: number;
  remainingQuantity: number | null;
}

@Component({
  selector: 'app-used-course-summary-by-tally-partner-id',
  imports: [TableModule, TagModule, ToastModule, RatingModule, ButtonModule, CommonModule],
  templateUrl: './used-course-summary-by-tally-partner-id.html',
  styleUrls: ['./used-course-summary-by-tally-partner-id.scss'],
    providers: [ MessageService]
})
export class UsedCourseSummaryByTallyPartnerId {
  tppartnerList: TallyPartner[] = [];
  expandedRows: { [key: string]: boolean } = {};
  loading = false;

  constructor(private companyService: CompanydetailsService,private messageService: MessageService,  private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.loadTallyPartnerList();
  }

  loadTallyPartnerList(): void {
    this.loading = true;
    this.companyService.GetAllTallyPartnerDetails().subscribe({
      next: (res) => {
        this.tppartnerList = res.map((p: any) => ({
          tallypartnerId: p.tallypartnerId,
          name: p.tpname,
          courseSummary: p.courseSummary ?? []
        }));
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        console.error('Error loading partner list', err);
      }
    });
  }

  onRowExpand(event: any) {
    const partner = event.data;
    const key = partner.tallypartnerId.toString();

    // Mark row expanded
    this.expandedRows = { ...this.expandedRows, [key]: true };

    // If no courseSummary or empty, fetch it
    if (!partner.courseSummary || partner.courseSummary.length === 0) {
      this.companyService.GetTallyPartnerCourseSummary(partner.tallypartnerId).subscribe({
        next: (data) => {
          partner.courseSummary = data ?? [];
          this.cdr.detectChanges(); // refresh view
        },
        error: (err) => console.error('Error loading course summary', err)
      });
    }
  }

  onRowCollapse(event: any) {
    const partner = event.data;
    const key = partner.tallypartnerId.toString();

    // Remove from expandedRows
    const { [key]: removed, ...rest } = this.expandedRows;
    this.expandedRows = rest;
  }
}
