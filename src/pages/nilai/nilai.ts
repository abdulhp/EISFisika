import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

import { MenuPage } from '../menu/menu';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-nilai',
  templateUrl: 'nilai.html',
})

export class NilaiPage {

	public ans:any ;
  public nilaiakhir:any;
  public iskkm:boolean;
  public caption:string;

  constructor(public navCtrl: NavController, public NP: NavParams, public http: Http) {
  	this.ans = 0;
    this.ans = this.NP.get('ans');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NilaiPage');
    if (this.ans == 24) {
      this.nilaiakhir = (this.ans+1)*4;  
    }else{
      this.nilaiakhir = this.ans*4;
    };

    if(this.nilaiakhir <= 70 ){
      this.iskkm = true;
      this.caption = "Nilai kamu di bawah 70";
    }else{
      this.iskkm = false;
      this.caption = "Selamat kamu lolos KKM";
    };
  }

  onLoadHome(){
    if(localStorage.userData != null){
      this.navCtrl.setRoot(MenuPage, {},{animate:true, direction:'forward'}),1000;
    }else{
      this.navCtrl.setRoot(MenuPage, {},{animate:true, direction:'forward'}),1000;
    }
   
  }

}
  