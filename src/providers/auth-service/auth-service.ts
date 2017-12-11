import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';


let apiUrl = "http://eisfisika.dx.am/OBJ/PHP-Slim-Restful/api/";
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }

  postData(credentials,type){
    return new Promise((resolve,reject) => {
        let headers = new Headers();
        headers.append('Access-Control-Allow-Origin', "*");
        headers.append('Access-Control-Allow-Methods', "PUT, GET, POST, DELETE, OPTIONS");
        headers.append('Access-Control-Allow-Credentials', "*");

        this.http.post(apiUrl+type,JSON.stringify(credentials),{headers:headers}).subscribe(res => {
            resolve(res.json());
        },(err) =>{
          reject(err);
        });
    })
  }
}
