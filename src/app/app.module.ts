import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {StepsComponent} from './steps/steps.component';
import {ExamComponent} from './exam/exam.component';
import {LoginComponent} from './login/login.component';

import {DropdownModule} from "primeng/dropdown";
import {ButtonModule} from "primeng/button";
import {StepsModule} from "primeng/steps";
import {TooltipModule} from "primeng/tooltip";
import {ScrollTopModule} from "primeng/scrolltop";
import {RippleModule} from "primeng/ripple";
import {AccordionModule} from "primeng/accordion";
import {InputTextModule} from "primeng/inputtext";
import {PanelModule} from "primeng/panel";
import { PaymentComponent } from './payment/payment.component';
import {MenuModule} from "primeng/menu";
import {CaptchaModule} from "primeng/captcha";
import { ConfirmationComponent } from './confirmation/confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ExamComponent,
    StepsComponent,
    HomeComponent,
    LoginComponent,
    PaymentComponent,
    ConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    BrowserAnimationsModule,
    ButtonModule,
    StepsModule,
    TooltipModule,
    ScrollTopModule,
    RippleModule,
    AccordionModule,
    InputTextModule,
    PanelModule,
    MenuModule,
    CaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
