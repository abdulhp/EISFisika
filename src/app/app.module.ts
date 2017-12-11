import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { QuizPage } from '../pages/quiz/quiz';
import { MenuPage } from '../pages/menu/menu';
import { MasukPage } from '../pages/masuk/masuk';
import { DaftarPage } from '../pages/daftar/daftar';
import { MateriPage } from '../pages/materi/materi';
import { PendahuluanPage } from '../pages/pendahuluan/pendahuluan';
import { TeganganPage } from '../pages/tegangan/tegangan';
import { ReganganPage } from '../pages/regangan/regangan';
import { ModulusPage } from '../pages/modulus/modulus';
import { HookePage } from '../pages/hooke/hooke';
import { PsebPage } from '../pages/pseb/pseb';
import { SplashPage } from '../pages/splash/splash';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { ProfilePage } from '../pages/profile/profile';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { HttpModule } from "@angular/http";
import { Quiz1Page } from '../pages/quiz1/quiz1';
import { EditpPage } from '../pages/editp/editp';
import { NilaiPage } from '../pages/nilai/nilai';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QuizPage,
    MenuPage,
    MasukPage,
    DaftarPage,
    MateriPage,
    PendahuluanPage,
    TeganganPage,
    ReganganPage,
    ModulusPage,
    HookePage,
    PsebPage,
    SplashPage,
    AboutusPage,
    ProfilePage,
    Quiz1Page,
    EditpPage,
    NilaiPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QuizPage,
    MenuPage,
    MasukPage,
    DaftarPage,
    MateriPage,
    PendahuluanPage,
    TeganganPage,
    ReganganPage,
    ModulusPage,
    HookePage,
    PsebPage,
    SplashPage,
    AboutusPage,
    ProfilePage,
    Quiz1Page,
    EditpPage,
    NilaiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}
