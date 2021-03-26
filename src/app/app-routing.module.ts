import { ShownotificationComponent } from './student/shownotification/shownotification.component';
import { DashboardComponent } from './student/dashboard/dashboard.component';
import { NotificationComponent } from './student/notification/notification.component';
import { ApprovalComponent } from './student/approval/approval.component';
import { AuthGuard } from './auth.guard';
import { FacultyComponent } from './faculty/faculty.component';
import { StudentComponent } from './student/student.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'Login', redirectTo: '/' },
  {
    path: 'Student/:id/:name',
    component: StudentComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent },
      { path: 'Approval', component: ApprovalComponent },
      { path: 'Notifications', component: NotificationComponent },
      { path: 'Notifications/:nid', component: ShownotificationComponent },
    ],
  },
  { path: 'Faculty', component: FacultyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
