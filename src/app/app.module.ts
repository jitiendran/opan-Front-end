import { TokenInterceptorService } from './token-interceptor.service';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { FacultyComponent } from './faculty/faculty.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotificationComponent } from './student/notification/notification.component';
import { ApprovalComponent } from './student/approval/approval.component';
import { DashboardComponent } from './student/dashboard/dashboard.component';
import { HeaderComponent } from './student/header/header.component';
import { ShownotificationComponent } from './student/shownotification/shownotification.component';
import { FnavbarComponent } from './fnavbar/fnavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentComponent,
    FacultyComponent,
    NavbarComponent,
    NotificationComponent,
    ApprovalComponent,
    DashboardComponent,
    HeaderComponent,
    ShownotificationComponent,
    FnavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
