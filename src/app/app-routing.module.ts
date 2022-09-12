import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ExamComponent} from "./exam/exam.component";
import {LoginComponent} from "./login/login.component";
import {PaymentComponent} from "./payment/payment.component";
import {ConfirmationComponent} from "./confirmation/confirmation.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'exam', component: ExamComponent},
  {path: 'signin', component: LoginComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'confirmation', component: ConfirmationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
