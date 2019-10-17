import { Component } from '@angular/core';
import {fromEvent} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngPostMessage';

  pulleMesage: string;

  constructor() {
    fromEvent(window, 'message')
      .pipe(
        filter((event: MessageEvent) => event.origin === 'http://localhost:4201'),
        map((event: MessageEvent) => event.data)
      )
      .subscribe( data => {
        this.pulleMesage = data;
      });
  }
}
