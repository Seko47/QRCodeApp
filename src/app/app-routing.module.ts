import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerateQRCodeComponent } from './components/generate-qrcode/generate-qrcode.component';


const routes: Routes = [
  {path: "generate", component: GenerateQRCodeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
