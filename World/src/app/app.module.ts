
import { AlertComponent } from './_component/alert.component';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { AuthenticationService } from './_services'; //Authentication
// import { JwtInterceptor, ErrorInterceptor } from './_helpers';
 import { ExcelService } from './_services';

import {
   Register_EmployeeComponent,
   Assign_EquipmentComponent,
   SS_AdministratorComponent,
   CRUD_FAQComponent,
   CRUD_EmployeeComponent,
   Import_EmployeeComponent,
   AdminDashboardComponent,
   DepartChartComponent,
 } from './administrator';

 import {
   EquipmentComponent,
   SS_EquipmentComponent,
   My_EquipmentComponent,
   EquipDashboardComponent,

   //Charts
   TypeChartComponent,
   BrandChartComponent,
 } from './equipment';

 import {
   CourseComponent, 
   Assign_CourseComponent,
    Learning_OutcomeComponent,
   Learning_ContentComponent,
   SS_CourseComponent,
   CRUD_AchievementComponent,
  LessonComponent,
    Set_QuizComponent,
    QuestionComponent,
    OptionComponent,
} from './course';

import {
   Take_CourseComponent,
   Take_LessonComponent,
   Take_Learning_OutcomeComponent,
   Take_QuizComponent,
   Take_ContentComponent,
   ProgressComponent,
   FAQComponent,
  // Ask_QuestionComponent,
  BookingComponent,
  SS_OnboarderComponent
} from './onboarder';

import { 
  Assign_User_RoleComponent,
  User_RoleComponent,
  SS_UsersComponent
} from './users';

import {
  ReportComponent,
  SS_ReportComponent,
  Active_LogComponent,
  Audit_LogComponent,
  Employee_ReportComponent,
  Equipment_ReportComponent,
  TradeIn_ReportComponent,
} from './report';

import {
  HomeComponent,
  AboutComponent
} from './home';

import {
  ProfileComponent,
  AccountComponent,
} from './profile';

import {
  LoginComponent,
  OTPComponent,
  ForgotPasswordComponent
} from './login';

import {
  AdminComponent
} from './role';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Feature
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select'; //This essentially allows dropdown input to capture id, not names
// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
//This will assist the code to convert whatever into PDF, ITS A FEATURE
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { IntlModule } from '@progress/kendo-angular-intl';
import { GridModule } from '@progress/kendo-angular-grid';
//Charts and graphs
import { ChartsModule } from 'ng2-charts';
//Date Picker
//import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,

    //Role
    AdminComponent,

    //Login
    LoginComponent,
    OTPComponent,
    ForgotPasswordComponent,

    //Administrator
    Register_EmployeeComponent,
    SS_AdministratorComponent,
    Assign_EquipmentComponent,
    CRUD_FAQComponent,
    CRUD_EmployeeComponent,
    Import_EmployeeComponent,
    AdminDashboardComponent,
    DepartChartComponent, //Chart

    //Course
    SS_CourseComponent,
    CourseComponent,
    LessonComponent,
    Learning_OutcomeComponent,
    CRUD_AchievementComponent,
    Assign_CourseComponent,
    Learning_ContentComponent,
    Set_QuizComponent,
    QuestionComponent,
  
    QuestionComponent,
    OptionComponent,

    //Onboarder
    SS_OnboarderComponent,
    BookingComponent,
    FAQComponent,
    Take_CourseComponent,
    Take_ContentComponent,
    Take_LessonComponent,
    Take_Learning_OutcomeComponent,
    Take_QuizComponent,
    ProgressComponent,

    //Equipment
    EquipmentComponent,
    SS_EquipmentComponent,
    My_EquipmentComponent,
    EquipDashboardComponent,
    TypeChartComponent, //Chart
    BrandChartComponent, //Chart

    //Users
    Assign_User_RoleComponent,
    User_RoleComponent,
    SS_UsersComponent,

    //Report
    ReportComponent,
    Audit_LogComponent,
    SS_ReportComponent,
    Active_LogComponent,
    Equipment_ReportComponent,
    Employee_ReportComponent,
    TradeIn_ReportComponent,

    //Profile
    ProfileComponent,
    AccountComponent,

    //Home
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

    //Features
    FormsModule,
    NgSelectModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    PDFExportModule,
    GridModule,
    IntlModule,
    ChartsModule,
    //BsDatepickerModule.forRoot(),
    //DatepickerModule.forRoot(),
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    AuthenticationService,

    ExcelService,

        // provider used to create fake backend
        //fakeBackendProvider
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
