import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { TasksComponent } from "./tasks/tasks.component";
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: TaskDetailComponent },
  // { path: 'tasks',     component: TasksComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
