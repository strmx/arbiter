import { Component, OnInit } from '@angular/core';
import {TasksService} from "../tasks.service";
import {Observable} from "rxjs";
import {Task} from "../task";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private tasks: Observable<Task[]>;

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.tasks = this.tasksService.getTasks();
  }

}
