import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ResetPasswordPage } from './reset-password';

@NgModule({
  declarations: [
    ResetPasswordPage,
  ],
  imports: [
    IonicModule.forRoot(ResetPasswordPage),
  ],
  exports: [
    ResetPasswordPage
  ]
})
export class ResetPasswordModule {}
