import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import {TasksService} from "../tasks.service";
import {Task} from "../task";
import {Observable} from "rxjs";

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  @Input() task: Task;
  private isNewTask: boolean = false;

  constructor(
    private tasksService: TasksService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .do((params: Params) => console.log(params['id']))
      .map((params: Params) => params['id'])
      .switchMap((id: string) => {
        if (id === 'new') {
          this.isNewTask = true;
          return Observable.from([new Task()]);
        }
        return this.tasksService.getTask(+id);
      })
      .subscribe(task => this.task = task);
  }

  goBack(): void {
    this.location.back();
  }

  save(task: Task): void {
    this.tasksService.update(task)
      .subscribe(() => this.goBack());
  }

  delete(task: Task): void {
    this.tasksService.delete(task.id)
      .subscribe(() => this.goBack());
  }

  create(task: Task): void {
    this.tasksService.create(task)
      .subscribe(() => this.goBack());
  }
}
