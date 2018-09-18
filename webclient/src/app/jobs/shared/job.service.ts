import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Job } from './job.model';
import { LogService } from '../../shared/log.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class JobService {

  private jobsUrl = 'api/jobs';  // URL to web api

  constructor(
    private http: HttpClient,
    private logService: LogService
  ) { }

  /** GET Jobs from the server */
  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.jobsUrl + '/all')
    .pipe(
      tap(_ => this.log('fetched Jobs')),
      catchError(this.handleError('getJobs', []))
    );
  }

  getJobsPublishedByMe(id: number): Observable<Job[]> {
    return this.http.get<Job[]>(this.jobsUrl + '/publishedbyme')
    .pipe(
      tap(_ => this.log('Fetched Jobs Published By Me.')),
      catchError(this.handleError('getJobsPublishedByMe', []))
    );
  }

  /** GET Job by id. Return `undefined` when id not found */
  getJobNo404<Data>(id: number): Observable<Job> {
    const url = `${this.jobsUrl}/?id=${id}`;

    return this.http.get<Job[]>(url)
    .pipe(
      map(Jobs => Jobs[0]), // return a {0|1} element array
      tap(h => {
        const outcome = h ? 'fetched' : 'did not find';
        this.log(`${outcome} Job id=${id}`);
      }),
      catchError(this.handleError<Job>(`getJob id=${id}`))
    );
  }

  /** GET Job by id. Will 404 if id not found */
  getJob(id: number): Observable<Job> {
    const url = `${this.jobsUrl}/${id}`;
    return this.http.get<Job>(url).pipe(
      tap(_ => this.log(`fetched Job id=${id}`)),
      catchError(this.handleError<Job>(`getJob id=${id}`))
    );
  }

  /* GET Jobs whose name contains search term */
  searchJobs(term: string): Observable<Job[]> {
    if (!term.trim()) {
      // if not search term, return empty Job array.
      return of([]);
    }

    return this.http.get<Job[]>(`${this.jobsUrl}/?name=${term}`)
      .pipe(
        tap(_ => this.log(`found Jobs matching "${term}"`)),
        catchError(this.handleError<Job[]>('searchJobs', []))
      );
  }

  /** POST: add a new Job to the server */
  addJob(job: Job): Observable<Job> {
    return this.http.post<Job>(this.jobsUrl, job, httpOptions)
    .pipe(
      tap((newbee: Job) => this.log(`added Job w/ id=${newbee.id}`)),
      catchError(this.handleError<Job>('addJob'))
    );
  }

  /** DELETE: delete the Job from the server */
  deleteJob(job: Job | number): Observable<Job> {
    const id = typeof job === 'number' ? job : job.id;
    const url = `${this.jobsUrl}/${id}`;

    return this.http.delete<Job>(url, httpOptions)
    .pipe(
      tap(_ => this.log(`deleted Job id=${id}`)),
      catchError(this.handleError<any>('deletedJob'))
    );
  }

  //////// Save methods //////////

  /** PUT: update the Job on the server */
  updateJob(job: Job): Observable<any> {
    return this.http.put(this.jobsUrl, job, httpOptions)
    .pipe(
      tap(_ => this.log(`updated Job id=${job.id}`)),
      catchError(this.handleError<any>('updateJob'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a JobService message with the MessageService */
  private log(log: string) {
    this.logService.add(`JobService: ${log}`);
  }
}
