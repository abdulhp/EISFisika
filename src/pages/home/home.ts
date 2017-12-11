import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QuizPage } from '../quiz/quiz';
import { MenuPage } from '../menu/menu';
import { MasukPage } from '../masuk/masuk';
import { DaftarPage } from '../daftar/daftar';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public NP: NavParams) {
    localStorage.clear();
  }
 ionViewDidLoad(){
 }
  
  bukaMenu(){
    this.navCtrl.push(MenuPage);
  }
  bukaLogin(){
    this.navCtrl.push(MasukPage);
  }
  bukaDaftar(){
    this.navCtrl.push(DaftarPage);
  }

}