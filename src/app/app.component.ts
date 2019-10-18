import {Component, HostListener} from '@angular/core';
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
    // windowオブジェクトは適切なサービスに隠蔽
    // 送信元のoriginは必ずチェックする。チェック対象の値はenvironmentに定義
    // event.dataの型をインターフェースとして合意する。
    // この処理まるごと共通サービス化したほうがいい。
    // fromEvent(window, 'message')
    //   .pipe(
    //     filter((event: MessageEvent) => event.origin === 'http://localhost:4201'),
    //     map((event: MessageEvent) => event.data)
    //   )
    //   .subscribe( data => {
    //     this.pulleMesage = data;
    //   });
  }
  @HostListener('window:message', ['$event'])
  getMessage(ev: MessageEvent) {
    if (!this.agreedOrigin(ev)) { return; }

    this.pulleMesage = ev.data;
  }

  private agreedOrigin(ev: MessageEvent) {
    return ev.origin === 'http://localhost:4201';
  }
}
