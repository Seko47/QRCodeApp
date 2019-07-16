import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerateQRCodeComponent } from './components/generate-qrcode/generate-qrcode.component';
import { ScanQRCodeComponent } from './components/scan-qrcode/scan-qrcode.component';


const routes: Routes = [
  { path: "", component: GenerateQRCodeComponent },
  { path: "scan", component: ScanQRCodeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
