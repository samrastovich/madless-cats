import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { parseString } from 'xml2js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Madless Cats';
  catUrl: any;

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.http.get("https://thecatapi.com/api/images/get?format=xml&type=gif", {responseType: 'text'})
    .subscribe(data => {
      var thing = this;
      console.log(data);
      parseString(data, function(err, result) {
        thing.catUrl = result.response.data[0].images[0].image[0].url[0];
        console.log(thing.catUrl);
      });
    });
  }


  getCat() {
    this.http.get("http://thecatapi.com/api/images/get?format=html&type=gif", {responseType: 'text'})
    .subscribe(data => {
      this.catUrl = this.sanitizer.bypassSecurityTrustHtml(data);
    });
  }
}
