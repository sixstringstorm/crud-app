import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SignupPage } from './signup';

@NgModule({
  declarations: [
    SignupPage,
  ],
  imports: [
    IonicModule.forRoot(SignupPage),
  ],
  exports: [
    SignupPage
  ]
})
export class SignupModule {}
