import {Component, OnInit, Input} from '@angular/core';
import {Task} from "../../task";

@Component({
  selector: 'dashboard-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;

  constructor() { }

  ngOnInit() {
  }

}
