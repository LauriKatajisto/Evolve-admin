import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {HttpClient, HttpHeaders } from '@angular/common/http';

import { Workout } from './workout';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private serviceUrl = 'https://evolve-fitness.herokuapp.com/workout';

  constructor(
    private http: HttpClient,
  ) { }

  getWorkouts(): Observable<Workout[]> {
    return this.http.get<Workout[]>(this.serviceUrl)
    .pipe(
      catchError(this.handleError('getWorkouts', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
