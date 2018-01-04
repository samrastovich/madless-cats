import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  catUrl: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get("https://thecatapi.com/api/images/get?format=html&type=gif", {responseType: 'text'})
    .subscribe(data => {
      console.log(data);
    });
  }

  getCat() {
    this.http.get("http://thecatapi.com/api/images/get?format=html&type=gif", {responseType: 'text'})
    .subscribe(data => {
      this.catUrl = data;
    });
  }
}
