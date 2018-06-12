import {Component, OnInit} from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  template: `<h3>{{ message }}</h3>`
})
export class HomeComponent implements OnInit {
  public message: string;

  constructor(private _title: Title, private _meta: Meta) {
    this._title.setTitle('home title');
    this._meta.addTag({
      content: 'home content',
      name: 'description'
    })
  }

  ngOnInit() {
    this.message = 'Hello';
  }
}
