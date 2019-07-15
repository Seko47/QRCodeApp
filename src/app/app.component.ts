import { Component, NgModule } from '@angular/core';
import { PwaService } from './services/PwaService/pwa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PwaService]
})
export class AppComponent {
  title = 'QRCodeApp';

  constructor(public Pwa: PwaService) { }

  installPwa(): void {
    this.Pwa.promptInstallEvent.prompt();
  }
}
