import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Import Pages
import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PostPage } from '../pages/post/post';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { SignupPage } from '../pages/signup/signup';

// Import Providers
import { Data } from '../providers/data';
import { AuthData } from '../providers/auth-data';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2'
import { ConnectionComponent } from '../components/connection/connection'

const config = {
  apiKey: "AIzaSyDeRrbMZf4kMrqqfnbiJC7tJl5sQaGRqno",
  authDomain: "test-471eb.firebaseapp.com",
  databaseURL: "https://test-471eb.firebaseio.com",
  projectId: "test-471eb",
  storageBucket: "test-471eb.appspot.com",
  messagingSenderId: "686040769420"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    PostPage,
    LoginPage,
    ResetPasswordPage,
    SignupPage,
    ConnectionComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config, myFirebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    PostPage,
    LoginPage,
    ResetPasswordPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, Data, AuthData
  ]
})
export class AppModule {}
