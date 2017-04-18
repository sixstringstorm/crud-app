import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { IonicPage, NavController } from 'ionic-angular';
import { LoginPage } from '../pages/login/login';
import firebase from 'firebase';

/*
  Generated class for the AuthData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthData {
  fireAuth: any;
  constructor(public af : AngularFire, public navCtrl: NavController) {
    af.auth.subscribe( user => {
        if (user) {
            this.fireAuth = user.auth;
            console.log(user);
        }
    });
  }
  getUser(){
    return this.fireAuth;
  }
  loginUser(newEmail: string, newPassword: string): firebase.Promise<any> {
    return this.af.auth.login({ email: newEmail, password: newPassword });
  }
  resetPassword(email: string): firebase.Promise<any> {
    return firebase.auth().sendPasswordResetEmail(email);
  }
  logoutUser(){
    this.af.auth.logout()
    .then( authData => {
      this.navCtrl.setRoot(LoginPage);
    });
  }
  signupUser(newEmail: string, newPassword: string): firebase.Promise<any> {
    return this.af.auth.createUser({ email: newEmail, password: newPassword });
  }
}
