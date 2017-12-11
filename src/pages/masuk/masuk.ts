import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

import { ProfilePage } from '../profile/profile';
import { MenuPage } from '../menu/menu';

/**
 * Generated class for the MasukPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-masuk',
  templateUrl: 'masuk.html',
})
export class MasukPage {

  resposeData : any;  
  userData = {"username":"","password":""};

  constructor(public alert: AlertController,public navCtrl: NavController, public authService: AuthServiceProvider, private toastCtrl: ToastController ) {
 

  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MasukPage');
  }
 

  masuk(){

    if(this.userData.username && this.userData.password){

        this.authService.postData(this.userData, "login" ).then((result) => {
          this.resposeData = result;
          console.log(this.resposeData);

          if(this.resposeData.userData){
            localStorage.setItem('userData',JSON.stringify(this.resposeData));
            
            this.navCtrl.push(MenuPage);
          }
          else{
            this.presentToast("Gagal Masuk, pastikan data terisi dengan benar");
          }
          
        },(err) =>{
          
        });

    }
    else{
      this.presentToast("Gagal Masuk, pastikan data terisi dengan benar");
    }

  }
  logWFB(){
    let undmain = this.alert.create({
      title: 'Maaf',
      message: 'Sedang dalam pengembangan',
      buttons: [{
        text: 'Ok',
        handler: () => {

        }
      }]
    });
    undmain.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 1500
    });
    toast.present();
  }


}
