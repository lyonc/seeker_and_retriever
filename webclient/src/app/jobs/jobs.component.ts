import { Component, OnInit } from '@angular/core';
import { Job } from './shared/job.model';
import { JobService } from './shared/job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobs: Job[];

  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.getJobs();
  }

  getJobs(): void {
    this.jobService.getJobs()
        .subscribe(jobs => this.jobs = jobs);
  }

  add(title: string, description: string): void {
    title = title.trim();
    if (!title) { return; }
    this.jobService.addJob({ title, description } as Job)
        .subscribe(job => {
          this.jobs.push(job);
        });
  }

  delete(job: Job): void {
    this.jobs = this.jobs.filter(h => h !== job);
    this.jobService.deleteJob(job).subscribe();
  }

}
