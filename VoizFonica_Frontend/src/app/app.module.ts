import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { signinComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { DongleComponent } from './dongle/dongle.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { PrepaidplansComponent } from './prepaidplans/prepaidplans.component';
import { PostpaidplansComponent } from './postpaidplans/postpaidplans.component';
import { DongleplansComponent } from './dongleplans/dongleplans.component';
import { RechargeComponent } from './recharge/recharge.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { AdminComponent } from './admin/admin.component';
import { ViewmailComponent } from './viewmail/viewmail.component';
import { FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewusersComponent } from './viewusers/viewusers.component';
import { ViewplansComponent } from './viewplans/viewplans.component';
import { SimrequestsComponent } from './simrequests/simrequests.component';
import { NewsimComponent } from './newsim/newsim.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentdetailsComponent } from './paymentdetails/paymentdetails.component';
import { PrepaidfaqComponent } from './prepaidfaq/prepaidfaq.component';
import { PostpaidfaqComponent } from './postpaidfaq/postpaidfaq.component';
import { DonglefaqComponent } from './donglefaq/donglefaq.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { TermsComponent } from './terms/terms.component';
import { MyplanComponent } from './myplan/myplan.component';
import { MessagesComponent } from './messages/messages.component';
import { ProfileComponent } from './profile/profile.component';

@Injectable({
  providedIn: AdminComponent,
})
@NgModule({
  providers: [AdminComponent],
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    
    signinComponent,
    RegisterComponent,
    ContactComponent,
    AboutComponent,
    
    DongleComponent,
    ForgotpasswordComponent,
    PrepaidplansComponent,
    PostpaidplansComponent,
    DongleplansComponent,
    RechargeComponent,
    ErrorpageComponent,
    
    ViewmailComponent,
    ViewusersComponent,
    ViewplansComponent,
    SimrequestsComponent,
    NewsimComponent,
    UserdashboardComponent,
    PaymentComponent,
    PaymentdetailsComponent,
    PrepaidfaqComponent,
    PostpaidfaqComponent,
    DonglefaqComponent,
    AdminloginComponent,
    TermsComponent,
    MyplanComponent,
    MessagesComponent,
    ProfileComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  
  bootstrap: [AppComponent]
})

export class AppModule { }
