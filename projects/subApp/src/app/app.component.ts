import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'subApp';

  postValue: string;

  post() {
    window.opener.postMessage(this.postValue, 'http://localhost:4200');
  }
}
