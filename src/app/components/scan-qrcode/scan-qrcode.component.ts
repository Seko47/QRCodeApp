import { Component, OnInit, ViewChild } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scan-qrcode',
  templateUrl: './scan-qrcode.component.html',
  styleUrls: ['./scan-qrcode.component.css']
})
export class ScanQRCodeComponent implements OnInit {

  @ViewChild('qrcodescanner', null)
  qrCodeScanner: ZXingScannerComponent;

  qrCodeScannerEnabled: boolean;

  qrCodeText: string = null;


  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  camerasNotFound(event) {
    this.qrCodeScannerEnabled = false;
    this.qrCodeText = "Camera not found";
  }
  
  camerasFound(event) {
    this.qrCodeScannerEnabled = true;
  }
  
  scanSuccess(event){
    this.qrCodeScannerEnabled = false;
      this.qrCodeText = event;
  }
}
