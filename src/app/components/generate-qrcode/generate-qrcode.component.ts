import { Component, OnInit, NgModule } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports:[QRCodeModule]
})

@Component({
  selector: 'app-generate-qrcode',
  templateUrl: './generate-qrcode.component.html',
  styleUrls: ['./generate-qrcode.component.css']
})
export class GenerateQRCodeComponent implements OnInit {

  qrCodeText: string = null;

  constructor() {
    this.qrCodeText = "";
   }

  ngOnInit() {
  }

}
