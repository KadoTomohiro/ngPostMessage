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
    // window.openerは自身を開いたページを参照している。
    // windowオブジェクトは直に扱うべきではない。テスタビリティのためにも適切なサービスに隠蔽すること
    // targetOriginはenvironmentに定義して切り替えられるようにする
    window.opener.postMessage(this.postValue, 'http://localhost:4200');
  }
}
