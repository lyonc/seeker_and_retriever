import { Component, OnInit } from '@angular/core';
import { Job } from '../jobs/shared/job.model';
import { JobService } from '../jobs/shared/job.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  jobs: Job[] = [];

  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.getJobs();
  }

  getJobs(): void {
    this.jobService.getJobsPublishedByMe(1)
      .subscribe(jobs => this.jobs = jobs);
  }
}
