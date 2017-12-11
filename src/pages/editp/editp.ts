import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController  } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-editp',
  templateUrl: 'editp.html',
})
export class EditpPage {

  public userDetails : any;
  public recordID: any  = null;
  public form                   : FormGroup;
  public nameakun         : any;
  public usernameakun  : any;
  public emailakun  : any;
  public passwordakun  : any;

  private baseURI: string  = "http://localhost/PHP-Slim-Restful/api/";

  constructor(  public fb: FormBuilder,public toastCtrl  : ToastController ,public http: Http,public navCtrl: NavController, public navParams: NavParams) {
    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.userData;
    this.form = fb.group({
      "name"                  : ["", Validators.required],
      "username"           : ["", Validators.required],
      "email"           : ["", Validators.required],
      "password"           : ["", Validators.required],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditpPage');
  }

  selectEntry(item)
  {
    this.nameakun        = item.name;
    this.usernameakun = item.description;
    this.emailakun = item.email;
    this.passwordakun = item.password;
    this.recordID              = item.id;
  }

  updateEntry(name, username,email,password)
  {
    let body       : string = "key=update&name=" + name + "&username=" + username + "&email=" + email + "&password=" + password + "&recordID=" + this.recordID,
    type       : string = "application/x-www-form-urlencoded; charset=UTF-8",
    headers    : any     = new Headers({ 'Content-Type': type}),
    options    : any     = new RequestOptions({ headers: headers }),
    url        : any     = this.baseURI + "manage.php";

    this.http.post(url, body, options)
    .subscribe(data =>
    {
        if(data.status === 200)
        {
          this.sendNotification('Akun ${name} Berhasil di update');
        }
        else
        {
          this.sendNotification('Terjadi kesalahan');
        }
      });
  }

  sendNotification(message)  : void
  {
    let notification = this.toastCtrl.create({
      message       : message,
      duration      : 3000
    });
    notification.present();
  }
}