import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  routes = [
    { path: 'dashboard',  label:'Dashboard', icon: 'dashboard'},
    { path: 'editor', label:'Editor', icon: 'edit' }
  ];
}
