import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quiz1Page } from '../quiz1/quiz1';
import { MateriPage } from '../materi/materi';
import { AboutusPage } from '../aboutus/aboutus';
import { ProfilePage } from '../profile/profile';


/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  isLogged: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
     const data = JSON.parse(localStorage.getItem('userData'));

    if(data != null){
       this.isLogged = false;
      
     }else{
       this.isLogged = true;

      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  bukaQuiz()
  {
    this.navCtrl.push(Quiz1Page);
  }
  bukaMateri(){
    this.navCtrl.push(MateriPage);
  }
  bukaAbout(){
    this.navCtrl.push(AboutusPage);
  }

  bukaProfile(){
    this.navCtrl.push(ProfilePage);
  }
  
  
}
  