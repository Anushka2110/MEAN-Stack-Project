/*import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
//import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class VideoService  {

  private  _getUrl = "http://localhost:3000/api/videos";
  //private  proxyurl = "https://cors-anywhere.herokuapp.com/";
  constructor(private _http: Http) { }

  getVideos(){
    console.log('getVideos.');
    
      return this._http
      .get(this._getUrl)
      .map((response: Response) => response.json());

     /* fetch(this.proxyurl + this._getUrl) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
.then(contents => console.log(contents))
.catch(() => console.log("Can’t access " + this._getUrl + " response. Blocked by browser?"))
    }
    
}
*/