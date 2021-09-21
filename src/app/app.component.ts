import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-i18n-demo';

  supportedLanguages = ['en', 'de'];

  constructor(private translateServeice: TranslateService) {
    translateServeice.addLangs(this.supportedLanguages);
    translateServeice.setDefaultLang(this.supportedLanguages[1]);

    //const browserLanguage = translateServeice.getBrowserLang();
    //translateServeice.use(browserLanguage);
  }
}
