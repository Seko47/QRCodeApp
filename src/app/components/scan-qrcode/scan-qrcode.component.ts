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
  qrCodeTextURL: string = null;
  qrCodeTextIsURL: boolean = false;

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

  navigateToLink() {
    window.open(this.qrCodeTextURL, "_blank");
  }

  copyText(){
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.qrCodeText;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  scanSuccess(event) {
    this.qrCodeScannerEnabled = false;
    this.qrCodeText = event;

    //check if the text is a URL
    if (this.qrCodeText.match("((?:(http|https|Http|Https|rtsp|Rtsp):\\/\\/(?:(?:[a-zA-Z0-9\\$\\-\\_\\.\\+\\!\\*\\'\\(\\)"
      + "\\,\\;\\?\\&\\=]|(?:\\%[a-fA-F0-9]{2})){1,64}(?:\\:(?:[a-zA-Z0-9\\$\\-\\_"
      + "\\.\\+\\!\\*\\'\\(\\)\\,\\;\\?\\&\\=]|(?:\\%[a-fA-F0-9]{2})){1,25})?\\@)?)?"
      + "((?:(?:[a-zA-Z0-9][a-zA-Z0-9\\-]{0,64}\\.)+"   // named host
      + "(?:"   // plus top level domain
      + "(?:aero|arpa|asia|a[cdefgilmnoqrstuwxz])"
      + "|(?:biz|b[abdefghijmnorstvwyz])"
      + "|(?:cat|com|coop|c[acdfghiklmnoruvxyz])"
      + "|d[ejkmoz]"
      + "|(?:edu|e[cegrstu])"
      + "|f[ijkmor]"
      + "|(?:gov|g[abdefghilmnpqrstuwy])"
      + "|h[kmnrtu]"
      + "|(?:info|int|i[delmnoqrst])"
      + "|(?:jobs|j[emop])"
      + "|k[eghimnrwyz]"
      + "|l[abcikrstuvy]"
      + "|(?:mil|mobi|museum|m[acdghklmnopqrstuvwxyz])"
      + "|(?:name|net|n[acefgilopruz])"
      + "|(?:org|om)"
      + "|(?:pro|p[aefghklmnrstwy])"
      + "|qa"
      + "|r[eouw]"
      + "|s[abcdeghijklmnortuvyz]"
      + "|(?:tel|travel|t[cdfghjklmnoprtvwz])"
      + "|u[agkmsyz]"
      + "|v[aceginu]"
      + "|w[fs]"
      + "|y[etu]"
      + "|z[amw]))"
      + "|(?:(?:25[0-5]|2[0-4]" // or ip address
      + "[0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9])\\.(?:25[0-5]|2[0-4][0-9]"
      + "|[0-1][0-9]{2}|[1-9][0-9]|[1-9]|0)\\.(?:25[0-5]|2[0-4][0-9]|[0-1]"
      + "[0-9]{2}|[1-9][0-9]|[1-9]|0)\\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}"
      + "|[1-9][0-9]|[0-9])))"
      + "(?:\\:\\d{1,5})?)" // plus option port number
      + "(\\/(?:(?:[a-zA-Z0-9\\;\\/\\?\\:\\@\\&\\=\\#\\~"  // plus option query params
      + "\\-\\.\\+\\!\\*\\'\\(\\)\\,\\_])|(?:\\%[a-fA-F0-9]{2}))*)?"
      + "(?:\\b|$)")) {

      if (!this.qrCodeText.includes("://")) {
        this.qrCodeTextURL = "http://" + this.qrCodeText;
      }
      else {
        this.qrCodeTextURL = this.qrCodeText;
      }

      this.qrCodeTextIsURL = true;
    }
  }
}
