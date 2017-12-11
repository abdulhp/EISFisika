import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController , App} from 'ionic-angular';
import { HomePage } from '../home/home';
import { EditpPage } from '../editp/editp';


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  public userDetails : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public actionSheetCtrl: ActionSheetController, public app: App) {
    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.userData;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

 
  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      
      buttons: [
       {
          text: 'Keluar',
          handler: () => {
            localStorage.clear();
            
            setTimeout(()=> this.navCtrl.setRoot(HomePage,{},{animate: true, direction: 'forward'}),1000);
            
          }
        },{
          text: 'Batal',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
