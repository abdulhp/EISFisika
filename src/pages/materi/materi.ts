import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PendahuluanPage } from '../pendahuluan/pendahuluan';
import { TeganganPage } from '../tegangan/tegangan';
import { ReganganPage } from '../regangan/regangan';
import { ModulusPage } from '../modulus/modulus';
import { HookePage } from '../hooke/hooke';
import { PsebPage } from '../pseb/pseb';

/**
 * Generated class for the MateriPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-materi',
  templateUrl: 'materi.html',
})
export class MateriPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MateriPage');
  }

  bukaPendahuluan(){
    this.navCtrl.push(PendahuluanPage);
  }
  bukaTegangan(){
    this.navCtrl.push(TeganganPage);  
  }
  bukaRegangan(){
    this.navCtrl.push(ReganganPage);
  }
  bukaModulus(){
    this.navCtrl.push(ModulusPage);
  }
  bukaHooke(){
    this.navCtrl.push(HookePage);
  }
  bukaPseb(){
    this.navCtrl.push(PsebPage);
  }
}
