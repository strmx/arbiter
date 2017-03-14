import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";

import {Observable} from "rxjs";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import {Task} from "./task";

@Injectable()
export class TasksService {

  private tasksUrl = 'api/tasks';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getTasks(): Observable<Task[]> {
    return this.http
      .get(this.tasksUrl)
      .do((e) => console.log('get tasks'))
      .map(response => response.json().data as Task[]);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getTask(id: number): Observable<Task> {
    const url = `${this.tasksUrl}/${id}`;
    return this.http.get(url)
      .map(response => response.json().data as Task);
  }

  update(task: Task): Observable<Task> {
    const url = `${this.tasksUrl}/${task.id}`;
    return this.http
      .put(url, JSON.stringify(task), {headers: this.headers})
      .map(() => task);
  }

  create(task: Task): Observable<Task> {
    return this.http
      .post(this.tasksUrl, JSON.stringify({name: task.name}), {headers: this.headers})
      .map(res => res.json().data as Task);
  }

  delete(id: number): Observable<void> {
    const url = `${this.tasksUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .map(() => null);
  }
}
