import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  routes = [
    { path: 'editor', label:'Editor', icon: 'edit' },
    { path: 'settings',  label:'Settings', icon: 'build'}
  ];
}
