import {NgModule, Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-lazy-view',
  template: `<h3>i'm lazy</h3>`
})
export class LazyComponent {

  constructor(private _title: Title, private _meta: Meta) {
    this._title.setTitle('test title');
    this._meta.addTag({
      content: 'test content',
      name: 'description'
    })
  }

}

@NgModule({
  declarations: [LazyComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: LazyComponent, pathMatch: 'full'}
    ])
  ]
})
export class LazyModule {

}
