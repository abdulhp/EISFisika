import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController, AlertController  } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { MenuPage } from '../menu/menu';
import { MasukPage } from '../masuk/masuk';
import { ProfilePage } from '../profile/profile';

@IonicPage()
@Component({
  selector: 'page-daftar',
  templateUrl: 'daftar.html',
})
export class DaftarPage {

  resposeData : any;  
  getData : any;
  userData = {"name":"","username":"","email":"","password":""};
  constructor(public alert: AlertController, private toastCtrl: ToastController,public navCtrl: NavController, public navParams: NavParams,public authService: AuthServiceProvider) {
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DaftarPage');
  }

  daftar(){

    if(this.userData.name && this.userData.username && this.userData.email && this.userData.password){
      this.authService.postData(this.userData, "signup" ).then((result) => {
          this.resposeData = result;
          console.log(this.resposeData);
          if(this.resposeData){
            localStorage.setItem('userData',JSON.stringify(this.resposeData));
              localStorage.clear();
              this.navCtrl.push(MasukPage);
          }
         else{
          this.presentToast("Gagal Mendaftar");
         }
        },(err) =>{
        });
    }else{
      this.presentToast("Gagal mendaftar, pastikan data terisi semua");
      
    }
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message:  msg,
      duration: 1500
    });
    toast.present();
  }

  logWFB(){
    let undmain = this.alert.create({
      title: 'Maaf',
      message: 'Sedang dalam pengembangan',
      buttons: [
      {
        text: 'Ok',
        handler: ()=>{

        }
      }
      ]
    });
  }
}