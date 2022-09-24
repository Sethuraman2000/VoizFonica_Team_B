import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { signinComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

import { PrepaidplansComponent } from './prepaidplans/prepaidplans.component';
import { RechargeComponent } from './recharge/recharge.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { AdminComponent } from './admin/admin.component';
import { ViewmailComponent } from './viewmail/viewmail.component';
import { ViewusersComponent } from './viewusers/viewusers.component';
import { ViewplansComponent } from './viewplans/viewplans.component';
import { SimrequestsComponent } from './simrequests/simrequests.component';
import { NewsimComponent } from './newsim/newsim.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentdetailsComponent } from './paymentdetails/paymentdetails.component';
import { PostpaidplansComponent } from './postpaidplans/postpaidplans.component';
import { DongleplansComponent } from './dongleplans/dongleplans.component';
import { PrepaidfaqComponent } from './prepaidfaq/prepaidfaq.component';
import { PostpaidfaqComponent } from './postpaidfaq/postpaidfaq.component';
import { DonglefaqComponent } from './donglefaq/donglefaq.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { TermsComponent } from './terms/terms.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  
  {path: 'signin', component: signinComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'prepaidplans', component: PrepaidplansComponent},
  {path: 'dongleplans', component: DongleplansComponent},
  {path: 'postpaidplans', component: PostpaidplansComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'adminlogin', component: AdminloginComponent},
  {path: 'recharge', component: RechargeComponent},
  {path: 'viewmail', component: ViewmailComponent},
  {path: 'viewusers', component: ViewusersComponent},
  {path: 'simrequests', component: SimrequestsComponent},
  {path: 'viewplans', component: ViewplansComponent},
  {path: 'newsim', component: NewsimComponent},
  {path: 'terms', component: TermsComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'prepaidfaq', component: PrepaidfaqComponent},
  {path: 'postpaidfaq', component: PostpaidfaqComponent},
  {path: 'donglefaq', component: DonglefaqComponent},
  {path: 'userdashboard', component: UserdashboardComponent},
  {path: 'paymentdetails', component: PaymentdetailsComponent},  
  {path: '', component: HomeComponent},
  {path: '**', component: ErrorpageComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
