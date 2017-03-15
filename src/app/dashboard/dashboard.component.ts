import { Component, OnInit } from '@angular/core';
import {TasksService} from "../tasks.service";
import {Observable, BehaviorSubject} from "rxjs";
import {Task} from "../task";

import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private tasks: Observable<Task[]>;
  private searchTerms = new BehaviorSubject<string>('');

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.tasks = Observable.combineLatest(
        this.tasksService.getTasks(),
        this.searchTerms
      )
      .do((acc: [Task[], string]) => console.log(acc))
      .map((acc: [Task[], string]) => {
        const tasks = acc[0] || [];
        const regExp = new RegExp(acc[1] || '', 'i');
        return tasks.filter(task => regExp.test(task.name))
      });
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

}
