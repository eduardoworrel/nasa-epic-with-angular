import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
interface Urls {
  urls : Array<string>
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http : HttpClient) {

  }
  index = 0
  private changeBackground(){
    setInterval(() => {
      if(this.index == this.images.length){
        this.index = 0
      }
      this.url = this.images[this.index].url;
      this.index++;
    }, 1000);
  }

  configUrl = 'http://localhost:3000/epic/';
  images:Array<any> = [];
  url: string = "";
  getUrls(): any {
     this.http.get<Urls>(this.configUrl).subscribe(
      (resultado:any)=> {
        for(let item in resultado){
          this.images.push({
            url:resultado[item],
          })
        }
      });
  }
  a = this.getUrls()
  b = this.changeBackground()


}
